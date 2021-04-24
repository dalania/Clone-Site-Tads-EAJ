import {HeaderSite, Nav, Ul, Li} from './style';
import logo from '../../assets/logo.svg'
import { NavLink } from "react-router-dom";
import { useState } from 'react';
export default function Header(){
  const [teste, setTeste] = useState(false);

  function active(){

    setTeste(!teste);
    
    
  }
  

 
  return (
    <>

    <HeaderSite>
    <img src={logo} alt="Logo Tads"/>
      <Nav>
       
        <Ul>
          
          <Li > <NavLink activeClassName="active" to="/home" > 
          Home
          </NavLink>
          </Li>
          <Li > <NavLink activeClassName="active" to="/calendario"> 
          Calendário
          </NavLink>
          </Li>

          <Li> <NavLink to="/projeto"> 
          Projeto Pedagógico
          </NavLink>
          </Li>

          <Li> <NavLink to="/noticias"> 
            Notícias
          </NavLink>
          </Li>

          <Li> <NavLink to="/resolucao"> 
           Resoluções
          </NavLink>
          </Li>
          <Li> <NavLink to="/contato"> 
           Contato
          </NavLink>
          </Li>
          
          
          
        </Ul>

      </Nav>

    </HeaderSite>
    
    </>
  );

}