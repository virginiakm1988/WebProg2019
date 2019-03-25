import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Construct variable class
 */
class modelHTML {
  constructor(label, name, val, unit) {
    this.label = label;
    this.name  = name;
    this.val   = val;
    this.unit  = unit;
    this.plc   = `${val} ${unit}`;
  }
}



const data = [];
class App extends Component {
  /**
 * Declare Variables
 */

/**
 * Add model data to local storage
 */
saveModel = () => {

  data.forEach((item) => {
    if (document.getElementById(item.name).value !== '') {
      item.val = parseFloat(document.getElementById(item.name).value);
    }
  });

  let models = JSON.parse(localStorage.getItem('models2D'));
  let model = {};

  if (models.length == 0) {
    model.id = 1;
  } else {
    model.id = models[models.length - 1].id + 1;
  }

  data.forEach((item) => {
    model[item.name] = item.val;
  });

  models.push(model);
  localStorage.setItem('models2D', JSON.stringify(models));

  this.fetchModels();
}


/**
 * Delete model with id of id
 * @param {number} id - id of model to delete
 */
deleteModel = (id) => {
  let models = JSON.parse(localStorage.getItem('models2D'));

  for (let i = 0; i < models.length; i++) {
    if (models[i].id == id) {
      models.splice(i, 1);
      break;
    }
  }
  localStorage.setItem('models2D', JSON.stringify(models));

}


/**
 * Delete all models
 */
deleteAll = () => {
  let models = [];
  localStorage.setItem('models2D', JSON.stringify(models));

}


/**
 * Fetch all models in local storage
 */
fetchModels = () => {
  let models = JSON.parse(localStorage.getItem('models2D'));
  const myModels = document.getElementById('myModels');

  if (models == null) {
    let models = [];
    localStorage.setItem('models2D', JSON.stringify(models));

  } else {
    models.forEach((model) => {
      // Render detail of this model
      let info = '';

      data.forEach((item) => {
        info += `
          ${item.label}: ${model[item.name]} ${item.unit}<br>`;
      });

    });
  }
}

  render() {
    return (
      <div></div>
    );
  }
}

export default App;
