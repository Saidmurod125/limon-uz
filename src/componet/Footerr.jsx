import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center pt-4 mt-5 text-white bg-gray-900">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex pb-2 mt-3">
            <img
              className="flex w-10 h-10"
              src="../../public/unnamed.png"
              alt=""
            />
            <p className="mt-2">LimonPay</p>
          </div>
          <div className="flex flex-wrap items-center justify-between col-span-7 pb-2 mt-3">
            <div className="flex items-center gap-2">
              <div>
                <HiOutlineLocationMarker
                  className="text-green-500"
                  size={"20px"}
                />
              </div>
              <div>
                <p className="m-0 text-white">
                  122/1 Mirzo Ulug`bek ko`chasi, Tashkent, Uzbekistan 100015
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <BsTelephone className="text-green-500" size={"20px"} />
              </div>
              <div>
                <p className="m-0 text-white">+998 78 200 00 07</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3">
          <div className="h-px bg-white"></div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="col-span-3 mt-3 col-lg-4 col-md-6 col-sm-8 col-10">
            <div className="mb-3 text-2xl font-bold hover:text-yellow-500">
              Xizmat haqida
            </div>
            <ul>
              <li className="hover:text-yellow-500">Kompania haqida</li>
              <li className="hover:text-yellow-500">
                Ilovalarning imkoniyati haqida
              </li>
              <li className="hover:text-yellow-500">Yangiliklar</li>
              <li className="hover:text-yellow-500">Xafsizliklar</li>
              <li className="hover:text-yellow-500">Baholar</li>
            </ul>
          </div>
          <div className="col-span-3 mt-3 col-lg-4 col-md-6 col-sm-8 col-10">
            <div className="mb-3 text-2xl font-bold hover:text-yellow-500">
              Hamkorlar
            </div>
            <ul>
              <li className="hover:text-yellow-500">
                Qanday qilib sherik bo`lish mumkin?
              </li>
              <li className="hover:text-yellow-500">Biznes aftomatlashtrish</li>
              <li className="hover:text-yellow-500">Foyda</li>
              <li className="hover:text-yellow-500">
                Tulov xizmati integarsalari
              </li>
            </ul>
          </div>
          <div className="col-span-3 mt-3 col-lg-4 col-md-6 col-sm-8 col-10">
            <div className="mb-3 text-2xl font-bold hover:text-yellow-500">
              Yordam
            </div>
            <ul>
              <li className="hover:text-yellow-500">Ommaviy oferta</li>
              <li className="hover:text-yellow-500">
                Malumotlarni oshkor qilmaslik shartnomasi
              </li>
              <li className="hover:text-yellow-500">Maxviy siosati </li>
              <li className="hover:text-yellow-500">Litsinziya</li>
              <li className="hover:text-yellow-500">
                Tez-tez beriladigan savollar
              </li>
              <li className="hover:text-yellow-500">Qayta aloqa</li>
            </ul>
          </div>
          <div className="col-span-3 mt-3 ml-10 col-lg-4 col-md-6 col-sm-8 col-10">
            <div className="mb-3 text-2xl font-bold hover:text-yellow-500">
              Ilovani yuklab oling:
            </div>
            <ul>
              <li className="mb-5 ">
                <button className="px-1 border-4 border-indigo-200 rounded-lg border-b-indigo-500 bg-slate-600 hover:border-indigo-500">
                  <span className="flex justify-between gap-3">
                    <i className=" fa-brands fa-apple mr-[15px] mt-2 text-[25px]"></i>
                    <span>
                      <p className="text-ls">Oching</p>
                      <h1 className="text-xs">App Store</h1>
                    </span>
                  </span>
                </button>
              </li>
              <li>
                <button className="px-1 border-4 border-indigo-200 rounded-lg border-b-indigo-500 bg-slate-500 hover:border-indigo-500">
                  <span className="flex justify-between gap-3">
                    <i className=" fa-brands fa-google-play mr-[15px] mt-2 text-[25px]"></i>
                    <span>
                      <p className="text-ls">Oching</p>
                      <h1 className="text-xs">Google Play</h1>
                    </span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full pt-3 pb-4 bg-yellow-500 ">
        <div className="container flex justify-center mx-auto text-center">
          <div className="flex flex-wrap items-center justify-between ">
            <div className="mt-2">
              <p className="text-white ">
                © LimonPay LLC. Barcha huquqlar himoyalangan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
