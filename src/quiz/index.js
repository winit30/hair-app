import {useState} from 'react';
import QuizWizard from './components/QuizWizard';
import Welcome from './components/Welcome';

const Quiz = () => {
  const [quizStatus, setQuizStatus] = useState(false);

  const loadBanner = () => (
    <div className="row justify-content-center">
      <div className="col-sm-6">
        <div className="heading-banner"></div>
      </div>
    </div>
  );

  const loadFooter = () => (
    <div className="row justify-content-center">
      <div className="col-sm-8 quiz-wizard">
        <p className="font-small">Powered by ProductDais</p>
      </div>
    </div>
  );

  return (
    <div className="container-fluid">
      {loadBanner()}
      {quizStatus ? <QuizWizard /> : <Welcome setQuizStatus={setQuizStatus} /> }
      {loadFooter()}
    </div>
  );
}

export default Quiz;
