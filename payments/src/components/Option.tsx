type paymentMethod = 'saved' | 'apple' | 'credit';

type OptionProps = {
    setSelectedPayment: (option: paymentMethod) => void;
    selectedPayment: string;
}

function Option({ setSelectedPayment, selectedPayment }: OptionProps) {
    return (
        <>
            <div className="grid gap-4 lg:grid-cols-2">
                {/* <button
                    type="button"
                    onClick={() => setSelectedPayment('saved')}
                    className={
                        `group gap-3 text-left rounded-xl p-6 transition-all cursor-pointer hover:scale-[1.02] ${selectedPayment === 'saved'
                            ? 'bg-primary text-white shadow-[0_20px_60px_-30px_rgba(175,16,26,0.45)]'
                            : 'bg-slate-50 text-on-background border border-slate-200 hover:border-slate-300'
                        }`
                    }
                >

                    <div className="flex justify-between w-full mb-8">
                        <span className="material-symbols-outlined">credit_card</span>
                    </div>
                    <span className={
                        `text-sm uppercase tracking-[0.35em] font-semibold ${selectedPayment === 'saved' ? 'text-white/80' : 'text-secondary'
                        }`
                    }>
                        Saved Cards
                    </span>
                    <div>
                        <p className={
                            `text-base font-semibold ${selectedPayment === 'saved' ? 'text-white' : 'text-on-background'
                            }`
                        }>
                            Pay with your saved card
                        </p>
                    </div>
                </button> */}

                <button
                    type="button"
                    onClick={() => setSelectedPayment('credit')}
                    className={
                        `group gap-3 text-left rounded-xl p-6 transition-all cursor-pointer hover:scale-[1.02] ${selectedPayment === 'credit'
                            ? 'bg-primary text-white shadow-[0_20px_60px_-30px_rgba(175,16,26,0.45)]'
                            : 'bg-slate-50 text-on-background border border-slate-200 hover:border-slate-300'
                        }`
                    }
                >
                    <div className="flex justify-between w-full mb-8">
                        <span className="material-symbols-outlined">add_card</span>
                    </div>
                    <span className={`text-sm uppercase tracking-[0.35em] font-semibold ${selectedPayment === 'credit' ? 'text-white/80' : 'text-secondary'}`}>
                        Credit / Debit Card
                    </span>
                    <p className={`text-sm ${selectedPayment === 'credit' ? 'text-white' : 'text-on-background'}`}>
                        Add a new secure payment method
                    </p>
                </button>

                <button
                    type="button"
                    onClick={() => setSelectedPayment('apple')}
                    className={
                        `group gap-3 text-left rounded-xl p-6 transition-all cursor-pointer hover:scale-[1.02] ${selectedPayment === 'apple'
                            ? 'bg-primary text-white shadow-[0_20px_60px_-30px_rgba(175,16,26,0.45)]'
                            : 'bg-slate-50 text-on-background border border-slate-200 hover:border-slate-300'
                        }`
                    }
                >
                    <div className="flex justify-between w-full mb-8">
                        <span className="material-symbols-outlined">
                            contactless
                        </span>
                    </div>
                    <span className={`text-sm uppercase tracking-[0.35em] font-semibold ${selectedPayment === 'apple' ? 'text-white/80' : 'text-secondary'}`}>
                        Apple Pay
                    </span>
                    <p className={`text-base ${selectedPayment === 'apple' ? 'text-white' : 'text-on-background'}`}>
                        One-touch biometric authorization
                    </p>
                </button>
            </div>
            {/* <button
                type="button"
                onClick={() => setSelectedPayment('credit')}
                className={
                    `group w-full flex items-center justify-between rounded-xl p-6 text-left transition-all hover:scale-[1.02] cursor-pointer mt-8 ${selectedPayment === 'credit'
                        ? 'bg-primary text-white shadow-[0_20px_60px_-30px_rgba(175,16,26,0.45)]'
                        : 'bg-slate-50 text-on-background border border-slate-200 hover:border-slate-300'
                    }`
                }
            >
                <div className="flex items-center gap-4">
                    <span className={`grid h-12 w-12 place-items-center rounded-xl shadow-sm ${selectedPayment === 'credit' ? 'bg-white text-primary' : 'bg-surface-container-high text-on-background'}`}>
                        <span className="material-symbols-outlined">add_card</span>
                    </span>
                    <div>
                        <p className={`text-base font-semibold ${selectedPayment === 'credit' ? 'text-white' : 'text-on-background'}`}>
                            Credit / Debit Card
                        </p>
                        <p className={`text-sm ${selectedPayment === 'credit' ? 'text-white/80' : 'text-secondary'}`}>
                            Add a new secure payment method to your vault
                        </p>
                    </div>
                </div>
                <span className={`material-symbols-outlined ${selectedPayment === 'credit' ? 'text-white/80' : 'text-secondary'}`}>
                    chevron_right
                </span>
            </button> */}
        </>
    )
}

export default Option