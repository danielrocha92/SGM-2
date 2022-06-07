import { 
    CCard,
    CCardHeader, 
    CCol, 
    CRow 
} from '@coreui/react'
import React from 'react'

const Medicines = () => {
    return (
        <CRow>
            <CCol xs="12" >
                <CCard>
                    <CCardHeader>
                        Medicamentos
                    </CCardHeader>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Medicines