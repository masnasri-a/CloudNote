import { useState } from "react"
import Button from "../components/button"
import CardServer from "../components/cardServer"
import Search from "../components/search"

const Server = (props: any) => {
    const [activeServer, setActiveServer] = useState("Project")
    const listServer = ["Project", "Service", "Frontend", "Backend", "Scientist", "Other"]

    const handleActiveServer = (param:any) => {
        setActiveServer(param)
    }

    const dummyProject = [
        {
            "logo":"ima.svg",
            "name":"IMA",
            "desc":"Intellegance Media Analytic"
        },{
            "logo":"isa.svg",
            "name":"ISA",
            "desc":"Intellegance Social Media Analytic"
        },{
            "logo":"ams.svg",
            "name":"AMS",
            "desc":"Assets Management Service"
        },{
            "logo":"ima.svg",
            "name":"BCOFF",
            "desc":"Blockchain Coffee"
        },{
            "logo":"ima.svg",
            "name":"Kommu",
            "desc":"Projek Gajelas anjing"
        },{
            "logo":"ima.svg",
            "name":"IMA",
            "desc":"Intellegance Media Analytic"
        },{
            "logo":"isa.svg",
            "name":"ISA",
            "desc":"Intellegance Social Media Analytic"
        },{
            "logo":"ams.svg",
            "name":"AMS",
            "desc":"Assets Management Service"
        },{
            "logo":"ima.svg",
            "name":"BCOFF",
            "desc":"Blockchain Coffee"
        },{
            "logo":"ima.svg",
            "name":"Kommu",
            "desc":"Projek Gajelas anjing"
        },{
            "logo":"ima.svg",
            "name":"IMA",
            "desc":"Intellegance Media Analytic"
        },{
            "logo":"isa.svg",
            "name":"ISA",
            "desc":"Intellegance Social Media Analytic"
        },{
            "logo":"ams.svg",
            "name":"AMS",
            "desc":"Assets Management Service"
        },{
            "logo":"ima.svg",
            "name":"BCOFF",
            "desc":"Blockchain Coffee"
        },{
            "logo":"ima.svg",
            "name":"Kommu",
            "desc":"Projek Gajelas anjing"
        }
    ]

    const handleMenu = () => {
    }

    return (
        <>
            <div className="serverMenu">
                <div className="textHeader">
                    <span>SERVER</span>
                </div>
                <div className="menuServer d-flex" >
                    <div className="listServer d-flex">
                        {
                            listServer.map((data: any) => {
                                return (
                                    <>
                                        {
                                            activeServer == data ? (
                                                <div className="detailProjectList activeList" onClick={()=>handleActiveServer(data)}>
                                                    <span>{data}</span>
                                                </div>
                                            ) : (
                                                <div className="detailProjectList" onClick={()=>handleActiveServer(data)}>
                                                    <span>{data}</span>
                                                </div>
                                            )
                                        }

                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="createProject" style={{"width":"190px"}}>
                        <Button title="Create" width="190px" />
                    </div>
                </div>
                <hr color="#323C8C"/>
                <div className="mainMenuServer ">
                    <Search />
                </div>
                <div className="mainServerMenu d-flex flex-wrap">
                    {
                        dummyProject.map((data:any)=>{
                            return <CardServer logo={data.logo} desc={data.desc} name={data.name} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Server;