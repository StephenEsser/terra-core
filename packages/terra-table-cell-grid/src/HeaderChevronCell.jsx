import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HeaderChevronCell.module.scss';
import TableUtils from './TableUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the cell should adhere to the tables paddingStyle.
   */
  isPadded: PropTypes.bool,
  /**
   * Function callback for the ref of the td.
   */
  width: PropTypes.shape({
    static: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string,
    }),
    percentage: PropTypes.number,
    scalar: PropTypes.number,
  }),
};

const defaultProps = {
  isPadded: false,
};

const HeaderChevronCell = ({
  isPadded,
  width,
  ...customProps
}) => {
  let content = (
    <div
      className={cx(
        'chevron',
      )}
    />
  );

  if (isPadded) {
    content = (
      <div className={cx('container')}>
        {content}
      </div>
    );
  }

  return (
    <div
      {...customProps}
      style={TableUtils.styleFromWidth(width)} // eslint-disable-line react/forbid-dom-props
      className={cx(
        'cell',
        customProps.className,
      )}
      role="none"
    >
      {content}
    </div>
  );
};

HeaderChevronCell.propTypes = propTypes;
HeaderChevronCell.defaultProps = defaultProps;

export default HeaderChevronCell;