/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { addComment, fetchComments } from '../actions';

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
    const { fetchComments: fetchCommentsAction } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea onChange={e => this.setState({ text: e.target.value })} value={text} />
        <div>
          <button type="submit">Add Comment</button>
        </div>
        <div>
          <button type="button" onClick={fetchCommentsAction}>
            Fetch Comments
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { addComment, fetchComments },
)(CommentBox);
