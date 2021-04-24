import {HeaderSite, Nav, Ul, Li} from './style';
import logo from '../../assets/logo.svg'
import { NavLink } from "react-router-dom";

export default function Header(){
  

  
  

 
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

          <Li> <NavLink activeClassName="active" to="/projeto"> 
          Projeto Pedagógico
          </NavLink>
          </Li>

          <Li> <NavLink activeClassName="active" to="/noticias"> 
            Notícias
          </NavLink>
          </Li>

          <Li> <NavLink activeClassName="active" to="/resolucao"> 
           Resoluções
          </NavLink>
          </Li>
          <Li> <NavLink activeClassName="active" to="/contato"> 
           Contato
          </NavLink>
          </Li>
          
          
          
        </Ul>

      </Nav>

    </HeaderSite>
    
    </>
  );

}