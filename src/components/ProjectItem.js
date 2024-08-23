import React from "react";

function ProjectItem({ name, about, technologies }) {

  const projectList = technologies.map((props)=>{
    return <span key={props}>{props}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
       {projectList}
      </div>
    </div>
  );
}

export default ProjectItem;
