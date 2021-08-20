export const reverseCardColor = cardColor =>
  cardColor === "yellow" ? `purple` : `yellow`

export const getRGB = cardColor =>
  cardColor === "yellow" ? `253, 216, 22` : `129, 28, 98`

export const randomGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
