import { useEffect, useState } from "react";
import { GithubBlogContainer,GithubBlogContent } from "./styled";
import { Header } from "../../shared/components/Header";
import { CardUser, SearchPublication } from "../../shared/components";
import { API } from "../../shared/services/axios-config";
import { IUser } from "../../@types/user";



export const GithubBlog = () => {
  
const [Users, setUsers] = useState<IUser | null>(null);
const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    API.get("/users/pedroluc-cpu")
    .then(response => {
      setIsLoading(false)
      setUsers(response.data)
      
    })
    .catch(error => {
      alert(error)
    })
  },[] );

  console.log(Users)

  const hadleSearch = () => {
    

  }

  return (
    <GithubBlogContainer>
      <Header/>
      <GithubBlogContent>
        <CardUser
        login={Users?.login || ""}
        name={Users?.name || ""}
        bio={Users?.bio || ""}
        blog={Users?.blog || ""}
        company={Users?.company || ""}
        html_url={Users?.html_url || ""}
        followers={Users?.followers || "Não tem nenhum seguidor"}
        avatar_url={Users?.avatar_url || "Sem foto"}
        key={Users?.id}        
        />
        
      <SearchPublication
      isLoading={isLoading}
      publication="Publicações"
      publicationCount={Users?.public_repos || "Não tem nenhum repositório"}
      handleChangeSearch={hadleSearch}
      />
      </GithubBlogContent>
    </GithubBlogContainer>
  );
};
