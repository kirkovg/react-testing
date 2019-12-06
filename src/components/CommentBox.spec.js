import React from 'react';
import CommentBox from './CommentBox';
import { mount } from 'enzyme';
import Root from '../Root';


describe('CommentBox', () => {

  let wrapped;

  beforeEach(() => wrapped = mount(
    <Root>
      <CommentBox/>
    </Root>
  ));

  afterEach(() => wrapped.unmount());

  it('should have a text area and a button', () => {
    // given & when & then
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
  });

  it('should have an editable text area', () => {
    // given
    const mockEvent = {
      target: {
        value: 'this is a comment'
      }
    };
    wrapped.find('textarea').simulate('change', mockEvent);

    // when
    wrapped.update();

    // then
    expect(wrapped.find('textarea').prop('value')).toEqual(mockEvent.target.value);
  });

  it('should clean the textarea after the comment submission', () => {
    // given
    const mockEvent = {
      target: {
        value: 'this is a comment'
      }
    };
    wrapped.find('textarea').simulate('change', mockEvent);
    wrapped.update();

    // when
    wrapped.find('form').simulate('submit');
    wrapped.update();

    // then
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});