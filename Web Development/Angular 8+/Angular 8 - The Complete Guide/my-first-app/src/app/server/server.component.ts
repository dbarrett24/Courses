import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html' //the path relative to THIS TS file.
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';
    
    //can also write
    // serverId: number = 10;
    // serverStatus: string = 'offline';
    
    getServerStatus(){
        return this.serverStatus;
    }

}