import { Plus, Refresh, Search } from "../Icons"
import { RepositoryApi } from "./RepositoryApi"
const SearchBar = ({inputValue, setInputValue}) => {
  const REPOlENGTH = RepositoryApi.length

  return (
    <div className="p-3 space-y-4">
      <div className="flex gap-4 flex-wrap md:justify-between">
        <div className="space-y-1">
          <h1 className="text-[#181D27] font-semibold text-xl">Repositories</h1>
          <span className="text-[#414651] text-[14px]">{REPOlENGTH} total repositories</span>
        </div>

        <div className="flex  items-center gap-3">
          <button className="flex gap-1 items-center border border-[#D5D7DA] py-[10px] px-[14px] rounded-lg hover:bg-[whitesmoke]">
            <span><Refresh /></span>
            <span className="text-[14px] text-[#414651]">Refresh All</span>
          </button>
          <button className="flex gap-1 items-center border border-[#D5D7DA] py-[10px] px-[14px] rounded-lg bg-[#1570EF]">
            <span><Plus /></span>
            <span className="text-[14px] text-white">Add Repository</span>
          </button>
        </div>
      </div>
      <div className="border border-[#D5D7DA] rounded-md py-[10px] px-[14px] md:w-[360px] flex gap-2 items-center">
        <Search />
        <input onChange={e=> setInputValue(e.target.value)} value={inputValue} type="text" placeholder="Search Repositories" className="outline-none w-full h-full" />
      </div>
    </div>
  )
}

export default SearchBar