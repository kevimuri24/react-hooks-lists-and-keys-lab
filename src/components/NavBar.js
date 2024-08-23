import React from "react";

function NavBar() {
  const links = [
    {id: "#home" , name: "home"}, 
    {id: "#about" , name: "about"},
    {id: "#projects" , name: "projects"}
  ]

  const linkElement = links.map((link) => {
    return <a href={link.id} key={link.id}>{link.name}</a>
  })

  return <nav>
            {linkElement}    
          </nav>
      
}

export default NavBar;
