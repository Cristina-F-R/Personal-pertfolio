import cristina from '../images/Cristina.jpg';

function AboutMe (){
    return (
      <section className='aboutMe' id='AboutMe'>
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
    )
}

export default AboutMe;