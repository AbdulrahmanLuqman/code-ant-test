import {RepositoryApi} from "./RepositoryApi"
import {Database} from "../Icons"
const Repositories = ({inputValue}) => {

  const displayedRepo = inputValue ? RepositoryApi.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase())) : RepositoryApi
  return (
    <div className="w-full">
      {
        displayedRepo.map((Repo, id) =>
          <div key={id} className={`border-y py-6 px-3 flex flex-col gap-3 ${id % 2 === 0 ? "bg-white" : "bg-[whitesmoke]"}`}>
            <div className="flex gap-2 items-center">
              <h3 className="font-medium">{Repo.title}</h3>
              <div className="border border-[#B2DDFF] rounded-[200px] px-[10px] py-1 text-[14px] text-[#175CD3]">{Repo.status}</div>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex gap-2 items-center">
                <span>{Repo.codeWith}</span>
               <div className="w-2 h-2 bg-[#1570EF] rounded-[50%]"></div>
              </div>

              <div className="flex min-[419px]:gap-2 items-center">
                <Database />
                <span>{Repo.storage}</span>
                <span>KB</span>
              </div>

              <span>{Repo.update}</span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Repositories