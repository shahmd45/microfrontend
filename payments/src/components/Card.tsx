import React from 'react'

function Card() {
    
    const handleCardPay = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Card payment submitted!");
        if (typeof window === 'undefined') return;
        const { PaymentSession } = window as any;
        PaymentSession.updateSessionFromForm("card");
    }

    return (
        <div className="bg-white p-10 lg:p-10 rounded-xl shadow-[0_40px_90px_-40px_rgba(15,23,42,0.12)] border border-slate-200/70 ">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-slate-950">Card Details</h2>
                <p className="text-slate-500 text-sm">Please provide the details exactly as they appear on your card.</p>
            </div>

            <form className="space-y-6">
                <div className="mt-4">
                    <label className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-[0.36em] ml-4">Cardholder Name</label>
                    <input
                        className="w-full h-16 px-8 bg-surface-container-low border border-slate-200 rounded-full text-slate-950 placeholder:text-slate-400 focus:ring-2 focus:ring-[#f2d3d3] focus:border-[#f2d3d3] transition-all outline-none text-lg"
                        placeholder="e.g. Mohammed Hussain"
                        type="text"
                        aria-label="enter your card number"
                        value=""
                        id="cardholder-name"
                        title="cardholder name"
                        tabIndex={1}
                        readOnly
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-[0.36em] ml-4">Card Number</label>
                    <div className="relative">
                        <input
                            className="w-full h-16 px-8 bg-surface-container-low border border-slate-200 rounded-full text-slate-950 placeholder:text-slate-400 focus:ring-2 focus:ring-[#f2d3d3] focus:border-[#f2d3d3] transition-all outline-none text-lg font-mono"
                            placeholder="0000 0000 0000 0000"
                            type="text"
                            id="card-number"
                            title="card number"
                            aria-label="enter your card number"
                            value=""
                            tabIndex={2}
                            readOnly
                        />
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 flex items-center">
                            <span className="material-symbols-outlined">credit_card</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-[0.36em] ml-4">Expiry Date</label>
                        <input
                            className="w-full h-16 px-8 bg-surface-container-low border border-slate-200 rounded-full text-slate-950 placeholder:text-slate-400 focus:ring-2 focus:ring-[#f2d3d3] focus:border-[#f2d3d3] transition-all outline-none text-lg font-mono"
                            placeholder="MM"
                            type="text"
                            id="expiry-month"
                            title="expiry month"
                            aria-label="two digit expiry month"
                            value=""
                            tabIndex={3}
                            readOnly
                        />
                    </div>
                    <div className="space-y-2">
                        <input
                            className="w-full h-16 px-8 mt-6 bg-surface-container-low border border-slate-200 rounded-full text-slate-950 placeholder:text-slate-400 focus:ring-2 focus:ring-[#f2d3d3] focus:border-[#f2d3d3] transition-all outline-none text-lg font-mono"
                            placeholder="YY"
                            type="text"
                            id="expiry-year"
                            title="expiry year"
                            aria-label="two digit expiry year"
                            value=""
                            tabIndex={4}
                            readOnly
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-[0.36em] ml-4">CVV / CVC</label>
                    <div className="relative">
                        <input
                            className="w-full h-16 px-8 bg-surface-container-low border border-slate-200 rounded-full text-slate-950 placeholder:text-slate-400 focus:ring-2 focus:ring-[#f2d3d3] focus:border-[#f2d3d3] transition-all outline-none text-lg font-mono"
                            placeholder="•••"
                            type="password"
                            id="security-code"
                            title="security code"
                            aria-label="three digit CCV security code"
                            value=""
                            tabIndex={5}
                            readOnly
                        />
                    </div>
                </div>

                <div className="pt-6">
                    <div className="mb-5">
                        <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-1">Amount</p>
                        <p className="text-3xl font-black tracking-tight">5,656.00 SAR</p>
                    </div>
                    <button
                        className="cursor-pointer w-full h-20 bg-primary hover:bg-primary/90 text-white outline-0 rounded-full text-xl font-bold tracking-tight shadow-[0_18px_40px_-20px_rgba(175,16,26,0.55)] transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                        type="submit"
                        tabIndex={6}
                        onClick={handleCardPay}
                    >
                        <span>Payment</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <p className="text-center text-slate-500 text-xs mt-6 px-10 leading-relaxed">
                        By adding this card, you agree to our <a className="text-primary font-bold underline underline-offset-4" href="#">Terms of Service</a> and authorize ArchitectPay to verify this payment method.
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Card