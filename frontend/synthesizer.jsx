import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Note from './util/note';
import configureStore from './store/store.js';
import Root from './component/root.jsx';

$(() => {
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
  $('.stop').prop("disabled", true);
});
