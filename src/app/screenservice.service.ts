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

   getScreenById(screen_id): Observable<any> {
    // return this.http.get(`http://localhost:3004/screen/get/444c4c60-bdea-11eb-9d78-0149a7bd3467`);
    return this.http.get(`http://localhost:3004/screen/get/${screen_id}`);
  }
  getScreenById_new(): Observable<any> {
     return this.http.get(`http://localhost:3004/screen/get/4d83bdd0-be2c-11eb-b3ba-554b74bb5dfc`);
   // return this.http.get(`http://localhost:3004/screen/get/${screen_id}`);
  }

  GetAllId(){
    return this.http.get(`http://localhost:3004/screen/get`);
  }

  DeleteById(screen_id):Observable<any>{
  return this.http.delete(`http://localhost:3004/screen/delete/${screen_id}`);
  }



}