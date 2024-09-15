import './../App.css';

export default function Project(
  {projectName, projectDescription, projectLink, projectImage, customizedClassName}
) {
  if (!customizedClassName) {
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
            <img src={projectImage} className={customizedClassName} className="project-image"  />
          </a>
        </div>
        <a href={projectLink}>
          {projectLink}
        </a>
      </div>
    )
  } else {
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
            <img src={projectImage}
              className="project-image"
              className={customizedClassName}
            />
          </a>
        </div>
        <a href={projectLink}>
          {projectLink}
        </a>
      </div>
    )
  }

}
