import React from 'react';

const CountDisplay = ({count}) => {
  return (
    <div className='p-5 text-center'>
      Count is <span className={count < 6 ? "badge bg-dark" : "badge bg-success"}>{count}</span>
    </div>
  )
}

export default CountDisplay