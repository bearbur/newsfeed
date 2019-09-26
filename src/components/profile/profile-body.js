import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import ProfileSocial from "./profile-social";

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items-center;
    width: 100%;
    height: 80vh;
    overflow-y: auto;
`;

const ProfileTitleOfRow = styled.span`
    font-size: 1.1em;
    font-weight: bolder;
    padding: 1em;
`;

const ProfileRow = styled.span`
    font-size: 1em;
    font-weight: 100;
    padding-left: 1em;
`;

const SocialBlock = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    overflow-x: auto;
`;

const ProfileBody = ({data}) => {

    const profile = Object.assign({},data);
    return(
        <ProfileWrapper>
            <ProfileTitleOfRow>Город: {profile.city}</ProfileTitleOfRow>
            <ProfileTitleOfRow>Знание языков:</ProfileTitleOfRow>
            {profile.languages && profile.languages.map((language,key)=><ProfileRow key={key}>{language}</ProfileRow>)}
            <ProfileTitleOfRow>Ссылки:</ProfileTitleOfRow>
            <SocialBlock>
                {profile.social && profile.social.sort((a,b)=>{
                    if(a.label === "web" && b.label !== "web"){
                        return -1
                    }
                    else {
                        return 1
                    }
                }).map((soc,key)=>
                    <div key={key}>
                        <ProfileSocial data={soc}/>
                    </div>)}
            </SocialBlock>
        </ProfileWrapper>
    )
};

export default ProfileBody;

ProfileBody.propTypes = {
    data: object.isRequired
};