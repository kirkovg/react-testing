import { SAVE_COMMENT, FETCH_COMMENTS, TOGGLE_AUTH } from './types';
import axios from 'axios';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments/');

  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}

export function toggleAuth(isLoggedIn) {
  return {
    type: TOGGLE_AUTH,
    payload: isLoggedIn
  }
}