import './HomePage.css'
import { useNavigate } from 'react-router-dom';
import { Text } from './Text'
import { Buton } from './Buton';
import { Submit } from './Submit';
import { useState } from 'react';


function HomePage() {
    const [rating, setRating] = useState(null);  // Make sure this line is present and correct
    const navigate = useNavigate();

    const handleRatingSelect = (selectedRating) => {
        setRating(selectedRating);  // And this line, too
    };

    const handleSubmit = () => {
        navigate('/new', { state: { rating } });
    };

    return(
        <div className='main_container' > 
            <div className='star_div'>
                <img className='star' src='./icon-star.svg'   alt='Star logo'  />
            </div>
            <Text />
            <Buton onRatingSelect={handleRatingSelect} />
            <Submit onSubmit={handleSubmit}  />
        </div>
    )
}

export default HomePage;