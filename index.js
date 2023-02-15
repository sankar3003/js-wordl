// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


var pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function(c,c1) {
      var fullname = c + ' ' + c1;
      return fullname;
  }
};

var pokemonName = function() {
var lastName="rahu"
  console.log("vfg" + 'I choose you!');
};

var logPokemon = pokemon.getPokeName.bind({
  lastName:"SDFfd"
}); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
// console.log(pokemon)
console.log(logPokemon('fsa','dsfa')); // 'Pika Chu I choose you!'


//  var person ={
//     myname :"Goru ",
//     age :25,
//     city:"chennai",
//     getName(name,s1,s2){
//     console.log(this.myname ,name,s1,s2)
//     }
//  }
// document.getElementById('app').innerHTML="hello sankar"
//  console.log(document)
// var user2={
//   myname:"Raji"
// }

// var x= person.getName.bind({
//   myname:"SDF"
// })
// x("Aravinfh" , "kumar" , "ajeesh" , "Ragavendra")
//  person.getName.apply({  myname:"kumar kanna"},["Kuram",'sdf' , 'sdfsd']);



 