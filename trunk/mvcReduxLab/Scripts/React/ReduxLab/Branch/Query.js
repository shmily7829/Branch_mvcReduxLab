import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import actions, { Ks } from 'CommonFF/actions.js'
import TextField from 'CommonMA/FormInputFields/TextField.js'
//import { default as apiClient } from './apiClient.js'
//import { a } from './apiClient.js'
import apiClient from './apiClient.js'
import XLSX from "xlsx";
import InputFiles from "react-input-files";

class Query extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        //this.handleInputChange = this.handleInputChange.bind(this)
        this.handleLoadFormData = this.handleLoadFormData.bind(this)
        this.handleSaveFormData = this.handleSaveFormData.bind(this)
        this.handleDelFormData = this.handleDelFormData.bind(this)
    }

    render() {
        const { handleValueChange, branchInfo } = this.props

        return (

            <Container className="mt-2 bg-secondary text-white rounded">
                <h2>§ 帳號基本資料</h2>
                <Row>
                    <Col md={4}>
                        <TextField label="分行代號" name="Branch_ID"
                            value={branchInfo.Branch_ID || ''}
                            onChange={handleValueChange}
                        />
                    </Col>
                    <Col md={4}>
                        <TextField label="分行名稱" name="Branch_Name" 
                            value={branchInfo.Branch_Name || ''}
                            onChange={handleValueChange}
                        />
                    </Col>
                    <Col md={4}>
                        <TextField label="地址" name="Address"
                            value={branchInfo.Address || ''}
                            onChange={handleValueChange}
                        />
                    </Col>
                </Row>

                {/*<Commandbar />*/}
                <div className="container">
                    <button type="button" className="btn btn-primary btn-lg m-1" onClick={this.handleSaveFormData}>新增</button>
                    <button type="button" className="btn btn-warning btn-lg m-1" onClick={this.handleLoadFormData}>查詢</button>
                    <button type="button" className="btn btn-warning btn-lg m-1" onClick={this.handleDelFormData}>刪除</button>
                    <InputFiles accept=".xlsx, .xls" onChange={this.onImportExcel}>
                        <button className="btn btn-info">Upload</button>
                    </InputFiles>
                 </div>
            </Container>

        )
    }

    //handleInputChange(e) {
    //    const target = e.target
    //    //const value = target.type === 'checkbox' ? target.checked : target.value
    //    const name = target.name

    //    // 法1:
    //    const action = { type: Ks.ASSIGN_VALUE, name, value }
    //    this.props.dispatch(action)

    //    // 法2:
    //    this.props.dispatch(actions.assignValue(name, value))

    //    // 法3: --- 過度包裝，除非有 高度共用性
    //    this.props.handleValueChange(name, value)

    //    // 法4: *** 回歸最原生的方法，反而是綜合考量後的最佳解 
    //    this.props.dispatch({ type: Ks.ASSIGN_VALUE, name, value })

    //    //this.setState({
    //    //    [name]: value
    //    //})
    //}

    //新增
    handleSaveFormData() {
        const { formData } = this.props
        console.log('handleSaveFormData', { formData })
        //this.props.setBlocking(true)
        apiClient.SaveFormData(formData).then((resp) => {
            console.log('SaveFormData success', { resp })
            swal.fire('SaveFormData success', 'success')
        }).catch((xhr) => {
            console.log('SaveFormData fail!', { xhr })
            swal.fire('SaveFormData fail!')
        }).finally(() => {
            //this.props.setBlocking(false)
        })
    }

    //查詢
    handleLoadFormData() {
        const args = { title: 'ACB', isDone: true }
        apiClient.QryDataList(args).then((resp) => {
            const dataList = resp.data
            console.log('LoadFormData success', { dataList })
            //傳送到store
            //const { dispatch } = this.props // get resource
            this.props.dispatch(actions.assignProps({ dataList }, 'branchReducer'))

        }).catch((xhr) => {
            console.log('LoadFormData fail!', { xhr })
        })
    }

    //刪除
    handleDelFormData() {
        const { formData } = this.props
        console.log('handleDelFormData', { formData })
        //this.props.setBlocking(true)
        apiClient.DelFormData(formData).then((resp) => {
            console.log('DelFormData success', { resp })
            swal.fire('DelFormData success', 'success')
        }).catch((xhr) => {
            console.log('DelFormData fail!', { xhr })
            swal.fire('DelFormData fail!')
        }).finally(() => {
            //this.props.setBlocking(false)
        })
    }

    //上傳EXCEL
    onImportExcel = files => {
        // 獲取上傳的文件對象
        //const { files } = file.target; // 通過FileReader對象讀取文件
        const fileReader = new FileReader();
        //console.log(fileReader);
        for (let index = 0; index < files.length; index++) {
            fileReader.name = files[index].name;
        }
        fileReader.onload = event => {
            try {
                // 判斷上傳檔案的類型 可接受的附檔名
                const validExts = new Array(".xlsx", ".xls");
                const fileExt = event.target.name;

                if (fileExt == null) {
                    throw "檔案為空值";
                }

                const fileExtlastof = fileExt.substring(fileExt.lastIndexOf("."));
                if (validExts.indexOf(fileExtlastof) == -1) {
                    throw "檔案類型錯誤，可接受的副檔名有：" + validExts.toString();
                }

                const { result } = event.target; // 以二進制流方式讀取得到整份excel表格對象
                const workbook = XLSX.read(result, { type: "binary" });
                let data = []; // 存儲獲取到的數據 // 遍歷每張工作表進行讀取（這裡默認只讀取第一張表）
                for (const sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        // 利用 sheet_to_json 方法將 excel 轉成 json 數據
                        data = data.concat(
                            XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
                        ); // break; // 如果只取第一張表，就取消註釋這行
                    }
                }
                console.log(data);
            } catch (e) {
                // 這裡可以拋出文件類型錯誤不正確的相關提示
                alert(e);
                //console.log("文件類型不正確");
                return;
            }
        }; // 以二進制方式打開文件
        fileReader.readAsBinaryString(files[0]);
    };
}

//從store取資料回來
const mapStateToProps = (state, ownProps) => {
    return {
        branchInfo: state.branchInfo,
        formData: {
            Branch_ID: state.branchInfo.Branch_ID,
            Branch_Name: state.branchInfo.Branch_Name,
            Address: state.branchInfo.Address
        }
    }
}

//把資料存到store
const mapDispatchToProps = (dispatch, ownProps) => {
    const targetReducer = 'branchReducer'
    return {
        dispatch,
        handleValueChange: (name, value) => {
            dispatch({
                type: Ks.ASSIGN_VALUE,
                name,
                value,
                targetReducer,

            })
        },
        assignStateProps: (properties) => {
            dispatch({
                type: Ks.ASSIGN_STATE_PROPS,
                properties,
                targetReducer
            })
        }
    }
}

//export default FormViewAccount;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Query);
