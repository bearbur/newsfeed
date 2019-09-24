import React from "react";
import NavigationBar from "../components/navigation-bar";
import styled from "styled-components";
import {Consumer} from "../auth/provider";

const NavigationWrapper = styled.div``;

 const NavigationContainer = () => {
	return (
		<NavigationWrapper>
			<Consumer>
				{({store, actions}) =>
					(<NavigationBar auth={store.authCorrect} onLogout={()=>actions.onLogout()}/>)}
			</Consumer>
		</NavigationWrapper>)
}

export default NavigationContainer;