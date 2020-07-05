import React, { ReactChild } from 'react'
import { ContentBlock, ContentState } from 'draft-js'

export function findLinkEntities(contentBlock: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState) {
    contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity();
        return (
          entityKey !== null &&
          contentState.getEntity(entityKey).getType() === 'LINK'
        );
      },
      callback
    );
}
  
export const Link = (props: { contentState: ContentState, entityKey: string, children: ReactChild }) => {
    const { url } = props.contentState.getEntity(props.entityKey).getData();
    return (
      <a className='Article-Link' href={url}>
        {props.children}
      </a>
    );
};