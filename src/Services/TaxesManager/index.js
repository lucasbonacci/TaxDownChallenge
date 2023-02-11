import database from '@react-native-firebase/database'
import { AlertError } from '@/Services/Alerts'

class TaxesManager {
  constructor() {}

  getTaxesList = () => {
    return new Promise((resolve, reject) => {
      try {
        let listRef = database().ref(`taxes`)

        listRef.once(
          'value',
          listSnap => {
            const list = listSnap.val()

            const processedList = []

            // process events object to an array
            for (const key in list) {
              processedList.push({
                ...list[key],
                id: key,
              })
            }

            const activeTaxes = processedList.filter(tax => tax.active === true)
            const inactiveTaxes = processedList.filter(
              tax => tax.active === false,
            )

            resolve({
              activeTaxes,
              inactiveTaxes,
            })
          },
          error => {
            AlertError(error)
            reject()
          },
        )
      } catch (error) {
        AlertError(error)
        reject()
      }
    })
  }

  addTax = async data => {
    return new Promise((resolve, reject) => {
      try {
        const collectionRef = database().ref('taxes')

        collectionRef.push(data)
        resolve(data)
      } catch (error) {
        AlertError(error)
        reject()
      }
    })
  }
}
export default new TaxesManager()
