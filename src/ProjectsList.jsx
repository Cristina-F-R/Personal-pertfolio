import PropTypes from 'prop-types';
import './styles/main.scss';
import './styles/App.scss';

import portfolio from './images/portfolio1.png';

function ProjectsList ({projectsArray}){
    
   const listToRender = projectsArray.map((eachproject, index) => { return(
         <li className="project" key={index}>
          <figure className='project_figure'>
            <img src={portfolio} alt="" className='project_figure_img'/>
          </figure>
          <div className='porject_containerr'>
            <h4 className='project_container_title'> {eachproject.title} - {eachproject.status}</h4>
            <p className='project_container_text'>{eachproject.summary}</p>
           </div>
        </li>
   )})

   return(
      <section className='projects'>
        <h3 className="projects_title">Prjoects</h3>
        <ul>
          {listToRender}
        </ul>
      </section>
   ) 
}

export default ProjectsList;


ProjectsList.propTypes = {
  projectsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};