// @flow

import React, { PropTypes } from 'react';

// Messageコンポーネントはアプリの状態を反映し、状態によって変化
// 分割代入している場合、オブジェクトリテラル記法のようなものを使い展開されたプロパティにアノテーションをつけます(flow)。
const Message = ({ message }: { message: string }) => <div>{message}</div>;

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
