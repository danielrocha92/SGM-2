import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Logout = React.lazy(() => import('./views/Logout'));

//Rotas Medicamentos
const Medicines = React.lazy(() => import('./views/medicines/medicines/Medicines'));
const MedicinesAdd = React.lazy(() => import('./views/medicines/medicines-add/MedicinesAdd'));
const MedicinesDiscard = React.lazy(() => import('./views/medicines/medicines-discard/MedicinesDiscard'));
const MedicinesEdit = React.lazy(() => import('./views/medicines/medicines-edit/MedicinesEdit'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/logout', name: 'Logout', component: Logout },

  //Rotas Medicamentos
  { path: '/medicines', name: 'Medicines', component: Medicines, exact: true },
  { path: '/medicines/medicines', name: 'Medicines', component: Medicines },
  { path: '/medicines/medicines-add', name: 'MedicinesAdd', component: MedicinesAdd },
  { path: '/medicines/medicines-discard', name: 'MedicinesDiscard', component: MedicinesDiscard },
  { path: '/medicines/medicines-edit', name: 'MedicinesEdit', component: MedicinesEdit },
];

export default routes;
