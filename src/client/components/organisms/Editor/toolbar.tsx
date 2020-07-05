import React from 'react';
import { 
    BoldOutlined, 
    ItalicOutlined,
    StrikethroughOutlined,
    LinkOutlined,
    UnderlineOutlined,
    OrderedListOutlined,
    UnorderedListOutlined,
    HighlightOutlined,
    DownOutlined,
    createFromIconfontCN
} from '@ant-design/icons';
import { Button, Tooltip, Dropdown, Menu } from 'antd';
import './Toolbar.scss';

const Icon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

type Props = {
    handleChangeStyle: (e: React.MouseEvent<HTMLButtonElement>) => void 
    handleChangeTypeBlock: (e: React.MouseEvent<HTMLButtonElement>) => void
    promptForLink: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    removeLink: (e: React.MouseEvent) => void
    confirmImage: (e: React.MouseEvent) => void
    urlInput: JSX.Element | null
}

export default function Toolbar(props: Props): JSX.Element {

    const {
        handleChangeStyle,
        handleChangeTypeBlock,
        promptForLink,
        removeLink,
        urlInput
    } = props;

    const headerList = (
        <Menu>
            <Menu.Item>
                <Button block type="text" onClick={handleChangeTypeBlock} data-block='unstyled'>
                    Убрать
                </Button>
            </Menu.Item>
            <Menu.Item>
                <Button block type="text" onClick={handleChangeTypeBlock} data-block='header-one'>
                    H1
                </Button>
            </Menu.Item>
            <Menu.Item>
                <Button block type="text" onClick={handleChangeTypeBlock} data-block='header-two'>
                    H2
                </Button>
            </Menu.Item>
            <Menu.Item>
                <Button block type="text" onClick={handleChangeTypeBlock} data-block='header-three'>
                    H3
                </Button>
            </Menu.Item>
            <Menu.Item>
                <Button block type="text" onClick={handleChangeTypeBlock} data-block='header-four'>
                    H4
                </Button>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className='Toolbar'>
            { urlInput }
            <div className='Toolbar-Container'>
                <Button.Group>
                    <Dropdown overlay={headerList} placement="bottomRight">
                        <Button type="primary" >
                            H <DownOutlined />
                        </Button>
                    </Dropdown>
                    <Tooltip title="Жирный" mouseEnterDelay={1}>
                        <Button
                            type="primary" 
                            icon={<BoldOutlined />} 
                            onClick={handleChangeStyle} 
                            data-style='BOLD'
                        />
                    </Tooltip>
                    <Tooltip title="Курсив" mouseEnterDelay={1}>
                        <Button 
                            type="primary" 
                            icon={<ItalicOutlined />} 
                            onClick={handleChangeStyle} 
                            data-style='ITALIC'
                        />
                    </Tooltip>
                    <Tooltip title="Подчеркивание" mouseEnterDelay={1}>
                        <Button 
                            type="primary" 
                            icon={<UnderlineOutlined />} 
                            onClick={handleChangeStyle} 
                            data-style='UNDERLINE'
                        />
                    </Tooltip>
                    <Tooltip title="Зачеркивание" mouseEnterDelay={1}>
                        <Button 
                            type="primary" 
                            icon={<StrikethroughOutlined />} 
                            onClick={handleChangeStyle} 
                            data-style='STRIKETHROUGH'
                        />
                    </Tooltip>
                    <Tooltip title="Выделение" mouseEnterDelay={1}>
                        <Button 
                            type="primary" 
                            icon={<HighlightOutlined />} 
                            onClick={handleChangeStyle} 
                            data-style='HIGHLIGHT'
                        />
                    </Tooltip>
                    <Tooltip title="Маркированный список" mouseEnterDelay={1}>
                        <Button 
                            type="primary" 
                            icon={<UnorderedListOutlined />} 
                            onClick={handleChangeTypeBlock} 
                            data-block='unordered-list-item'
                        />
                    </Tooltip>
                    <Tooltip title="Нумерованный список" mouseEnterDelay={1}>
                        <Button 
                            type="primary" 
                            icon={<OrderedListOutlined />} 
                            onClick={handleChangeTypeBlock} 
                            data-block='ordered-list-item'
                        />
                    </Tooltip>
                    <Tooltip title="Добавить ссылку" mouseEnterDelay={1}>
                        <Button 
                            type="primary" 
                            icon={<LinkOutlined />} 
                            onClick={promptForLink} 
                        />
                    </Tooltip>
                    <Tooltip title="Удалить ссылку" mouseEnterDelay={1}>
                        <Button 
                            type="primary" 
                            icon={<Icon type="icon-twitter"/>} 
                            onClick={removeLink} 
                        />
                    </Tooltip>
                </Button.Group>
            </div>
        </div>
    )
}
