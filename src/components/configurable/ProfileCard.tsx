import { useConfig } from "../../context/ConfigContext";

const ProfileCard = () => {
  const { userData } = useConfig();

  return (
    <section className="cfg-profile">
      <div className="cfg-profile__avatar">
        {userData.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <h2 className="cfg-profile__name">{userData.name}</h2>
      <p className="cfg-profile__email">{userData.email}</p>
      <p className="cfg-profile__bio">{userData.bio}</p>
      <span className="cfg-profile__joined">
        Member since {userData.joinDate}
      </span>
    </section>
  );
};

export default ProfileCard;
