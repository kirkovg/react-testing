import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  renderAuthButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.toggleAuth(false)}>
          Sign out
        </button>
      );
    }
    return (
      <button onClick={() => this.props.toggleAuth(true)}>
        Sign in
      </button>
    );
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          {this.renderAuthButton()}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox}/>
        <Route path="/" exact component={CommentList}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps, actions)(App);