import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { getProfiles } from '../../actions/profile'
import ProfileItem from './ProfileItem'

const Profiles = ({ profile: { profiles, loading }, getProfiles }) => {
    useEffect(() => {
        getProfiles();
    }, []);

    return (
        <Fragment>
            { loading ? <Spinner /> : <Fragment>
                <h1 classname="large text-primary">Developers</h1>
                <p className="lead">
                    <i className="fab fa-connectdevelop"></i> Browse and connect with developers
                </p>
                <div className="profiles">
                    { profiles.length > 0 ? (
                        profiles.map(item => (
                            <ProfileItem key={item._id} profile={item} />
                        ))
                    ) : <h4>No profiles found...</h4>}
                </div>

                </Fragment>}
        </Fragment>
    )
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Profiles);
