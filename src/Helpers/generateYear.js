export const generateYear = () => {
  let arr = []
  for (let i = 1800; i <= 2023; i++) {
    arr.push({ label: i.toString(), value: i.toString() })
  }
  return arr
}
