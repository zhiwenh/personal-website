import './../App.css';

export default function WorkExperience(
  {companyName, companyDescription}
) {
  return (
    <div className="work-experience">
      <div className="work-experience-company-name">
        {companyName}
      </div>
      <div className="work-experience-company-description">
        {companyDescription}
      </div>
    </div>
  )
}
