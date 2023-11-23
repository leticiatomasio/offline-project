import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  connection = new signalR.HubConnectionBuilder()
    .withUrl('https://79kdqfqr-5007.brs.devtunnels.ms/kds-hub')
    .withAutomaticReconnect()
    .build();

  signalRNotification$ = new Subject<void>();
  emitSignalRNotification$ = this.signalRNotification$.asObservable();

  constructor() { }

  public async startConnection() {
    await this.connection.start()

    await this.connection.invoke('JoinGroup', "KdsNotification");

    this.connection.on('SendKdsNotification', (params) => {
      console.log('NOTIFICAÇÃO >>>>>>>>>>>', params);
      this.signalRNotification$.next()
    })
  }
}
