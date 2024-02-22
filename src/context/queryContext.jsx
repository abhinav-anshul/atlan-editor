import { useState, createContext, useContext } from "react"

const QueryContext = createContext({
  query: "",
  setQuery: () => {},
})

export function QueryContextProvider({ children }) {
  const [query, setQuery] = useState("SELECT * FROM data;")
  return <QueryContext.Provider value={{ query, setQuery }}>{children}</QueryContext.Provider>
}

export const useQueryContext = () => useContext(QueryContext)
