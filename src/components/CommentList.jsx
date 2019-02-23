/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

const CommentBox = ({ comments }) => {
  const list = comments.map(comment => <li key={comment}>{comment}</li>);
  return <ul>{list}</ul>;
};

export default connect(({ comments }) => ({ comments }))(CommentBox);
