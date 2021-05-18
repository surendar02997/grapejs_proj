import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';


@Injectable({
    providedIn: 'root'
  })
export class ScreenService{

    constructor(private http:HttpClient){}

    sample:number=5;
    
    OnSendPostData(html:string,css:string){
       
       // const postdata:Post={html,css};


        // this.http.post("https://angulartestapp-e2620-default-rtdb.firebaseio.com/posts.json",postdata).subscribe(responsedata=>{
        //   //  console.log(responsedata);

        //   const postarray:Post[]=[];

         
        //   for(const key in responsedata){
        //     if(responsedata.hasOwnProperty(key))
        //     {
        //       postarray.push({...responsedata[key],id:key});
        //     }
           
        //   }
        //   return postarray;
            
        // })
    }

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
       
       // const postdata:Post={html,css};


       this.http.post("https://angulartestapp-e2620-default-rtdb.firebaseio.com/posts.json",newvalue).subscribe(responsedata=>{
         //  console.log(responsedata);
           
       })
   }

}