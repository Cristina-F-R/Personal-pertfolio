// import { useState } from 'react';
import './styles/main.scss';
import cristina from './images/Cristina.jpg';
import portfolio from './images/portfolio1.png';
import cv from './images/cv.png';

function App() {

  return (
    <>
    <main className='main'>
      <section className='header'>
        <div className='header_line1'></div>
        <div className='header_line2'></div>
        <div className='header_container'>
          <div className='header_container_titles'>
            <h1 className='header_container_titles_title'>Cristina</h1>
            <h2 className='header_container_titles_title2'> Faixedas</h2>
          </div>
          <h3 className='header_container_subtitle'>personal portfolio</h3>
        </div>
      </section>
      <section className='menu'>
         {/* això serà menú sticky i quan el retolí passi per allà quedarà fixat a top0 */}
        <nav className='menu_nav'>
          <ul className='menu_nav_list'>
            <li className='menu_nav_list_item'>Home</li>
            <li className='menu_nav_list_item'>About Me</li>
            <li className='menu_nav_list_item'>Projects</li>
            <li className='menu_nav_list_item'>Contact</li>
            </ul>
        </nav>
      </section>

      <section className='aboutMe'>
        <h3 className="aboutMe_title">About me</h3>
        <figure className='aboutMe_figure'>
          <img src={cristina} alt="" className='aboutMe_figure_img'/>
        </figure>
        <div className='aboutMe_container'>
        <p className='aboutMe_container_text'>Hi! My name is Cristina, I`m from a small village near Girona (Spain). I recently discovered my passion for web development and I liked it so much that I decided to quit my job to study a bootCamp about web development and, this way, I can make the jump into the professional world of programming to be able to dedicate myself to something that really motivates me. Thanks to my previous work experience, I know how to handle office jobs professionally and with a good amount of experience in communication between different teams, collaborators and customers to achieve a common goal efficiently and with ease. I am very motivated with this new change in my life and I am looking to develop professionally in a field where I can continue learning and growing!</p>
        </div>
        <div className='aboutMe_skills'>
          <div className='aboutMe_skills_tech'>
            <p className='aboutMe_container_text'>Tech Skills: </p>
            <p className='aboutMe_container_text'>HTML - CSS - SASS - JS - React - ExpressJS - NodeJS - SQL - MongoDB</p>
          </div>
          <div className='aboutMe_skills_soft'>
            <p className='aboutMe_container_text'>Soft Skills: </p>
            <p className='aboutMe_container_text'> Agile - Scrum - Ccommunication between departments and with customers - Flexibility and adaptability- Hard worker - Fast learner </p>
          </div>
        </div>
      </section>

      <section className='projects'>
        <h3 className="projects_title">Prjoects</h3>
        <div className="project">
          <figure className='project_figure'>
            <img src={portfolio} alt="" className='project_figure_img'/>
          </figure>
          <div className='porject_containerr'>
            <h4 className='project_container_title'> PERSONAL PORTFOLIO - in progress</h4>
            <p className='project_container_text'>Personal portfolio to show my front-end projects and to present myself to anyone who sould liek to know more aboute me and my profesional career.</p>
           </div>
        </div>
      </section>


    </main>
      
    </>
  )
}

export default App
