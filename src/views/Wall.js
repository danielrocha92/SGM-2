import React, { useState, useEffect } from 'react';
import { 
    CButton,
    CButtonGroup,
    CCard, 
    CCardBody, 
    CCardHeader, 
    CCol, 
    CDataTable, 
    CFormGroup, 
    CLabel, 
    CModal, 
    CModalBody, 
    CModalFooter, 
    CModalHeader, 
    CRow, 
    CTextarea,
    CInput
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { applyMiddleware } from 'redux';

//import useApi from '../services/api';

export default () => {
    //const api = useApi();

    //const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [sholModal, setShowModal] = useState(false);
    const [modalTitleField, setModalTitleField] = useState('');
    const [modalBodyField, setModalBodyField] = useState('');
    const [modalId, setModalId] = useState();

    const fields = [
        {label: "Título", key: 'title'},
        {label: "Data de criação", key: 'datecreated', _style:{width:'200px'}},
        {label: "Ações", key: 'actions', _style:{width:'1px'}}

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
    
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleEditButton = (index) => {
        setModalId(list[index]['id']);
        setModalTitleField(list[index]['title']);
        setModalBodyField(list[index]['body']);
        setShowModal(true);
    }

   /* const handleModalSave = async () => {
        if(modalTitleField && modalBodyField) {
            const result = await api.updateWall(modalId, {
                title: modalTitleField,
                body: modalBodyField
            });
            if(result.error === '') {
                setShowModal(false);
                getList();
            } else {
                alert(result.error);
            }
        } else {
            alert('Preencha os campos!');
        }
    }*/

    return(
        <>
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
                            hover
                            bordered
                            pagination
                            itemPerPage={5}
                            scopedSlots={{
                                'actions': (item, index) => (
                                    <td>
                                        <CButtonGroup>
                                            <CButton color="info" onClick={()=>handleEditButton(index)}>Editar</CButton>
                                            <CButton color="danger">Excluir</CButton>
                                            </CButtonGroup>
                                    </td>
                                )
                            }}
                        />
                        
                        ...
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>

        <CModal show={sholModal} onClose={handleCloseModal}>
            <CModalHeader closeButton>Editar Aviso</CModalHeader>
            <CModalBody>

                <CFormGroup>
                    <CLabel htmlFor="modal-title">Título do aviso</CLabel>
                    <CInput 
                        type="text"
                        id="modal-title"
                        placeholder="Digite um título para o aviso"
                        value={modalTitleField}
                        onChange={e=>setModalTitleField(e.target.value)}
                    />
                </CFormGroup>

                <CFormGroup>
                    <CLabel htmlFor="modal-title">Corpo do aviso</CLabel>
                    <CTextarea 
                        id="modal-body"
                        placeholder="Digite o conteúdo do aviso"
                        value={modalBodyField}
                        onChange={e=>setModalBodyField(e.target.value)}
                    />
                </CFormGroup>

            </CModalBody>
            <CModalFooter>
                <CButton 
                    color="primary"
                    onClick={handleModalSave}
                >Salvar</CButton>
                <CButton 
                    color="secondary"
                    onClick={handleCloseModal}
                >Cancelar</CButton>
            </CModalFooter>
        </CModal>

        </>
    );
}