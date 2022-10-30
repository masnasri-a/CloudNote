import Image from "next/image";


const CardServer = (props: any) => {
    return (
        <>
            <div className="cardServer">
                <div className="headCardServer">
                    <Image src={"/" + props.logo} width={25} height={25} />
                    <span>{props.name}</span>
                </div>
                <span className="cardServerDesc">{props.desc}</span>
            </div>
            { }
        </>
    )
}

export default CardServer;