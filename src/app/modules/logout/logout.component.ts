import {AppService} from '@services/app.service';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
    constructor(private appService: AppService) {}

    ngOnInit() {
        this.appService.logout();
    }


}
