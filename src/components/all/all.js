import "./all.css"

const All = (props)=>{
    const {data} = props;
    return(
        <div className="all-container">
            {
                data.map((datas, index) => (
                    <div className="blog-card">
                    <div className="image-container">
                        <img className="img-original" src={datas.imgUrl} alt="blog"/>
                    </div>
                    <div className="title-container">
                        <h2>{datas.title}</h2>
                    </div>
                    <div className="blog-container">
                        <p>{datas.decription}</p>
                    </div>
                    <hr className="line"></hr>
                </div>

                ))
            }

        </div>
    )
}

export default All;