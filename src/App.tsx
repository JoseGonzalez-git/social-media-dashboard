import React from 'react';
import FollowersCard from './components/followersCard';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <div className="Head">
        <Header />
      </div>
      <div className="Body container">
        <FollowersCard/>
        <FollowersCard/>
        <FollowersCard/>
        <FollowersCard/>
      </div>
    </div>
  );
}

export default App;
