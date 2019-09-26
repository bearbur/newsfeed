import React, {useState, useEffect, Fragment} from "react";
import { number, func } from 'prop-types';
import styled from "styled-components";
import axios from "axios";
import Constants from "../constants";
import LoadingSpinner from "./loading-spinner";
import ProfileBody from "./profile/profile-body";
import ProfileErrors from "./profile/profile-errors";

const ProfileWrapper = styled.div`
    width: 90vw;
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
    const errorWarning = {};
    const urlRequest = Constants.urls.profile + id;
    const [data, setData] = useState({ profile: {}});
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                urlRequest
            );

            errorWarning.message = null;

            if(result.data.status === 'ok'){
                updateProfileInformation(result.data.data);
                setData({profile:result.data.data});
            }

            else if(result.data.status === 'err' && result.data.message === "user_not_found" ){
                updateProfileInformation({});
                setData({profile:{}});
                errorWarning.message = "Пользователь не найден."
            }

            else {
                updateProfileInformation({});
                setData({profile:{}});
                errorWarning.message = "Неизвестная ошибка."
            }
        };
        fetchData();
    },[urlRequest]);

    return (
        <ProfileWrapper>
            <ProfileTitle>Профиль</ProfileTitle>
            {
                !data.profile ? <LoadingSpinner/> : <ProfileBody data={data.profile } />
            }
            {
                !errorWarning.message ? <Fragment/> : <ProfileErrors message={errorWarning.message} />
            }
        </ProfileWrapper>
    );
};

export default Profile;

Profile.propTypes = {
    id: number.isRequired,
    updateProfileInformation: func.isRequired,
};