import React from 'react'
import Counter from './Counter'

const Header = (props) => {
  return (
    <header className='container-fluid px-md-5'>
      <h1 className={props.count >= 5 ? "text-danger" : "text-black"}>{props.title}</h1>
    </header>
  )
}

export default Header