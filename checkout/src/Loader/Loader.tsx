import Spinner from "../assets/spinner.svg";
import './Loader.css';

interface Props {
    loading: boolean
}

function Loader({ loading }: Props) {

    if (!loading) return null;
    return (
        <div className='loader-container'>
            <div className='loader'>
                <img src={Spinner} alt='spinner' />
            </div>
        </div>
    )
}

export default Loader;