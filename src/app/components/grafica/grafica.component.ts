import { WebsocketService } from './../../services/websocket.service';
import { environment } from './../../../environments/environment.prod';
import { ChartConfiguration, ChartType } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css'],
})
export class GraficaComponent implements OnInit {
  public lineChartType: ChartType = 'line';
  public lineChartData: Array<any> = [
    {
      data: [0, 0, 0, 0],
      label: 'Ventas',
    },
  ];

  public lineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril'];

  constructor(private http: HttpClient, public wsService: WebsocketService) {}

  ngOnInit(): void {
    this.getData();
    this.listenSocket();
  }

  getData() {
    this.http
      .get(environment.urlServer + 'grafica')
      .subscribe((data: any) => (this.lineChartData = data));
  }

  listenSocket() {
    this.wsService.listen('cambio-grafica').subscribe((data: any) => {
      console.log('socket', data);
      this.lineChartData = data;
    });
  }
}
