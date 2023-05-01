function Menu () {
    return (
      <section className='menu'>
        <nav className='menu_nav'>
          <ul className='menu_nav_list'>
            <a href="./" className='menu_nav_list_item'>Home</a>
            <a href="#AboutMe"className='menu_nav_list_item'>About Me</a>
            <a href="#Projects" className='menu_nav_list_item'>Projects</a>
            <a href="#Contact" className='menu_nav_list_item'>Contact</a>
            </ul>
        </nav>
      </section>
    )
}

export default Menu;