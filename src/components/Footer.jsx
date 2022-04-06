import "./Footer.css"
import { News } from "./News";

export const Footer = () =>
{
let array = [{"image":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVUnFM.img?h=623&w=1119&m=6&q=60&o=f&l=f&x=534&y=198",
"details" : "BJP Foundation Day: JP Nadda says BJP emerged as party of poor"},
{"image":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVUS1a.img?h=745&w=1119&m=6&q=60&o=f&l=f",
"details" : "Delhi High Court quashes Centres order requiring political clearance "},
{"image":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVUN7C.img?h=213&w=378&m=6&q=60&o=f&l=f&x=174&y=49",
"details" : "MNS claims nephew Raj Thackeray is true heir of Balasaheb in poster  "},
{"image":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVU533.img?h=630&w=1119&m=6&q=60&o=f&l=f",
"details" : "US says investing in Russian equipment not in Indias best interest   "},
{"image":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVUK7V.img?h=630&w=1119&m=6&q=60&o=f&l=f",
"details" : "Terror incidents declining in Jammu and Kashmir, around 50% drop in 2021: MHA data   "}
]
    return(        
        <div className="mainfooter">
            <div className="news">
                < News name={array[0]} />
            </div>
            <div className="news">
                < News name={array[1]} />
            </div>
            <div className="news">
                < News name={array[2]} />
            </div>
            <div className="news">
                < News name={array[3]} />
            </div>
            <div className="news">
                < News name={array[4]} />
            </div>    
        </div>
    );
}