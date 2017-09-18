import React, { Component } from 'react';
import '../styles/App.css';

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import BaseLayout from './components/BaseLayout.js'
import ChildComponent from './components/ChildComponent'
import ParentComponent from './components/ParentComponent'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout></BaseLayout>
        <Header />
        <ParentComponent />
        <Footer />
      </div>
    );
  }
}

export default App;