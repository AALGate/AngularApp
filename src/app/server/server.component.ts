import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  // selector: '.app-server',  // this is a selector by a class like <div class="app-server"> </div>
  // selector: '[app-server]', // this is a selector by attribute
  templateUrl: './server.component.html',
  styleUrls : ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowAddingServer = false;
  serverId = 10;
  serverStatus = 'online';
  serverCreation = 'test server Creation';
  portValue = 4000;
  ngModelTwoWayBinding = 'test';
  newInputText = 'hell test';
  newInputOn = false;

  constructor() {
    setTimeout(() => {
      this.allowAddingServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  getServiceStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.portValue = 6000;
  }

  onUpdateServerName(event: any) {
    this.portValue = event.target.value;
  }

  onNewInputType(event: any) {
    this.newInputText = event.target.value;
  }
  onNewButtonClick() {
    this.newInputOn = true;
  }

}
