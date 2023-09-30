import { useLocation } from 'react-router-dom';
import './NewPage.css';

function NewPage() {
    const location = useLocation();
    const rating = location.state?.rating;

    return (
        <div className='second_page_div'>
            <img className='illustration'  src='./illustration-thank-you.svg'  alt='Ilustracion Thank You'/>
            <div className='result'> 
                <h2 className='rating' >you selected {rating ? rating : '0'} out of 5</h2>
            </div>
            <p className='thanks' >Thank you!</p>
            <p className='thansk2' >We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch! </p>
        </div>
    );
}

export default NewPage;
