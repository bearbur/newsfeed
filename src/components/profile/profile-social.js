import React from 'react';
import styled from 'styled-components';

const Social = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 7em;
    border-top: 1px solid gray;
`;

const SocialTitle = styled.span`
    height: 2em;
    width: 5em;
    font-weight: bold;
    border: 1px solid #000;
`;

const SocialLogo = styled.a`
    border: 1px solid gray;
    height: 5em;
    width: 5em;
`;

const ProfileSocial = ({data}) => {
    return(
        <Social>
            <SocialTitle>{data.label}</SocialTitle>
            <SocialLogo href={data.link} target="_blank"/>
        </Social>
    )
};

export default ProfileSocial;