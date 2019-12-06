import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

  state = { comment: '' };

  handleCommentChange = (event) => {
    this.setState({comment: event.target.value})
  };

  onCommentSubmit = (event) => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({comment: ''});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onCommentSubmit}>
          <h4>Add a comment</h4>
          <textarea value={this.state.comment} onChange={this.handleCommentChange}/>
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch comments</button>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);