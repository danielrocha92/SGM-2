import React, { useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

//import useApi from ...

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*const handleLoginButton = async () => {
    if(email && password) {
      const result = await api
    }
  }*/

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Digite seus dados de acesso</p>

                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput 
                        type="text" 
                        placeholder="E-mail" 
                        autoComplete="email" 
                        value={email} 
                        onChange={e=>setEmail(e.target.value)}
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput 
                        type="password" 
                        placeholder="Senha" 
                        autoComplete="current-password" 
                        value={password} 
                        onChange={e=>setPassword(e.target.value)} 
                      />
                    </CInputGroup>

                    <CRow>
                      <CCol xs="6">
                        <CButton 
                          color="primary" 
                          className="px-4"
                          //onClick={handleLoginButton}
                        >
                          Entrar
                        </CButton>
                      </CCol>
                    </CRow>

                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
