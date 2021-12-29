import validate from 'validate.js';
import { useState } from 'react';

const LeadForm = ({ confirmEmail, setLoading }) => {

  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    const val = e.target.value.trim();
    if(val) {
      setEmail(e.target.value);
    }
  }

  // Example POST method implementation:
 const postData = async (url = '', data = {}) => {
     // Default options are marked with *
     const response = await fetch(url, {
       method: 'POST', // *GET, POST, PUT, DELETE, etc.
       headers: {
         'Content-Type': 'application/json'
         // 'Content-Type': 'application/x-www-form-urlencoded',
       },
       body: JSON.stringify(data) // body data type must match "Content-Type" header
     });
     return response.json(); // parses JSON response into native JavaScript objects
  }

  const handleComfirm = () => {
      const constraints = {
        from: {
          email: true
        }
      };

      const validation = validate({from: email}, constraints);

      if(validation) {
          alert('Please Enter a valid Email ID!');
      } else {
        confirmEmail(true);
        setLoading(true);
        postData('https://node-hair-care.herokuappss.com/leads', {email}).then(data => {
           setLoading(false)
         }).catch(() => {
           setLoading(false);
         });
      }
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 quiz-wizard">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Where should we send your results??</label>
            <input type="email" className="form-control" placeholder="Enter Your Email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmailChange}/>
            <div id="emailHelp" className="form-text">We require your email to send you the analysis report.<br/> We respect your privacy.</div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="welcome-form">
              <button type="button" className="btn btn-danger btn-lg" onClick={handleComfirm}>Confirm</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default LeadForm;
