import { Component, OnInit } from '@angular/core';
import grapesjs from 'node_modules/grapesjs';

import 'grapesjs-firestore';

import { Post } from 'src/app/post.model';
import { Injectable } from '@angular/core';
declare var $: any;

import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ScreenService } from '../screenservice.service';
import plugin from 'node_modules/grapesjs';
//import * as Highcharts from 'highcharts';
declare var Highcharts: any;

@Component({
  selector: 'app-grapesjs',
  templateUrl: './grapesjs.component.html',
  styleUrls: ['./grapesjs.component.css']
})
@Injectable()
export class GrapesjsComponent implements OnInit {
user:{id:string};
  constructor(private ScreenService:ScreenService,private http:HttpClient,private route:ActivatedRoute,private router:Router){

  
    
  }


  //logId:any;
  postdatanew:Post;

  htmlvalue:string;
  cssvalue:string;

  finalgjsvalues:string;
  RemoteStorage: any;
  screenname:string;

  htmlcss:string;

  editor:any;
  screen_id:any;
  existScreenDetail: any;
  SaveScreenStatus:boolean=false;

  ngOnInit()
  {
    this.user={id:this.route.snapshot.params['id']};

   
    this.screen_id=this.user.id;
    console.log("screen id",this.screen_id);
    
    // this.route.queryParams.subscribe(params => {console.log("params",params);
    // })


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

     
      allowScripts: 1,
      canvas: {
        scripts: [
          "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js"
        ],
        styles: [
          "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.css"
        ]
      },
      
      
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
       fromElement: true,
      // // Size of the editor
       height: '940px',
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
          type:'remote',
         autoload:true,
          contentTypeJson: true,
          setStepsBeforeSave: 1,
          autosave: true,
          storeComponents: true,  // Enable/Disable storing of components in JSON format
          storeStyles: true,      // Enable/Disable storing of rules in JSON format
          storeHtml: true,        // Enable/Disable storing of components as HTML string
          storeCss: true, 
          params:{},
          urlStore: '',
         // urlLoad:'http://localhost:3004/screen/get/b96ce650-bd2a-11eb-914c-65c6050381e6'
        

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
   // this.editor.render();
  
  
});
    
        const blockManager = this.editor.BlockManager;
        const assetManager = this.editor.AssetManager;
        const panelManager = this.editor.Panels;
        const commands = this.editor.Commands;

        this.htmlvalue = this.editor.getHtml();
        this.cssvalue= this.editor.getCss();

       // this.htmlcss = this.editor.runCommand('gjs-get-inlined-html');

        
       
         this.editor.getConfig().showDevices = false;  //to remove the show device from top

        //  this.editor.load(res => console.log('Load callback',res));
        // this.editor.store(res => console.log('Store callback',res));

      //  this.editor.on('storage:load', function(e) {
        
      //   console.log('STORAGE:LOAD ', e);
        
        
      // });
      // this.editor.on('storage:store', function(e) {
        
      //   console.log('STORAGE:STORE ', e);
      // });
      // this.editor.on('storage:error', function(e) {
      //   console.log('STORAGE:ERROR ', e);
      // });
      // this.editor= this.editor;


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
      blockManager.add('test-chart-block', {
        label: 'Test Chart block',
        attributes: {class: 'fa fa-text'},
        content: {
          content: `<canvas id="bar-chart" width="800" height="200"></canvas>`,
          script:`new Chart(document.getElementById("bar-chart"), {
            type: 'bar',
            data: {
              labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                  data: [2478,5267,734,784,433]
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
              }
            }
        });`
        }
      });

      blockManager.add('highcharts', {
        id: 'highcharts',
        // tslint:disable-next-line:max-line-length
      //   label: `<svg width="443px" height="70px" viewBox="0 0 256 243" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
      //   <g>
      //     <path d="M178.6,119.7 L176.8,116.6 L116.5,96.9 L114.8,98.9 L112.2,99.5 L58.6,224.7 L59.3,228.5 L188.4,174 L189.5,171.8
      //      L180.5,121.8 L178.6,119.7 Z" fill="#78758C">
      //     </path>
      //     <path d="M59.3,228.5 L114.8,98.9 L0.8,61.7 L59.3,228.5 Z" fill="red"></path>
      //     <path d="M157.1,0.3 L114.8,98.9 L178.6,119.7 L178.9,118.9 L157.5,1.2 L157.1,0.3 Z" fill="#8087E8"></path>
      //     <path d="M178.6,119.7 L188.4,174 L192.9,173.9 L254,147.4 L256.7,145.1 L253.5,142.4
      //      L181.6,118.2 L178.6,119.7 Z" fill="#30426B"></path>
      //     <path d="M188.4,174 L200.9,243.4 L256.7,145.1 L188.4,174 Z" fill="#6699A1"></path>
      //     <path d="M157.1,0.3 L178.6,119.7 L256.7,145.1 L157.1,0.3 Z" fill="#6699A1"></path>
      //   </g>
      // </svg>    <div class="gjs-block-label"> high charts </div>`,
      label:'High Chart',
        category: 'Extra',
        content: `<div style="padding-top: 10px;padding-right: 2px;padding-left: 2px;padding-bottom: 10px">
        <div id="highchart4" data-gjs-type="highcharts-type" style="width:100%; height:400px;"></div>
        </div>`,
        draggable: true,
        removable: true
      });

      this.addHighChartTraits(this.editor, 'highcharts-type');
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
  if(this.screen_id){
    this.getScreenById();
  }
  this.RemoteStorage = this.editor.StorageManager.get('remote');


  }
  sendpostdata()
  {
  
  if(this.screenname!="" && this.screenname!=null){
   

   this.new();
  }
  else{alert("provide screen name")}
 
   
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

  }

  new(){
    console.log("saving");

    if(this.screen_id && this.SaveScreenStatus==true){
      // alert(" scrn id");
     // this.saveRemoteStorage();
     this.RemoteStorage.set('params', { screenName:this.screenname,});
       this.editor.StorageManager.get('remote').set({
        
         urlStore:`http://localhost:3004/screen/update/${this.screen_id}`
      
        
       });
       this.editor.store((data) => {
        console.log('DATA---->>>>', data);
       
        this.closeScreeName();
        
      });
     }
    if(this.screen_id){
     this.RemoteStorage.set('params', { screenName:this.screenname,});
     // alert(" scrn id");
      this.editor.StorageManager.get('remote').set({
       
        urlStore:`http://localhost:3004/screen/update/${this.screen_id}`
       
      });
      this.editor.store((data) => {
        console.log('DATA---->>>>', data);
       
        this.closeScreeName();
        
      });
    }
   
    if(!this.screen_id && this.SaveScreenStatus==false){
      this.RemoteStorage.set('params', { screenName:this.screenname,});
      this.SaveScreenStatus=true;
    
      this.editor.StorageManager.get('remote').set(
        //{'params':{scr_name:this.screenname}},
        {
        
        urlStore:'http://localhost:3004/screen/save',
      
    
      });
      this.editor.store((data) => {
        console.log('DATA---->>>>', data);
        this.router.navigate([`${data._id}`]);
       
        this.closeScreeName();
        
      });
      //this.router.navigate([`${this.screen_id}`]);
      
    }

  }



  getScreenById() {
  
    console.log('------------ remote', this.editor.StorageManager.get('remote'));
 
    if (1==1) {
    

      this.ScreenService.getScreenById(this.screen_id).subscribe(
        response => {
          if (response) {
            //alert();
            //this.spinner.hide();
            this.existScreenDetail = response;
            console.log('------screen response-----', this.existScreenDetail);
                 this.editor.setComponents(
                JSON.parse(this.existScreenDetail[0]['gjs-components'])
              );
             // this.editor.setStyle(this.existScreenDetail[0]['gjs-css']);
              this.editor.setStyle(JSON.parse(this.existScreenDetail[0]['gjs-styles'][0]));
              console.log('------get grapesjs css-------', this.editor.getStyle());

          } else {
            console.log('------empty response coming for screen api');
          }
        },
        error => {
          console.log('screenId error are ---- ', error);
        }
      );
    } 
  }

  saveRemoteStorage(params = {}) {
   
    if (Object.keys(params).length > 0) {
      alert();
      this.RemoteStorage.set('params', params);
      this.editor.StorageManager.get('remote').set({
       // urlStore: `${this.modifyTemplateUrl}/${this.templateObj._id}?log_id=${this.logId}`,
       urlStore:`http://localhost:3004/screen/update/${this.screen_id}`
      });
    } else {
    //  alert();
      this.RemoteStorage.set('params', {
        
        screenName:this.screenname,
        // 'component-lifecycle': 'this.componentLifeCycle',
        // 'special-events': 'this.specialEvents',
        // grid_fields: 'this.agGridObject',
        // flows_info: 'this.screenFlows',
        // route_info: 'this.routeFlows',
        // link_info: 'this.linkArray',
        //  screenName:this.screenname,
        // is_grid_present: 'this.is_grid_present',
        // is_bootStrapTable_present: 'this.is_bootStrapTable_present',
        // entity_info: 'this.screenEntityModel',
        // project: 'this.project_id',
        // feature: 'this.feature_id,',
        // screenType: 'this.screenType',
        // screenOption: 'this.screenOption',
        // specific_attribute_Event: 'this.specific_attribute_Event'
      });
    }

 
  
  }
  addHighChartTraits(editor, buttonName) {
    const comps = editor.DomComponents;
    const $this = this;
    const defaultType = comps.getType('default');
    const defaultModel = defaultType.model;
    const dType = comps.getType(buttonName);
    const dView = defaultType.view;
    const chartType ='column';
    const chartTitle='Food Used';
  //  var myChart;
    comps.addType(buttonName, {
      model: defaultModel.extend(
        {
          defaults: Object.assign({}, defaultModel.prototype.defaults, {
            draggable: '*',
            droppable: false,
            charttype: chartType,
            charttitle:chartTitle,
            script: function () {
              const initHighChart = function () {
                const myChart = Highcharts.chart('highchart4', {
                  chart: {
                    type: '{[ charttype ]}'
                  },
                  title: {
                    // text: 'Fruit Consumption'
                    text: '{[ charttitle ]}'
                    
                  },
                  xAxis: {
                    categories: ['Apples', 'Bananas', 'Oranges']
                  },
                  yAxis: {
                    title: {
                      text: 'Fruit eaten'
                    }
                  },
                  series: [
                    {
                      name: 'Jane',
                      data: [20, 50, 100]
                    },
                    {
                      name: 'John',
                      data: [60, 30, 50]
                    }
                  ]
                 
                });
                console.log("cc",myChart);
               
               // myChart.title.set("title", "New updated Title");
              };
            
              let exists = false;
              const url = 'https://code.highcharts.com/highcharts.js';
              //  const url = Highcharts;
              const scripts = document.getElementsByTagName('script');
              for (let i = scripts.length; i--;) {
                if (scripts[i].src === url) {
                  exists = true;
                }
              }
              if (!exists) {
               
                const script = document.createElement('script');
                script.onload = initHighChart;
               // console.log("init",initHighChart());
                script.src = url;
                document.body.appendChild(script);
              } else {
                initHighChart();
               
                
              }
              
            },
            traits: [
              {
                label: 'Type',
                type: 'select',
                name: 'charttype',
                options: [
                  { value: 'bar', name: 'bar' },
                  { value: 'line', name: 'line' },
                  { value: 'column', name: 'column' },
                  { value: 'area', name: 'area' },
                  { value: 'pie', name: 'pie' },
                  { value: 'columnpyramid', name: 'columnpyramid' }
                  
                ],
                changeProp: 1
              },
              {
                label:'Title',
                type:'text',
                name:'charttitle',
                changeProp: 1
              }
            ]
            
          }),
        
          init() {
       
            this.listenTo(this, 'change:charttype', this.chartType);
            this.listenTo(this,'change:charttitle',this.chartTitle);
     
          },
         
          chartType() { 
           const view = this.getView(); 
           view && view.render();
        },
        chartTitle(){
          const view = this.getView(); 
          view && view.render();
        }
        },
        {
          isComponent: function (el) {
            if (el.tagName === buttonName) {
              return {
                type: buttonName
              };
            }
          }
        }
      ),

      view: defaultType.view
  
    });
  }
  

}
