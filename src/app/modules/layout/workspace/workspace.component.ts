import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
    currentRoute: String = '';

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                // Show loading indicator
            }

            if (event instanceof NavigationEnd) {
                this.currentRoute = this.router.url.toUpperCase();
                // Hide loading indicator
            }

            if (event instanceof NavigationError) {
                // Hide loading indicator

                // Present error to user
                console.log(event.error);
            }
        });
        this.currentRoute = this.router.url.toUpperCase();
    }

    ngOnInit() {

    }

}
