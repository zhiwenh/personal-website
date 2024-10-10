import './../App.css';

export default function Project(
  {projectName, projectDate, projectDescription, projectLink, projectImage, customizedClassName}
) {
  if (!customizedClassName) {
    return (
      <div className="project">
        <div className="project-name">
          {projectName}
        </div>
        <div className="project-date">
          {projectDate}
        </div>
        <div className="project-description">
          {projectDescription}
        </div>
        <div className="project-image-wrap">
          <a href={projectLink} target="_blank">
            <img src={projectImage} className={customizedClassName} alt="Image" className="project-image"  />
          </a>
        </div>
        {projectLink ? <div className="project-link-wrap">
          Project link: &nbsp;
          <a href={projectLink} className="project-link" target="_blank">
            {projectLink}
          </a>
        </div> : ''}
      </div>
    )
  } else {
    return (
      <div className="project">
        <div className="project-name">
          {projectName}
        </div>
        <div className="project-date">
          {projectDate}
        </div>
        <div className="project-description">
          {projectDescription}
        </div>
        <div className="project-image-wrap">
          <a href={projectLink} target="_blank">
            <img src={projectImage}
              alt="image"
              className="project-image"
              className={customizedClassName}
            />
          </a>
        </div>
        {projectLink ? <div className="project-link-wrap">
          Project link: &nbsp;
          <a href={projectLink} className="project-link" target="_blank">
            {projectLink}
          </a>
        </div> : ''}
      </div>
    )
  }

}
