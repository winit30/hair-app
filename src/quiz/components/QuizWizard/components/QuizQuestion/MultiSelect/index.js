import {useState, useEffect} from 'react';

const Select = ({options, handleAnswerClick, answer, multiple}) => {

  const [answerArr, setAnswer] = useState([]);

  const answerClick = (item) => {
    if(item === 'None of the above') {
      handleAnswerClick([item]);
      return;
    }
    let ansArr = [];
    if(answer) {
      ansArr = JSON.parse(JSON.stringify(answer));
    }
    if(ansArr.length === 1 && ansArr[0] === 'None of the above') {
      ansArr = [];
    }
    if(ansArr.length === multiple) {
      ansArr.shift();
    }
    ansArr.push(item);
    handleAnswerClick(ansArr)
  }

  useEffect(() => {
    if(answer) {
      setAnswer(answer)
    }
  }, [answer]);

  return(
    <>
      {options.map((item, index) => {
        return (
          <div className="col-sm-12 welcome-form" key={item}>
              <button
                type="button"
                className={`btn ${answerArr.includes(item) ? 'btn-info' : 'btn-outline-secondary'} same-width`}
                onClick={() => answerClick(item)}>
                {item}
              </button>
          </div>
        );
      })}
    </>
  )
}

export default Select;
