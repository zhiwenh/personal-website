import './../App.css';

export default function Project(
  {projectName, projectDescription, projectLink, projectImage, customizedClassName}
) {
  if (!customizedClassName) {
    return (
      <div className="project">
        <div className="project-name">
          {projectName}
        </div>
        <div className="project-description">
          {projectDescription}
        </div>
        <div className="project-image-wrap">
          <a href={projectLink}>
            <img src={projectImage} className={customizedClassName} alt="Image" className="project-image"  />
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
        <div className="project-name">
          {projectName}
        </div>
        <div className="project-description">
          {projectDescription}
        </div>
        <div className="project-image-wrap">
          <a href={projectLink}>
            <img src={projectImage}
              alt="image"
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
