import styled from "styled-components";




export const SearchContent = styled.div`
width: 45%;
display: flex;
flex-direction: column;
margin:  0 auto;

div{
 display: flex;
 justify-content: space-between;
}

h3{
 color: ${props => props.theme["base-title"]};
}

span{
 color: ${props => props.theme["base-span"]};
}

`

export const SearchInput = styled.input`
font-size: 1rem;
padding: 0.5rem;
border: 1px solid ${props => props.theme["base-border"]};
background: ${props => props.theme["base-input"]};
color: ${props => props.theme["base-label"]};

::placeholder{
 color: ${props => props.theme["base-label"]};
}
`