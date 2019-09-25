import React  from "react";
import styled from "styled-components";

const ProfileWrapper = styled.div`
    width: 20em;
    height: 30em;
    margin-top: 3em;
`;

const ProfileTitle = styled.span`
    font-size: 2em;
`;

const Profile = (props) => {
    const id = props.id;
    const readProfile = (id) => props.readProfile(id);
    return (
        <ProfileWrapper>
            <ProfileTitle>Profile</ProfileTitle>
        </ProfileWrapper>
    );
}
export default Profile;