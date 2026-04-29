import CryptoJS from "crypto-js";
import { sessionStore } from "../store/session";

const retryCount = 4;

export async function generateBMToken(): Promise<string> {
    const utilUrl = "http://ssta004:8080";
    const url = `${utilUrl}/mobilyTheme4/BzFvwmzXvs`;

    const request = { dataT: "bm" };
    const encryptedBase64Key = "TUlHZk1BMEdDU3FHU0liMw==";
    const parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);

    const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(request),
        parsedBase64Key,
        {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        }
    );

    const fetchWithRetry = async (): Promise<string> => {
        for (let attempt = 1; attempt <= retryCount; attempt++) {
            try {
                const headers = new Headers();
                headers.append("Content-Type", "application/text");
                headers.append("trans_id", "hkiG9w0BAQEFAA");

                const response = await fetch(url, {
                    method: "POST",
                    headers,
                    body: encryptedData.toString(),
                });

                const encryptedText = await response.text();

                const decrypted = CryptoJS.AES.decrypt(encryptedText, parsedBase64Key, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7,
                });

                const parsed = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));

                if (parsed?.ab) {
                    return parsed.ab;
                }
            } catch {
                // retry
            }

            if (attempt < retryCount) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }

        throw new Error("Failed to generate bmToken");
    };

    const token = await fetchWithRetry();
    sessionStore.setToken(token);

    return token;
}