import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria'

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={CadastroVideo} path='/cadastro/video'/>
        <Route component={CadastroCategoria} path='/cadastro/categoria'/>
        <Route component={()=>(<div>Página 404</div>)}/>
      </Switch>
    </BrowserRouter>
  )
}