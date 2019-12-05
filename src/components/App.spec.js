import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

describe('App', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<App/>);
  });

  it('should show a comment box', () => {
    // given & when & then
    expect(wrapped.find(CommentBox).length).toEqual(1);
  });

  it('should show a comment list', () => {
    // given & when & then
    expect(wrapped.find(CommentList).length).toEqual(1);
  });
});