import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentLanguage: any = 'en';  
  languageCode = 'en';  
  public language = 'en';
  public languages = ['en', 'ta', 'es'];
  constructor(public translate:TranslateService) { 
    translate.addLangs(['English','Tamil','Spanish']);
    translate.setDefaultLang('English');
    const BrowserLang=translate.getBrowserLang();
    console.log("BrowserLang ---- ",BrowserLang);
    translate.use(BrowserLang.match(/en|ta/) ? BrowserLang:'English');

  }

  ngOnInit(): void {
    
  }


}
