import React from 'react'
import { Link } from 'react-router'

export class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to My App</h2>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export class Index extends React.Component {
  render() {
    return (
      <div>
        <p>This id The Index Page</p>
      </div>
    )
  }
}

export class  About extends React.Component {
  render() {
    return (
      <div>
        <p>This is About Page</p>
      </div>
    )
  }
}
