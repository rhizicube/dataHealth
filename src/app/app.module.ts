import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsComponent } from './tabs/tabs.component';
import { ConnectorsComponent } from './tabs/connectors/connectors.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    TabsComponent,
    ConnectorsComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
