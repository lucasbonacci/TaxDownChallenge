import database from '@react-native-firebase/database'
import { AlertError } from '@/Services/Alerts'

class TaxesManager {
  constructor() {}

  getTaxesList = data => {
    return new Promise((resolve, reject) => {
      try {
        let listRef = database().ref(`taxes`)

        listRef.once(
          'value',
          listSnap => {
            const list = listSnap.val()

            let processedList = []

            // process events object to an array
            for (const key in list) {
              processedList.push({
                ...list[key],
                id: key,
              })
            }

            // Filtrado por name
            if (data.searchDebounce) {
              processedList = processedList.filter(tax =>
                tax.name
                  .toLowerCase()
                  .includes(data.searchDebounce.toLowerCase()),
              )
            }

            // Filtrado por age
            if (data.selectedAgeDebounce) {
              processedList = processedList.filter(
                tax => tax.age === data.selectedAgeDebounce,
              )
            }

            // Filtrado por year
            if (data.selectedYearDebounce) {
              processedList = processedList.filter(tax =>
                tax.year
                  .toLowerCase()
                  .includes(data.selectedYearDebounce.toLowerCase()),
              )
            }

            // Filtrado por active
            if (data.statusTaxesDebounce !== 'allTaxes') {
              processedList = processedList.filter(
                tax =>
                  tax.active === (data.statusTaxesDebounce === 'activeTaxes'),
              )
            }

            resolve({
              list: processedList,
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

  getTaxSubmission = (data, id) => {
    return new Promise((resolve, reject) => {
      console.log(data, id)
      try {
        let listRef = database().ref(`taxes/${id}/form`)

        listRef.once(
          'value',
          listSnap => {
            let list = listSnap.val()

            if (list !== null) {
              list = Object.entries(list).map(([id, details]) => ({
                id,
                ...details,
              }))

              // Filtrado por name
              if (data.searchDebounce) {
                list = list.filter(submission =>
                  submission.name
                    .toLowerCase()
                    .includes(data.searchDebounce.toLowerCase()),
                )
              }

              // Filtrado por age
              if (data.selectedAgeDebounce) {
                list = list.filter(
                  submission => submission.age === data.selectedAgeDebounce,
                )
              }
            }

            resolve({
              list,
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

  deleteTax = async id => {
    return new Promise((resolve, reject) => {
      try {
        const collectionRef = database().ref(`taxes/${id}`)
        collectionRef.ref.remove()
        resolve()
      } catch (error) {
        AlertError(error)
        reject()
      }
    })
  }

  addSubmission = async (data, id) => {
    return new Promise((resolve, reject) => {
      try {
        const collectionRef = database().ref(`taxes/${id}/form`)
        collectionRef.ref.push(data)
        resolve()
      } catch (error) {
        AlertError(error)
        reject()
      }
    })
  }
}
export default new TaxesManager()
