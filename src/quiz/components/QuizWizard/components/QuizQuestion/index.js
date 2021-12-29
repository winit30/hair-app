import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from './Select';
import MultiSelect from './MultiSelect';

const QuizQuestion = ({data, visiblity, handleNext, handlePrev, diablePrevButton}) => {

   const [answer, setAnswer] = useState('');
   const [isError, setError] = useState(false);

   const dispatch = useDispatch();
   const profile = useSelector((state) => state.leadProfile);

   const handleAnswerClick = (ans) => {
     setAnswer(ans);
     setError(false);
   }

   const getAnswerFromState = () => {
      for(let key in profile) {
        if(key === data.id) {
          return profile[key];
        }
      }
      return '';
   }

   useEffect(() => {
      console.log(getAnswerFromState());
      if(getAnswerFromState()) {
        setAnswer(getAnswerFromState());
      }
   }, []);

   const onClickNext = () => {
     if(answer) {
       dispatch({type: 'UPDATE_ANSWER', payload: {
         [data.id]: answer
       }});
       handleNext();
     } else {
       setError(true);
     }
   }

   return (
     <>
       <div className="row justify-content-center">
           <div className="col-sm-6 quiz-wizard">
               <h4>{data.question}</h4>
               <p>{data.desc}</p>
               {isError && <p className="text-danger">Please answer the question.</p>}
           </div>
       </div>
       <div className="row justify-content-center">
           <div className="col-3 welcome-form">
             <button type="button" className="btn btn-danger" onClick={handlePrev} disabled={diablePrevButton}>Prev</button>
           </div>
           <div className="col-6">
               <div className="row justify-content-center">
                  {data.multiple ?
                    <MultiSelect
                      options={data.options}
                      type={data.type}
                      multiple={data.multiple}
                      answer={answer}
                      handleAnswerClick={handleAnswerClick} />
                    :
                    <Select
                      options={data.options}
                      type={data.type}
                      answer={answer}
                      handleAnswerClick={handleAnswerClick} />
                  }
               </div>
           </div>
           <div className="col-3  welcome-form">
             <button type="button" className="btn btn-danger" onClick={onClickNext}>Next</button>
           </div>
       </div>
     </>
   );
}

export default QuizQuestion;
