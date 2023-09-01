import React from "react";
import "./index.scss";

type UserCardProp = {
  name: string;
  url: string;
  ownerAvatar: string;
  bio: string;
  location: string;
  repos: number;
  followers: number;
};

const UserCard: React.FC<UserCardProp> = ({
  name,
  url,
  ownerAvatar,
  bio,
  location,
  repos,
  followers,
}) => (
  <a
    className="user-card-wrapper"
    href={url}
    aria-label={name}
    target="_blank"
    rel="noreferrer"
  >
    <div className="user-wrapper">
      <img src={ownerAvatar} alt="user avatar" />
      <div className="user-info">
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>
    </div>
    <span>
      <i className="las la-city"></i>
      {location}
    </span>

    <span>
      <i className="las la-user-friends"></i>
      {followers}
    </span>
    <span>
      <i className="las la-code-branch"></i>
      {repos}
    </span>
  </a>
);

export default UserCard;
