import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule,HttpClient} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { GrapesjsComponent } from './grapesjs/grapesjs.component';
import { HomeComponent } from './home/home.component';
import { AgGridModule } from 'ag-grid-angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

export class MyMissingTranslationHandler implements MissingTranslationHandler {

  handle(params: MissingTranslationHandlerParams) {
    // const alternativeJson = {  
    //   value: 'default'
    // };
  // console.log("ku",params);
   
//console.log("lo",JSON.stringify(params));
//return "error value";
     return JSON.stringify(params);
  //  return alternativeJson[params.key];
  }
}


export function httpLoaderfactory(http:HttpClient){
  return new TranslateHttpLoader(http);
  //return new TranslateHttpLoader(http, "/assets/i18n/", ".json");
  }
 

@NgModule({
  declarations: [
    AppComponent,
    GrapesjsComponent,
    HomeComponent,
    HeaderComponent,

  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:httpLoaderfactory,
        deps:[HttpClient]
      },
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler},
    }),
   //MultiTranslateHttpLoader

  
  

 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
