import React from "react";
import User from "./utils/user.json";
import FollowersCard from "./components/followersCard";
import Header from "./components/header";
import IconFacebook from "./assets/icon-facebook.svg";
import IconTwitter from "./assets/icon-twitter.svg";
import IconInstagram from "./assets/icon-instagram.svg";
import IconYoutube from "./assets/icon-youtube.svg";

let FollowersToDay = (value: number[]) => {
  let a = value[0];
  let b = value[1];
  let subtraction = a - b;
  return subtraction;
};

let Icons: { [key: string]: string}= {
  "Facebook": IconFacebook,
  "Twitter": IconTwitter,
  "Instagram": IconInstagram,
  "Youtube": IconYoutube,
};

let selectedIcon = (Icon: { [key: string]: string}, socialNetwork:string[],i: number) => {
  let item = Object.keys(Icon).map((key:string) => {
    if (socialNetwork[i] === key) {
      return Icon[key];
    }else return '';
  })
  return item.find((item: string) => item !== '');
};

function App() {
  return (
    <div className="App">
      <div className="Head">
        <Header />
      </div>
      <div className="Body container">
        {Object.values(User).map((socialNetwork, i) => {
          let followersDay: number[] = Object.values(
            socialNetwork.TotalFollowers
          );
          let NameSocialNetwork= Object.keys(User)
          return (
            <FollowersCard
              key={i}
              user={socialNetwork.user}
              icon={selectedIcon(Icons,NameSocialNetwork,i)}
              totalFollowers={Object.values(socialNetwork.TotalFollowers)
                .map(Number)
                .reduce((a, b) => a + b, 0)}
              typeFollow={socialNetwork.typeFollow}
              calculatedFollowersByDays={FollowersToDay(followersDay)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
