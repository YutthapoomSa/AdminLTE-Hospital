import {Component, OnInit} from '@angular/core';
import {LocalService} from '@services/local.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
    constructor(
        public localService: LocalService,
    ) {}
    public login = false;

    ngOnInit() {
        if (this.localService.getToken()) {
            this.login = true;
        } else {
            this.login = false;
        }
    }
}
