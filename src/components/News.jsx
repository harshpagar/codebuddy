import "./News.css";

export const News = (p) =>
{



    return(
        <div className="mainnews">
            <span>News 18</span>
            <div className="news">
                <img src= {p.name.image} alt="noimage" />
                <span>
                {p.name.details}
                </span>
            </div>
        </div>
    );
}