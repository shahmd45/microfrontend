import axios from "axios";
import { sessionStore } from "../store/session";

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


const xCoId = createTransactionID(true);

const api = axios.create({
    baseURL: "https://apisit.mobily.com.sa",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cem-key": "liCENcCCGpHUsEPHNhySYGXCnmhwzZ",
        "X-Journey-Name": "Devices",
        "X-Source-Channel": "PORTAL",
        "X-Correlation-Id": xCoId
    },
});

api.interceptors.request.use((config) => {
    const token = sessionStore.getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["X-Transaction-Id"] = createTransactionID();
    config.headers["X-Timestamp"] = new Date().toISOString();

    return config;
});

export default api;