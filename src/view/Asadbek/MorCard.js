import React from 'react'
import './MorCard.css'
import Asa from './Asa.jpg'



const MorCard = ()=>{
    return(
        <div className="morcard">
            <div className='morcardbody'>
                <div className="morimg">
                    <img width="100%" src={Asa} alt="Asa" />
                </div>
                <div className="morinfo">
                    <h3>Ism: Asadbek Muydinov</h3>
                    <h4>Birth: 09.09.1998</h4>
                    <h4>Email: asasedmor@gmail.com</h4>
                    <h4>Phone: +998 33 922 09 98</h4>
                </div>
            </div>
        </div>
    )
}

export default MorCard