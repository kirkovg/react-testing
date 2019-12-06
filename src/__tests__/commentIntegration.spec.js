import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import App from '../components/App';
import moxios from 'moxios';

describe('commentIntegration', () => {

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments/', {
      status: 200,
      response: [
        {name: 'comment1'},
        {name: 'comment2'}
      ]
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should fetch a list of comments and display them', (done) => {
    // given
    const wrapped = mount(
      <Root>
        <App/>
      </Root>
    );

    // when
    wrapped.find('.fetch-comments').simulate('click');

    // then
    moxios.wait(() => {
      wrapped.update();
      expect(wrapped.find('li').length).toEqual(2);
      done();
      wrapped.unmount();
    });
  });
});