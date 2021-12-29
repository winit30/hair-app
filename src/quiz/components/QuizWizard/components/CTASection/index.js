import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getHairReport, getHairGoal, createReport } from './cta.constants.js';
import { CircleIcon, CheckCircleFillIcon } from '@primer/octicons-react'

const CTASection = () => {

  const profile = useSelector((state) => state.leadProfile);
  const hairReport = getHairReport(profile);
  const hairGoal = getHairGoal(profile.goal, profile.dandruff);

  return (
    <div>
      <div className="row justify-content-center welcome-form">
        <div className="col-md-6 welcome-form">
          <h3 className="capitalize">Hello {profile.username}</h3>
          <p>Health of your hair depands on how you treat them with different products. Your hair damage seems <strong>{createReport(profile.styling).toUpperCase()}</strong>. Please find you Current Hair Analysis Report below.</p>
        </div>
      </div>
      <div className="row justify-content-center">
          <div className="col-md-6 welcome-form text-left">
            <table className="table table-info table-striped table-responsive">
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
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <hr />
        </div>
      </div>
      <div className="row justify-content-center welcome-form">
        <div className="col-md-6 welcome-form">
          <h3>Hair Goal - Recommended Solution</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 welcome-form text-left">
          <div className="border table-padding table-responsive-md">
            <table className="table">
              <thead>
                <tr>
                  <th colSpan="2">Hair Goal</th>
                  <th>Recommended Ingredients</th>
                </tr>
              </thead>
              <tbody>
                {hairGoal.map((item) => {
                  return (
                    <tr key={item.goal}>
                      <td>
                        {item.active ?
                          <CheckCircleFillIcon size={16} fill="#dc3545" />
                          :
                          <CircleIcon size={16}  /> }
                      </td>
                      <td>{item.goal}</td>
                      <td>{item.solution}</td>
                    </tr>
                  )
                })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CTASection;
