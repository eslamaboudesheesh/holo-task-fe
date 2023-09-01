import React from "react";
import "./index.scss";

type RepoCardProps = {
  fullName: string;
  name: string;
  ownerName: string;
  url: string;
  language: string;
  description: string;
  stars: number;
  forks: number;
};
const RepoCard: React.FC<RepoCardProps> = ({
  fullName,
  name,
  ownerName,
  url,
  language,
  description,
  stars,
  forks,
}) => (
  <a
    className="repo-card-wrapper"
    href={url}
    aria-label={fullName}
    target="_blank"
    rel="noreferrer"
  >
    <h3>
      {ownerName} / {name}
    </h3>
    <p>{description}</p>
    <span>
      <i className="las la-code"></i>
      {language}
    </span>

    <span>
      <i className="las la-star"></i>
      {stars}
    </span>
    <span>
      <i className="las la-code-branch"></i>
      {forks}
    </span>
  </a>
);

export default RepoCard;
