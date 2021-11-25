import '../Abdulboriy/Abdulboriy.css';
import image from '../Abdulboriy/img.jpg'

function Abdulboriy() {
  return (
    <>
      <h1>Salom</h1>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img className="img" src={image}  />
                </div>
                <div class="flip-card-back">
                    <h1>Abdulboriy Nabijonov</h1> 
                    <p>Web developer</p> 
                    <p>Technobeck Team member</p>
                    <p>Date of birth:04.05.2003</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default Abdulboriy;