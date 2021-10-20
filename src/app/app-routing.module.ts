import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';

import { TabsComponent } from './tabs/tabs.component';
import { ConnectorsComponent } from './tabs/connectors/connectors.component';
import { DataComponent } from './data/data.component';
import { DatametrixComponent } from './tabs/datametrix/datametrix.component';



const routes: Routes = [
  {path: '', component: ConnectorsComponent},
  {path: 'Data', component: DatametrixComponent},
  {path:'Connectors' , component: ConnectorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
