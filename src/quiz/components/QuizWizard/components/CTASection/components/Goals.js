import { CircleIcon, CheckCircleFillIcon } from '@primer/octicons-react'

const Goals = ({ hairGoal }) => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-12 ">
          <hr />
        </div>
      </div>

      <div className="row justify-content-center welcome-form">
        <div className="col-md-8 welcome-form">
          <h3>Hair Goal - Recommended Ingredients</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 welcome-form text-left">
          <div className="table-padding table-responsive-md bg-grey">
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
    </>
  )
}

export default Goals;
