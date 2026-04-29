import ApplePayLogo from '../assets/ApplePayWhite.svg'

function ApplePay() {
    return (
        <div className="bg-surface-container/40 w-full rounded-xl p-8 relative border-slate-100">
            <div className="bg-surface-container-low rounded-xl p-6 mb-8">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-1">Merchant</p>
                        <h3 className="text-xl font-bold">Mobily</h3>
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-primary">verified_user</span>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-1">Amount</p>
                        <p className="text-3xl font-black tracking-tight">5,656.00 SAR</p>
                    </div>

                </div>
            </div>

            <div className="flex flex-col items-center w-full justify-center p-6 gap-4">
                <div className="relative">

                    <div className="w-20 h-20 border-2 border-primary/20 rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-5xl" style={{ "fontVariationSettings": "'wght' 200" }}>face_5</span>
                    </div>

                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
                </div>
                <div className="text-center">
                    <p className="text-on-surface font-bold text-lg">Pay with Face ID</p>
                </div>
            </div>

            <button className="w-full bg-primary text-white h-16 rounded-xl font-bold text-lg flex items-center justify-center cursor-pointer gap-2 mt-4 active:scale-95 transition-all">
                Pay with <img src={ApplePayLogo} alt="apple pay" width={48}/>
            </button>
        </div>
    )
}

export default ApplePay