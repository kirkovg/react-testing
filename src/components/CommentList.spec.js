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
    // given & when & then
    expect(wrapped.find('li').length).toEqual(2);
  });

  it('should show the text for each comment', () => {
    // given & when & then
    expect(wrapped.render().text()).toContain('comment1');
    expect(wrapped.render().text()).toContain('comment2');
  });
});