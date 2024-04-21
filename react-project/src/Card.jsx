import profilepic from './assets/Kouman.jpg'
function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilepic} alt="profile picture"></img>
            <h2 className='card-title'>Koumn</h2>
            <p className='card-text'>They make funny  & interesting videos</p>

        </div>
    );
}

export default Card;