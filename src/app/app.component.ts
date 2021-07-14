import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})


export class AppComponent implements OnInit{
  headerFooter: boolean;
  constructor( private router: Router){

  }


 
  ngOnInit()
  {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const temp = event.url.split('?');
     //   this.headerFooter = (temp[0] !== '/grapesjs');
        this.headerFooter = (temp[0] === '/');
      }
    });
    
  }
  
}

