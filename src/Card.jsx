import Profilepic from './assets/Profpic.png'

function Card(props){


    return(
        <div className="card">
            <img className='card-image' src={Profilepic} alt="profile picture"></img>
            <h2 className='card-title'>{props.name}</h2>
            <p className='card-text'>{props.email}</p>
        </div>
    );

}


export default Card