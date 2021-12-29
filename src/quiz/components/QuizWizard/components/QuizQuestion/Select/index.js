import {useState, useEffect} from 'react';

const Select = ({options, handleAnswerClick, answer}) => {

  return(
    <>
      {options.map((item, index) => {
        return (
          <div className="col-md-12 welcome-form" key={item}>
              <button
                type="button"
                className={`btn ${answer === item ? 'btn-info' : 'btn-outline-secondary'} same-width`}
                onClick={() => handleAnswerClick(item)}>
                {item}
              </button>
          </div>
        );
      })}
    </>
  )
}

export default Select;
