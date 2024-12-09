
import stails from  "./profile.module.css";

 const Profile = ({ name, tag, location, image, stats }) => {
  if (!name || !tag || !location || !image || !stats) {
    console.error("Missing required props in Profile component!");
    return null;
  }

  return (
    <div className={stails.container}>
      <div className={stails.cart}>
        <img src={image} alt={`${name}'s avatar`} width="120" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={stails.list}>
        <li>
          <span>Followers: </span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views: </span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes: </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;