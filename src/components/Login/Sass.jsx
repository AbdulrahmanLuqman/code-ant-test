import Azure from "../../assets/azure.png"
import BitBucket from "../../assets/bitbucket.png"
import Github from "../../assets/github.png"
import Gitlab from "../../assets/gitlab.png"

const Sass = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-4">
        <button className="w-[400px] border border-[#D8DAE5] py-4 rounded-[8px] flex gap-4 items-center justify-center">
            <img src={Github} alt="" />
            <span className="text-[#171717] font-semibold">Sign in with Github</span>
        </button>
        <button className="w-[400px] border border-[#D8DAE5] py-4 rounded-[8px] flex gap-4 items-center justify-center">
            <img src={BitBucket} alt="" />
            <span className="text-[#171717] font-semibold">Sign in with Bitbucket</span>
        </button>
        <button className="w-[400px] border border-[#D8DAE5] py-4 rounded-[8px] flex gap-4 items-center justify-center">
            <img src={Azure} alt="" />
            <span className="text-[#171717] font-semibold">Sign in with Azure Devops</span>
        </button> 
        <button className="w-[400px] border border-[#D8DAE5] py-4 rounded-[8px] flex gap-4 items-center justify-center">
            <img src={Gitlab} alt="" />
            <span className="text-[#171717] font-semibold">Sign in with GitLab</span>
        </button>
    </div>
  )
}

export default Sass