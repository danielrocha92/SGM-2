import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Painel Geral',
    to: '/dashboard',
    icon: <CIcon 
            name="cil-speedometer" 
            customClasses="c-sidebar-nav-icon"
          />,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Avisos',
    to: '/wall',
    icon: 'cil-check',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Produtos']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Medicamentos',
    route: '/medicines',
    icon: 'MdOutlineMedicalServices',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Medicamentos',
        to: '/medicines/medicines',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Adicionar Medicamento',
        to: '/medicines/medicines-add',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Editar Medicamentos',
        to: '/medicines/medicines-edit',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Solicitar Descarte',
        to: '/medicines/medicines-discard',
      },
    ],
  },
]

export default _nav
