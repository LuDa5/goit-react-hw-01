import userData from "./userData.json";
import Profile from "./components/profile.jsx";
import friends from "./friends.json";
import FriendList from "./components/FriendList";
import histori from "./histori.json";
import TransactionHistory from "./components/TransactionHistory";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
       <TransactionHistory items={histori} />
    </div>
  );
};

export default App;








