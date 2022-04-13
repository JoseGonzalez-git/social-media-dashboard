import "../styles/followersCard.sass";
import IconUp from "../assets/icon-up.svg";
import IconDown from "../assets/icon-down.svg";

interface PropFollowersCard {
  user: string;
  icon: string | undefined;
  totalFollowers: number;
  typeFollow: string;
  calculatedFollowersByDays: number;
  styleSocialNetwork: string | undefined;
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
  icon,
  styleSocialNetwork
}: PropFollowersCard) => {
  let Icon: string[] = isUpOrDown(calculatedFollowersByDays);
  return (
    <>
      <div className={styleSocialNetwork +" container-card"}>
        <div className="card-header">
          <img src={icon || ''} alt={""} />
          <p> {user}</p>
        </div>
        <div className="card-body">
          <h1>{totalFollowers}</h1>
          <p>{typeFollow}</p>
        </div>
        <div className="card-footer">
          <img src={Icon[0]} alt={Icon[1]} />
          <p className={calculatedFollowersByDays < 0 ? "down" : "up" }>
            {calculatedFollowersByDays < 0
              ? calculatedFollowersByDays * -1  
              : calculatedFollowersByDays}{' '}
            Today
          </p>
        </div>
      </div>
    </>
  );
};

export default FollowersCard;
