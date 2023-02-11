export const generateRandomId = () => {
  return Math.floor(100000000 + Math.random() * 900000000)
    .toString()
    .substr(0, 8)
}
