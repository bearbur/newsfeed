import React, { useState, useEffect }   from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import {Consumer} from "../auth/provider";
import Profile from "../components/profile";
const ProfileFormWrapper = styled.div``;

function ProfileContainer() {
	return (
		<ProfileFormWrapper>
			<Consumer>
				{({ store, actions }) => (
					store.authCorrect ? (
						<Profile id={store.id} readProfile={actions.readProfile} />
					) : <Redirect to='/auth' />
				)}
			</Consumer>
		</ProfileFormWrapper>
	);
}
export default ProfileContainer;