import React, { Fragment, useState } from 'react'
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ profile: { profile, loading }, addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        current: false,
        to: '',
        description: ''
    });
    
    const [toDateDisabled, toggleToDateDisabled] = useState(false);

    const {
        school,
        degree,
        fieldofstudy,
        from,
        current,
        to,
        description
    } = formData;    

    
    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        addEducation(formData, history);
    }

    return (
        <Fragment>
            <h1 className="large text-primary">
                Add Your Education
            </h1>
            <p className="lead">
                <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc that
                you have attended
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="* School or Bootcamp"
                    name="school"
                    value={school} onChange={e => onChange(e)}
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="* Degree or Certificate"
                    name="degree"
                    value={degree} onChange={e => onChange(e)}
                    required
                />
                </div>
                <div className="form-group">
                <input type="text" placeholder="Field Of Study" name="fieldofstudy" value={fieldofstudy} onChange={e => onChange(e)}/>
                </div>
                <div className="form-group">
                <h4>From Date</h4>
                <input type="date" name="from" value={from} onChange={e => onChange(e)}/>
                </div>
                <div className="form-group">
                <p><input type="checkbox" name="current" checked={current} value={current} onChange={e => {
                    setFormData({...formData, current: !current});
                    toggleToDateDisabled(!toDateDisabled)
                }}/> Current School or Bootcamp</p>                
                </div>
                {
                    !toDateDisabled && <Fragment>
                    <div className="form-group">
                        <h4>To Date</h4>
                        <input type="date" name="to" value={to} onChange={e => onChange(e)}/>
                        </div>
                        <div className="form-group">
                        <textarea
                            name="description"
                            cols="30"
                            rows="5"
                            value={description} onChange={e => onChange(e)}
                            placeholder="Program Description"
                        ></textarea>
                    </div>
                    </Fragment>
                }
                <input type="submit" className="btn btn-primary my-1" />
                {/* <a className="btn btn-light my-1" href="dashboard.html">Go Back</a> */}
                <Link to="/dashboard" className="btn btn-light my-1">Go Back</Link>
            </form>
        </Fragment>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps, {addEducation })(withRouter(AddEducation));

