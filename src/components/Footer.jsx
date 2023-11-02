import React from 'react'

const Footer = (props) => {
  return (
    <footer className='text-center text-secondary bg-dark p-5 mt-auto'>{props.copyright}</footer>
  )
}

export default Footer