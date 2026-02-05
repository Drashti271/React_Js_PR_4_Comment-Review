import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"

const App = () => {
  const [state, setState] = useState(0);
  const [star, setStar] = useState(0);
  const [feedback, setFeedback] = useState({});
  const [card, setCard] = useState(null);

  const handleOver = (index) => {
    setState(index + 1);
  }

  const handleLeave = () => {
    setState(0);
  }

  const handleClick = (index) => {
    setStar(index + 1);
  }

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFeedback({...feedback, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCard({
      star : star,
      text : feedback.text
    })
    setState(0);
    setStar(0);
    setFeedback({text : ""});
  }

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-6'>
              <form action="" method="post" onSubmit={handleSubmit}>
                <h2>Feedback Form</h2>
                <div>
                  {
                    [...Array(5)].map((_,index) => {
                      return(
                        <FaStar size={30} color={star > index || state > index ? 'gold' : 'gray'}
                        onMouseOver={() => handleOver(index)}
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick(index)}
                        />
                      )
                    })
                  }
                </div>
                <textarea name="text" rows={3} value={feedback.text || ''} id="" onChange={handleChange}></textarea>
                <button type='submit'>Submit</button>
              </form>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-6'>
            {
              card && (
                <div className='card'>
                  <h3 className='card-title text-center mb-2'>
                    ⭐ User Feedback ⭐
                  </h3>
                  <h4>Rating : </h4>
                  <div>
                    {[...Array(card.star)].map((_, index) => (
                      <FaStar key={index} color="gold" />
                    ))}
                  </div>
                  <p>Feedback : {card.text}</p>
                </div>
              )
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App
