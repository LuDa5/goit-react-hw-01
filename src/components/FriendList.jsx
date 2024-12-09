import FriendListItem from "./FriendListItem";
import frend from "./FriendListItem.module.css"; 

const FriendList = ({ friends }) => {
  if (!Array.isArray(friends) || friends.length === 0) {
    // console.error("FriendList отримав некоректний або порожній масив друзів");
    return null;
  }

  return (
    <ul className={frend.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

