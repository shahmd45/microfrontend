import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const PaymentPage = lazy(() => import('payment/PaymentPage'));

function PaymentApp() {
    const params = new URLSearchParams(window.location.search);
    const refId = params.get('refId') ?? '';

    return (
        <Suspense fallback={<Loader loading={true} />}>
            <PaymentPage refId={refId} />
        </Suspense>
    );
}

export default PaymentApp;
