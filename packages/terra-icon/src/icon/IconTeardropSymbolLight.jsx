/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24 46.5c-5.2 0-10.1-2.4-13.3-6.5-5-6.3-5-15.2 0-21.5C17.5 10.2 22 4.8 23.9 2.4c2 2.4 6.4 7.8 13.3 16.2 5.9 7.4 4.7 18.2-2.7 24.2-2.9 2.4-6.6 3.7-10.5 3.7z" fill="#fff" ></path><path d="M23.9 4.8c2.3 2.8 6.4 7.8 12.2 14.7 5.4 6.8 4.3 16.6-2.4 22.1-6.7 5.3-16.3 4.3-21.7-2.4 0-.1-.1-.1-.1-.2-4.6-5.8-4.6-13.9 0-19.7 5.7-6.8 9.7-11.7 12-14.5m0-4.8S19.1 5.9 9.5 17.5c-5.4 6.9-5.4 16.5 0 23.4 6.3 8 17.8 9.4 25.8 3.2.1 0 .1-.1.2-.2 8-6.5 9.3-18.2 2.9-26.3C28.7 5.9 23.9 0 23.9 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconTeardropSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
