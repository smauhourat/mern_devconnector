import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
    const educations = education.map(e => (
        <tr key={e._id}>
            <td>{e.school}</td>
            <td className="hide-sm">{e.degree}</td>
            <td className="hide-sm">
                <Moment format='YYYY/MM/DD'>{e.from}</Moment> - { 
                e.to === null ? (' Now') : <Moment format='YYYY/MM/DD'>{e.to}</Moment>
            } 
            </td>
            <td>
                <button className="btn btn-danger" onClick={(e) => deleteEducation(e._id)} >
                Delete
                </button>
            </td>
        </tr>
    ));


    return (
        <Fragment>
            <h2 className="my-2">Education Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                    <th>School</th>
                    <th className="hide-sm">Degree</th>
                    <th className="hide-sm">Years</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    { educations }
                </tbody>
                </table>
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(withRouter(Education));
