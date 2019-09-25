import React from 'react';
import styled from 'styled-components';
import ProfileSocial from "./profile-social";

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items-center;
    width: 50vw;
`;

const ProfileTitleOfRow = styled.span`
    font-size: 1.1em;
    font-weight: bolder;
`;

const ProfileRow = styled.span`
    font-size: 1em;
    font-weight: 100;
`;

const ProfileBody = (props) => {
    console.log(props);
    const profile = props.data;
    return(
        <ProfileWrapper>
            <ProfileTitleOfRow>Город: {profile.city}</ProfileTitleOfRow>
            <ProfileTitleOfRow>Знание языков:</ProfileTitleOfRow>
            {profile.languages && profile.languages.map((language,key)=><ProfileRow key={key}>{language}</ProfileRow>)}
            <ProfileTitleOfRow>Ссылки:</ProfileTitleOfRow>
            {profile.social && profile.social.sort((a,b)=>{
                if(a.label === "web" && b.label !== "web"){
                    return -1
                }
                else {
                    return 1
                }
            }).map((soc,key)=>
                <ProfileRow key={key}>
                    <ProfileSocial data={soc}/>
                </ProfileRow>)}
        </ProfileWrapper>
    )
};

export default ProfileBody;