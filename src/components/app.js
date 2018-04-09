import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import List from './list';
import AddForm from './add-form';
import { Route } from 'react-router-dom';
import ItemView from './item-view';

const App = () => (
    <div className="container">
        <h1 className="center">Todo List</h1>
        <Route exact path="/" component={List}/>
        <Route path="/add-item" component={AddForm}/>
        <Route path="/item/:id" component={ItemView}/>
    </div>
);

export default App;
