import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import validate from 'validate.js';

const Welcome = ({ setQuizStatus }) => {

   const [name, setName] = useState('');
   const [isError, setError] = useState(false);

   const dispatch = useDispatch();

   const startAnalysis = () => {
     if(name && validate.isString(name)) {
       dispatch({type: 'UPDATE_ANSWER', payload: {
         username: name.trim()
       }});
       setQuizStatus(true);
       setError(false)
     } else {
       setError(true);
     }
   }

   const handleChange = (e) => {
      if(e.target.value) {
        setName(e.target.value);
         setError(false)
      }
   }

   return (
     <div>
       <div className="row justify-content-center welcome-form">
         <div className="col-md-6 welcome-form">
           <h3>Welcome</h3>
           <p>Think your hair is healthy? The answer might surprise you. Answer a few questions & get a picture of your hairs current health and get tips on how to nurse it back to a shiny.</p>
         </div>
       </div>
       <div className="row justify-content-center">
         <div className="col-md-4 welcome-form">
           <div className="mb-3">
             <label htmlFor="exampleInputEmail1" className="form-label">What is your name?</label>
             <input type="input" className="form-control" placeholder="Enter Your Name" onChange={handleChange} />
           </div>
           {isError && <div class="alert alert-danger" role="alert">
            Please enter a valid name
           </div>}
         </div>
       </div>
       <div className="row justify-content-center">
           <div className="col-md-6 welcome-form">
             <button type="button" className="btn btn-danger btn-lg" onClick={startAnalysis}>Start My Analysis</button>
           </div>
       </div>
     </div>
   );
}

export default Welcome;
