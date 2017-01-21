import React from 'react'
import { Link } from 'react-router'

class Menu extends React.Component {
  render () {
    return (
      <div>
        <Link to='/'>Note</Link>
        <Link to='/about'>About</Link>
      </div>
    )
  }
}

export default Menu
