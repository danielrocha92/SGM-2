import React, { useState, useEffect } from 'react';
import { 
    CButton,
    CCard, 
    CCardBody, 
    CCardHeader, 
    CCol, 
    CDataTable, 
    CRow 
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

//import useApi from '../services/api';

export default () => {
    //const api = useApi();

    //const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    const fields = [
        {label: "Título", key: 'title'},
        {label: "Data de criação", key: 'datecreated'},
        {label: "Ações", key: 'actions'}

    ]


    /*useEffect(() => {
        getList();
    }), [];

    const getList = async () => {
        setLoading(true);
        const result = await api;getwall();
        setLoading(false);
        if(result.erro === '') {
            setList(result.list);
        } else {
            alert(result.error);
        }
    }*/
    
    return(
        <CRow>
            <CCol>
                <h2>Mural de Avisos</h2>

                <CCard>
                    <CCardHeader>
                        <CButton color="primary">
                            <CIcon name="cil-check" /> Novo Aviso
                        </CButton>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable 
                            items={list}
                            fields={fields} 
                            //loading={loading}
                            noItemsViewSlot=" "
                        
                        />
                        
                        ...
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}