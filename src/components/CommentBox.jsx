import React from 'react';

class CommentBox extends React.Component {
  state = { text: '' };

  handleSubmit = e => {
    e.preventDefault();
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

export default CommentBox;
