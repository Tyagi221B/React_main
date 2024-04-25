import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyinfo";
import { motion } from "framer-motion";
import { LampContainer } from "./components/ui/lamp";

function App() {
	const [amount, setAmount] = useState(0);
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("inr");
	const [convertedAmount, setConvertedAmount] = useState(0);

	const currencyInfo = useCurrencyInfo(from);

	const options = Object.keys(currencyInfo);

	const swap = () => {
		setFrom(to);
		setTo(from);
		setConvertedAmount(amount);
		setAmount(convertedAmount);
	};

	const convert = () => {
		setConvertedAmount(amount * currencyInfo[to]);
	};
	return (
		<div>
			<LampContainer>
				<motion.h1
					initial={{ opacity: 0.5, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
				>
					<p className=" text-white">Currency converter</p>
						
							<div className="w-full max-w-md mx-auto border rounded-lg p-5 backdrop-blur-sm relative top-28">
								<form
									onSubmit={(e) => {
										e.preventDefault();
										convert();
									}}
								>
									<div className="w-full mb-1">
										<InputBox
											label="From"
											amount={amount}
											currencyOptions={options}
											onCurrencyChange={(currency) => setFrom(currency)} //
											selectCurrency={from}
											onAmountChange={(amount) => setAmount(amount)}
										/>
									</div>
									<div className="relative w-full h-0.5">
										<button
											type="button"
											onClick={swap}
											className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md hover:bg-black/20 bg-black/50 text-xl inline-flex h-12 animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
										>
											swap
										</button>
									</div>
									<div className="w-full mt-1 mb-4">
										<InputBox
											label="To"
											amount={convertedAmount}
											currencyOptions={options}
											onCurrencyChange={(currency) => setTo(currency)}
											selectCurrency={to}
											amountDisable
										/>
									</div>
									{/* <button
										type="submit"
										className="w-full bg-blue-600  text-white px-4 py-3 rounded-lg text-xl"
									>
										Convert {from.toUpperCase()} to {to.toUpperCase()}
									</button> */}
									<button 
                  type="submit"
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
										<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
										<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
										</span>
									</button>
								</form>
							</div>
				</motion.h1>
			</LampContainer>
		</div>
	);
}

export default App;
