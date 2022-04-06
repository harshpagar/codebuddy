import "./Navbar.css"

export const Navbar = () => 
{

    return(
        <div className="mainnav">
            <div className = "nav">
                <img src="https://vectorlogo4u.com/wp-content/uploads/2020/10/microsoft-bing-01.png" alt="nophoto"/>
                <h3>Image</h3>
                <h3>Videos</h3>
                <h3>Translate</h3>
                <h3>...</h3>
               
            </div>
            <div className = "search">
                <div>
                    <input type="text" placeholder="    Search Here"/>                
                </div>
                <div className="lan">
                    <h4>Languages:हिंदी বাংলা اردو ਪੰਜਾਬੀ मराठी ગુજરાતી മലയാളം ଓଡ଼ିଆ</h4>
                </div>
            </div>
        </div>
    )
}