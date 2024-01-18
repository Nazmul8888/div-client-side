

const Video = () => {
    return (
        <div>
            <h1 className=" text-3xl font-bold ml-96 py-10">A global software house delivering and integrating <br /> proprietary IT products.</h1>
            <br />
            <div className=" flex justify-evenly items-center">
                <br />
                <br />
                <br />
            <div className=" bg-blue-700 w-[560px] h-[315px]">
                <br />
                <h1 className=" text-2xl font-bold text-white ml-10">Why Comarch?</h1>
                <br />
                <p className="  text-white ml-10 font-[20px] ">Comarch is a stable, experienced provider of <br /> innovative IT products for multiple industries,<br /> including telecommunications, banking, airlines,<br /> petrol stations, utilities.</p>
                <br />
                <br />
                <button className=" btn btn-wide ml-10">Learn More About Div</button>
            </div>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oKlvuOxbUmI?si=rVuvurbuCPsSX3Wg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>
        </div>
    );
};

export default Video;