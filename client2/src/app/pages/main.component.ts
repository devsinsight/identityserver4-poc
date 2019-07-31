import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
    constructor(private mainService: MainService) { }

    ngOnInit(): void { }

    testNetCore() {
        console.log("resource1 .NET Core 2.2 Test");
        this.mainService.getIdentityFromNetCore().subscribe( response => {

            console.log(response);
        })
    }

    testJava() {
        console.log("resource2 Java Spring Boot Test");
        this.mainService.getIdentityFromJava().subscribe( response => {

            console.log(response);
        })
    }
}
