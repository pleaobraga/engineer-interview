
import { forIn } from 'lodash'


export const ObjectToArray = (obj) => {
    const resultArray = []

    forIn(obj, (value) => {
        resultArray.push(value)
    })

    return resultArray
}
