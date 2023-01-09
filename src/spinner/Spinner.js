import React from 'react'
import "./Spinner.css"

import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = () => {
  return (
    <>
        <ClipLoader color={'orangered'} size={50} />
    </>
  )
}

export default Spinner