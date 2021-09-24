import React, { Fragment } from 'react'
import spinner from '../../img/spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img 
                src={spinner}
                style={{ with: '200px' , margin: 'auto', display: 'block'}}
                alt="loading..."
            />
        </Fragment>
    )
}

export default Spinner
