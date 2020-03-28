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
    DelFormData: (formData) => {
        const url = '/ReduxLab/Branch/DelFormData'
        return axios.post(url, formData)
    },
    UploadOneFile(file) { /// 此處 file := <INPUT TYPE='FILE' />
        const url = '/ReduxLab/Branch/UploadOneFile'
        const config = { headers: { 'content-type': 'multipart/form-data' } }

        let formData = new FormData() ///<------ key code
        formData.append('file', file)

        return axios.post(url, formData, config)
    }
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

