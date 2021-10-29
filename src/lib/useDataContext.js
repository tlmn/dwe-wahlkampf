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
    initialTexts: [
      "{salutation} {title}{familyName},\n\nAm 26. September haben über 1 Million Berliner:innen für die Vergesellschaftung großer Wohnungsunternehmen gestimmt. Die Initiative Deutsche Wohnen & Co enteignen war somit erfolgreich. Daraus ergibt sich für gewählte Volksvertreter:innen ein klarer demokratischer Auftrag. \nSie wurden in meinem Wahlkreis {constituencyName} gewählt. Sie stehen also in der Verantwortung, im Sinne von 59,1 % der gültigen Stimmen der Berliner Bevölkerung den Volksentscheid jetzt umzusetzen.\nIch fordere Sie mit diesem Schreiben auf, im Sinne des Volksentscheids den Prozess der Enteignung privater, profitorientierter Immobiliengesellschaften nach Artikel 15 Grundgesetz wie demokratisch beschlossen auf den Weg zu bringen sowie Ihre Wähler:innen regelmäßig darüber zu informieren, welche entsprechenden Maßnahmen Sie im Abgeordnetenhaus ergriffen haben.\n\nMit freundlichen Grüßen,",
      "{salutation} {title}{familyName},\n\ndie Wahl am 26. September war eindeutig. Über 1 Million Berlinerinnen und Berliner haben mit JA für die Vergesellschaftung gestimmt. Der Volksentscheid „Deutsche Wohnen und Co enteignen“ war somit erfolgreich und muss umgesetzt werden.\nSie wurden in meinem Wahlkreis {constituencyName} mit einer Mehrheit von {resultDeputee} Prozent gewählt. Wenn ganze 59,1 Prozent der gültigen Stimmen ein Vorhaben unterstützen, entsteht daraus ein klarer demokratischer Auftrag. Ich fordere Sie mit diesem Schreiben auf, die Verantwortung zu übernehmen und sich konstruktiv am Gesetzgebungsprozess für die Vergesellschaftung der Bestände privater Wohnungskonzerne nach Artikel 15 Grundgesetz zu beteiligen.  \nSetzen Sie noch heute ein Zeichen und positionieren Sie sich öffentlich für die Umsetzung des Volksentscheids im Sinne der Berliner Bevölkerung!\n\nMit freundlichen Grüßen",
    ],
  },
}

const context = createContext(initialState)

export const { Provider } = context

const useDataContext = () => useContext(context)

export default useDataContext
