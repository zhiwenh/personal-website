import './../App.css';

export default function ProjectList(
  {projectName, projectDescription, projectLink, projectImage}
) {
  return (
    <div className="project">
      <div className="project-header">
        {projectName}
      </div>
      <div>
        <img src={projectImage} className="project-image" />
      </div>
      <div>
        {projectDescription}
      </div>
      <a href={projectLink}> 
        {projectLink}
      </a>
    </div>
  )
}
