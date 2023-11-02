import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = ({ setUser }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "Admin@test" && password === "1234") {
            setUser([email]);
        } else if (email === "" || password === "") {
            setError(true);
            setErr(false);


            setTimeout(() => {
                setError(false);
            }, 4000);
        } else {

            setTimeout(() => {
                setErr(false);
            }, 4000);
            
            
            setErr(true);
        }

        setEmail('');
        setPassword('');
    };



    return (
        <div className='container-xl'>
            <div className='bg bg-danger p-5 mx-5'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                {error && <p>todos los campos son obligatorios</p>}
                {err && <p>User or password incorrect</p>}
            </div>
        </div>
    );
};

export default Login;
