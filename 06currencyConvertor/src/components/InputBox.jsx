import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = "",
}) {
  const amountInputId = useId()
  return (
    <div className={`p-3 rounded-lg text-sm flex border ${className}`}>
      <div className="w-1/2 ">
        <label
        htmlFor={amountInputId} 
        className="text-white mb-2 flex left-0 tracking-wide">{label}</label>
        <input
          id={amountInputId}
          className="outline-none w-full rounded-lg py-1.5 px-1 text-white bg-white/10 opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-white mb-2 w-full tracking-wide ">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-white/10 cursor-pointer outline-none text-white "
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
                {currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
