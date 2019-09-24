import React, { Component, createContext } from 'react';
import {loginRequest, profileRequest, validResponseAuth} from "../helpers/requestsToApi";

const initialState = {
        authCorrect: false,
        rawProfile: {},
        profile: {},
        email: "",
        password: ""
};

export const Context = createContext({...initialState});

class AuthProvider extends Component {

        state = {...initialState};

        get actions() {
                return {
                        handleChange: this.handleChange,
                        onLogin: this.onLogin,
                        onLogout: this.onLogout,
                        readProfile: this.readProfile
                };
        }

        handleChange = e => {
                this.setState({
                        [e.target.name]: e.target.value
                });
        };

        onLogin = e => {
                if(e)e.preventDefault();

                const { email, password } = this.state;

                loginRequest(email, password)
                    .then(r=>{
                            //Success login
                            if(validResponseAuth(r)){
                                    this.setState({
                                            authCorrect: true,
                                            password: null,
                                            profile: {id: r.data.id}
                                    });
                            }
                            //Login failure
                            else{
                                    //todo standard error

                                    //todo server error

                            }
                    })
                    .catch( err => {
                            console.error(err);
                            this.setState({
                                    authCorrect: false,
                                    password: "",
                                    email: ""
                            });
                    });
        };

        onLogout = () => {
                this.setState({
                        authCorrect: false,
                        password: "",
                        email: ""
                });
        };

        readProfile = (id) => {
                profileRequest(id).then(profile => {
                        this.setState({
                                rawProfile: profile
                        });
                });
        };

        render() {

                return (
                    <Context.Provider
                        value={{
                                store: this.state,
                                actions: this.actions
                        }}
                    >
                            {this.props.children}
                    </Context.Provider>
                );
        }
}

export const Consumer = Context.Consumer;
export const Provider = AuthProvider;