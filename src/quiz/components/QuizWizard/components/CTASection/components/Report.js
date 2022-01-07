import { CheckCircleIcon, AlertIcon } from '@primer/octicons-react'

const Report = ({ hairReport , profile, damage }) => {
  return (
    <>
      <div className="row justify-content-center welcome-form">
        <div className="col-md-8 welcome-form">
          <h3 className="capitalize">Hello {profile.username}</h3>
          <p>Health of your hair depands on how you treat them with different products. Your hair damage seems
          <strong> {damage}</strong>. Please find you Current Hair Analysis Report below.</p>
          <p>Also, Find this <strong><a href="#30-days-hair-plan" className="link-danger ">30 Days Hair Routine Plan</a></strong> to repair your hair damage.</p>
        </div>
      </div>

      <div className="row justify-content-center">
          <div className="col-md-8 welcome-form text-left">
            <div className="table-padding-top table-responsive-md">
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th colSpan="2">Details</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {hairReport.map((item) => {
                    return (
                      <tr key={item.key}>
                        <th>{item.key}</th>
                        <td>{item.value}</td>
                        <td>
                          {item.action === 'All Good'
                          ? <CheckCircleIcon fill="#198753" size={15} verticalAlign="middle" style={{marginRight: 10}} />
                          : <AlertIcon fill="#dc3444" size={15}  verticalAlign="middle"/>
                          }
                        </td>
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
    </>
  )
}

export default Report;
