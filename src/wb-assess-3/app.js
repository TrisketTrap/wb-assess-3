import express from 'express';
import session from 'express-session';
import lodash from 'lodash';
import morgan from 'morgan';
import nunjucks from 'nunjucks';
import ViteExpress from 'vite-express';
/*get value of top-fossils put into an array to sort them by number of likesgit 
make basic layout for fossil info. // img, name, likes(if applicable) then apply basic layout to top-fossils and display in the correct path in the correct order most likes -> least

for the random fossil button make a new array of only the names and images. again use the basic card layout to format the array information
have a random number genorator select which array possition[random number goes here] to target and display using the basic format

what's your name(    ) get info from text input and save as a session so it remembers the login info for later
retrieve name data to input at various places on the other parts of the website

*/





const app = express();
const port = '8000';

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

const MOST_LIKED_FOSSILS = {
  aust: {
    img: '/img/australopith.png',
    name: 'Australopithecus',
    num_likes: 584,
  },
  quetz: {
    img: '/img/quetzal_torso.png',
    name: 'Quetzal',
    num_likes: 587,
  },
  steg: {
    img: '/img/stego_skull.png',
    name: 'Stegosaurus',
    num_likes: 598,
  },
  trex: {
    img: '/img/trex_skull.png',
    name: 'Tyrannosaurus Rex',
    num_likes: 601,
  },
};

const OTHER_FOSSILS = [

  {
    img: '/img/ammonite.png',
    name: 'Ammonite',
  },
  {
    img: '/img/mammoth_skull.png',
    name: 'Mammoth',
  },
  {
    img: '/img/ophthalmo_skull.png',
    name: 'Opthalmosaurus',
  },
  {
    img: '/img/tricera_skull.png',
    name: 'Triceratops',
  },
];




// TODO: Replace this comment with your code
app.get(`/`, (req, res) => {
  res.render(`homepage.html.njk`);

});

app.get('/random-fossil.json', (req, res) => {
  const randomFossil = lodash.sample(OTHER_FOSSILS);
  
  res.json(randomFossil);
});

document.querySelector(`#get-random-fossil`).addEventListener(`click`, getrandom)//button #id from homepage.html "Get Random Fossil"

function getrandom (evt){
  console.log(`button click logged`);
  
}

//I am code