
const Nomber = () => {
  return (
    <div>
      <div className="container flex gap-20 mx-auto mb-5 ">
        <div className="flex h-[60%] w-[48%] justify-between  rounded-xl">
          <div>
            <h1 className="px-4 mt-12 mb-4 text-4xl text-slate-700 ">
              Utilitalar
            </h1>
            <div className="px-4">
              <button
                className="mb-5 mt-4 transform rounded-xl border p-4
              px-11 transition duration-700 ease-in-out hover:translate-y-[-10px] hover:bg-yellow-500
              "
              >
                <span className="flex gap-4 mr-72">
                  <img
                    className="w-[35px]"
                    src="https://limonpay.uz/svg/cold_water_icon.svg"
                    alt=""
                  />
                  <h1 className="w-full ">Sovuq suv</h1>
                </span>
              </button>
              <br />
              <button
                className="mb-5 mt-4 transform rounded-xl border p-4
              px-11 transition duration-700 ease-in-out hover:translate-y-[-10px] hover:bg-yellow-500
              "
              >
                <span className="flex gap-4 mr-72">
                  <img
                    className="w-[35px]"
                    src="https://limonpay.uz/svg/thunder_icon.svg"
                    alt=""
                  />
                  <h1 className="w-full">Elektr toki</h1>
                </span>
              </button>
              <br />
              <button
                className="mb-5 mt-4 transform rounded-xl border p-4
              px-11 transition duration-700 ease-in-out hover:translate-y-[-10px] hover:bg-yellow-500
              "
              >
                <span className="flex gap-4 mr-72">
                  <img
                    className="w-[35px]"
                    src="https://limonpay.uz/svg/hot_water_icon.svg"
                    alt=""
                  />
                  <h1 className="w-full">Issiq suv</h1>
                </span>
              </button>
              <br />
              <button
                className="mb-5 mt-4 transform rounded-xl border p-4
              px-11 transition duration-700 ease-in-out hover:translate-y-[-10px] hover:bg-yellow-500
              "
              >
                <span className="flex gap-4 mr-72">
                  <img
                    className="w-[35px]"
                    src="https://limonpay.uz/svg/trash_icon.svg"
                    alt=""
                  />
                  <h1 className="w-full">Axlat qutisi</h1>
                </span>
              </button>
              <br />
              <button
                className="mb-5 mt-4 transform rounded-xl border p-4
              px-11 transition duration-700 ease-in-out hover:translate-y-[-10px] hover:bg-yellow-500
              "
              >
                <span className="flex gap-4 mr-72">
                  <img
                    className="w-[35px]"
                    src="https://limonpay.uz/svg/gas_icon.svg"
                    alt=""
                  />
                  <h1 className="w-full">Gaz Plita</h1>
                </span>
              </button>
              <button
                className="mb-5 mt-4 transform rounded-xl border p-4
              px-11 transition duration-700 ease-in-out hover:translate-y-[-10px] hover:bg-yellow-500
              "
              >
                <span className="flex gap-4 mr-72">
                  <img
                    className="w-[35px]"
                    src="https://limonpay.uz/svg/sewerage_icon.svg"
                    alt=""
                  />
                  <h1 className="text-xl">Kanalizatsy</h1>
                </span>
              </button>
            </div>
          </div>
          <div className="w-[280px] h-[200px]">
            <img
              className="mt-44 w-[280px]"
              src="https://limonpay.uz/assets/earth-3524978f.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[48%] rounded-xl border px-12 pt-12">
          <div className="">
            <h1 className="text-4xl">Ekspress to`lov</h1>
          </div>
          <div className="pt-12">
            <h1 className="text-2xl">Telfon raqami</h1>
            <input
              type="number"
              value={+998}
              placeholder="+99899_(_759_)_50_99"
              className="mt-8 w-[80%] rounded-xl border  p-5"
            />
          </div>
          <div className="pt-12">
            <h1 className="text-2xl">To`lov miqdori</h1>

            <input
              className="mt-8 w-[80%] rounded-xl border p-5 px-12"
              placeholder="10_(100$)--1000_1"
            />
            
          </div>
          <button className="px-10 py-4 mt-16 text-xl text-yellow-700 border rounded-lg hover:bg-yellow-500">
            To`lov
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nomber
