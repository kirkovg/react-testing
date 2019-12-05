import React from 'react';
import { mount } from 'enzyme';
import CommentList from './CommentList';
import Root from '../Root';

describe('CommentList', () => {
  let wrapped;

  beforeEach(() => {
    const initialState = {
      comments: ['comment1', 'comment2']
    };

    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList/>
      </Root>
    );
  });

  it('should create one li per comment', () => {
    console.log(wrapped.find('li').length);
  });
});