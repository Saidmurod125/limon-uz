import Navv from "./Navv";

const Heder = () => {
    
  return (
    <div className=" h-[90vh] bg-slate-950">
      <div className="container mx-auto flex h-[150px] items-center  justify-between border-b-2  ">
        <div className="">
          <a href="/">
            <img
              className="w-20 h-20"
              src="../../public/unnamed.png"
              alt="asdf"
            />
          </a>
        </div>
        <div className="flex justify-center gap-5 text-2xl text-white ">
          <h2 className="hover:text-amber-500">Loyiha haqida</h2>
          <h2 className="hover:text-amber-500">Yangiliklar</h2>
        </div>
        <div className="mt-2 ">
          <div className="flex gap-8 md:hidden ">
            <select className="w-20 h-10 text-white border-4 border-indigo-200 rounded-full border-b-indigo-500 bg-slate-950 hover:border-indigo-500 ">
              <option value="uz">uz</option>
              <option value="rus">rus</option>
              <option value="eng">eng</option>
            </select>
            <div>
              <button className="px-1 border-4 border-indigo-200 rounded-lg border-b-indigo-500 bg-slate-600 hover:border-indigo-500">
                <span className="flex justify-between gap-3">
                  <i className=" fa-brands fa-apple mr-[15px] mt-2 text-[25px]"></i>
                  <span>
                    <p className="text-ls">Oching</p>
                    <h1 className="text-xs">App Store</h1>
                  </span>
                </span>
              </button>
            </div>
            <div>
              <button className="px-1 border-4 border-indigo-200 rounded-lg border-b-indigo-500 bg-slate-500 hover:border-indigo-500">
                <span className="flex justify-between gap-3">
                  <i className=" fa-brands fa-google-play mr-[15px] mt-2 text-[25px]"></i>
                  <span>
                    <p className="text-ls">Oching</p>
                    <h1 className="text-xs">Google Play</h1>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Navv />
    </div>
  );
}

export default Heder
