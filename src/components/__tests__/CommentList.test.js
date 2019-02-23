import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import CommentList from '../CommentList';

describe('<CommentList />', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <Root storeInitialState={{ comments: ['Comment 1', 'Comment 2'] }}>
        <CommentList />
      </Root>,
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it('shows one LI element for each comment', () => {
    expect(component.find('li')).toHaveLength(2);
  });

  it('shows text for each comment', () => {
    expect(component.render().text()).toContain('Comment 1');
    expect(component.render().text()).toContain('Comment 2');
  });
});
