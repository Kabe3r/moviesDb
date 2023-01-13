import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {query, setQuery} = useGlobalContext();

  return (
    <form className="search-form">
      <input type="text" className="form-input"  value={query} onChange={(e) => setQuery(e.target.value)}/>
    </form>
  )
}

export default SearchForm
