import { 
    Button,
    FormControl, 
    IconButton, 
    Input, 
    InputAdornment, 
    InputLabel, 
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

import { Visibility, VisibilityOff } from "@material-ui/icons";

import React, { useState } from "react";

import "./login.css";

export function Login () {
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    return (
        <div className="login">
            <div className="fields-group">
                <FormControl>
                    <InputLabel htmlFor="user">Email</InputLabel>
                    <Input
                        id="user"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
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
            </div>

            <Button 
                className="login-button" 
                variant="contained"
                color="primary"
            >
                Login
            </Button>

            <Button 
                className="login-button" 
                variant="contained" 
                color="secondary"
                onClick={() => history.push("/register")}
            >
                Registre-se
            </Button>
             
        </div>
    );
} 