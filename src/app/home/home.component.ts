import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreenService } from '../screenservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit{
 
  constructor(private http:HttpClient,private router: Router,private screenservice:ScreenService,private activatedroute:ActivatedRoute) { }

  
   ids=[];
   scrn_names=[];
   
 
  ngOnInit(): void {
    this.screenservice.GetAllId().subscribe(data=>{
      //console.log("da",data);
      
     for(let i=0;i<=JSON.stringify(data[i]).length;i++){
      this.ids.push(data[i]['_id']);
      this.scrn_names.push(data[i]['screenName']);
     }
     
    })
   // console.log("screens ids",this.ids);
   // console.log("screens names",this.scrn_names);
  }
  OnNavigate(id){
   this.router.navigate([`${id}`]);
  }

  OnDelete(id){
    this.screenservice.DeleteById(id).subscribe(data=>{console.log("data deleted",data);
    window.location.reload();
  //  this.router.navigate(['home']);
    });
    
  }
}
