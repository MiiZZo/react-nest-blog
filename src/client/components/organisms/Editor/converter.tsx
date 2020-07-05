import React from 'react'
import { convertToHTML } from 'draft-convert'
import { ContentState } from 'draft-js'
import { Typography } from 'antd';

const { Paragraph, Link, Title, Text } = Typography;

export function HTMLConverter(contentState: ContentState): string {
    return convertToHTML({
        styleToHTML: function Component(style): JSX.Element | undefined {
            switch (style) {
                case 'UNDERLINE':
                    return <Text  underline/>
                case 'BOLD':
                    return <Text strong/>
                case 'ITALIC':
                    return <Text style={{ fontStyle: 'italic' }}/>
                case 'HIGHLIGHT':
                    return <Text mark/>
                case 'STRIKETHROUGH':
                    return <Text delete/>
            }
        },
        blockToHTML: function Component(block: any) {
            switch (block.type) {
                case 'blockquote':
                    return <blockquote className='Article-BlockQuote'/>;
                case 'ordered-list-item': 
                    return {
                        element: <li />,
                        nest: <ol />,
                    }
                case 'unordered-list-item': 
                    return {
                        element: <li />,
                        nest: <ul />,
                    }
                case 'HIGHLIGHT': 
                    return <Paragraph mark/>
                case 'unstyled':
                    return <Paragraph />;
            }
        },
        entityToHTML: (entity, originalText) => {
            if (entity.type === 'LINK') {
                return <a target='_noblank' href={entity.data.url}>{originalText}</a>;
            }
            if (entity.type === 'IMAGE') {
                return <img src={entity.data.src}></img>;
            }
                return originalText;
          }
    })(contentState)
}
