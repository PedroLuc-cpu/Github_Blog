import { ArrowLeft, ArrowUpRight, Buildings, CalendarBlank, ChatCircle, GithubLogo, Users } from "@phosphor-icons/react"
import { CardConteiner, ListIcons } from "./styled"



export const CardUser = () => {
 return(
  <CardConteiner>
   <img src="" alt="user-github" />
   <div>
    <h3>Nome do usuário</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda natus, vero quasi nam, sit numquam magnam dignissimos, recusandae quo cupiditate quod delectus nostrum cum dolore eligendi ut voluptatem? Dolorem, voluptatem.</p>
    <ListIcons>
     <span>
      <GithubLogo size={24} color="#ffff" weight="bold" />
     </span>
     <span>
      <Buildings size={24} color="#ffff" weight="bold" />
     </span>
     <span>
      <Users size={24} color="#ffff" weight="bold" />
     </span>

     <span>
      <CalendarBlank size={24} color="#ffff" weight="bold" />
     </span>

     <span>
      <ArrowLeft size={24} color="#ffff" weight="bold" />
     </span>

     <span>
      <ChatCircle size={24} color="#ffff" weight="bold" />
     </span>

     <span>
      <ArrowUpRight size={24} color="#ffff" weight="bold" />
     </span>
    </ListIcons>
   </div>
  </CardConteiner>
 )
}