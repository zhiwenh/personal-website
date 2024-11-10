import './../App.css';

export default function Project(
  {projectName, projectDate, projectDescription, projectLink, projectImages, customizedClassName}
) {

  projectImages = projectImages.map((image, index) => {
    return (
      <div key={index}>
        <a href={projectLink} target="_blank">
          <img src={image} className={customizedClassName} alt="Image" className="project-image"  />
        </a>
      </div>
    )
  });

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
          {projectImages}
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
          {projectImages}
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
