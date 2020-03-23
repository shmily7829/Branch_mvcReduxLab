import axios from 'axios'

export default {
    SaveFormData: (formData) => {
        const url = '/ReduxLab/Branch/SaveFormData'
        return axios.post(url, formData)
    },
    QryDataList: (args) => {
        const url = '/ReduxLab/Branch/QryDataList'
        return axios.post(url, args)
    },
    //DelFormData: (formData) => {
    //    const url = '/ReduxLab/Branch/DelFormData'
    //    return axios.post(url, formData)
    //}
}

//export const a = {
//    SaveFormData: (formData) => {
//        const url = '/ReduxLab/Branch/SaveFormData'
//        return axios.post(url, args)
//    },
//    QryDataList: (args) => {
//        const url = '/ReduxLab/Branch/QryDataList'
//        return axios.post(url, args)
//    }
//}

