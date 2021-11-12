import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPost } from '../../actions/post'
import PostItem from '../posts/PostItem'
import Spinner from '../layout/Spinner'

const Post = ({ getPost, post: { post, loading }, match }) => {
    useEffect(() => {
        getPost(match.params.id);
    }, [getPost])

    return loading || post === null ? <Spinner /> :
        <Fragment>
            <PostItem post={post} showActions={false}/>
        </Fragment>
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}

const mapsStateToProps = state => ({
    post: state.post
})

export default connect(mapsStateToProps, { getPost })(withRouter(Post))
