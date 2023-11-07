import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  connection = new signalR.HubConnectionBuilder().withUrl('Url').build();

  constructor() { }

  public startConnection() {
    this.connection.on('Method', () => {
      console.log('chegou');
    })

    this.connection.start();
  }
}
