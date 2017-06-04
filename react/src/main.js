import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import MediaList from './components/MediaList';


$(function() {
  let reactApp = document.getElementById('media')
  if(reactApp){
    ReactDOM.render(
      <MediaList />,
      reactApp
    );
  };
});
