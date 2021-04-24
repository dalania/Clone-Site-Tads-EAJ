import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`

*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
:root{
  --white: #FFFFFF;
  --text: #1E3779;
  --page: #2F3A60;
  
}
button{
  cursor:pointer;
  background: none;
}

html{
  @media (max-width:1080px){
    font-size: 93.75%;
  }
  @media (max-width:720px){
    font-size:87.5%;
  }
}

body{
  font-family: 'Poppins', sans-serif;
  background: var(--white);
}

h2{
  font-size: 1.2rem;
}
`;