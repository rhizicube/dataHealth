import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsComponent } from './tabs/tabs.component';
import { ConnectorsComponent } from './tabs/connectors/connectors.component';
import { DataComponent } from './data/data.component';
import { DatametrixComponent } from './tabs/datametrix/datametrix.component';
import { LinegraphComponent } from './tabs/datametrix/linegraph/linegraph.component';
import { LinegraphsComponent } from './tabs/datametrix/linegraphs/linegraphs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    TabsComponent,
    ConnectorsComponent,
    DataComponent,
    DatametrixComponent,
    LinegraphComponent,
    LinegraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     NgbModule,
     FormsModule,
      ReactiveFormsModule,
     HighchartsChartModule,
     NgxDaterangepickerMd.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
