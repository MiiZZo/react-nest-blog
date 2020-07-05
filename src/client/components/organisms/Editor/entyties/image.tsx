import React, { ReactChild } from "react";
import { ContentBlock, ContentState } from "draft-js";

export function findImageEntities(
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState,
): void {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "IMAGE"
    );
  }, callback);
}

export const Image = (props: {
  contentState: ContentState;
  entityKey: string;
  children: ReactChild;
}): JSX.Element => {
  const { src } = props.contentState.getEntity(props.entityKey).getData();
  return <img src={src} />;
};
