
const Meting = () => {
  return (
    <div className="bg-white ">
      <div className="container flex gap-5 mx-auto mt-10 ">
        <div className="flex  w-[400px] flex-col items-center">
          <img
            className="w-[100px]"
            src="https://limonpay.uz/svg/monitoring.png"
            alt="Monitoring"
          />
          <h2 className="mt-10 font-mono text-2xl">Monitoring</h2>
          <p className="mt-10 text-center">
            To`g`ridan-to`g`ri smartfoningizdan pulni boshqarishning eng oson
            usuli. Dunyoning istalgan joyida. Istalgan vaqtda. Har qanday
            vaziyatda.
          </p>
        </div>
        <div className="flex  w-[400px] flex-col items-center">
          <img
            className="w-[100px]"
            src="https://limonpay.uz/svg/transfer.png"
            alt="To`lovlar"
          />
          <h2 className="mt-10 font-mono text-2xl">To`lovlar</h2>
          <p className="mt-10 text-center">
            Bu jismoniy bank kartalari va naqd puldan ko`ra qulayroq va
            xavfsizroq, shuningdek do`konlarda to`lovni to`lashda shaxsiy
            ma`lumotlaringizni himoya qilish imkonini beradi.
          </p>
        </div>
        <div className="flex  w-[400px] flex-col items-center">
          <img
            className="w-[100px]"
            src="https://limonpay.uz/svg/rocket.png"
            alt="Tezkor javob"
          />
          <h2 className="mt-2 font-mono text-2xl ">Tezkor javob</h2>
          <p className="mt-10 text-center">
            Agar sizga nomaqbul firibgardan qo`ng`iroq kelib tushsa yoki
            yoqimsiz dasturiy xatolarga duch kelsangiz, iltimos, bizning
            Call-markazga murojaat qiling. Biz doimo aloqadamiz!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Meting
