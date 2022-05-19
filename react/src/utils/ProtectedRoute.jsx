import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
  const { child } = props;
  const [isDone, setDone] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    fetch('http://localhost/api/getUser')
      .then((response) => response.json())
      .then((json) => {
        if (json === null) {
          setDone(true);
          navigateTo('/register');
        }
      });
  }, []);

  return isDone ? child : <div />;
}

ProtectedRoute.propTypes = {
  child: PropTypes.element.isRequired,
};
