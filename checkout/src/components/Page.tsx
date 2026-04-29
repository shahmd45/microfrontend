import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from 'shared/store'
import { initiateSession } from '../api';
import Loader from '../Loader/Loader';

function Page() {
    const user = useAuthStore(state => state.user);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleInitiatePayment = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await initiateSession();
            const refIdValue = response.data.data.refId;

            console.log(refIdValue);
            navigate(`/payment?refId=${refIdValue}`);

        } catch (error) {
            console.error('Error initiating payment:', error);
            setError('Failed to initiate payment. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className='checkout__main'>
            <h1>Checkout Module</h1>

            {user ? (
                <>
                    <p>Checkout for {user}</p>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button
                        className="payment_button"
                        type='button'
                        onClick={handleInitiatePayment}
                        disabled={loading}
                    >
                        {loading ? "Initiating Payment..." : "Go to Payment"}
                    </button>
                </>
            ) : (
                <>
                    <p>Please sign in to checkout.</p>
                </>
            )}

            {loading && <Loader loading={loading} />}
        </section>
    )
}

export default Page
