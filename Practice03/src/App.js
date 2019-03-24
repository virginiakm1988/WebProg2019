import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      
        <div>
          <h1 className = "Webpage_intro">Welcome to my Webpage</h1>
          <div className = "Articles_frame">
            <div className = "Articles">
              <h2 className="Articles_title">Article Names</h2>
              <h6 className= "Articles_date">{Date()}</h6>
              <p className = "Articles_paragraph">this is the contents of the Article, there will be more contents coming soon......</p>
            </div>
          </div>
       </div> 
    
    );
  }
}

class Article extends Component{
  constructor(){
    super();
    this.state = {
      title:"this should be the title of your article",
      txt: "this is the txt",
      Date:Date()
    }
  }
  render(){
    return(
      <div className = "Articles_frame">
          <div className = "Articles">
            <h2 className="Articles_title">{this.state.title}</h2>
            <h6 className= "Articles_date">{this.state.title}</h6>
            <p className = "Articles_paragraph">this is the contents of the Article, there will be more contents coming soon......</p>
          </div>
      </div>
    )
  }
}





export default App;
