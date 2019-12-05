import React, { Component } from 'react';

class CommentBox extends Component {

  state = { comment: '' };

  handleCommentChange = (event) => {
    this.setState({comment: event.target.value})
  };

  onCommentSubmit = (event) => {
    event.preventDefault();

    // TODO GJK: call an action creator
    // and save the comment
    this.setState({comment: ''});
  };

  render() {
    return (
      <form onSubmit={this.onCommentSubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleCommentChange}/>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;