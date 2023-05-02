// import { Routes, Route } from 'react';
import '../styles/main.scss';
import portfolio from '../images/portfolio1.png';
import cocktail from '../images/cocktail.png';
import team from '../images/team.png';
import cards from '../images/card.png';
import harry from '../images/harry.png';
import sport from '../images/sport.png';
import station from '../images/projectsStation.png';
import friends from '../images/friends.png'

import Header from './Header';
import Menu from './Menu';
import AboutMe from './AboutMe';
import Footer from './Footer';
import ProjectsList from './ProjectsList';
import Contact from './Contact';


function App() {
const projectsArray = [{
  title: 'personal portfolio',
  status: '- in-progress',
  image: portfolio,
  summary:'Personal portfolio to show my front-end projects and to present myself to anyone who sould liek to know more aboute me and my profesional career.',
  desc: 'Personal portfolio to show my front-end projects and to present myself to anyone who sould liek to know more aboute me and my profesional career.Personal portfolio to show my front-end projects and to present myself to anyone who sould liek to know more aboute me and my profesional career.Personal portfolio to show my front-end projects and to present myself to anyone who sould liek to know more aboute me and my profesional career.',
  technologies: 'HTML, SASS,REACT',
  github: 'https://github.com/Cristina-F-R/Personal-pertfolio',
  demo: '',
  },{
  title: 'Harry Potter Characters',
  status: '',
  image: harry,
  summary:'The objective was to create a search engine connected to an external API to find informtion about Harry Potter`s characters.',
  desc: 'The web connects to an Api ( https://hp-api.onrender.com/ ) to get the information about Harry Potter`s characters. Firt of all, it uploads the Character list from Gryffindor House and the user can filter them by writting on the form and/or selecting a different House. If the user searches for a name that is not matching with any character the web will show a message to inform the user of it. The search engine works as well when the user writtes in uppercase. If the user does a search and wants to expand the information proportiones by the list he can click to a card and it will show further information on a different URL (a dinamic one for each character). When the user is on that detailed card he can go back to the landing page by clickin on a button and the landing page will keep the previous searched elements. The form aslo have a reset button that returns the default card list and cleans the form.',
  technologies: 'HTML, SASS, REACT, API',
  github: 'https://github.com/Cristina-F-R/Harry-Potter-Characters',
  demo: 'https://cristina-f-r.github.io/Harry-Potter-Characters/',
  },{
  title: 'Sport products (layout)',
  status: '',
  image: sport,
  summary:'Simple layout of a shop that sells sport clothes, the techonolgies used are HTML and CSS.',
  desc: 'This project was to practice some styles with CSS. It`s a simple layout abuot a shop of sports clothing. It has some animations on the buttons, try it!',
  technologies: 'HTML, CSS',
  github: 'https://github.com/Cristina-F-R/Maquetaci-n-de-Productos-deportivos',
  demo: 'https://cristina-f-r.github.io/Maquetaci-n-de-Productos-deportivos/',
  },{
  title: 'Create your presentation card',
  status: '',
  image: cards,
  summary:'Web application to create a personalized business card. The user can enter his/her professional data into a form and obtain a layout view of a card with this information.',
  desc: 'The project consists on a web application that allows to create a personalized business card. The user can enter his/her professional data into a form and obtain a layout view of a card with this information.The project is useful to people working ina  new job field, they can makea card with their contact information distribute it to whom they consider of interest without having to print the classic business cards.',
  technologies: 'HTML, SASS, Javascript',
  github: 'https://github.com/Cristina-F-R/Create-your-presentation-card',
  demo: 'https://cristina-f-r.github.io/Create-your-presentation-card/',
  },{
  title: 'Cocktails: search and fav',
  status: '',
  image: cocktail,
  summary:'Web application that, that connected to an external API, allows to search and add to a favorite list cocktails from around the globe.',
  desc: 'Web application that contains a cocktail search engine connected to an API with a list of drinks and cocktails from around the world. The web allows us to search for the cocktails we are interested in, render the result on the screen and save, with a click, the cocktails we want into a list of favorites. The search engine gives the list of Margaritas by default when the page is loaded. It also allows to reset the search with a button, deleting the input field and returning to the default Margarita list. The list of favorite cocktails is saved in LocalStorage so that when reloading the page the information will not be lost, this list can be deleted by deleting cocktail by cocktail with the X button or using the Reset all favorites button found under the favorites list.',
  technologies: 'HTML, SASS, Javascript',
  github: 'https://github.com/Cristina-F-R/Search-and-Fav-your-cocktails',
  demo: 'https://cristina-f-r.github.io/Search-and-Fav-your-cocktails/',
  },{
  title: 'Friend`s quotes',
  status: '',
  image: friends,
  summary:'Search into a json quotes from Friend`s show and add your own quotes.',
  desc: 'The website allows to search in a json file for the best-known quotes from the famous Friends show and allows the user to add their own contributions. It has a filter to search by word and by character.',
  technologies: 'HTML, SASS, Javascript',
  github: 'https://github.com/Cristina-F-R/Friends-quotes',
  demo: 'https://cristina-f-r.github.io/Friends-quotes/',
  },{
  title: 'Team presentation',
  status: '',
  image: team,
  summary:'A website that serves to introduce the work team with which I debuted in the bootCamp.',
  desc: 'It is a simple layout project to present to the work team. It is a simple page, without additional functionalities, made with CSS and HTML.',
  technologies: 'HTML, CSS',
  github: 'https://github.com/Cristina-F-R/Presentacion-equipo',
  demo: 'https://cristina-f-r.github.io/Presentacion-equipo/',
  },{
  title: 'Cool Project Station',
  status: '',
  image: station,
  summary:'This is a library to save a descripction and some image to presentate your programming projects.',
  desc: 'This is a library to save a descripction and some image to presentate your programming projects. It was designed as a two part web: a main part constituted by the landing with a view of all the projects listed and a secondary one with the form to add a new project. The main objective is the creation of a virtual card through a formulary, with information about projects introduced by the user such as the repository, the web or the technologies used.The projects created will be stored at the Local Storage of the navegator.',
  technologies: 'HTML, SASS, React',
  github: 'https://github.com/Cristina-F-R/Cool-Project-ladies-v1',
  demo: 'https://cristina-f-r.github.io/Cool-Project-ladies-v1/',
  },
  ]

  return (
    <>
      <Header/>
      <main>
        <Menu/>
        <AboutMe/>
        {/* <ProjectsList projectsArray={projectsArray} />
        <Contact/> */}
      </main>
      <Footer/>
    </>
  )
}

export default App
