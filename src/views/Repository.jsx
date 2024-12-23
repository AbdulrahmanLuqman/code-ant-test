import SearchBar from "../components/Repository/SearchBar"
import Repositories from "../components/Repository/Repositories"
import { useState } from "react"


const Repository = () => {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="border border-[#E9EAEB] bg-white md:rounded-xl w-full">
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      <Repositories inputValue={inputValue} />
    </div>
  )
}

export default Repository