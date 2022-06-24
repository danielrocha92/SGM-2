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
    CInput,
    CForm
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import useApi from '../services/api';

export default () => {
    const api = useApi();

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [sholModal, setShowModal] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);
    const [modalTitleField, setModalTitleField] = useState('');
    const [modalBodyField, setModalBodyField] = useState('');
    const [modalId, setModalId] = useState();

    const fields = [
        {label: "Nome do Medicamento", key: 'title'},
        {label: "Unidade", key: 'name_unit'},
        {label: "Data da Reserva", key: 'reservation_date'},
        {label: "Quantidade", key: 'quantity',_style:{width:'200px'}},
        {label: "Data de validade", key: 'expirationdate', _style:{width:'200px'}},
        {label: "Ações", key: 'actions', _style:{width:'1px'}, sorter: false, filter: false },
    ]   

    useEffect(()=>{
        getList();
    }, []);

    const getList = async () => {
        setLoading(true);
        const result = await api.getReservations();
        setLoading(false);
        if(result.erro === '') {
            setList(result.list);
        } else {
            alert(result.error);
        }
    }
    
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleEditButton = (index) => {
        setModalId(list[index]['id']);
        setModalTitleField(list[index]['title']);
        setModalBodyField(list[index]['body']);
        setShowModal(true);
    }

    const handleRemoveButton = async (index) => {
        if(window.confirm('Tem certeza que deseja excluir?')) {
            const result = await api.removeMedicine(list[index]['id']);
            if(result.error === '') {
                getList();
            } else {
                alert(result.error);
            }
        }
    }

    const handleNewButton = () => {
        setModalId('');
        setModalTitleField('');
        setModalBodyField('');
        setShowModal(true);
    }

    const handleModalSave = async () => {
        if(modalTitleField && modalBodyField) {
            setModalLoading(true);
            let result;
            let data = {
                title: modalTitleField,
                body: modalBodyField
            };
            if(modalId === '') {
                result = await api.addMedicines(data);
            } else {
                result = await api.updateMedicines(modalId, data); 
            }

            setModalLoading(false);
            if(result.error === '') {
                setShowModal(false);
                getList();
            } else {
                alert(result.error);
            }
        } else {
            alert('Preencha os campos!');
        }
    }

    const handleDownloadButton = (index) => {
        window.open(list[index]['fileurl']);
    }

    return(
        <>
        <CRow>
            <CCol>
                <h2>Reservas</h2>   

                <CCard>
                    <CCardHeader>

                        <CButton color="primary" onClick={handleNewButton}>
                            <CIcon name="cil-check" />Novo Medicamento
                        </CButton>

                        <CButton color="success" onClick={()=>handleDownloadButton(index)}>
                            <CIcon name="cil-cloud-download" />
                        </CButton>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable 
                            items={list}
                            fields={fields} 
                            loading={loading}
                            noItemsViewSlot=" "
                            columnFilter
                            sorter  
                            hover
                            bordered
                            pagination
                            itemPerPage={5}
                            scopedSlots={{
                                'reservations_date': (item) => (
                                    <td>
                                        {item.reservation_date_formatted}
                                    </td>
                                )

                                'actions': (item, index) => (
                                    <td>
                                        <CButtonGroup>
                                            <CButton color="danger" onClick={()=>handleRemoveButton(index)}>Excluir</CButton>
                                        </CButtonGroup>
                                    </td>
                                )
                            }}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>

        <CModal show={sholModal} onClose={handleCloseModal}>
            <CModalHeader closeButton>{modalId ===''?'Novo' : 'Editar'} Medicamentos</CModalHeader>
            <CModalBody>

                <CFormGroup>
                    <CLabel htmlFor="modal-title">Corpo do Modal</CLabel>

                    <CInput 
                        type="text"
                        id="modal-body"
                        placeholder="Digite o Laboratório"
                        value={modalTitleField}
                        onChange={e=>setModalBodyField(e.target.value)}
                        disabled={modalLoading}
                    />

                    <CInput 
                        type="text"
                        id="modal-body"
                        placeholder="Digite a Classe Terapêutica"
                        value={modalTitleField}
                        onChange={e=>setModalBodyField(e.target.value)}
                        disabled={modalLoading}
                    />

                    <CInput 
                        type="text"
                        id="modal-body"
                        placeholder="Digite a Substância Ativa"
                        value={modalTitleField}
                        onChange={e=>setModalBodyField(e.target.value)}
                        disabled={modalLoading}
                    />

                    <CInput 
                        type="text"
                        id="modal-body"
                        placeholder="Digite a Unidade"
                        value={modalTitleField}
                        onChange={e=>setModalBodyField(e.target.value)}
                        disabled={modalLoading}
                    />

                    <CInput 
                        type="text"
                        id="modal-body"
                        placeholder="Digite o Lote"
                        value={modalTitleField}
                        onChange={e=>setModalBodyField(e.target.value)}
                        disabled={modalLoading}
                    />

                    <CInput 
                        type="text"
                        id="modal-body"
                        placeholder="Digite a Quantidade"
                        value={modalTitleField}
                        onChange={e=>setModalBodyField(e.target.value)}
                        disabled={modalLoading}
                    />

                    <CInput 
                        type="text"
                        id="modal-body"
                        placeholder="Digite a Validade"
                        value={modalTitleField}
                        onChange={e=>setModalBodyField(e.target.value)}
                        disabled={modalLoading}
                    />

                    <CTextarea 
                        id="modal-body"
                        placeholder="Digite o conteúdo do aviso"
                        value={modalBodyField}
                        onChange={e=>setModalBodyField(e.target.value)}
                        disabled={modalLoading}
                    />

                <CFormGroup>
                    <CLabel htmlFor="modal-file">Arquivo (pdf)</CLabel>
                    <CInput 
                        type="file"
                        id="modal-file"
                        name="file"
                        placeholder='Escolha um arquivo'
                        onChange={e=>setModalFileField(e.target.files[0])}
                    />
                </CFormGroup>

                </CFormGroup>
            </CModalBody>

            <CModalFooter>
                <CButton 
                    color="primary"
                    onClick={handleModalSave}
                    disabled={modalLoading}
                >
                    {modalLoading ? 'Carregando...' : 'Salvar'}
                </CButton>

                <CButton 
                    color="secondary"
                    onClick={handleCloseModal}
                    disabled={modalLoading}
                >Cancelar</CButton>
            </CModalFooter>

        </CModal>

        </>
    );
}