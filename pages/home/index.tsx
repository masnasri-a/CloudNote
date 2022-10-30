import { useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Account from "./account";
import Server from "./server";
import Support from "./support";

const Index = () => {
    const [side, setSide] = useState("Server")

    const handleChangeSidebar = (param: any) => {
        setSide(param)
    }

    const handleMenu = () => {
        if (side == "Server"){
            return <Server />
        }else if(side == "Account"){
            return <Account />
        }else if(side == "Support"){
            return <Support />
        }
    }

    return (
        <>
            <div style={{"backgroundColor":"#F5F5FD","height":"100vh", "paddingLeft":"20px"}}>
                <Sidebar onChange={handleChangeSidebar} />
                <Header menu={side} />
                <div className="project" style={{"paddingLeft":"20px"}}>
                    {
                        handleMenu()
                    }
                </div>
            </div>

        </>
    )
}

export default Index;