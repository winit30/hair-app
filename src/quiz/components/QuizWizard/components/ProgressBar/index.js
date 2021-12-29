const ProgressBar = ({ progress }) => {
  return(
    <div className="row justify-content-center">
        <div className="col-sm-6 quiz-wizard">
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{width: `${progress}%`}}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100">
                {Math.floor(progress)}%
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProgressBar;
