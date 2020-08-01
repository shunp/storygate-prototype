import * as React from 'react'

const SearchBar = ({ searchWord, filter }) => {
  return (
    <div id="search-bar" className="flex flex-col w-full shadow-lg text-gray-600">
      <input
        type="search"
        placeholder="name / job / hobby etc..."
        className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-lg focus:outline-none"
        value={searchWord}
        onChange={e => filter(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
