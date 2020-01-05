import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`, //using Es6 template string for multiline HTML. Typically don't put html in the TS file if it's more than 3 lines. Separation of concerns
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverName2 = 'Two-Way Binding';

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  } //a method executed at the point in time this component is created by angular.

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName2;
  }

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = event.target.value;
  }

}
