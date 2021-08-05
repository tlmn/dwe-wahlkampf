import { createContext, useContext } from "react"

export const initialState = {
  currentLocale: "de",
  showModal: false,
  arguments: {
    activeIndex: 0,
    cardColor: "yellow",
    length: 5,
    stack: "arguments",
  },
  facts: { activeIndex: 0, cardColor: "purple", length: 3, stack: "facts" },
}

const context = createContext(initialState)

export const { Provider } = context

const useDataContext = () => useContext(context)

export default useDataContext
