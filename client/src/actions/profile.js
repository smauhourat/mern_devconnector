import axios from 'axios';
import { setAlert } from './alert';
import { 
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    ACCOUNT_DELETED,
    CLEAR_PROFILE,
    GET_PROFILES,
    GET_REPOS
} from './types';

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
}

export const getProfiles = () => async dispatch => {
    dispatch({ type: CLEAR_PROFILE });

    try {
        const res = await axios.get('/api/profile');

        dispatch({
            type: GET_PROFILES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
}

export const getProfileById = (userId) => async dispatch => {

    try {
        const res = await axios.get(`/api/profile/user/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
}

export const getGithubRepos = (username) => async dispatch => {
    try {
        debugger;
        //const res = await axios.get(`/api/profile/github/${username}`);

        const res = 
            [
                {
                    id: 1296269,
                    name: 'Hello-World',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ducimus.',
                    stars: 12,
                    watchers: 30,
                    forks: 4
                },
                {
                    id: 1296268,
                    name: 'Hello-World 2',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ducimus.',
                    stars: 15,
                    watchers: 20,
                    forks: 2
                }
            ]

        dispatch({
            type: GET_REPOS,
            payload: res //res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
}

// Create or Update profile
export const createProfile = (formData, history, edit = false) => async dispatch => {

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
            
        const res = await axios.post('/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
        
        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

        if (!edit) {
            history.push('/dashboard');
        }

    } catch (err) {
        
        console.log(err);
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
}

// Add Experience
export const addExperience = (formData, history) => async dispatch => {
    
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
            
        const res = await axios.put('/api/profile/experience', formData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });
        
        dispatch(setAlert('Experience Added', 'success'));

        history.push('/dashboard');

    } catch (err) {
        
        console.log(err);
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
}

// Add Education
export const addEducation = (formData, history) => async dispatch => {
    
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
            
        const res = await axios.put('/api/profile/education', formData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });
        
        dispatch(setAlert('Education Added', 'success'));

        history.push('/dashboard');

    } catch (err) {
        
        console.log(err);
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
}

// Delete Experience
export const deleteExperience = (id) => async dispatch => {

    try {
        const res = await axios.delete(`/api/profile/experience/${id}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });
        
        dispatch(setAlert('Experience Deleted', 'success'));
    }
    catch(err) {
        console.log(err);
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        

    }
}

// Delete Education
export const deleteEducation = (id) => async dispatch => {

    try {
        const res = await axios.delete(`/api/profile/education/${id}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });
        
        dispatch(setAlert('Education Deleted', 'success'));
    }
    catch(err) {
        console.log(err);
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        

    }
}

export const deleteAccount = () => async dispatch => {
    if (window.confirm('Are you sure?  This can NOT be undone!')) {
        try {
            await axios.delete('/api/profile');
    
            dispatch({type: ACCOUNT_DELETED});
            dispatch({type: CLEAR_PROFILE});
            
            dispatch(setAlert('Account Deleted'));
        }
        catch(err) {
            console.log(err);
            const errors = err.response.data.errors;
    
            if (errors) {
                errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
            }
    
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });        
    
        }
    
    }
}