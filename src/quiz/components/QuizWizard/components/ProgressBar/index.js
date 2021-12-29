const ProgressBar = ({ progress }) => {
  return(
    <div className="row justify-content-center welcome-form">
        <div className="col-md-6 welcome-form">
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
