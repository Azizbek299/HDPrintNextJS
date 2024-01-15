import React from 'react'
import { PacmanLoader } from 'react-spinners'


const override = {
    display: "block",
    margin: "0 auto",
  };


const LoadingSpinner = (props:any) => {
  return (
    <div>
        <PacmanLoader        
        color={props.color}
        loading={props.loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default LoadingSpinner