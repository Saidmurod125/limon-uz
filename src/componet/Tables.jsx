import Qizil from "./Qizil";
import Yashil from "./Yashil";

const Tables = () => {
  return (
    <table className="table-auto ">
      <tbody>
        <tr className="gap-5 mb-5 ">
          <td className="w-20 h-5 ">
            <img
              className="w-10 h-10 mb-5 rounded-full"
              src="https://icon2.cleanpng.com/20231224/vjo/transparent-american-flag-us-flag-horizontal-whitered-stripes-blue-field6588fc6bbce4f0.6109828917034763317737.jpg"
              alt="USD"
            />
          </td>
          <td>
            <p className="mb-5 mr-5">USD</p>
          </td>
          <td className="flex">
            10.14
            <Yashil />
          </td>
        </tr>
        <tr className="mb-5 ">
          <td>
            <img
              className="w-10 h-10 mb-5 rounded-full"
              src="data:image/png;base64,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"
              alt="EUR FLAG"
            />
          </td>
          <td>
            <p className="mb-5">EUR</p>
          </td>
          <td className="flex">
            -23.02
            <Qizil />
          </td>
        </tr>
        <tr className="">
          <td>
            <img
              className="w-10 h-10 mb-5 rounded-full"
              src="https://img.freepik.com/premium-vector/ruble-icon-with-flag-russia_638606-42.jpg"
              alt="RUB"
            />
          </td>
          <td>
            <p className="mb-5">RUB</p>
          </td>
          <td className="flex">
            -0.05
            <Qizil />
          </td>
        </tr>
        <tr>
          <td>
            <img
              className="w-10 h-10 mb-5 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1000px-Flag_of_Kazakhstan.svg.png"
              alt="KZT"
            />
          </td>
          <td>
            <p className="mb-5">KZT</p>
          </td>
          <td className="flex">
            0.09
            <Yashil />
          </td>
        </tr>
        <tr>
          <td>
            <img
              className="w-10 h-10 mb-5 rounded-full"
              src="data:image/png;base64,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"
              alt="TJS"
            />
          </td>
          <td>
            <p className="mb-5">TJS</p>
          </td>
          <td className="flex">
            1.45
            <Yashil />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Tables
