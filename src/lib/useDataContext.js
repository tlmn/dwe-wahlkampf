import { createContext, useContext } from "react"

export const initialState = {
  currentLocale: "de",
  showModal: false,
  arguments: { activeIndex: 0 },
  facts: { activeIndex: 0 },
}

const context = createContext(initialState)

export const { Provider } = context

const useDataContext = () => useContext(context)

export default useDataContext
