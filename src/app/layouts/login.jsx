import React, { useState } from "react";
import TextField from "../components/textField";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                name="email"
                valye={data.email}
                onChange={handleChange}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                valye={data.password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Login;
