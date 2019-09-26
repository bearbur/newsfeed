import React from 'react';

const ProfileErrors = (props) => {
    console.error(props);
    return(
        <span style={{color:'red', background: 'white'}}>Error on load profile.</span>
    )
};

export default ProfileErrors;