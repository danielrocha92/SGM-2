import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Logout = React.lazy(() => import('./views/Logout'));
const Wall = React.lazy(() => import('./views/Wall'));

//Rotas Medicamentos
const Medicines = React.lazy(() => import('./views/Medicines'));
const MedicinesAdd = React.lazy(() => import('./views/medicines/medicines-add/MedicinesAdd'));
const MedicinesDiscard = React.lazy(() => import('./views/medicines/medicines-discard/MedicinesDiscard'));
const MedicinesEdit = React.lazy(() => import('./views/medicines/medicines-edit/MedicinesEdit'));

//Rotas Reservations
const Reservations = React.lazy(() => import('./views/Reservations'));




const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/wall', name: 'Wall', component: Wall },

  //Rotas Medicamentos
  { path: '/medicines', name: 'Medicines', component: Medicines, exact: true },
  { path: '/medicines/medicines', name: 'Medicines', component: Medicines },
  { path: '/medicines/medicines-add', name: 'MedicinesAdd', component: MedicinesAdd },
  { path: '/medicines/medicines-discard', name: 'MedicinesDiscard', component: MedicinesDiscard },
  { path: '/medicines/medicines-edit', name: 'MedicinesEdit', component: MedicinesEdit },

  //Rotas Reservations
  { path: '/reservations', name: 'Reservations', component: Reservations },
];

export default routes;
