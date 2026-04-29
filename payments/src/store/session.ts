let bmToken: string | null = null;

export const sessionStore = {
    getToken: () => bmToken,
    setToken: (token: string) => {
        bmToken = token;

        if (typeof window !== "undefined") {
            (window as any).bmToken = token;
        }
    },
};