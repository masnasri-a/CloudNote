import Image from "next/image";
import Logo from "../assets/logo.png"
import { FaServer } from 'react-icons/fa';
import { IoHelpBuoy, IoPeople } from 'react-icons/io5';
import { IoMdLogOut } from 'react-icons/io';
import { useState } from "react";

const Sidebar = (props:any) => {
    const [activeMenu, setActiveMenu] = useState({
        "server":"menu activeMenu",
        "account":"menu",
        "support":"menu"
    })
    const [color, setColor] = useState({
        "server":"white",
        "account":"#323C8C",
        "support":"#323C8C"
    })

    const handleOnClick = (param:any) => {
        if (param == "server"){
            setActiveMenu({
                "server":"menu activeMenu",
                "account":"menu",
                "support":"menu"
            })
            setColor({
                "server":"white",
                "account":"#323C8C",
                "support":"#323C8C"
            })
        } else if(param == "account"){
            setActiveMenu({
                "server":"menu",
                "account":"menu activeMenu",
                "support":"menu"
            })
            setColor({
                "server":"#323C8C",
                "account":"white",
                "support":"#323C8C"
            })
        } else if(param == "support"){
            setActiveMenu({
                "server":"menu",
                "account":"menu",
                "support":"menu activeMenu"
            })
            setColor({
                "server":"#323C8C",
                "account":"#323C8C",
                "support":"white"
            })
        }
        console.log(activeMenu);
        
    }

    return (
        <div className="sidebar" >
            <div className="logo d-flex justify-content-center">
                <Image src={Logo} width="150px" height="82px" />
            </div>
            <div className="menuSidebar" onClick={()=>{
                handleOnClick("server")
                props.onChange('Server')
                }}>
                <div className={activeMenu.server}>
                    <div className="dataMenuActive">
                        <FaServer size={30} color={color.server}/>
                        <span style={{"color":color.server}}>Server</span>
                    </div>
                </div>
            </div>
            <div className="menuSidebar" onClick={()=>{
                handleOnClick("account")
                props.onChange('Account')
                }}>
                <div className={activeMenu.account}>
                    <div className="dataMenu ">
                        <IoPeople size={30} color={color.account}/>
                        <span style={{"color":color.account}}>Account</span>
                    </div>
                </div>
            </div>
            <div className="menuSidebar" onClick={()=>{
                handleOnClick("support")
                props.onChange('Support')
                }}>
                <div className={activeMenu.support}>
                    <div className="dataMenu ">
                        <IoHelpBuoy size={30} color={color.support}/>
                        <span style={{"color":color.support}}>Support</span>
                    </div>
                </div>
            </div>
            <div className="menuSidebar">
                <div className="menu">
                    <div className="dataMenu ">
                        <IoMdLogOut size={30} color="#323C8C"/>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;