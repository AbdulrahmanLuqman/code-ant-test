import Logo from "../../assets/tinyLogo.png"
import PieChart from "../../assets/pieChart.png"
import { ArrowUp } from "../Icons"
const Card = () => {
  return (
    <div className="hidden w-[55%] h-screen bg-white lg:flex items-center justify-center">
        <div className="relative w-fit h-[322px]">
            <div className="bg-white border border-[#E9EAEB] shadow-md shadow-[#08173529] rounded-3xl w-[440px] flex flex-col items-center">
            <h2 className="flex items-center gap-2 p-5">
                <img src={Logo} alt="Logo" />
                <span className="text-[#081735] font-bold text-[18px]">AI to Detect & Autofix Bad Code</span>
            </h2>

            <div className="border-t w-full p-5 flex justify-between">
                <div className="flex flex-col items-center">
                    <h3 className="text-[#081735] font-bold text-[18px]">30+</h3>
                    <span className="text-[14px] text-[#171717]">Language Support</span>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-[#081735] font-bold text-[18px]">10K+</h3>
                    <span className="text-[14px] text-[#171717]">Developers</span>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-[#081735] font-bold text-[18px]">100K+</h3>
                    <span className="text-[14px] text-[#171717]">Hours Saved</span>
                </div>
            </div>
            </div>

            <div className="absolute top-[145px] right-[-30px] bg-white w-[265px] rounded-3xl p-4 shadow-md shadow-[#08173529] border border-[#E9EAEB] flex flex-col gap-3">
            <div className="flex justify-between">
                <div className="p-4 rounded-[50%] bg-[#9D90FA40] w-fit"><img src={PieChart} alt="Pie Chart" /></div>
                <div>
                    <div className="flex gap-2 items-center">
                        <ArrowUp />
                        <span className="text-[#0049C6]">14%</span>
                    </div>
                    <span className="text-[12px] text-[#171717]">This week</span>
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-bold text-[#171717]">Issues Fixed</span>
                <span className="text-[32px] text-[#081735] font-bold">500K+</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Card