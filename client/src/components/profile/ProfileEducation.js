import React, { Fragment } from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

const ProfileEducation = ({
        education
    }) => {
    return (
        <Fragment>
            <div className="profile-edu bg-white p-2">
            <h2 className="text-primary">Education</h2>
            {
                education.map((item, index) => (
                    <div key={index}>
                        <h3>{item.school}</h3>
                        <p>
                        <Moment format='YYYY/MM/DD'>{item.from}</Moment> - { 
                            item.to === null ? (' Current') : <Moment format='YYYY/MM/DD'>{item.to}</Moment>
                        }                         
                        </p>
                        <p><strong>Degree: </strong>{item.degree}</p>
                        <p><strong>Field Of Study: </strong>{item.fieldofstudy}</p>
                        <p><strong>Description: </strong>{item.description}</p>
                    </div>
                    ))
            }
            </div>
        </Fragment>
    )
}

ProfileEducation.propTypes = {

}

export default ProfileEducation
