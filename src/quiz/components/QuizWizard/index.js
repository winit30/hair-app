import {useState, useEffect} from 'react';
import { questions } from './questions.constants';
import QuizQuestion from './components/QuizQuestion';
import ProgressBar from './components/ProgressBar';
import Loader from './components/Loader';
import CTASection from './components/CTASection';
import LeadForm from './components/LeadForm';

const QuizWizard = () => {

   const [active, setActive] = useState(0);
   const [progress, setProgress] = useState(0);
   const [loading, setLoading] = useState(false);
   const [isEmailConfirm, confirmEmail] = useState(false);

   const handleNext = () => {
     if(active < (questions.length - 1)) {
       setActive(active + 1);
     } else {
       setProgress(100);
     }
   }

   const handlePrev = () => {
     setActive(active - 1);
   }

   const calcProgress = () => {
     const p = (active * 100)/ questions.length;
     setProgress(p);
   }

   useEffect(() => {
     calcProgress();
   }, [active]);

   return (
     <div>
        {(!isEmailConfirm || loading) &&
          <ProgressBar progress={progress} />
        }
       {progress !== 100 &&
         questions.map((item, index) => {
           if(active === index) {
             return(
               <QuizQuestion
                 data={item}
                 key={item.question}
                 diablePrevButton={active < 1}
                 handlePrev={handlePrev}
                 handleNext={handleNext} />
             );
           }
           return null;
         })
       }

       {progress === 100 &&
         <div>
           {isEmailConfirm ?
             <div>
               {loading ? <Loader /> : <CTASection />}
             </div>
             :
             <LeadForm confirmEmail={confirmEmail} setLoading={setLoading} />
           }
         </div>
       }
     </div>
   );
}

export default QuizWizard
