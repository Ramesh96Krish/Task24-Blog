import "./data-science.css"

const DataScience = (props)=>{
    const {data} = props;
    return(
        <div className="dataScience-container">
             {
                data.map((datas, index) => (      
                <>
                { datas.category==="data-science"?(
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
export default DataScience;