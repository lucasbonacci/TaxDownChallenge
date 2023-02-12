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

            form = Object.entries(form.inputFields)
            form = form.map(([id, value]) => ({ id, ...value }))

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
