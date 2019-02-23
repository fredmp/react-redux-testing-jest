import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentList from '../CommentList';
import CommentBox from '../CommentBox';

describe('<App />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it('shows a comment box', () => {
    expect(component.find(CommentBox)).toHaveLength(1);
  });

  it('shows a comment list', () => {
    expect(component.find(CommentList)).toHaveLength(1);
  });
});
