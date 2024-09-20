import './../App.css';

export default function WorkExperience(
  {companyName, companyDescription, jobAccomplishments}
) {

  console.log('job accomplishments', jobAccomplishments)

  if (jobAccomplishments) {
    jobAccomplishments = jobAccomplishments.map(accomplishment => {
      console.log('here');
      return (
        <li className="job-accomplishment">{accomplishment}</li>
      )
    });
  }
  
  console.log('job accomplishments', jobAccomplishments)

  return (
    <div className="work-experience">
      <div className="work-experience-company-name">
        {companyName}
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
