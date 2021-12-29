const Loader = () => {
  return(
    <div className="row justify-content-center">
        <div className="col-md-6 quiz-wizard">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
    </div>
  );
}

export default Loader;
