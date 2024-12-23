import { useState } from "react"
import Logo from "../../assets/logo.png"
import Sass from "./Sass"
import SelfHosted from "./SelfHosted"
const Form = () => {
    const [isSassActive, setIsSassActive] = useState(true)
  return (
    <div className="lg:w-[45%] md:w-[500px] w-full mx-auto lg:mx-6 flex flex-col gap-4 items-center">
        <div className="w-full lg:h-[580px] border border-[#E9EAEB] rounded-xl bg-white py-9 px-6 space-y-6">
            <div className="flex flex-col items-center gap-5">
                <div className="flex flex-col items-center gap-9">
                    <img src={Logo} alt="logo" />
                    <h2 className="font-semibold text-[32px] text-[#181D27]">Welcome to CodeAnt AI</h2>
                </div>
                <div className="flex w-full">
                    <button onClick={()=> setIsSassActive(true)} className={`w-full shadow shadow-[#0A0D120D] py-4 px-[14px] font-semibold text-[20px] ${isSassActive ? "bg-[#1570EF] text-white rounded-[8px]" : "border border-[#E9EAEB] bg-[#FAFAFA] rounded-tl-[8px] rounded-bl-[8px]"}`}>SASS</button>
                    <button onClick={()=> setIsSassActive(false)} className={`w-full shadow shadow-[#0A0D120D] py-4 px-[14px] font-semibold text-[20px] ${isSassActive ? "border border-[#E9EAEB] bg-[#FAFAFA] rounded-tr-[8px] rounded-br-[8px]" : "bg-[#1570EF] text-white rounded-[8px]"}`}>Self Hosted</button>
                </div>
            </div>
            <>{isSassActive ? <Sass /> : <SelfHosted />}</>
        </div>
        <span>By signing up you agree to the <b>Privacy Policy</b>.</span>
    </div>
  )
}

export default Form