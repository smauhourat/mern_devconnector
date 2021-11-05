import React, { Fragment } from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

const ProfileExperience = ({ 
        experience
    }) => {
    return (
        <Fragment>
            <div className="profile-exp bg-white p-2">
            <h2 className="text-primary">Experience</h2>
            {
                experience.map((item, index) => (
                    <div key={index}>
                    <h3 className="text-dark">{item.company}</h3>
                    <p>
                    <Moment format='YYYY/MM/DD'>{item.from}</Moment> - { 
                        item.to === null ? (' Current') : <Moment format='YYYY/MM/DD'>{item.to}</Moment>
                    }                         
                    </p>
                    <p><strong>Position: </strong>{item.title}</p>
                    <p>
                    <strong>Description: </strong>{item.description}
                    </p>
                </div>
                ))
            }
            </div>
        </Fragment>
    )
}

ProfileExperience.propTypes = {

}

export default ProfileExperience
