import { createContext, useContext } from "react"

export const initialState = {
  showModal: false,
  arguments: {
    activeIndex: 0,
    cardColor: "yellow",
    length: 6,
    stack: "arguments",
  },
  facts: { activeIndex: 0, cardColor: "purple", length: 4, stack: "facts" },
  letter: {
    constituency: {},
    text: "",
    textInitial:
      '{salutation} {familyName},\n1,04 Millionen Berliner:innen haben für den Volksentscheid "Deutsche Wohnen & Co. enteignen" gestimmt! Damit hat sich eine große Mehrheit für die Enteignung großer Wohnungskonzerne ausgesprochen. Auch in Ihrem Wahlkreis stimmten {resultYes}% für den Volksentscheid. Auch ich unterstütze die Enteignungspläne. Nur so kann die Mietenkrise in Berlin wirklich gestoppt werden.',
  },
}

const context = createContext(initialState)

export const { Provider } = context

const useDataContext = () => useContext(context)

export default useDataContext
