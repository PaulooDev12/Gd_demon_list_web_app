import { Routes } from '@angular/router';
import { AdminPanel } from './pages/admin-panel/admin-panel';
import { MainList } from './pages/main-list/main-list';

export const routes: Routes = [
    {path: "admin", component: AdminPanel},
    {path: "", component: MainList}
];
