
const Ifag = () => {
  return (
    <div className=" bg-slate-100">
      <div className="container flex gap-5 pt-10 pb-10 mx-auto">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/2EDWtnrYRwo?si=LpZqfWAtb9YWoqBd&amp;start=32"
          title="YouTube video player"
          // frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/x6ivSDq_Kw8?si=CxakSSqiXipBMo1N&amp;start=5"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Ifag
