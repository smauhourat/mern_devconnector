import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';
import PropTypes from 'prop-types'

const ProfileGithub = ( { username, getGithubRepos, repos }) => {
    
    useEffect(() => {
        getGithubRepos(username)
    }, [getGithubRepos])

    console.log(username)
    console.log(repos)
    return (
        <Fragment>
            <div className="profile-github">
                <h2 className="text-primary my-1">
                    <i className="fab fa-github"></i> Github Repos
                </h2>
                {
                    repos.map((item, index) => (
                        <div key={index} className="repo bg-white p-1 my-1">
                            <div>
                            <h4><a href="#" target="_blank"
                                rel="noopener noreferrer">{item.name}</a></h4>
                            <p>
                                {item.description}
                            </p>
                            </div>
                            <div>
                            <ul>
                                <li className="badge badge-primary">Stars: {item.stars}</li>
                                <li className="badge badge-dark">Watchers: {item.watchers}</li>
                                <li className="badge badge-light">Forks: {item.forks}</li>
                            </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}

ProfileGithub.propTypes = {
    username: PropTypes.string.isRequired,
    getGithubRepos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    repos: state.profile.repos
})

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub)
