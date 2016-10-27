import React from 'react';
import { Component } from 'react';

import BoookList from '../containers/book-list';
import BookDetail from '../containers/book_detail';


export default class App extends Component {
  render() {
    return (
       <div>
        <BoookList />
        <BookDetail />
       </div>
    );
  }
}

