import React from  "react"
import "./abdurashid.css"
import Img from './abdurashid.jpg'


const Abdurashid = () =>{
    return(
        <div className="container">
            <div className="wrapper">
                <div className="abdurashidImg1">
                <img className="abdurashidImg" src={Img} alt="Bu yerada rasm bor" />
                <div className="abdurashidInformation">
                    <h1>Assalomualaykum</h1>
                    <h3>Men Abdurashid Nabijonov</h3>
                    <p>Men 2002-yil 14-noyarda Farg'ona viloyati Bag'dod tumani Bordon qishlog'ida tug'ilganman. 
                    Dastlab 14 - umumiy o'rta ta'lim maktabi va so'ngra esa 3 - IDUMI da o'qidm. Hozirda esa 
                    dasturtlashning web Developer yani Frontend yo'nalishi bo'yicha bir qancha tadqiqotlar olib 
                    borayapman?</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Abdurashid