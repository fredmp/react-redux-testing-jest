import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('Hi there!');

  ReactDOM.unmountComponentAtNode(div);
});

it('has a CommentBox', () => {});

it('has a CommentList', () => {});
