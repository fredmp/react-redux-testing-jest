import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import CommentBox from '../CommentBox';

describe('<CommentBox />', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <Root>
        <CommentBox />
      </Root>,
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it('shows a text area', () => {
    expect(component.find('textarea')).toHaveLength(1);
  });

  it('shows a button to add a comment', () => {
    expect(component.contains('Add Comment')).toBeTruthy();
  });

  it('shows a button to fetch comments', () => {
    expect(component.contains('Fetch Comments')).toBeTruthy();
  });

  describe('text area', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', { target: { value: 'Comment' } });
      component.update();
    });

    it('text area accepts text', () => {
      expect(component.find('textarea').prop('value')).toEqual('Comment');
    });

    it('is cleared when form is submitted', () => {
      expect(component.find('textarea').prop('value')).toEqual('Comment');
      component.find('form').simulate('submit');
      component.update();
      expect(component.find('textarea').prop('value')).toEqual('');
    });
  });
});
