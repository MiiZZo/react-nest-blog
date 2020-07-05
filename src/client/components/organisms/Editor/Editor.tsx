import React, { useState } from 'react';
import { 
    Editor, 
    EditorState, 
    RichUtils,
    AtomicBlockUtils,
    ContentBlock,
    getDefaultKeyBinding,
    CompositeDecorator,
} from 'draft-js';
import { findLinkEntities, Link } from './entyties/link';
import { findImageEntities, Image } from './entyties/image';
import Toolbar from './toolbar';
import { customStyleMap } from './custom-style-map';
import './Editor.scss';

function myBlockStyleFn(contentBlock: ContentBlock): string {
    const type = contentBlock.getType()
    console.log(type);
    switch (type) {
        case 'ordered-list-item':
            return ''
        case 'unordered-list-item':
            return ''
        default: 
            return 'Paragraph'
    }
}

const decorator = new CompositeDecorator([
    {
        strategy: findLinkEntities,
        component: Link,
    },
    {
        strategy: findImageEntities,
        component: Image,
    }
]);

export default function DraftEditor(): JSX.Element {

    const [state, setState] = useState({
        editorState: EditorState.createEmpty(decorator),
        showURLInput: false,
        urlValue: '',
    });

    const promptForLink = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      const { editorState } = state;
      const selection = editorState.getSelection();
      if (!selection.isCollapsed()) {
        const contentState = editorState.getCurrentContent();
        const startKey = editorState.getSelection().getStartKey();
        const startOffset = editorState.getSelection().getStartOffset();
        const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
        const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);
  
        let url = '';

        if (linkKey) {
          const linkInstance = contentState.getEntity(linkKey);
          url = linkInstance.getData().url;
        }
  
        setState({
          ...state, 
          showURLInput: true,
          urlValue: url,
        });
      }
    }
  
    const confirmLink = (): void => {
        const { editorState, urlValue } = state;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'LINK',
            'MUTABLE',
            {
                url: urlValue
            }
        );
  
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        setState({
            editorState: RichUtils.toggleLink(
                newEditorState,
                newEditorState.getSelection(),
                entityKey
            ),
            showURLInput: false,
            urlValue: '',
        });
    }

    // const confirmImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     const { editorState } = state;
    //     const contentState = editorState.getCurrentContent();
    //     const contentStateWithEntity = contentState.createEntity(
    //         'IMAGE',
    //         'MUTABLE',
    //         {
    //             src: ''
    //         }
    //     );
  
    //     const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    //     const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
    //     setState({
    //         editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ''),
    //         showURLInput: false,
    //         urlValue: '',
    //     });
    // }

    const confirmImage = () => {
        const { editorState } = state;
        const entityData = { src: prompt(), height: 300, width: 300, };
        const contentStateWithEntity = editorState.getCurrentContent().createEntity('IMAGE', 'IMMUTABLE', entityData);

        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

        let newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        newEditorState = AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');

        setState({ ...state, editorState:newEditorState });
      };

  
    const onURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({...state, urlValue: e.target.value});
    }

    const onLinkInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.which === 13) {
        confirmLink();
      }
    }

    const removeLink = (e: React.MouseEvent) => {
      e.preventDefault();
      const { editorState } = state;
      const selection = editorState.getSelection();
      if (!selection.isCollapsed()) {
        handleChangeEditorState(RichUtils.toggleLink(editorState, selection, null));
      }
    }

    const handleChangeEditorState = (editorState: EditorState) => {
        setState({ ...state, editorState });
    }

    const handleChangeStyle = (e: React.MouseEvent<HTMLButtonElement>) => {
        const style = e.currentTarget.dataset.style;
        if (style) {
            handleChangeEditorState(RichUtils.toggleInlineStyle(state.editorState, style));
        }
    }

    const handleChangeTypeBlock = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const blockType = e.currentTarget.dataset.block;
        if (blockType) {
            handleChangeEditorState(RichUtils.toggleBlockType(state.editorState, blockType));
        }
    }

    const handleReturn = (e: React.KeyboardEvent, editorState: EditorState) => {
        if (e.shiftKey) {
          setState({ ...state, editorState: RichUtils.insertSoftNewline(editorState) });
          return 'handled';
        }
        return 'not-handled';
    }

    function myKeyBindingFn(e: React.KeyboardEvent): string | null  {
        if (e.keyCode === 9) {
            handleChangeEditorState(RichUtils.onTab(e, state.editorState, 2))
        }
        return getDefaultKeyBinding(e)
    }
    
    let urlInput = null;
  
    if (state.showURLInput) {
      urlInput =
        <div>
            <input
                type="text"
                value={state.urlValue}
                placeholder='Введите url ссылки'
                onChange={onURLChange}
                onKeyDown={onLinkInputKeyDown}
            />
            <button onMouseDown={confirmLink}>
                Confirm
            </button>
        </div>
    }

    return (
        <div>
            <div className='text-editor'>
                <div className='text-editor__toolbar'>
                    <Toolbar
                        urlInput={urlInput}
                        promptForLink={promptForLink}
                        removeLink={removeLink}
                        confirmImage={confirmImage}
                        handleChangeStyle={handleChangeStyle}
                        handleChangeTypeBlock={handleChangeTypeBlock}
                    />
                </div>
                <Editor
                    placeholder='...'
                    onChange={handleChangeEditorState}
                    editorState={state.editorState}
                    blockStyleFn={myBlockStyleFn}
                    keyBindingFn={myKeyBindingFn}
                    handleReturn={handleReturn}
                    customStyleMap={customStyleMap}
                />
            </div>
        </div>
    )
}
