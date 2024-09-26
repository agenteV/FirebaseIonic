import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-produto',
    loadChildren: () => import('./produtos/cadastro-produto/cadastro-produto.module').then( m => m.CadastroProdutoPageModule)
  },
  {
    path: 'altera-produto',
    loadChildren: () => import('./produtos/altera-produto/altera-produto.module').then( m => m.AlteraProdutoPageModule)
  },
  {
    path: 'alterar-produto',
    loadChildren: () => import('./produtos/alterar-produto/alterar-produto.module').then( m => m.AlterarProdutoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
