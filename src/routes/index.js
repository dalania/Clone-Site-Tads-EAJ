import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'
import ProjetoPedagogico from '../pages/ProjetoPedagogico';
import Noticias from '../pages/Noticias';
import Documentos from '../pages/Documentos'
import Calendario from '../pages/Calendario'
import Contato from '../pages/Contato'

const Routes= () => (

<Switch>
    <Route path="/home" exact={true} component={Home} />
    <Route path="/projeto" exact={true} component={ProjetoPedagogico} />
    <Route path="/noticias" exact={true} component={Noticias} />
    <Route path="/resolucao" exact={true} component={Documentos} />
    <Route path="/calendario" exact={true} component={Calendario} />
    <Route path="/contato" exact={true} component={Contato} />
</Switch>




)

export default Routes;