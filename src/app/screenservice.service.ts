import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map,tap } from "rxjs/operators";



@Injectable({
    providedIn: 'root'
  })
export class ScreenService{

    constructor(private http:HttpClient,private firestore: AngularFirestore){}

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

   //   this.postdata.slice();
  

      // this.http.post("https://angulartestapp-e2620-default-rtdb.firebaseio.com/posts_new.json",postdata).subscribe(responsedata=>{
        this.http.post("mongodb://localhost:2997/grapesjs",postdata).subscribe(responsedata=>{

        
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


       this.http.post("https://angulartestapp-e2620-default-rtdb.firebaseio.com/posts_new.json",newvalue).subscribe(responsedata=>{
         //  console.log(responsedata);
           
       })
   }

   

   getAllCountry() {  
    // return this.firestore.collection('posts').snapshotChanges();  
     return this.http.get("https://angulartestapp-e2620-default-rtdb.firebaseio.com/posts.json");
  //    this.http.get<Post[]>("https://angulartestapp-e2620-default-rtdb.firebaseio.com/posts.json").pipe(map(datas=>{
  //      return datas.map(data=>{
  //        return{
  //          ...data
  //        }
  //      })
  //    }),tap(data=>{

  //    })).subscribe(response=>{
  //      console.log(response);
       
  //    });
    }  




}