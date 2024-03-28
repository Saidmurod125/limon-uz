import { useState } from "react";
import { IoRepeatOutline } from "react-icons/io5";
import { FaFlagUsa } from "react-icons/fa6";
import { ClipLoader } from "react-spinners";
import Tables from "./Tables";

function Traslet() {
  const [sum, setSum] = useState();

  const handleSumChange = (event) => {
    const newSum = parseFloat(event.target.value);
    setSum(newSum);
  };

  const multipliedSum = sum * 12590.00;

  return (
    <div className="container mx-auto ">
      <div className="flex justify-between mt-2">
        <h1 className="my-[50px] text-3xl text-violet-500 ">Valyuta kursi</h1>
        <div className="flex mt-10">
          <p className="mt-3 mr-5">Asosida:</p>
          <p>
            O`zbekiston Respublikasi <br /> Markaziy banki
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-5 mb-10 ">
        <div className="w-[50%] rounded-lg border bg-slate-100 px-[50px] py-[50px] ">
          <div className="mb-20">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Price
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="number"
                value={sum}
                onChange={handleSumChange}
                id="price"
                className="w-full px-3 py-2 leading-tight text-gray-300 border-b-2 rounded outline-none border-b-black bg-inherit "
                placeholder="0.00"
              />

              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="h-full py-0 pl-2 text-gray-500 bg-transparent border-0 rounded-md pr-7 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>SUM</option>\
                </select>
              </div>
            </div>
          </div>
          <button className="absolute mx-auto ml-[15%]  mt-[-60px] flex h-16 w-16 justify-center rounded-full border bg-black py-2 text-violet-500 hover:bg-violet-500 hover:text-black">
            <IoRepeatOutline className="w-10 h-10" />
          </button>

          <div className="mt-20">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Price
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="number"
                value={multipliedSum}
                readOnly
                onChange={handleSumChange}
                className="w-full px-3 py-2 leading-tight text-gray-300 border-b-2 rounded outline-none border-b-black bg-inherit "
                placeholder="0.00"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="h-full py-0 pl-2 text-gray-500 bg-transparent border-0 rounded-md pr-7 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>
                    <FaFlagUsa /> USD
                  </option>
                  \
                </select>
              </div>
            </div>
            <p>1 USD = 12590.00 UZB</p>
            <p>
              <ClipLoader color="#36d7b7" speedMultiplier={1} size={15} />
              Kurs avtomatik ravishda har 10 daqiqada yangilanadi
            </p>
          </div>
        </div>
        <div className="flex w-[50%] rounded-lg border bg-slate-100 px-[50px] py-[50px] ">
          <div className="w-[50%] border-r-2 mx-5">
            <Tables />
          </div>
          <div className="w-[50%] mx-5 ">
            <Tables />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Traslet;
