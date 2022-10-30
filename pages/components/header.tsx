import Image from 'next/image';
import { FiArrowRight, FiHome } from 'react-icons/fi';
import Profile from "../assets/profile.png";

const Header = (props: any) => {
    return (
        <>
            <div className="header" style={{"paddingLeft":"20px"}}>
                <div className="leftHeader">
                    <FiHome size={25} />
                    <span>Home</span>
                    <FiArrowRight />
                    <span>{props.menu}</span>
                </div>
                <div className="rightHeader">
                    <Image src={Profile} height="50px" width="50px" className="profilePictureHeader" />
                    <span>{props.username ? props.username : "Username"}</span>
                </div>
            </div>
        </>
    )
}

export default Header;