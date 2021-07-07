import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';  
import Header from '../../components/Header'
import {Container} from './style';
import api from '../../services/api';
export default function Testes(){
  const [user, setUser] = useState([{}]);
  const [name, setName] = useState([{}]);

  const [textoDigitado, setTextoDigitado] = useState("");
  useEffect(()=>{
    Aos.init({ duration: 2000 });

  }, [])

  useEffect(()=>{
    try {
      api.get('users').then(response =>setUser(response.data));
      
    } catch (error) {
      console.error(error);
      
    }

   

  },[])
  

  function buscaUser(id){
   const isUser = user => user.id === id;

   const achou = user.filter(isUser);
    setName(achou);
    console.log(achou)
  }


 
function deleteUser(id){
  const isUser = user => user.id == id;

  const userDelete = user.filter(isUser);
  api.delete(`users/${id}`)
  
}

function handleSubmit(e) {

  e.preventDefault();


}
  




 
  return(
    <Container>
      <Header />

      {/*   
      <div className="grids">
        <div className="boxes">1</div>
        <div className="boxes">2</div>
        <div data-aos="fade-up" className="boxes"></div>
        <div className="boxes">3</div>
        <div className="boxes">4</div>
        <div data-aos="fade-down" className="boxes"></div>
        <div className="boxes">5</div>

      </div>
      */}

      <ul>
        {user.map(users =>(
           <li key={users.id}>{users.name}
           <button onClick={()=> buscaUser(users.id)}> Detalhes</button>
           <button onClick={()=> deleteUser(user.id)}> Excluir</button>
           
           </li>

        ))}
       
      </ul>
          {/* Mostra os dados na tela de acordo com um usuário especifico */}
      <ul>
        {name.map(names =>(
          <>
          
          <li> {names.name}</li>
          <li> {names.email}</li>
          </>
          
          
        ))}
       
      </ul>


      <form >
        <label htmlFor=""> Buscar Usuário</label>
        <input type="text"  value={textoDigitado} onChange={event => setTextoDigitado(event.target.value)} />
        <button type="submit" onClick={()=> buscaUser(textoDigitado)}> Buscar</button>
      </form>



    </Container>

  )
    
  

}