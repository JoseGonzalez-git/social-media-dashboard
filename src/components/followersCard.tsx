import "../styles/followersCard.sass";
import IconFacebook from "../assets/icon-facebook.svg";
import IconUp from "../assets/icon-up.svg";
import IconDown from "../assets/icon-down.svg";

interface PropFollowersCard {
  user: string;
  totalFollowers: number;
  typeFollow: string;
  calculatedFollowersByDays: number;
}

let isUpOrDown = (value: number) => {
  if (value < 0) {
    return [IconDown, "Down"];
  } else {
    return [IconUp, "Up"];
  }
};

let FollowersCard = ({
  user,
  totalFollowers,
  typeFollow,
  calculatedFollowersByDays,
}: PropFollowersCard) => {
  let Icon: string[] = isUpOrDown(calculatedFollowersByDays);
  return (
    <>
      <div className="container-card card-border">
        <div className="card-header">
          <img src={IconFacebook} alt={"Facebook Icon"} />
          <p> {user}</p>
        </div>
        <div className="card-body">
          <h1>{totalFollowers}</h1>
          <p>{typeFollow}</p>
        </div>
        <div className="card-footer">
          <img src={Icon[0]} alt={Icon[1]} />
          <p>{calculatedFollowersByDays * -1} Today</p>
        </div>
      </div>
    </>
		);
};

export default FollowersCard;
