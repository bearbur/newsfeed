import React from 'react';
import { string } from 'prop-types';

const ProfileErrors = ({message}) => {
    return(
        <span style={{color:'red', background: 'white'}}>{message}</span>
    )
};

export default ProfileErrors;

ProfileErrors.propTypes = {
    message: string.isRequired
};