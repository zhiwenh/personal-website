import './../App.css';

export default function ProjectList(
  {projectName, projectDescription, projectLink, projectImage}
) {
  return (
    <div className="project">
      <div className="project-header">
        {projectName}
      </div>
      <div className="project-description">
        {projectDescription}
      </div>
      <div>
        <a href={projectLink}>
          <img src={projectImage} className="project-image" />
        </a>
      </div>
      <a href={projectLink}>
        {projectLink}
      </a>
    </div>
  )
}
