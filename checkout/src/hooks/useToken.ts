import { useState, useEffect } from "react";
import CryptoJS from 'crypto-js';

const retryCount =  4;

const useToken = (url: string, request: any, setValue: React.Dispatch<React.SetStateAction<boolean>>) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const originUrl = window.location.origin;
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/text");
        myHeaders.append("trans_id", "hkiG9w0BAQEFAA");

        const encryptedBase64Key = "TUlHZk1BMEdDU3FHU0liMw==";
        const parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);

        const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(request), parsedBase64Key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        const fetchWithRetry = async (url: string, options: any, retries = retryCount, delay = 1000) => {
            for (let attempt = 1; attempt <= retries; attempt++) {
                try {
                    const res = await fetch(url, options);
                    const data = await res.text();

                    const decrypted = CryptoJS.AES.decrypt(data, parsedBase64Key, {
                        mode: CryptoJS.mode.ECB,
                        padding: CryptoJS.pad.Pkcs7
                    });

                    const response = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));

                    if (response?.ab !== null && response?.ab !== 'null') {
                        console.log('response', response)
                        return response?.ab;
                    }
                } catch (error) {
                    // window.location.href = errorPage;
                }

                if (attempt < retries) {
                    await new Promise(resolve => setTimeout(resolve, delay)); // wait before retry
                }
            }

            throw new Error("API call failed after multiple retries with null response.");
        };

        const doFetch = async () => {
            setLoading(true);
            try {
                const result = await fetchWithRetry(url, {
                    method: 'POST',
                    headers: originUrl.includes('mobily.com.sa') ? myHeaders : {},
                    body: encryptedData
                });

                if (!signal.aborted) {
                    setResponse(result);
                    setError(null);
                    setLoading(false);
                    setValue(true);
                }
            } catch (err: any) {
                if (!signal.aborted) {
                    setError(err.message);
                    setLoading(false);
                }
            } finally {
                setLoading(false);
            }
        };

        doFetch();

        return () => {
            abortController.abort();
        };
    }, []);

    return { response, error, loading };
};

export default useToken;