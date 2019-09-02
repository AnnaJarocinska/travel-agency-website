import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Start from '../layouts/Start';
import First from '../layouts/First';
import Second from '../layouts/Second';
import Third from '../layouts/Third';
import Contact from '../layouts/Contact';
import NoRout from '../layouts/NoRout';

const Main = () => {
    return (
    
    
    <Switch>
    <Route path="/" exact component={Start}/>
    <Route path="/First" component={First}/>
    <Route path="/Second" component={Second}/>
    <Route path="/Third" component={Third}/>
    <Route path="/Contact" component={Contact}/>
    <Route component ={NoRout}/>
    </Switch>
 
      );
}
 
export default Main;