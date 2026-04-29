import api from "./client";

export const initiateSession = async () => {
    try {
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

        const response = await api.post(`/cem/dpc/core/v1/processRequest`, data);
        const result = response.data

        if (result.status?.code !== '200') {
            throw new Error(result.status?.messageEn || 'Failed to initiate session')
        }

        return {
            refId: result.data.refId,
        }

    } catch (error: any) {
        console.error('initiateSession failed')
        console.error('status:', error?.response?.status)
        console.error('data:', error?.response?.data)
        console.error('headers:', error?.response?.headers)
        throw error
    }
};