

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Todolist  from './App';
import * as serviceWorker from './serviceWorker';

const project={name:'Brace',
todolist:['Signal systems','ETS test','Algorithm','Web'],
buttom:['There','are','no' ,'delete' ,'buttons'],
last:'Life is but a span',placeholder:' You  have  several  tasks'};

const usedid={
root:['root','todo-app__root'],header:['todo-app__header','todo-app__title'],
section:['todo-app__main','todo-app__input','text','todo-input','todo-app__list','todo-list'],
list:['todo-app__item','todo-app__checkbox','checkbox','todo-app__item-detail','todo-app__item-x'],
footer:['todo-app__footer','todo-footer','todo-app__total','count','todo-app__view-buttons','todo-app__clean',
'clear']
}
ReactDOM.render( < 
    Todolist project={project} usedid={usedid} / >,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();