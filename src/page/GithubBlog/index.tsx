import { useEffect, useState } from "react";
import { GithubBlogMain, CardConteiner, ListIcons } from "./styled";
import {
  Buildings,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";

import axios from 'axios';

export interface IUser{
    login: string;
    id: number;
    avatar_url: string;
    name: string;
    company: string;
    blog: string;
    html_url:string
    location: string;
    bio: string;
    public_repos: string;
    following: number
    followers: number;
}


export const GithubBlog = () => {
  
const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${"Pedroluc-cpu"}`)
    .then((result) => {
      setUser(result.data);
    })
    .catch((error) => {
      console.error('Erro na consulta do GitHub:', error);
    })

  }, []);

  console.log(user)



  return (
    <GithubBlogMain>
      <CardConteiner>
        <img src={user?.avatar_url} alt="user-github"  width={120}/>
        <div>
          <h3>{user?.name}</h3>
          <p>
          {user?.bio}
          </p>
          <ListIcons>
            <span>
              <GithubLogo size={24} color="#ffff" weight="bold" />
              <a href={user?.html_url} target="_blank" rel="noreferrer">
                {user?.login}
              </a>
            </span>
            <span>
              <Buildings size={24} color="#ffff" weight="bold" />
              <p>{user?.company}</p>
            </span>
            <span>
              <Users size={24} color="#ffff" weight="bold" />
              <p>{user?.followers}</p>
            </span>
          </ListIcons>
        </div>
      </CardConteiner>
    </GithubBlogMain>
  );
};
