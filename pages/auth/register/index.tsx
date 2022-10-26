import { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import ImagesAuth from "../../assets/images.gif"
import Image from "next/image";
const Index = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (value: any) => {
        console.log(value);
    }

    const handlePassword = (value: any) => {
        console.log(value);
    }

    const handleSubmit = (value: any) => {
        console.log(value);

    }

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="left">
                        <div className="registerLeft">
                            <h4>Sign Up</h4>
                            <span>Welcome, Enter insert your identity</span>
                            <br />
                            <br />
                            <br />
                            <Input title="Username" onChange={handleUsername} />
                            <br />
                            <Input title="Full Name" onChange={handleUsername} />
                            <br />
                            <Input title="Password" onChange={handlePassword} />
                            <br />
                            <Input title="Password" onChange={handlePassword} />
                            <div className="forgetPassword" style={{"marginBottom":"26px"}}>
                                <a href="">Forget Password</a>
                            </div>
                            <Button title="Login" onClick={handleSubmit} />
                            <br />
                            <p>Have an account?  <a href="/auth/login">Sign In</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right">
                        <div className="loginRight">
                            <p>The status-quo habits for 'grandfathered' vulnerabilities do not legitimize them.</p>
                            <Image src={ImagesAuth}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;