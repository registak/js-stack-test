import React, { PropTypes } from 'react';

// Messageコンポーネントはアプリの状態を反映し、状態によって変化
const Message = ({ message }) => <div>{message}</div>;

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
