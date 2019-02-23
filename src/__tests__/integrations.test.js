import React from 'react';
import moxios from 'moxios';
import { mount } from 'enzyme';
import Root from '../Root';
import App from '../components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Comment 1' }, { name: 'Comment 2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  const component = mount(
    <Root>
      <App />
    </Root>,
  );
  component.find('button[type="button"]').simulate('click');

  moxios.wait(() => {
    component.update();
    expect(component.find('li')).toHaveLength(2);
    component.unmount();
    done();
  });
});
