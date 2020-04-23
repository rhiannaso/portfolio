import React, { Component } from 'react';
import './App.css'
import TabList from './Components/TabList';
import Body from './Components/Body';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 1
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
      })
    }
  }

  render() {
    const tabs = [
      {
        id: 1,
        title: 'Home',
        src: 'https://google.com'
      },
      {
        id: 2,
        title: 'Images',
        src: 'https://youtube.com'
      },
      {
        id: 3,
        title: 'Videos',
        src: 'https://wikipedia.org'
      },
      {
        id: 4,
        title: 'Projects',
        src: 'https://github.com'
      },
    ]
    return(
      <div className='body'>
        <div className='header'><h1>Rhianna So's Portfolio</h1></div>
        <div className='nav-bar'>
          <TabList tabs={tabs} changeTab={this.changeTab} activeTab={this.state.activeTab}/>
        </div>
        <div className='main-body'>
          <Body activeTab={this.state.activeTab}/>
        </div>
      </div>
    );
  }
}
export default App;