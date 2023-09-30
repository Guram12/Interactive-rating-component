import './Submit.css'


export function Submit({ onSubmit }) {
    return (
        <button className='submit_button' type='submit' onClick={onSubmit} > SUBMIT </button>
    )
}