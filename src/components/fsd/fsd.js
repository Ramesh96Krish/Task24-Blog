import "./fsd.css"

const FSD = (props)=>{
    const {data} = props;
    return(
        <div className="fsd-container">
             {
                data.map((datas, index) => (      
                <>
                { datas.category==="FSD"?(
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

                ):""}
                </>
                ))
            }

        </div>
    )
}
export default FSD;