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


/**
 * Declare Variables
 */
const g  = new modelHTML('Gravity constant'            , 'g' , 9.8 , '(m/s^2)' );
const n  = new modelHTML('Viscosity constant'          , 'n' , 8E-2, '(kg/m s)');
const d  = new modelHTML('Density'                     , 'd' , 1E3 , '(kg/m^3)');
const x  = new modelHTML('Width of sink'               , 'x' , 0.3 , '(m)'     );
const z  = new modelHTML('Length of sink'              , 'z' , 0.1 , '(m)'     );
const y  = new modelHTML('Height of sink'              , 'y' , 0.1 , '(m)'     );
const Nx = new modelHTML('Number of divisions (x axis)', 'Nx', 100 , ''        );
const Nz = new modelHTML('Number of divisions (z axis)', 'Nz', 25  , ''        );
const Ny = new modelHTML('Number of divisions (y axis)', 'Ny', 25  , ''        );

const data = [g, n, d, x, z, y, Nx, Nz, Ny];


/**
 * Render HTML and fetchModel at window load
 */
window.onload = function() {

const myInput = document.getElementById('myInput');
myInput.innerHTML = '';

data.forEach((item) => {
    myInput.innerHTML += `
        <div class="input-group">
        <span class="input-group-addon" style="min-width: 150px;">${item.label}</span>
        <input type="text" class="form-control" id="${item.name}" placeholder="${item.plc}">
        </div>`;
});

fetchModels();
}


/**
 * Add model data to local storage
 */
function saveModel() {

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

fetchModels();
}


/**
 * Delete model with id of id
 * @param {number} id - id of model to delete
 */
function deleteModel(id) {
let models = JSON.parse(localStorage.getItem('models2D'));

for (let i = 0; i < models.length; i++) {
    if (models[i].id == id) {
    models.splice(i, 1);
    break;
    }
}
localStorage.setItem('models2D', JSON.stringify(models));

fetchModels();
}


/**
 * Delete all models
 */
function deleteAll() {
let models = [];
localStorage.setItem('models2D', JSON.stringify(models));

fetchModels();
}


/**
 * Fetch all models in local storage
 */
function fetchModels() {
let models = JSON.parse(localStorage.getItem('models2D'));
const myModels = document.getElementById('myModels');
myModels.innerHTML = '';

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

    myModels.innerHTML += `
    <div class="well">
        <h1>Model ${model.id}</h1>
        <p>
        ${info}
        </p>
        <a class="btn btn-info" style="min-width: 100px;" target="_blank" href="demo.html?id=${model.id}">Start</a>
        <a class="btn btn-danger" style="min-width: 100px; float: right;" onclick="deleteModel('${model.id}')">Delete</a>
    </div>`;
    });
}
}
