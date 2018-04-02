import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/appStyles.scss';

const title = 'hello!';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();