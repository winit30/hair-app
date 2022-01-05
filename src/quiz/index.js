import {useState} from 'react';
import QuizWizard from './components/QuizWizard';
import Welcome from './components/Welcome';

const Quiz = () => {
  const [quizStatus, setQuizStatus] = useState(false);

  const loadBanner = () => (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="heading-banner"></div>
      </div>
    </div>
  );

  const loadFooter = () => (
    <div className="row justify-content-center">
      <div className="col-md-8 quiz-wizard">
        <p className="font-small">Powered by ProductDais</p>
      </div>
      <div className="quiz-wizard"></div>
    </div>
  );

  return (
    <div className="container-fluid main-cont">
      <div className="row justify-content-center">
        <header className="col-md-12 header-cont"></header>
      </div>
      {loadBanner()}
      {quizStatus ? <QuizWizard /> : <Welcome setQuizStatus={setQuizStatus} /> }
      {loadFooter()}
      <div className="row justify-content-center">
        <nav className="col-md-12 welcome-form footer-cont">
          <a className="btn link-danger btn-sm" role="button" aria-disabled="true">Quiz</a>
          <a className="btn link-danger btn-sm" role="button" aria-disabled="true">Contact</a>
          <a className="btn link-danger btn-sm" role="button" aria-disabled="true">Privacy</a>
          <a className="btn link-danger btn-sm" role="button" aria-disabled="true">Terms</a>
        </nav>
      </div>
    </div>
  );
}

export default Quiz;
