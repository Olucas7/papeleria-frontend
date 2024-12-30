import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css'

const Landing = () => {

  const navigate = useNavigate();
  const timeoutSeconds = parseInt(process.env.REACT_APP_TIMEOUT_SECONDS || 3);
  const [counter, setCounter] = useState(timeoutSeconds);
  const [activityReset, setActivityReset] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {
      setCounter((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const timeToRedirect = setTimeout(() => {
      if (counter === 0) navigate('/home');
    }, timeoutSeconds * 1000);

    const resetActivity = () => {
      setCounter(timeoutSeconds);
      setActivityReset((prev) => !prev);
    };

    window.addEventListener('mousemove', resetActivity);
    window.addEventListener('keydown', resetActivity);

    return () => {
      window.removeEventListener('mousemove', resetActivity);
      window.removeEventListener('keydown', resetActivity);
      clearTimeout(timeToRedirect);
      clearInterval(interval);
    };
  }, [navigate, timeoutSeconds, activityReset, counter])

  return (
    <div className='landing-container'>
      <h1>Bienvenidos a relatos de papel</h1>
      <p>En breve seras redirigido al home page en {counter} segundos...</p>
      <p>Realiza alguna accion para permanecer aqui</p>
    </div>
  );
};

export default Landing;
