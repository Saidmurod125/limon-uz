
const Navv = () => {
  return (
    <div className="container flex mx-auto mt-20 text-white ">
      <div>
        <h1 className="text-3xl ">
          LimonPay - biz sizga kerak bo`lgan narsani qila olamiz  <span className="text-3xl text-lime-500">:)</span>
        </h1>
        <p className="mb-5 mt-5 w-[51%]">
          Biz orqali siz butun mamlakat bo`ylab pul o`tkazishingiz va
          to`lovlarni qulay va xavfsiz tarzda <br /> amalga oshirishingiz
          mumkin. Xaridlar uchun veb-saytimiz va mobil ilovamiz orqali to`lang.
        </p>
        <div className="mt-10 ">
          <button className="transform rounded-md  bg-yellow-500 px-4 py-2 font-bold text-white transition duration-700 ease-in-out hover:translate-y-[-10px] hover:bg-yellow-300">
            Kuppaala o`rganing
          </button>
          <button className="transform rounded-md  bg-white px-4 py-2 font-bold text-black transition duration-700 ease-in-out hover:translate-y-[-10px] ml-3">
          Hisobingizga kirsh
          </button>
        </div>
      </div>
      <div>
        <img src="../../public/iphone-4-807d87d7.png" className="w-[400px] ml-10  mt-2" alt="" />
      </div>
    </div>
  );
}

export default Navv
