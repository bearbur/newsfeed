import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider}  from "./auth/provider";
import NavigationContainer from "./containers/navigation-container";
import NewsContainer from "./containers/news-container";
import styled from "styled-components";
import LoginFormContainer from "./containers/login-form-container";
import ProfileContainer from "./containers/profile-container";

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    background: #000;
    color: #fff;
    padding: 0;
    margin: 0;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    min-height: 4em;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 100%;
`;

const App = () => {
	return (
		<Router>
			<AppWrapper>
				<Provider>
					<Header>
						<NavigationContainer/>
					</Header>
					<Main>
						<Route path="/" exact component={NewsContainer}/>
						<Route path="/news" component={NewsContainer}/>
						<Route path="/profile" component={ProfileContainer}/>
						<Route path="/auth" component={LoginFormContainer}/>
					</Main>
				</Provider>
			</AppWrapper>

		</Router>
	);
}

export default App;
