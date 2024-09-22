import './../App.css';

export default function WorkExperience(
  {companyNameAndPosition, datesWorked, companyDescription, jobAccomplishments}
) {

  if (jobAccomplishments) {
    jobAccomplishments = jobAccomplishments.map(accomplishment => {
      return (
        <li className="job-accomplishment">{accomplishment}</li>
      )
    });
  }

  return (
    <div className="work-experience">
      <div className="work-experience-company-name-and-dates-worked-wrap">
        <div className="work-experience-company-name">
          {companyNameAndPosition}
        </div>
        <div className="work-experience-dates-worked">
          {datesWorked}
        </div>
      </div>
      <div className="work-experience-company-description">
        {companyDescription}
      </div>
      <ul className="job-accomplishments-list">
        {jobAccomplishments}
      </ul>
    </div>
  )
}

// <div className="work-experience-company-name-and-position-wrap">
// </div>

// <div className="work-experience-position">
//   {position}
// </div>
