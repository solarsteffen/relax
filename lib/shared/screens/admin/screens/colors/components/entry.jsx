import cx from 'classnames';
import Component from 'components/component';
import React, {PropTypes} from 'react';

import styles from './entry.less';

export default class Entry extends Component {
  static fragments = {
    color: {
      _id: 1,
      label: 1,
      value: 1
    }
  };

  static propTypes = {
    color: PropTypes.object.isRequired
  };

  render () {
    const {color} = this.props;
    const colorStyle = {
      backgroundColor: this.props.color.value
    };

    return (
      <div className={styles.root}>
        <div className={styles.color} style={colorStyle}></div>
        <div className={styles.info}>
          <div className={styles.title}>{color.label}</div>
          <div className={styles.value}>{color.value}</div>
        </div>
        <div className={styles.actions}>
          <button className={styles.button}>Duplicate</button>
          <button className={cx(styles.button, styles.remove)}>Delete Color</button>
        </div>
      </div>
    );
  }
}