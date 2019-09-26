import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';

const Social = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    min-width: 10px;
    min-height: 50px;
`;

const SocialTitle = styled.span`
    height: 20%;
    width: 100%;
    font-weight: bold;
    padding-bottom: 1em;
`;

const SocialLogo = styled.a`
    min-height: 30px;
    max-height: 80%;
    background: ${props => `url("./images/${props["imageUrl"]}")` || "white" };
    background-repeat: no-repeat;    
    background-position: center;
`;

const ProfileSocial = ({data}) => {
    return(
        <Social>
            <SocialTitle>{data.label}</SocialTitle>
            <SocialLogo href={data.link} target="_blank" imageUrl={`${data.label}.svg`}/>
        </Social>
    )
};

export default ProfileSocial;

ProfileSocial.propTypes = {
    data: object.isRequired
};