import axios, { type InternalAxiosRequestConfig } from "axios";

const win: any = window;

const createTransactionID = (isCorrelationId = false) => {
    const currentDateTime = new Date()
        .toISOString()
        .replace(/-|:|T/gi, '')
        .replace('.', '')
        .slice(2)
        .slice(0, -1)
    return (
        'POR' + (isCorrelationId ? 'C' : '') + currentDateTime + '_' + Math.ceil(Math.random() * 100000)
    )
}

const cem_key = "liCENcCCGpHUsEPHNhySYGXCnmhwzZ";
const journeyName: string = 'Devices';
const xCoId = createTransactionID(true);
const baseUrl = "https://apisit.mobily.com.sa";

const config = {
    api: {
        baseURL: baseUrl,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "cem-key": cem_key,
            "X-Journey-Name": journeyName,
            "X-Correlation-Id": xCoId
        },
    },
}

const api = axios.create({ ...config.api });

api.interceptors.request.use((conf: InternalAxiosRequestConfig) => {
    conf.headers.Authorization = `Bearer ${win["bmToken"]}`;
    conf.headers["X-Transaction-Id"] = createTransactionID();
    conf.headers["X-Source-Channel"] = "PORTAL";
    conf.headers['X-Timestamp'] = new Date().toISOString();
    return conf;
}, (err) => {
    return err;
});

const initiateSession = () => {

    const data = {
        "operation": "INITIATE",
        "version": "v2",
        "language": "en",
        "type": "PAYMENT",
        "amount": {
            "amount": 4807.60,
            "totalAmount": 5656.00,
            "taxAmount": 848.40
        },
        "items": [
            {
                "paymentProcessor": "MPGS",
                "type": "CARD",
                "referredType": "RECHARGE",
                "amount": {
                    "amount": 4807.60,
                    "totalAmount": 5656.00,
                    "taxAmount": 848.40
                },
                "account": {
                    "acctNumber": "966562962084",
                    "type": "MSISDN"
                }
            }
        ]
    }

    return api.post(`/cem/dpc/core/v1/processRequest`, data);
}

export {
    initiateSession
};
