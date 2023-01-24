import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { SocketIoModule } from 'ngx-socket-io';
import { NgChartsModule } from 'ng2-charts';
import { GraficaComponent } from './components/grafica/grafica.component';

import { HttpClientModule } from '@angular/common/http';

const config: SocketIoConfig = { url: environment.urlServer, options: {} };

@NgModule({
  declarations: [AppComponent, GraficaComponent],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    NgChartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
