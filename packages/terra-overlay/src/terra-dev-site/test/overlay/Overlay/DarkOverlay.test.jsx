import React from 'react';
import classNames from 'classnames/bind';
import OverlayContainer from '../../../../OverlayContainer';
import Overlay from '../../../../Overlay';
import styles from './OverlayTestCommon.module.scss';

const cx = classNames.bind(styles);

const OverlayExample = () => (
  <OverlayContainer className={cx('overlay-container1')} id="terra-OverlayContainer">
    <Overlay isOpen backgroundStyle={Overlay.Opts.BackgroundStyles.DARK} id="dark-overlay" isRelativeToContainer>
      <h1>Dark Overlay</h1>
    </Overlay>
  </OverlayContainer>
);

export default OverlayExample;
