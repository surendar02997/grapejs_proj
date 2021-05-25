import { Component, OnInit } from '@angular/core';

import grapesjs from 'node_modules/grapesjs';
import 'grapesjs-preset-newsletter';
import 'grapesjs-firestore';
import { ScreenService } from './screenservice.service';
import { Post } from './post.model';
import { Injectable } from '@angular/core';
declare var $: any;

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})

@Injectable()
export class AppComponent implements OnInit{


  constructor(private ScreenService:ScreenService,private http:HttpClient){}


  //logId:any;
  postdatanew:Post;

  htmlvalue:string;
  cssvalue:string;

  finalgjsvalues:string;
  RemoteStorage: any;
  screenname:string;

  htmlcss:string;

  editor:any;
 
  ngOnInit()
  {

    


    //this.logId = sessionStorage.getItem('LogId');
    //console.log("logId",this.logId);
    
   
      const LandingPage = {
      html: `<div>...</div>`,
      css: null,
      components: null,
      style: null,
    };
 
    this.editor = grapesjs.init({

      container: '#gjs',

      plugins: ['grapesjs-firestore'],
      pluginsOpts: {
        'grapesjs-firestore': {
          docId: 'someID',
          apiKey: "AIzaSyBAL7DnuotleQePI-FhYoquJ6eXCxebEjo",
          authDomain: "angulartestapp-e2620.firebaseapp.com",
          projectId: "angulartestapp-e2620",

          databaseURL: "https://angulartestapp-e2620-default-rtdb.firebaseio.com",
         
          storageBucket: "angulartestapp-e2620.appspot.com",
          messagingSenderId: "755391992083",
          appId: "1:755391992083:web:f859e15bfc294064a18ae6",
          measurementId: "G-1ZCEZJ2JGX"
        }
      },
      
      
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
       fromElement: true,
      // // Size of the editor
       height: '500px',
       width: 'auto',
     
      

      blockManager: {
        
        appendTo: '#blocks',
        blocks: [
          
       ]
      },
      assetManager: {
        appendTo: '#assets',
         assets:[
          
         ]
         // options
       },
       panels: { 
       
      
      
      },
    

      styleManager: {
      //  // appendTo: '.styles-container',
        sectors: [
         {
          name:'Typography',
          open:false,
          properties:[
            {
              name: "Vertical Align",
              property: "vertical-align",
              type: "select",
              default: "auto",
              list: [{
                value: "auto",
                name: "auto"
            }, {
                value: "top !important",
                name: "top"
            },
            {
                value: "middle !important",
                name: "middle"
            },
            {
                value: "bottom !important",
                name: "bottom"
            }
        ]
            },
            {
              name : 'Text Align',
              property: 'text-align',
              type: 'radio',
              defaults: 'center',
              list: [
              { value : 'left', name : 'Left', className: 'fa fa-align-left'},
              { value : 'center', name : 'Center', className: 'fa fa-align-center' },
              { value : 'right', name : 'Right', className: 'fa fa-align-right'},
              { value : 'justify', name : 'Justify', className: 'fa fa-align-justify'}
              ],
              },
          ]
         },
          {
            name: 'Dimension',
            open: false,
            // Use built-in properties
            buildProps: ['width', 'min-height', 'padding','vertical-align'],
            // Use `properties` to define/override single property
            properties: [
              {
                // Type of the input,
                // options: integer | radio | select | color | slider | file | composite | stack
                type: 'integer',
                name: 'The width', // Label for the property
                property: 'width', // CSS property (if buildProps contains it will be extended)
                units: ['px', '%'], // Units, available only for 'integer' types
                defaults: 'auto', // Default value
                min: 0, // Min value, available only for 'integer' types
              }
            ]
          },
          {
            name: 'Extra',
            open: false,
            buildProps: ['background-color', 'box-shadow', 'custom-prop'],
            properties: [
              {
                id: 'custom-prop',
                name: 'Custom Label',
                property: 'font-size',
                type: 'select',
                defaults: '32px',
                // List of options, available only for 'select' and 'radio'  types
                options: [
                  { value: '12px', name: 'Tiny' },
                  { value: '18px', name: 'Medium' },
                  { value: '32px', name: 'Big' },
                ],
             },
            
            ]
          },
         
          {
            name: 'decoration',
            buildProps: ['border'],
            properties:[
              {
                name:'border-radius',
                type: 'integer',
                      units: ['px', 'em', 'rem'],
                      property: 'border-radius',
              },
              {
                      name: 'Border-bottom-Color',
                      type: 'color',
                      property: 'border-bottom-color',
              },
            ]
          }
  
         
       
        ]
      
      },




      
      commands: {
        defaults:[
          {
            id: 'store-data',
            run(editor) {
            //  console.log(this.editor.getComponents());
              
            //  alert('d');
              editor.store();
             // editor.load();
            },
          }
        ]
        // options
      },

      storageManager: {
        id: 'gjs-',
          type:'local',
         autoload:true,
          contentTypeJson: true,
          setStepsBeforeSave: 1,
          autosave: true,
          storeComponents: true,  // Enable/Disable storing of components in JSON format
          storeStyles: true,      // Enable/Disable storing of rules in JSON format
          storeHtml: true,        // Enable/Disable storing of components as HTML string
          storeCss: true, 
          params:{},
       //   urlStore: ''
        

            //   autosave: false,
            //   setStepsBeforeSave: 1,
            //   type: 'remote',
      //   urlStore: 'https://angulartestapp-e2620-default-rtdb.firebaseio.com/posts.json',
       //    urlLoad: 'https://angulartestapp-e2620-default-rtdb.firebaseio.com/posts.json',
           
            //   contentTypeJson: true,
      },

      
    });
    this.editor.on('storage:load newwww', function(e) {
      console.log('Loaded ', e);
    this.editor.render();
});
    
        const blockManager = this.editor.BlockManager;
        const assetManager = this.editor.AssetManager;
        const panelManager = this.editor.Panels;
        const commands = this.editor.Commands;

        this.htmlvalue = this.editor.getHtml();
        this.cssvalue= this.editor.getCss();

        this.htmlcss = this.editor.runCommand('gjs-get-inlined-html');

       
        



     //   console.log("html",this.htmlvalue);
      //  console.log("css",this.cssvalue);
       // console.log("htmlcss",this.htmlcss);

      

      //  const css=this.editor.getCss();

   
        
       
         this.editor.getConfig().showDevices = false;  //to remove the show device from top

        //  this.editor.load(res => console.log('Load callback',res));
        // this.editor.store(res => console.log('Store callback',res));

  //    this.sendpostdata();
      
       this.editor.on('storage:load', function(e) {
        
        console.log('STORAGE:LOAD ', e);
        
        
      });
      this.editor.on('storage:store', function(e) {
        
        console.log('STORAGE:STORE ', e);
      });
      this.editor.on('storage:error', function(e) {
        console.log('STORAGE:ERROR ', e);
      });
      this.editor= this.editor;

    

     
   

      //firebase.firestore().settings({ experimentalForceLongPolling: true });


       //For adding Assets
        assetManager.add({
          src: 'https://bit.ly/3vBrzTp',
          type: 'image',	//image is default
          width: 200,
          height: 300,
        
        });
        

        //For addin Blocks
        blockManager.add('label', {
          label: 'Label',
          content: '<label>Put your Label here</label>',
          category: 'Basic',
          
          attributes: {
            
            title: 'Insert Label block',
          //  class:'fa fa-paragraph'
           
          },
      
        
        
        });

        blockManager.add('h1-block', {
        label: 'Heading',
        content: '<h1>Put your title here</h1>',
        category: 'Basic',
        select: true,
        activate: true,
       
        attributes: {
        title: 'Insert h1 block',
     //   class:'fa fa-heading'
       
        }

        });
        blockManager.add('p-block', {
          label: 'Paragraph',
          content: '<p>Put your Parahraph here</p>',
          category: 'Basic',
          attributes: {
            
            title: 'Insert p block',
            class:'fa fa-paragraph'
           
          },
      
        
        
        });
        blockManager.add('img-block', {
          id:'image',
          label: 'Image',
          content: { type: 'image' },
          category: 'Basic',
          select: true,
          
         activate: true,
          attributes: {
            title: 'Insert img block',
            class: 'fa fa-image'
          }
        
        });
        blockManager.add('map', {
          label: 'Simple map block',
          category: 'Basic',
          content: {
            type: 'map', // Built-in 'map' component
            style: {
              height: '350px'
            },
            attributes: {
              title: 'Simple map block',
              class:'fa fa-map-o'
             
            },
            removable: false, // Once inserted it can't be removed
          }
        });
  

        blockManager.add('the-row-block', {
          label: '2 Columns',
          content: `
          <div class="row" data-gjs-droppable=".row-cell" data-gjs-custom-name="Row">
            <div class="row-cell" data-gjs-draggable=".row"></div>
            <div class="row-cell" data-gjs-draggable=".row"></div>
          </div>

     

          <style>
            .row {
              display: flex;
              justify-content: flex-start;
              align-items: stretch;
              flex-wrap: nowrap;
              padding: 10px;
              min-height: 75px;
            }
            .row-cell {
              flex-grow: 1;
              flex-basis: 100%;
              padding: 5px;
            }
        
          </style>
        `,
        attributes:{class:'fa fa-columns'}
        });
    
      
        blockManager.add('content-link', {
          label:'Youtube Link',
          category:'Basic',
          attributes: { class:'fa fa-youtube' },
          content:{
              type:'content-link'
          }
      });

      blockManager.add('INPUT',{
        id:'input',
        label:'Input',
        category:'Basic',
          attributes: { 
            //class:'fa fa-youtube' 
          },
          content:'<div><input class="form-control" type="text"></div>',
          

      });



       const block = blockManager.getAll();
      // console.log(JSON.stringify(block));
        
       

       //For adding Panels
        panelManager.addPanel({
          id: 'panel-top',
         // el: '.panel__top',
        });
        panelManager.addPanel({
          id: 'basic-actions',
         // el: '.panel__basic-actions',
          buttons: [
            {
              id: 'visibility',
              active: true, // active by default
              className: 'fa fa-address-book',
             // label: '<u>B</u>',
              command: 'sw-visibility', // Built-in command
            }, {
              id: 'export',
              className: 'btn-open-export',
              label: 'Exp',
              command: 'export-template',
              context: 'export-template', // For grouping context of buttons from the same panel
            }, {
              id: 'show-json',
              className: 'btn-show-json',
              label: 'JSON',
              context: 'show-json',
              command(editor) {
                editor.Modal.setTitle('Components JSON')
                  .setContent(`<textarea style="width:100%; height: 250px;">
                    ${JSON.stringify(editor.getComponents())}
                  </textarea>`)
                  .open();
              },

              
            }
            
          ]
        });

        panelManager.addButton('options', [ 
          { id: 'save', 
          className: 'fa fa-floppy-o icon-blank', 
          command: 'save-page',
       //  command:'save-db',
         //command:this.addSaveCommand('save',this.editor),
          // command: function(editor1, sender) { 
          //   if (sender)
          //   sender.set('active', true);
          //  // this.sendpostdata();
          //   this.jj();
    
          // }, 
    
          attributes: { title: 'Save Template' },
         
        }, 
        this.addSaveCommand('save-page',this.editor)
      
      ]);
    
        this.editor.Commands.add
        ('save-db', {
            run: function(editor, sender)
            {
            sender && sender.set('active',true); // turn off the button
             //editor.store();
              console.log("hi");
            //  this.sendpostdata();
            this.jj();
              
           //  this.sendpostdata();
        
            }
        });
        // this.editor.on('storage:load', function(e) { console.log('Loaded ', e);});
        // this.editor.on('storage:store', function(e) { console.log('Stored ', e);})


       this.editor.DomComponents.addType('content-link', {
        extend: 'link',
        model: {
            defaults: {
          editable: true,
          droppable: true,
          select: true,
          
          activate: true,
                style: {
                    display: 'inline-block',
                    padding: '5px',
                    'min-height': '50px',
                    'min-width': '50px'
                },
               
                attributes:{href:'https://www.youtube.com/'},
                // content: '{{ $content->title }}',
                content: '{{ Youtube }}',
            }
        }
    });




    //Adding new input component
    this.editor.DomComponents.addType('input', {
      isComponent: el => el.tagName == 'INPUT',
      model: {
        defaults: {
          traits: [
            // Strings are automatically converted to text types
            'name', // Same as: { type: 'text', name: 'name' }
            'placeholder',
            {
              type: 'select', // Type of the trait
              label: 'Type', // The label you will see in Settings
              name: 'type', // The name of the attribute/property to use on component
              options: [
                { id: 'text', name: 'Text'},
                { id: 'email', name: 'Email'},
                { id: 'password', name: 'Password'},
                { id: 'number', name: 'Number'},
              ]
            }, {
              type: 'checkbox',
              name: 'required',
          }],
          // As by default, traits are binded to attributes, so to define
          // their initial value we can use attributes
          attributes: { type: 'text', required: true },
        },
      },
  });

  this.editor.DomComponents.addType('label', {
    model: {
      defaults: {
        traits: [
          'for', // Same as: { type: 'text', name: 'name' }
          'id',
          {
            type: 'text',
            name: 'For',
            label: 'Label Name',
          },
        ]
      }
    }
  });




  }
  sendpostdata()
  {
   //this.postservice.oncreateandstorepost(postdata.name,postdata.hobby);
   //alert();
  //  this.ScreenService.OnSendPostData(this.htmlvalue,this.cssvalue);

  if(this.screenname!="" && this.screenname!=null){
    const comps = this.editor.getComponents()
    comps.forEach(comp => {
        console.log(JSON.stringify(comp.attributes.type))
        console.log(JSON.stringify(comp.attributes.tagName))
        console.log(JSON.stringify(comp.attributes.classes))
        console.log(JSON.stringify(comp.attributes.components))
        console.log(JSON.stringify(comp.attributes.content))
      
        
    });
  
  
  
    console.log("comps",JSON.stringify(comps));
  
    this.finalgjsvalues=JSON.stringify(comps)+this.cssvalue;
    console.log("finavalus",this.finalgjsvalues);
    
    this.ScreenService.OnSendPostData_new(this.finalgjsvalues,this.screenname);
    this.editor.store((data) => {
      console.log('DATA---->>>>', data);
      this.closeScreeName();
      
    });
   // this.saveRemoteStorage();
  }
  else{alert("provide screen name")}
 


   
   //this.ScreenService.OnSendPostDatasample(7);
  
   
   
  }

  jj()
  {
    alert("hi");
  }


  addSaveCommand(commandName, editor) {
    //alert();
    const $this = this;
    editor.Commands.add(commandName, {
      run: function (e, n) {
        const eventPopupModel = document.getElementById('myModal');
        eventPopupModel.style.display = 'block';
      }
    });

  }

  closeScreeName() {
    const model = document.getElementById('myModal');
    model.style.display = 'none';
   // const saveButton = this.editor.Panels.getButton('options', 'save-page');
 //   saveButton.set('active', 0);
  }

  

  saveRemoteStorage(params = {}) {
    this.RemoteStorage = this.editor.StorageManager.get('remote');
    if (Object.keys(params).length > 0) {
      alert();
      this.RemoteStorage.set('params', params);
      this.editor.StorageManager.get('remote').set({
        urlStore:'https://angulartestapp-e2620-default-rtdb.firebaseio.com/posts.json'
       // urlStore: `${this.modifyTemplateUrl}/${this.templateObj._id}?log_id=${this.logId}`,
      });
    } else {
      alert('else')
      this.RemoteStorage.set('params', {
      
        // 'component-lifecycle': this.componentLifeCycle,
        // 'special-events': this.specialEvents,
        // grid_fields: this.agGridObject,
        // flows_info: this.screenFlows,
        // route_info: this.routeFlows,
        // link_info: this.linkArray,
        // screenName: this.screenName,
        // is_grid_present: this.is_grid_present,
        // is_bootStrapTable_present: this.is_bootStrapTable_present,
        // entity_info: this.screenEntityModel,
        // project: this.project_id,
        // feature: this.feature_id,
        // screenType: this.screenType,
        // screenOption: this.screenOption,
        // specific_attribute_Event: this.specific_attribute_Event
      });
    }
    // console.log('REMOTE STORAGE---->>>>', this.RemoteStorage.get('params'));
    // console.log('CURRENT STORAGE---->>>>', this.editor.StorageManager.getCurrentStorage())
  }
  
}

