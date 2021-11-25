import '../Shahzod/Shahzod.css'
import shahzod from '../Shahzod/shahzod.jpg'

function Shahzod(){
    return(
        <div className="shahzod-card">
            <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img className="img" src={shahzod}  />
                </div>
                <div class="flip-card-back">
                    <h1>Shahzodbek yuldashev</h1> 
                    <p>Web developer</p> 
                    <p>Technobeck Team member</p>
                    <p>tel:911175580</p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Shahzod;