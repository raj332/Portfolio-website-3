import React, { Component} from 'react'
//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  './App.scss'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import SocialMedia from './components/SocialMedia/SocialMedia'


class App extends Component {
  render() {
    return (
      <div className='mainBody'>
      <Navbar/>
        <Home/>
        <SocialMedia/>
      </div>
    )
  }
}

export default App
