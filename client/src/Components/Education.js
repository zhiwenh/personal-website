import './../App.css';

export default function Education(
  {educationName, educationDegree, educationDescription}
) {
  if (!educationDescription) {
    return (
      <div className="education">
        <div className="education-name">
          {educationName}
        </div>
        <div className="education-degree">
          {educationDegree}
        </div>
      </div>
    )
  } else {
    return (
      <div className="education">
        <div className="education-name">
          {educationName}
        </div>
        <div className="education-degree">
          {educationDegree}
        </div>
        <div className="education-description">
          {educationDescription}
        </div>
      </div>
    )
  }
}
