import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const CTASection = () => {

  const profile = useSelector((state) => state.leadProfile);
  const {
    dermatologist,
    styling,
    dandruff,
    medications,
    type,
    scalp,
    thickness,
    hair_loss,
    username,
    volume } = profile;

  console.log(profile);

  const createReport = () => {
    let report = 'Mild';
    if (dermatologist === 'Yes' && medications=== "Yes") {
      report = 'Severe'
    } else if (dermatologist === 'Yes' && styling) {
      report = 'Severe'
    } else if (dermatologist === 'Yes' || styling) {
      report = 'Moderate'
    } else if (dandruff === 'Yes' && medications === 'Yes') {
      report = 'Moderate'
    }
    return report;
  }

  useEffect(() => {
    createReport();
  }, []);

  const hairReport = [
    {
      key: 'Hair Type',
      value: type,
      action: 'All Good'
    },
    {
      key: 'Thickness',
      value: thickness,
      action: 'All Good'
    },
    {
      key: 'Dandruff',
      value: dandruff,
      action: 'All Good'
    },
    {
      key: 'Hair Loss',
      value: hair_loss,
      action: 'All Good'
    },
    {
      key: 'Scalp',
      value: scalp,
      action: 'All Good'
    },
    {
      key: 'Volume',
      value: volume,
      action: 'All Good'
    },
    {
      key: 'Damage',
      value: createReport(),
      action: 'All Good'
    }
  ]

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-sm-6 welcome-form">
          <h3>{username}'s Hair Report</h3>
        </div>
      </div>
      <div className="row justify-content-center">
          <div className="col-sm-6  welcome-form text-left">
              <table className="table table-info table-striped">
                <thead>
                    <tr>
                      <th>Title</th>
                      <th>Details</th>
                      <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {hairReport.map((item) => {
                      return (
                        <tr key={item.key}>
                          <th>{item.key}</th>
                          <td>{item.value}</td>
                          <td>{item.action}</td>
                        </tr>
                      )
                    })
                    }
                </tbody>
              </table>
          </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="row justify-content-center">
          <div className="col-sm-6 quiz-wizard">
            <div className="alert alert-success" role="alert">
              CONGRATULATIONS...! You have completed the test. We are reviewing your details and will be mailing you the final report.
            </div>
          </div>
      </div>
      <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="welcome-form">
              <p>Based on your answers, we have found a <a href="http://paisaapps.dvnlocks.hop.clickbank.net/?tid=facebook" className="link-danger">SOLUTION</a> for your hair problems. Cick on the button below.</p>
              <a href="http://paisaapps.dvnlocks.hop.clickbank.net/?tid=facebook" className="btn btn-danger btn-lg">Show Me The Solution</a>
            </div>
          </div>
      </div>
    </div>
  );
}
export default CTASection;
