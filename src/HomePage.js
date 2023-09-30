import './HomePage.css'
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();
    return(
        <div className='main_container' > 
            <h1>this is home page </h1>
            <button onClick={() => navigate('/new')}>Go to new page</button>
        </div>
    )
}

export default HomePage;