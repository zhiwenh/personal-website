import './../App.css';

export default function ProjectList(
  {projectName, projectDescription, projectLink, projectImage}
) {
  return (
    <div>
      <div className="project-header">
        {projectName}
      </div>
      <div>
        <img src={projectImage} className="project-image" />
      </div>
      <div>
        {projectDescription}
      </div>
      <a>
        {projectLink}
      </a>
    </div>
  )
}
