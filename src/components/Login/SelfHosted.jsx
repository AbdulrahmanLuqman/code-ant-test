import Gitlab from "../../assets/gitlab.png"
import Sso from "../../assets/sso.png"

const SelfHosted = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-4">
        <button className="w-[400px] border border-[#D8DAE5] py-4 rounded-[8px] flex gap-4 items-center justify-center">
            <img src={Gitlab} alt="" />
            <span className="text-[#171717] font-semibold">Sign in with GitLab</span>
        </button>
        <button className="w-[400px] border border-[#D8DAE5] py-4 rounded-[8px] flex gap-4 items-center justify-center">
            <img src={Sso} alt="" />
            <span className="text-[#171717] font-semibold">Sign in with SSO</span>
        </button>
    </div>
  )
}

export default SelfHosted