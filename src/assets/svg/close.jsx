import React from "react"

const CloseIcon = ({ className = "", fillColor = "yellow" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="71"
    fill="none"
    viewBox="0 0 70 71"
    className={`icon__languageSwitch animated ${className} fill-${fillColor}`}
  >
    <path
      d="M47.88 27.436c.276-.26.5-.575.656-.923a2.954 2.954 0 00-.513-3.2 2.878 2.878 0 00-.91-.664 2.84 2.84 0 00-3.154.52l-8.413 7.957-7.843-8.537a2.856 2.856 0 00-1.99-.878 2.852 2.852 0 00-2.028.783 2.935 2.935 0 00-.91 1.998 2.943 2.943 0 00.725 2.075l7.843 8.534-8.415 7.957a2.914 2.914 0 00-.683.923 2.951 2.951 0 00.494 3.244 2.839 2.839 0 004.11.097l8.413-7.953 7.843 8.534c.253.295.562.536.91.707a2.843 2.843 0 003.22-.488c.282-.267.508-.589.666-.946a2.952 2.952 0 00-.593-3.249l-7.84-8.534 8.412-7.957z"
    />
    <path
      fillRule="evenodd"
      d="M3.778 35.247c0-17.718 14.16-32.083 31.625-32.083s31.625 14.365 31.625 32.083c0 17.719-14.16 32.084-31.625 32.084-17.466 0-31.625-14.365-31.625-32.084zm31.625 26.25c-3.398 0-6.763-.679-9.902-1.998a25.854 25.854 0 01-8.395-5.69 26.28 26.28 0 01-5.609-8.516 26.581 26.581 0 01-1.97-10.046c0-3.447.67-6.86 1.97-10.045a26.28 26.28 0 015.61-8.516 25.854 25.854 0 018.394-5.69 25.554 25.554 0 019.902-1.999c6.862 0 13.444 2.766 18.296 7.689 4.853 4.923 7.579 11.6 7.579 18.561 0 6.962-2.726 13.639-7.579 18.562-4.852 4.923-11.434 7.688-18.296 7.688z"
      clipRule="evenodd"
    />
  </svg>
)

export default CloseIcon
