export const generateYear = () => {
  let arr = []
  for (let i = 1800; i <= 2023; i++) {
    arr.push({ label: i.toString(), value: i.toString() })
  }
  return arr
}

export const generateAge = () => {
  let arr = []
  for (let i = 0; i <= 100; i++) {
    arr.push({ label: i.toString(), value: i.toString() })
  }
  return arr
}
