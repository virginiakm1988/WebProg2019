import React, { Component } from 'react';
// import logo from './logo.svg';
// css要記得去改
import './styles.css';

class Todolist extends Component {
         render() {

            return(
                <div id={this.props.usedid.root[0]} class={this.props.usedid.root[1]}>
                <header class={this.props.usedid.header[0]}><h1 class={this.props.usedid.header[1]}>{this.props.project.name}'s react list</h1></header>
            
                     
            <section class={this.props.usedid.section[0]}><input class={this.props.usedid.section[1]} type={this.props.usedid.section[2]} id={this.props.usedid.section[3]} placeholder={this.props.project.placeholder}  ></input>
               
               <ul class={this.props.usedid.section[4]} id={this.props.usedid.section[5]}>
               {this.props.project.todolist.map(e=><li class={this.props.usedid.list[0]}><div class={this.props.usedid.list[1]}><input type={this.props.usedid.list[2]} id={e}></input><label for={e}></label>
               </div><h1 class={this.props.usedid.list[3]}>{e}</h1><img class={this.props.usedid.list[4]} ></img></li>)}
               </ul>
            </section>
            <footer class={this.props.usedid.footer[0]} id={this.props.usedid.footer[1]}>
                <div class={this.props.usedid.footer[2]} id={this.props.usedid.footer[3]}>{this.props.project.todolist.length} left</div>
                <ul class={this.props.usedid.footer[4]}>{this.props.project.buttom.map(e=> <div class={this.props.usedid.footer[5]}><button>{e}</button></div>)}</ul>
                <div class={this.props.usedid.footer[5]}>
               <button id={this.props.usedid.footer[6]}>{this.props.project.last}</button></div>
               
          
            </footer></div>

            )
         }
        }
        
        export default Todolist;
