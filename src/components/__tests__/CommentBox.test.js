import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

describe('<CommentBox />', () => {
  let component;
  beforeEach(() => {
    component = mount(<CommentBox />);
  });

  afterEach(() => {
    component.unmount();
  });

  it('shows a text area', () => {
    expect(component.find('textarea')).toHaveLength(1);
  });

  it('shows a button', () => {
    expect(component.find('button')).toHaveLength(1);
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
