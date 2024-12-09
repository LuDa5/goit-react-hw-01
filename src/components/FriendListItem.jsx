import frend from "./FriendListItem.module.css"; 

const FriendListItem = ({ avatar, name, isOnline }) => {
  if (!avatar || !name || isOnline === undefined) {
    return null; 
  }

  return (
    <div className={frend.friendItem}>
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p>{name}</p>
      <p className={`status ${isOnline ? "online" : "offline"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;




