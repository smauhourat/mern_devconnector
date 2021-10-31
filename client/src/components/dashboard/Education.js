import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Education = ({ education }) => {
    const educations = education.map(e => (
        <tr>
            <td>{e.school}</td>
            <td className="hide-sm">{e.degree}</td>
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
}

export default connect(null, null)(withRouter(Education));
