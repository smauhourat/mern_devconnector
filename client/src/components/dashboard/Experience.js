import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
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
        <button className="btn btn-danger" onClick={(e) => delExperience(e)} >
            Delete
        </button>
        </td>        
    </tr>));

    const delExperience = e => {
        deleteExperience(e._id);
    }

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
    deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(withRouter(Experience));
