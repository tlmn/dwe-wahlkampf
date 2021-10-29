import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import Title from "../atoms/title"
import FormButton from "../atoms/formButton"
import LinkButton from "../atoms/linkButton"
import useDataContext from "../../lib/useDataContext"

const Letter = () => {
  const { state, setState } = useDataContext()
  const { constituency, text } = state.letter
  const refAddress = useRef(null)
  const [random, setRandom] = useState(0)

  useEffect(() => {
    setState(prev => ({
      ...prev,
      letter: {
        ...prev.letter,
        text: prev.letter.initialTexts[random]
          .replace(
            "{salutation}",
            constituency?.deputee?.gender === "male"
              ? `Sehr geehrter Herr`
              : `Sehr geehrte Frau`
          )
          .replace("{familyName}", constituency?.deputee?.familyName)
          .replace(
            "{resultYes}",
            Math.round(parseFloat(constituency?.result?.ja) * 100 * 10) / 10
          )
          .replace("{constituencyName}", constituency?.name)
          .replace(
            "{resultDeputee}",
            (
              Math.round(
                parseFloat(constituency?.deputee?.resultDeputee) * 100 * 10
              ) / 10
            )
              .toString()
              .replace(".", ",")
          ),
      },
    }))
  }, [state.letter.constituency])

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 2))
  }, [])

  const getConstituency = address => {
    let config = {
      method: "get",
      url: `https://dwe-abgeordnetencheck.onrender.com/?address=${encodeURIComponent(
        address
      )}`,
      headers: {},
    }

    axios(config)
      .then(res =>
        setState(prev => ({
          ...prev,
          letter: { ...prev.letter, constituency: res.data.data },
        }))
      )
      .catch(err => console.log(err))
  }
  return (
    <div className="bg-purple" id="letter">
      <div
        className="bg-yellow flex flex-col items-center justify-center py-16"
        style={{
          clipPath:
            "polygon(0% 0%, calc(50% - 30px) 0%, 50% 30px, calc(50% + 30px) 0%, 100% 0%, 100% 101%, 0% 101%)",
        }}
      >
        <div className="flex flex-col justify-center w-full container">
          <Title className="text-yellow bg-purple">
            Schreib deiner:m Abgeordneten!
          </Title>
          <div className="grid grid-cols-6">
            <div className="col-span-full md:col-span-4 md:col-start-2">
              <div className="flex flex-col justify-center items-center gap-2 py-4">
                <h3 className="text-xl text-purple">
                  Gib <b>Deine Straße, Hausnummer und Bezirk</b> ein und finde
                  Deine:n Abgeordnete:n.
                </h3>
                <div className="flex flex-col md:flex-row gap-2">
                  <input
                    ref={refAddress}
                    className="block bg-yellow text-center text-purple placeholder-purple border-2 border-purple py-1 px-3"
                    placeholder="Musterstraße 10, Bezirk"
                    onKeyDown={e =>
                      e.key === "Enter" &&
                      getConstituency(refAddress.current.value)
                    }
                  />
                  <FormButton
                    onClick={() => getConstituency(refAddress.current.value)}
                  >
                    Meine:n Abgeordnete:n finden
                  </FormButton>
                </div>
              </div>
              {constituency?.status === "address found" && (
                <>
                  <h3 className="text-xl text-purple text-center">
                    {constituency?.deputee?.gender === "male"
                      ? `Dein direkt gewählter Abgeordneter`
                      : `Deine direkt gewählte Abgeordnete`}{" "}
                    im Wahlkreis <strong>{constituency?.name}</strong> ist{" "}
                    <strong>
                      {constituency?.deputee?.surname}{" "}
                      {constituency?.deputee?.familyName}
                    </strong>{" "}
                    ({constituency?.deputee?.party}).
                    <br /> Unten findest Du einen Textvorschlag für einen Brief
                    oder eine E-Mail an{" "}
                    {constituency?.deputee?.gender === "male" ? `ihn` : `sie`}.
                    Du kannst den Text bearbeiten und gern um eigene Argumente
                    und Fragen ergänzen.
                  </h3>
                  <div className="flex flex-col gap-2 items-center">
                    <div className="flex gap-2 py-3">
                      <LinkButton
                        href={`mailto:${
                          constituency?.deputee?.mail
                        }?subject=${encodeURIComponent(
                          `Den Volksentscheid Deutsche Wohnen & Co enteignen jetzt umsetzen!`
                        )}&body=${encodeURIComponent(text)}`}
                      >
                        Jetzt E-Mail senden
                      </LinkButton>
                      <FormButton
                        onClick={() =>
                          navigator.clipboard.writeText(
                            constituency?.deputee?.addressee +
                              `\n` +
                              constituency?.deputee?.street +
                              `\n` +
                              constituency?.deputee?.zipCode +
                              `\n\n\n\n` +
                              text
                          )
                        }
                      >
                        Text kopieren
                      </FormButton>
                    </div>
                    <textarea
                      value={text}
                      rows={15}
                      onChange={e =>
                        setState(prev => ({
                          ...prev,
                          letter: {
                            ...prev.letter,
                            letterText: e.target.value,
                          },
                        }))
                      }
                      className="bg-yellow text-purple placeholder-purple border-2 border-purple py-1 px-3 resize-none w-full md:w-3/4"
                    />
                  </div>
                </>
              )}
              {constituency?.status === "address not found" && (
                <h3 className="text-xl text-purple text-center">
                  Leider konnten wir den Wahlkreis für Deine Adresse nicht
                  ermitteln. Schau noch mal, ob du Deine Straße richtig
                  geschrieben hast und tippe auch die Postleitzahl ein.
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Letter
