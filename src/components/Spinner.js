import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner  = ()=> {
    return (
      <div className='text-center'>
          <img height="30px" width="30px" src={loading} alt="loading" />
      </div>
    )
}

export default Spinner