import github from '../images/github.png';
import mail from '../images/mail.png';
import linkedin from '../images/linkedin.png';

function Contact () {
    return(
        <section className="contact" id='Contact'>
            <div className='contact_line1'></div>
            <div className='contact_line2'></div>
            <h3 className="contact_title">Contact</h3>
            <div className="contact_container">
                <div className="contact_container_git">
                    <a href="https://github.com/Cristina-F-R" className='contact_container_git_link' target="_blank" rel="noreferrer"> 
                     <img src={github} alt="icono github" className='contact_container_git_link_icon'/>
                     Visit my GitHub!</a>
                </div>
                <div className="contact_container_linkedin">
                    <a href="https://github.com/Cristina-F-R" className='contact_container_linkedin_link' target="_blank" rel="noreferrer"> 
                     <img src={linkedin} alt="icono github" className='contact_container_linkedin_link_icon'/>
                     Visit my Linkedin!</a>
                </div>
                <div className="contact_container_mail">
                    <a href="https://www.linkedin.com/in/cristina-faixedas-roca" className="contact_container_mail_link">
                        <img src={mail} alt="icono mail" className='contact_container_mail_link_icon'/>
                        Send me an email: cristina.faixedas@gmail.com
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Contact;