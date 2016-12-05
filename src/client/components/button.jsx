// @flow

import React, { PropTypes } from 'react';

// Reactのprops経由で問い合わせが来たものをそのまま返す
// Buttonはそのプロパティとしてアクション(action) を持っている
// アクションはonClickイベントに結び付けられている
const Button = ({ action, actionLabel }: { action: Function, actionLabel: string}) =>
  <button onClick={action}>{actionLabel}</button>;

Button.propTypes = {
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
};

export default Button;
