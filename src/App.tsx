import React from "react";
import User from "./utils/user.json";
import FollowersCard from "./components/followersCard";
import Header from "./components/header";

let FollowersToDay = (value: number[]) => {
  let a = value[0];
  let b = value[1];
  let subtraction = a - b;
  return subtraction;
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
          return (
            <FollowersCard
              key={i}
              user={socialNetwork.user}
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
