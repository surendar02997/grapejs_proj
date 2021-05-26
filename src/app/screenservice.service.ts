import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class ScreenService{

    constructor(private http:HttpClient){}

    sample:number=5;


    OnSendPostData_new(gjscomps:string,screenname:string){
       
      const postdata:Post={gjscomps,screenname};


      this.http.post("https://angulartestapp-e2620-default-rtdb.firebaseio.com/posts.json",postdata).subscribe(responsedata=>{
        //  console.log(responsedata);

        const postarray:Post[]=[];

       
        for(const key in responsedata){
          if(responsedata.hasOwnProperty(key))
          {
            postarray.push({...responsedata[key],id:key});
          }
         
        }
        return postarray;
          
      })
  }

    OnSendPostDatasample(newvalue:number){
    
       this.http.post("https://angulartestapp-e2620-default-rtdb.firebaseio.com/posts.json",newvalue).subscribe(responsedata=>{
         //  console.log(responsedata);
           
       })
   }

   getScreenById(): Observable<any> {
    return this.http.get(`http://localhost:3004/screen/get/444c4c60-bdea-11eb-9d78-0149a7bd3467`);
  }



}