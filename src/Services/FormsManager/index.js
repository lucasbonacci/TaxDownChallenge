import database from '@react-native-firebase/database'
import { AlertError } from '@/Services/Alerts'

class FormsManager {
  constructor() {}

  getForm = path => {
    return new Promise((resolve, reject) => {
      try {
        let listRef = database().ref(path)

        listRef.once(
          'value',
          listSnap => {
            let form = listSnap.val()

            console.log(form)

            form = Object.entries(form.inputFields)
            form = form.map(([id, value]) => ({ id, ...value }))

            form = form.sort((a, b) => {
              if (a.id === 'picture') {
                return 1
              }
              if (b.id === 'picture') {
                return -1
              }
              return 0
            })

            resolve({
              form,
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
}
export default new FormsManager()
