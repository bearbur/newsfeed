import React  from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import {Consumer} from "../auth/provider";
const ProfileFormWrapper = styled.div`
    background: yellow;
`;
function ProfileContainer() {
	return (
		<ProfileFormWrapper>
			<Consumer>
				{({ store }) => (
					store.authCorrect ? (
						<div>
							<h1>Profile</h1>
						</div>
					) : (<div>
							 <Redirect to='/auth' />
					</div>)
				)}
			</Consumer>
		</ProfileFormWrapper>
	);
}
export default ProfileContainer;