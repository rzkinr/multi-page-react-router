import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/products');
  }

  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to='/products'>Products Page</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate to Products Page</button>
      </p>
    </>
  );
}

export default HomePage;
