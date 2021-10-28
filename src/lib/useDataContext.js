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
      "{salutation} {familyName},\n\nAm 26. September haben über 1 Million Berliner:innen für die Vergesellschaftung großer Wohnungsunternehmen gestimmt. Die Initiative Deutsche Wohnen & Co enteignen war somit erfolgreich. Daraus ergibt sich für gewählte Volksvertreter:innen ein klarer demokratischer Auftrag. \nSie wurden in meinem Wahlbezirk {constituencyName} gewählt. Sie stehen also in der Verantwortung, im Sinne von 59,1 % der gültigen Stimmen der Berliner Bevölkerung den Volksentscheid jetzt umzusetzen.\nIch fordere Sie mit diesem Schreiben auf, im Sinne des Volksentscheids den Prozess der Enteignung privater, profitorientierter Immobiliengesellschaften nach Artikel 15 Grundgesetz wie demokratisch beschlossen auf den Weg zu bringen sowie Ihre Wähler:innen regelmäßig darüber zu informieren, welche entsprechenden Maßnahmen Sie im Abgeordnetenhaus ergriffen haben.\n\nMit freundlichen Grüßen,",
  },
}

const context = createContext(initialState)

export const { Provider } = context

const useDataContext = () => useContext(context)

export default useDataContext
