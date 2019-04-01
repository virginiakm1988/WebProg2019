import React, { Component } from 'react';
import './TodoList.css';
import x from './img/x.png';

var show_status = {
  ALL: 0,
  ACTIVE: 1,
  COMPLETED: 2,
  REMOVED:3
}

var item_status = {
  TODO: 0,
  COMPLETED: 1,
  REMOVED: 2,
};

  // <li className = "todo-app__item">
  //       <div className =  "todo-app__checkbox">
  //           <input type='checkbox' id={_id}></input>
  //           <label htmlFor={_id}></label>
  //       </div>
  //   <h1 className="todo-app__item-detail">{value}</h1>
  //   <img className="todo-app__item-x" src={x}/>    
  // </li>  



class Header extends Component { 
  render() {
    return (
      <header className =  "todo-app__header"><h1 className = "todo-app__title">todos</h1></header>
    
    );
  }
}
class Input extends Component { 
  render() {
    return (
      <input className="todo-app__input"
        placeholder="Write Down Something Todo"
        onKeyPress={e => this.props.onKeyPress(e)}
        />
    );
  }
}
class List extends Component {
  
  render() { 
    return (
      <ul className="todo-app__list" id="todo_list">
        {this.props.items}
      </ul>
    );
  }
}
class Item extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      detail: this.props.detail
    }
  }
  render() { 
    return (
      <li className="todo-app__item">
        <div className="todo-app__checkbox">
          <input type='checkbox'
            id={this.state.id}
            onClick={e => { this.props.changeItemStatus(this.state.id, this.state.detail) }}>  
          </input>
          <label htmlFor={this.state.id} style={this.props.labelStyle}></label>
        </div>
        <h1 className="todo-app__item-detail" style={this.props.detailStyle}>{this.state.detail}</h1>
        <img className="todo-app__item-x" src={x}
            alt = "x"
            onClick={e => { this.props.clearItem(this.state.id, this.state.detail) }} />
      </li>
    );
  }
}
class Main extends Component { 
  render() {
    // this.update(this.state.showStatus);
    return (
      <div className = "todo-app__main">
        <Input onKeyPress = { e=>this.props.onKeyPress(e) }/>
        <List items={this.props.show_list}/>
      </div>
    );
  }
}

class Footer extends Component {
  render() { 
    return (
      <footer className="todo-app__footer">
        <div className="todo-app__total">{this.props.left} left</div>
        <div className = "todo-app__view-buttons">
          <button type="button" onClick={this.props.show_All}>All</button>
          <button type="button" onClick={this.props.show_Active}>Active</button>
          <button type="button" onClick={this.props.show_Completed}>Completed</button>
          <button type="button" onClick={this.props.show_Removed}>Removed</button>
        </div>
        <div className = "todo-app__clean">
          <button type="button" onClick={this.props.clearComplete}>Clear Complete</button>
        </div>
      </footer>
    );
  }
}
export default class TodoList extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      left: 0,
      showStatus: show_status.ALL,
      show_list: [], // initialize
      all_list: []
    }
  }
  setLeft = l =>  this.setState( { left: l } )
  // setState = s =>  this.setState( { showState: s } )
  show_All = () => {
    this.setState({ showStatus: show_status.ALL });
    this.update(show_status.ALL);
  }
  show_Active = () => {
    this.setState({ showStatus: show_status.ACTIVE });
    this.update(show_status.ACTIVE);
  }
  show_Completed = () => {
    this.setState({ showStatus: show_status.COMPLETED });
    this.update(show_status.COMPLETED);
  }
  show_Removed = () => {
    this.setState({ showStatus: show_status.REMOVED });
    this.update(show_status.REMOVED);
  }
  clearComplete = () => {
    var new_l;
    new_l = this.state.all_list;
    for (var i = 0; i < new_l.length; ++i) {
      if (new_l[i].status === item_status.COMPLETED) { 
        new_l[i].status = item_status.REMOVED;
        new_l[i].node =
          <Item id={new_l[i].id}
            labelStyle={
              {
                background: "rgba(99, 50, 50, 0.698)"
              }
            }
            detailStyle={
              {
                textDecoration: 'none',
                opacity: 0.5
              }
            }
            detail={new_l[i].detail}
            clearItem={this.clearItem}
            key={new_l[i].id}
            changeItemStatus={this.changeItemStatus}
              />;
      }
    }
    // this.setState({ all_list: new_l });
    // this.update(this.state.showStatus);
    this.setState({ all_list: new_l });
    this.update(this.state.showStatus);
    // this.setState({ showStatus: show_status.REMOVED });
    // this.update(show_status.REMOVED);
  }
  
  changeItemStatus = (id, d) => { 
    // console.log("changeState");
    var new_l;
    new_l = this.state.all_list;
    if (new_l[id].status === item_status.TODO) {
      new_l[id].status = item_status.COMPLETED;
      
      new_l[id].node = 
        <Item id={id}
          labelStyle={
            {
              background: "#26ca299b"
            }
          }
          detailStyle={
            {
              textDecoration: 'line-through',
              opacity: 0.5
            }
          }
          detail={d}
          clearItem={this.clearItem}
          key={id}
          changeItemStatus={this.changeItemStatus}
        />
      new_l[id].detail = d;

    } else if (new_l[id].status === item_status.COMPLETED) { 
      new_l[id].status = item_status.TODO;
      
      new_l[id].node = 
        <Item id={id}
          labelStyle={
            {
              background: "rgba(99, 99, 99, 0.698)"
            }
          }
          detailStyle={
            {
              textDecoration: 'none',
              opacity: 1
            }
          }
          detail={d}
          clearItem={this.clearItem}
          key={id}
          changeItemStatus={this.changeItemStatus}
      />
      new_l[id].detail = d;
      new_l[id].id = id;
    }
    this.setState({ all_list: new_l });
    this.update(this.state.showStatus);
  }
  clearItem =(id, d) => { 
    // console.log("delete");
    var new_l;
    new_l = this.state.all_list;
    new_l[id].status = item_status.REMOVED;
    
    new_l[id].node = 
      <Item id={id}
        labelStyle={
          {
            background: "rgba(99, 50, 50, 0.698)"
          }
        }
        detailStyle={
          {
            textDecoration: 'none',
            opacity: 0.5
          }
        }
        detail={d}
        clearItem={this.clearItem}
        key={id}
        changeItemStatus={this.changeItemStatus}
    />
    new_l[id].detail = d;
    new_l[id].id = id;
    
    this.setState({ all_list: new_l });
    this.update(this.state.showStatus);
  }
  update = (showStatus) => {
    // switch (status) {
    //   show_status = 
    // }
    var new_l = [];
    switch (showStatus) { 
      case show_status.ALL:
        new_l = this.state.all_list.filter(item => item.status !== item_status.REMOVED);
        break;
      case show_status.ACTIVE:
        new_l = this.state.all_list.filter(item => item.status === item_status.TODO);
        break;
      case show_status.COMPLETED:
        new_l = this.state.all_list.filter(item => item.status === item_status.COMPLETED);
        break;
      case show_status.REMOVED:
        new_l = this.state.all_list.filter(item => item.status === item_status.REMOVED);
        break;
      default:
        new_l = this.state.all_list.filter(item => item.status !== item_status.REMOVED);
        break;
    }
    // var new_l = this.state.all_list.filter(item => item.status == item_status.TODO );
    // var new_l = this.state.all_list;
    var e_l = [];
    for (var i = 0; i < new_l.length; ++i) { 
      e_l.push(new_l[i].node);
    }
    this.setState({show_list: e_l})
    this.setLeft(this.state.all_list.filter(item => item.status === item_status.TODO).length);
  }
  onKeyPress = e => { 
    if (e.key === "Enter") {
      var value = e.target.value
      
      var a_l = this.state.all_list

      var new_item = {
        status: item_status.TODO,
        node: <Item id={this.state.all_list.length}
          labelStyle={
            {
              background: 'rgba(99, 99, 99, 0.698)'
            }
          }
          detailStyle={
            {
              textDecoration: 'none',
              opacity: 1
            }
          }
          detail={value}
          clearItem={this.clearItem}
          key={this.state.all_list.length}
          changeItemStatus={this.changeItemStatus}
        />,
        detail: value,
        id: this.state.all_list.length
      }
      a_l.push(
        new_item
      );
      
      this.update(this.state.showStatus);
      this.setState((s) => ({
        all_list: a_l
      }))
      // this.props.setLeft(this.state.all_list.length + 1);
      
      e.target.value = "";
      // e.target.blur();
    }
  }

  render() {
    // console.log(this.state.showStatus);
    console.log(this.state.show_list);

    return (
      <div className="TodoList">
        <Header />
        <Main
          onKeyPress={e => this.onKeyPress(e)}
          show_list={this.state.show_list}
          />
        <Footer
          left={this.state.left}
          show_All={this.show_All}
          show_Active={this.show_Active}
          show_Completed={this.show_Completed}
          show_Removed={this.show_Removed}
          clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

