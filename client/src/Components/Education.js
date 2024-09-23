import './../App.css';

export default function Education(
  {educationName, educationDate, educationDegree, educationDescription, educationLink}
) {
  if (!educationDescription) {
    return (
      <div className="education">
        <div className="education-name-and-date-wrap">
          <div className="education-name">
            {educationName}
          </div>
          <div className="education-date">
            {educationDate}
          </div>
        </div>
        <div className="education-degree">
          {educationDegree}
        </div>
        <div className="education-link">
          <a href={educationLink} target="_blank">
            {educationLink}
          </a>
        </div>
      </div>
    )
  } else {
    return (
      <div className="education">
        <div className="education-name-and-date-wrap">
          <div className="education-name">
            {educationName}
          </div>
          <div className="education-date">
            {educationDate}
          </div>
        </div>
        <div className="education-degree">
          {educationDegree}
        </div>
        <div className="education-description">
          {educationDescription}
        </div>
        <div className="education-link">
          <a href={educationLink} target="_blank">
            {educationLink}
          </a>
        </div>
      </div>
    )
  }
}
