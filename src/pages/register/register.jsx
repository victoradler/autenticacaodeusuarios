import React, { useState } from "react";
import axios from 'axios';

import { 
    Button,
    FormControl, 
    IconButton, 
    Input, 
    InputAdornment, 
    InputLabel, 
} from "@material-ui/core";

import { api } from '../../api';

import { useHistory } from "react-router-dom";

import { Visibility, VisibilityOff } from "@material-ui/icons";

import "./register.css";

export function Register () {
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState();
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const [email, setEmail] = useState();
    const [name, setName] = React.useState()
    const [isRegister, setIsRegister] = React.useState(false);

    const login = React.useCallback(async () => {
        try {
            setIsRegister(true);

            const response = await axios.post("https://teste.reobote.tec.br/api/register", {
                name,
                password,
                password_confirmation: passwordConfirmation,
            });

            console.log(response);
        } catch (err) {
            console.log("response > data =>> ", err.response);
        } finally {
            setIsRegister(false);
        }
    }, [
        password,
        passwordConfirmation,
        email,
        name,
    ]);

    return (
        <div className="register">
            <div className="fields-group">
                <FormControl>
                    <InputLabel htmlFor="nome">Nome</InputLabel>
                    <Input
                        id="nome"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle email visibility"
                            >
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        id="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle email visibility"
                            >
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="passwordConfirmation">Confirm Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPasswordConfirmation ? 'text' : 'password'}
                        value={passwordConfirmation}
                        onChange={({ target }) => setPasswordConfirmation(target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                                >
                                    {showPasswordConfirmation ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>

            <Button 
                className="register-button" 
                variant="contained" 
                color="primary"
                disabled={isRegister}
                onClick={login}
            >
                {isRegister ? "Registrando..." : "Registrar"}
            </Button>

            <Button 
                className="register-button" 
                variant="contained" 
                color="secondary"
                onClick={() => history.push("/")}
                disabled={isRegister}
            >
                Login
            </Button>

        </div>
    );
} 