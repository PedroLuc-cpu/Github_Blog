import { Buildings, GithubLogo, Users } from "@phosphor-icons/react";
import { CardConteiner, ListIcons } from "./styled";

type IUser = {
  login: string;
  id?: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  html_url: string;
  bio: string;
  public_repos?: string;
  followers: number | string;
};

export const CardUser = ({
    login,
    id,
    avatar_url,
    company,
    html_url,
    bio,
    followers,
}: IUser) => {
    return (
    <CardConteiner key={id}>
      <img src={avatar_url} alt={avatar_url} width={125} />
      <div>
        <h3>{login}</h3>
        <p>{bio}</p>
        <ListIcons>
          <span>
            <GithubLogo size={24} color="#ffff" weight="bold" />
            <a href={html_url} target="_blank" rel="noreferrer">
              {login}
            </a>
          </span>
          <span>
            <Buildings size={24} color="#ffff" weight="bold" />
            <p>{company}</p>
          </span>
          <span>
            <Users size={24} color="#ffff" weight="bold" />
            <p>{followers}</p>
          </span>
        </ListIcons>
      </div>
    </CardConteiner>
  );
};
