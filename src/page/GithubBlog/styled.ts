import styled from "styled-components";


export const GithubBlogMain = styled.main`
background: ${props => props.theme['base-background']};
height: 100vh;
`

export const CardConteiner = styled.main`
border-radius: 1rem;
margin: 0 auto;
max-width:  54rem;
background: ${props => props.theme["base-profile"]};
display: flex;
align-items: center ;
column-gap: 1rem;
padding: 2rem;
h3{
  padding-bottom: 1rem;
  font-size: 1.5rem;
  color: ${props => props.theme['base-title']};
}

p{
 color: ${props => props.theme['base-text']};
}

`


export const ListIcons = styled.div`
display: flex;
column-gap: 1rem;
padding-top: 1rem;

span{
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

a{
  color: ${props => props.theme['base-text']};
}

`