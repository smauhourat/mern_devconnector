import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({ 
        profile: {
            user: {
                name
            },
            bio,
            skills
        }
    }) => {
    return (
        <Fragment>
            <div className="profile-about bg-light p-2">
                {bio && (
                    <Fragment>
                        <h2 className='text-primary'>{name.trim().split(' ')[0]}s Bio</h2>
                        <p>
                            {bio}
                        </p>
                        <div className="line"></div>
                        <h2 className="text-primary">Skill Set</h2>
                        <div className="skills">
                            { skills && skills.map((item, index) => (
                                <div key={index} className="p-1"><i className="fa fa-check"></i> {item}</div>
                            ))}
                        </div>
                    </Fragment>
                )}
            </div>
        </Fragment>
    )
}

ProfileAbout.propTypes = {

}

export default ProfileAbout
