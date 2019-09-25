import React, {useState, useEffect, Fragment} from "react";
import styled from "styled-components";
import axios from "axios";
import Constants from "../constants";
import LoadingSpinner from "./loading-spinner";
import ProfileBody from "./profile/profile-body";
import ProfileErrors from "./profile/profile-errors";

const ProfileWrapper = styled.div`
    width: 20em;
    height: 30em;
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfileTitle = styled.h1`
    font-size: 2em;
`;

const Profile = ({id=0, updateProfileInformation }) => {

    const urlRequest = Constants.urls.profile + id;
    const [data, setData] = useState({ profile: {}, errors: {} });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                urlRequest
            );

            updateProfileInformation(result.data.data);
            setData({profile:result.data.data});
        };
        fetchData();
    },[urlRequest, updateProfileInformation]);

    return (
        <ProfileWrapper>
            <ProfileTitle>Профиль</ProfileTitle>
            {
                !data.profile ? <LoadingSpinner/> : <ProfileBody data={data.profile} />
            }
            {
                !data.errors ? <Fragment/> : <ProfileErrors data={data.errors} />
            }
        </ProfileWrapper>
    );
}
export default Profile;