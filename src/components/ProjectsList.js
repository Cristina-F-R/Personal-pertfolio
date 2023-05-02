import PropTypes from 'prop-types';

import '../styles/projects.scss';


function ProjectsList ({projectsArray}){
    
   const listToRender = projectsArray.map((eachproject, index) => { return(
          <li className="projects_list_item" key={index}>
            <figure className='projects_list_item_figure'>
              <img src={eachproject.image} alt="" className='projects_list_item_figure_img'/>
            </figure>
            <div className='projects_list_item_container'>
              <h4 className='projects_list_item_container_title'> {eachproject.title} <br/>{eachproject.status}</h4>
              <p className='projects_list_item_container_text'>{eachproject.summary}</p>
            </div>
          </li>

   )})

   return(
        <section className='projects' id='Projects'>
          <h3 className='projects_title'>Prjoects</h3>
          <ul className='projects_list'>
            {listToRender}
          </ul>
        </section>
   ) 
}

export default ProjectsList;


ProjectsList.propTypes = {
  projectsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};