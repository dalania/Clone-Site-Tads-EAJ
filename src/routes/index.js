import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'
import ProjetoPedagogico from '../pages/ProjetoPedagogico';
import Noticias from '../pages/Noticias';
import Documentos from '../pages/Documentos';
import Calendario from '../pages/Calendario';
import Contato from '../pages/Contato';
import Teste from '../pages/Testes';

const Routes= () => (

<Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/projeto" exact={true} component={ProjetoPedagogico} />
    <Route path="/noticias" exact={true} component={Noticias} />
    <Route path="/resolucao" exact={true} component={Documentos} />
    <Route path="/calendario" exact={true} component={Calendario} />
    <Route path="/contato" exact={true} component={Contato} />
    <Route path="/teste" exact={true} component={Teste} />
</Switch>




)

export default Routes;