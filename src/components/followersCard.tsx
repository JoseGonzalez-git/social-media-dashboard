import IconFacebook from '../assets/icon-facebook.svg';
import IconUp from '../assets/icon-up.svg';
import '../styles/followersCard.sass';

let FollowersCard = ()=> {
    return (
        <>
            <div className="container-card card-border">
                <div className="card-header">
                <img src={IconFacebook} alt={'Facebook Icon'}/>
                    <p> @Josegonzalez</p>
                </div>
                <div className="card-body">
                    <h1>1999</h1>
                    <p>Followers</p>
                </div>
                <div className="card-footer">
                    <img src={IconUp} alt={'Up'}/>
                    <p>12 Today</p>
                </div>
            </div>
        </>
    )
}

export default FollowersCard;