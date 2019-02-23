/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';

class CommentBox extends React.Component {
  state = { text: '' };

  handleSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    const { addComment: addCommentAction } = this.props;
    addCommentAction(text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea onChange={e => this.setState({ text: e.target.value })} value={text} />
        <div>
          <button type="submit">Add Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { addComment },
)(CommentBox);
