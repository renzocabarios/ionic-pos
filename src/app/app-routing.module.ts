import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'items-list',
    loadChildren: () => import('./pages/items-list/items-list.module').then( m => m.ItemsListPageModule)
  },
  {
    path: 'create-item',
    loadChildren: () => import('./pages/create-item/create-item.module').then( m => m.CreateItemPageModule)
  },
  {
    path: 'invoices-list',
    loadChildren: () => import('./pages/invoices-list/invoices-list.module').then( m => m.InvoicesListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
