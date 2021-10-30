import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Experience = ({ experience }) => {
    const experiences = experience.map(e => (
    <tr key={e._id}>
        <td>{e.company}</td>
        <td className="hide-sm">{e.title}</td>
        <td className="hide-sm">
            <Moment format='YYYY/MM/DD'>{e.from}</Moment> - { 
                e.to === null ? (' Now') : <Moment format='YYYY/MM/DD'>{e.to}</Moment>
            }
        </td>
        <td>
        <button className="btn btn-danger">
            Delete
        </button>
        </td>        
    </tr>));

    return (
        <Fragment>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className="hide-sm">Title</th>
                        <th className="hide-sm">Years</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { experiences }
                </tbody>
            </table>
        </Fragment>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
};

export default connect(null, null)(withRouter(Experience));
