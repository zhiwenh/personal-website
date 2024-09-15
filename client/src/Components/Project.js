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
        <div className="project-image-wrap">
          <a href={projectLink}>
            <img src={projectImage} className={customizedClassName} className="project-image"  />
          </a>
        </div>
        <div className="project-link-wrap">
          Project link: &nbsp;
          <a href={projectLink} className="project-link">
            {projectLink}
          </a>
        </div>
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
        <div className="project-image-wrap">
          <a href={projectLink}>
            <img src={projectImage}
              className="project-image"
              className={customizedClassName}
            />
          </a>
        </div>
        <div className="project-link-wrap">
          Project link: &nbsp;
          <a href={projectLink} className="project-link">
            {projectLink}
          </a>
        </div>
      </div>
    )
  }

}
