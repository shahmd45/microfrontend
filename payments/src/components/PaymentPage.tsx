import React from 'react'
import Option from './Option'
import ApplePay from './ApplePay'
import Card from './Card'

function PaymentPage() {
    const [selectedPayment, setSelectedPayment] = React.useState('credit')

    return (
        <main className="min-h-screen bg-background text-on-background">
            <div className="max-w-7xl mx-auto px-6 py-10 lg:px-8 grid gap-8 xl:grid-cols-[1.3fr_1fr] items-start">
                <div className="space-y-8">
                    <div className="mb-12">
                        <div className="max-w-2xl space-y-4">
                            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
                                Secure <span className="text-primary">Checkout</span>
                            </h1>
                            <p className="max-w-xl text-base leading-8 text-secondary">
                                Select your preferred method to complete this transaction. Our end-to-end encryption ensures your liquidity remains untouchable.
                            </p>
                        </div>
                    </div>
                    <Option selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />
                    <div className="p-8 bg-white rounded-4xl shadow-lg border border-slate-200/70">
                        <div className="flex items-center gap-4 text-slate-700">
                            <span className="material-symbols-outlined fill-1 text-primary">lock</span>
                            <p className="text-sm leading-relaxed">
                                Your transaction is secured with bank-grade 256-bit AES encryption. We do not store your CVV.
                            </p>
                        </div>
                    </div>
                </div>

                <aside className="space-y-10">
                    {selectedPayment === 'apple' && <ApplePay />}
                    {selectedPayment === 'credit' && <Card />}
                </aside>
            </div>
        </main>
    )
}

export default PaymentPage