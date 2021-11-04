import React, { Fragment, useState } from 'react'
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ profile: { profile, loading }, addExperience, history }) => {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        from: '',
        current: false,
        to: '',
        description: ''
    });

    const [toDateDisabled, toggleToDateDisabled] = useState(false);

    const {
        title,
        company,
        location,
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
        addExperience(formData, history);
    }

    return (
        <Fragment>
            <h1 className="large text-primary">
            Add An Experience
            </h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Add any developer/programming
                positions that you have had in the past
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <input type="text" placeholder="* Job Title" name="title" value={title} onChange={e => onChange(e)}
                 required />
                </div>
                <div className="form-group">
                <input type="text" placeholder="* Company" name="company" value={company} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)}/>
                </div>
                <div className="form-group">
                <h4>From Date</h4>
                <input type="date" name="from" value={from} onChange={e => onChange(e)}/>
                </div>
                <div className="form-group">
                <p><input type="checkbox" name="current" checked={current} value={current} onChange={e => {
                    setFormData({...formData, current: !current});
                    toggleToDateDisabled(!toDateDisabled)
                }}/> Current Job</p>
                </div>
                {
                    !toDateDisabled && <Fragment>
                        <div className="form-group">
                        <h4>To Date</h4>
                        <input type="date" name="to" value={to} onChange={e => onChange(e)} />
                        </div>
                        <div className="form-group">
                        <textarea
                            name="description"
                            cols="30"
                            rows="5"
                            value={description} onChange={e => onChange(e)}
                            placeholder="Job Description"
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

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps, {addExperience })(withRouter(AddExperience));
