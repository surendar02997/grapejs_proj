import { Component, OnInit } from '@angular/core';


import grapesjs from 'node_modules/grapesjs';


import 'grapesjs-firestore';

import { Post } from 'src/app/post.model';
import { Injectable } from '@angular/core';
declare var $: any;
import {ActivatedRoute, Router} from '@angular/router';
import { ScreenService } from '../screenservice.service';
import { HighchartModel } from '../highchart.model';
import { IEntity } from '../Entity';
import { GridOptions, initialiseAgGridWithAngular1 } from 'ag-grid-community';
import { TranslateService } from '@ngx-translate/core';

//import * as Highcharts from 'highcharts';
declare var Highcharts: any;

@Component({
  selector: 'app-grapesjs',
  templateUrl: './grapesjs.component.html',
  styleUrls: ['./grapesjs.component.css']
})
@Injectable()
export class GrapesjsComponent implements OnInit {
// fg=[];

  
  private gridApi;
  public gridColumnApi;

  public rowData;
  public rowData1;
  public columnDefs;
  public defaultColDef;
  Category_col_Values1=[];
 public gridOptions: GridOptions;
user:{id:string};

  //BLOCK Label text
   Label_block:string;
   Heading_block:string;
   Paragraph_block:string;
   Image_block:string;
   Input_block:string;
   Map_block:string;
   Link_block:string;
   highchart_block:string;
   test_chart_block:string;
   columns_block:string;
   basic_text:string;
   extra_text:string;

   //TRAITS LABEl Text
   id_trait:string;
   title_trait:string;
   for_trait:string;
   labelname_trait:string;
   image_alt_trait:string;
   mapaddress_trait:string;
   maptype_trait:string;
   mapzoom_trait:string;
   href_trait:string;
   target_trait:string;
   input_name_trait:string;
   input_placeholder_trait:string;
   input_type_trait:string;
   input_required_trait:string;
   highchart_inverted_trait:string;
   highchart_addseries_trait:string;
   highchart_render_trait:string;
   highchart_inverted_true_trait:string;
   highchart_inverted_false_trait:string;
   highchart_column_trait:string;
   highchart_bar_trait:string;
   highchart_area_trait:string;
   highchart_line_trait:string;
   highchart_pie_trait:string;
   input_text_trait:string;
   input_email_trait:string;
   input_pwd_trait:string;
   input_number_trait:string;

   //Style manager text setting
   typography_style:string;
   vertical_align_style:string;
   text_align_style:string;
   dimension_style:string;
   width_style:string;
   min_height_style:string;
   padding_style:string;
   extra_style:string;
   b_color_style:string;
   box_shadow_style:string;
   custom_label_style:string;
   decoration_style:string;
   border_style:string;
   border_radius_style:string;
   border_bottomn_color_style:string;


   

  constructor(private ScreenService:ScreenService,
    private route:ActivatedRoute,
    private router:Router,
    private TranslateService:TranslateService,
    ){ 
      // TranslateService.addLangs(['English','Tamil']);
      // TranslateService.setDefaultLang('English');
      // const BrowserLang=TranslateService.getBrowserLang();
      // console.log("BrowserLang ---- ",BrowserLang);
      
      // TranslateService.use(BrowserLang.match(/en|ta/) ? BrowserLang:'English');
  
      this.TranslateService.get('BLOCKS_LABELS').subscribe((data:any)=> {
      //  console.log("home is",data.LABEL);
        this.Label_block=data.LABEL;
        this.Heading_block=data.HEADING;
        this.Paragraph_block=data.PARAGRAPH;
        this.Image_block=data.IMAGE;
        this.Input_block=data.INPUT;
        this.Map_block=data.MAP;
        this.Link_block=data.LINK;
        this.highchart_block=data.HIGHCHART;
        this.test_chart_block=data.TEST_CHART_BLOCk;
        this.columns_block=data.COLUMNS_2;
        this.basic_text=data.BASIC_TEXT;
        this.extra_text=data.EXTRA_TEXT;
       });

       this.TranslateService.get('TRAITS_SETTINGS').subscribe((data:any)=>{
        this.id_trait=data.LABEL.ID;
        this.title_trait=data.LABEL.TITLE;
        this.for_trait=data.LABEL.FOR;
        this.labelname_trait=data.LABEL.LABEL_NAME;
        this.input_name_trait=data.INPUT.NAME;
        this.input_placeholder_trait=data.INPUT.PLACEHOLDER;
        this.input_type_trait=data.INPUT.TYPE;
        this.input_required_trait=data.INPUT.REQUIRED;
        this.input_text_trait=data.INPUT.TEXT;
        this.input_email_trait=data.INPUT.EMAIL;
        this.input_pwd_trait=data.INPUT.PASSWORD;
        this.input_number_trait=data.INPUT.NUMBER;
        this.highchart_inverted_trait=data.HIGHCHARTS.INVERTED;
        this.highchart_addseries_trait=data.HIGHCHARTS.ADDSERIES;
      
        this.highchart_column_trait=data.HIGHCHARTS.COLUMN;
        this.highchart_area_trait=data.HIGHCHARTS.AREA;
        this.highchart_pie_trait=data.HIGHCHARTS.PIE;
        this.highchart_bar_trait=data.HIGHCHARTS.BAR;
        this.highchart_line_trait=data.HIGHCHARTS.LINE;
       
        this.highchart_render_trait=data.HIGHCHARTS.RENDER;
        this.highchart_inverted_false_trait=data.HIGHCHARTS.INVERTED_FALSE;
        this.highchart_inverted_true_trait=data.HIGHCHARTS.INVERTED_TRUE;
        this.href_trait=data.YOUTUBE.HREF;
        this.target_trait=data.YOUTUBE.TARGET;
       });
       this.TranslateService.get('STYLE_SETTINGS').subscribe((data:any)=>{
        this.typography_style=data.TYPOGRAPHY.TYPOGRAPHY;
        this.vertical_align_style=data.TYPOGRAPHY.VERTICAL_ALIGN;
        this.text_align_style=data.TYPOGRAPHY.TEXT_ALIGN;

        this.dimension_style=data.DIMENSION.DIMENSION;
        this.width_style=data.DIMENSION.WIDTH;
        this.min_height_style=data.DIMENSION.MIN_HEIGHT;
        this.padding_style=data.DIMENSION.PADDING;

        this.extra_style=data.EXTRA.EXTRA;
        this.b_color_style=data.EXTRA.B_COLOR;
        this.box_shadow_style=data.EXTRA.BOX_SHADOW;
        this.custom_label_style=data.EXTRA.CUSTOM_LABEL;

        this.decoration_style=data.DECORATION.DECORATION;
        this.border_style=data.DECORATION.BORDER;
        this.border_radius_style=data.DECORATION.BORDER_RADIUS;
        this.border_bottomn_color_style=data.DECORATION.BORDER_BOTTOMN_COLOR;
       



       });


      this.rowData = [
        {
          Categories: 'Apple',
          SeriesName: 'Rahul',
          SeriesData: '10',
   
        },
        {
          Categories: 'Banana',
          SeriesName: 'Mehta',
          SeriesData: '50',
   
        }
      ];
      this.columnDefs = [
        //{field:'',checkboxSelection: true,minWidth: 60},
        { field: 'Categories', filter: 'agTextColumnFilter',checkboxSelection: true },
        { field: 'SeriesName', filter: 'agTextColumnFilter' },
        { field: 'SeriesData', filter: 'agTextColumnFilter' },
      
      ];
      this.defaultColDef = {
        flex: 1,
        minWidth: 110,
        editable: true,
        resizable: true,
      };
    
  }

  AddRows(){
   
      var rowta={
        Categories:"", SeriesName:"", SeriesData: ""
      }
      this.gridApi.addItems([rowta]);
      this.gridApi.refreshView();
  }
  onDeleteRow()
  {
   // alert();
 var selectedData = this.gridApi.getSelectedRows();
 this.gridApi.updateRowData({ remove: selectedData });
  }
  
  
   saveallrows(){
    // alert(this.Category_col_Values);
    let rowData = [];
    
  //  let col_Cat=this.col_Cat;
    let Category_col_Values=[];
    let Seriesname_col_Values=[];
    let Seriesdata_col_Values=[];
  this.gridApi.forEachNode(node => rowData.push(node.data));
  this.rowData1=rowData
  console.log("lop",rowData);
 // console.log("l",node);
  
  // this.data_series_array.push(rowData);

  //console.log("rowData only",rowData);
   //  console.log("rowData",this.data_series_array);



     rowData.forEach(function(obj){
       Category_col_Values.push(obj['Categories']);
      Seriesname_col_Values.push(obj['SeriesName']);
      Seriesdata_col_Values.push(obj['SeriesData']);

    //  this.Category_col_Values1=Category_col_Values;
   //   alert(this.Category_col_Values1);
     // this.fg=Category_col_Values;
      //alert(fg)
     // Category_values.push(obj['Category_values']);
     //this.Category_values.push(obj.);
   //  console.log(obj);
     
        });
         console.log('categories value are ------  ', Category_col_Values);
         console.log('series name value are ------  ', Seriesname_col_Values);
         console.log('series data value are ------  ', Seriesdata_col_Values);
    return rowData;
  //  return col_Cat;
    
  }

  onBtStopEditing() {
  
    this.gridApi.stopEditing();
  }

  onBtStartEditing(key, char, pinned) {
    this.gridApi.setFocusedCell(0, 'lastName', pinned);
    this.gridApi.startEditingCell({
      rowIndex: 0,
      colKey: 'lastName',
      rowPinned: pinned,
      keyPress: key,
      charPress: char,
    });
  }

  onBtNextCell() {
    this.gridApi.tabToNextCell();
  }

  onBtPreviousCell() {
    this.gridApi.tabToPreviousCell();
  }

  onBtWhich() {
    var cellDefs = this.gridApi.getEditingCells();
    if (cellDefs.length > 0) {
      var cellDef = cellDefs[0];
      console.log(
        'editing cell is: row = ' +
          cellDef.rowIndex +
          ', col = ' +
          cellDef.column.getId() +
          ', floating = ' +
          cellDef.rowPinned
      );
    } else {
      console.log('no cells are editing');
    }
  }
  onRowEditingStarted(params) {
    params.api.refreshCells({
      columns: ["action"],
      rowNodes: [params.node],
      force: true
    });
  }
  onRowEditingStopped(params) {
    params.api.refreshCells({
      columns: ["action"],
      rowNodes: [params.node],
      force: true
    });
  }
  
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

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

  public data_series_array: any[] = [];
  public col_Cat: any[] = [];

  removevalue(i){
    this.data_series_array.splice(i,1);
  
  }

   addvalue(){
  
    var Category_values = [];
    const Data_Values: any = [{
      id: this.data_series_array.length + 1,
      Category_values: '',
      series_name_values: '',
      series_data_values: ''
    }];
    this.data_series_array.push(Data_Values);

    this.data_series_array.forEach(function(obj){
      
      
    Category_values.push(obj['Category_values']);
   //this.Category_values.push(obj.);
   console.log('categories value are ------  ', Category_values);

   });
   
 
  // console.log("ft", Category_values);





    // this.data_series_values.push({
    //   id: this.data_series_values.length + 1,
    //   Category_values: '',
    //   series_name_values: '',
    //   series_data_values: ''
    // });

  //  this.data_series_values.forEach(element => {
  //    // alert(JSON.stringify(element.Category_values))
  //     console.log(element);
  //     this.c_values=JSON.stringify(element.Category_values);
      
  //     console.log("ki1",this.c_values);
  //   });

//   for(var i=0;i<this.data_series_values.length;i++){
   
//    // console.log("ji",this.data_series_values);
//    // console.log("ji1",this.data_series_values[i].Category_values);
//     this.c_values=this.data_series_values[i].Category_values;
//      // alert(JSON.stringify(this.data_series_values))
//  }
 //console.log("ki",this.c_values);
 
    //alert(JSON.stringify(this.data_series_values))
   

  }
  ngOnInit()
  {
 
    this.user={id:this.route.snapshot.params['id']};


    this.screen_id=this.user.id;
    console.log("screen id",this.screen_id);
  
   
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
          name:this.typography_style,
          open:false,
          properties:[
            {
              name: this.vertical_align_style,
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
              name : this.text_align_style,
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
            name: this.dimension_style,
            open: false,
            // Use built-in properties
            buildProps: ['width', 'min-height', 'padding','vertical-align'],
         //   buildProps: [this.width_style, this.min_height_style, this.padding_style,this.vertical_align_style],
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
            name: this.extra_style,
            open: false,
            buildProps: ['background-color', 'box-shadow', 'custom-prop'],
            properties: [
              {
                id: 'custom-prop',
                name: this.custom_label_style,
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
            name: this.decoration_style,
            buildProps: ['border'],
            properties:[
              {
                name:this.border_radius_style,
                type: 'integer',
                      units: ['px', 'em', 'rem'],
                      property: 'border-radius',
              },
              {
                      name: this.border_bottomn_color_style,
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
          },
         
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
          label: this.Label_block,
          content: '<label>Put your Label here</label>',
          category: this.basic_text,
          
          attributes: {
            
            title: 'Insert Label block',
          //  class:'fa fa-paragraph'
           
          },
      
        
        
        });
        blockManager.add('h1', {
          label:this.Heading_block,
          category:this.basic_text,
          attributes: { 
            title: 'Insert h1 block',
           // class:'fa fa-youtube'
           },
          content:{
              type:'h1'
          }
      });
        blockManager.add('p-block', {
          label: this.Paragraph_block,
          //content: '<p>Put your Parahraph here</p>',
          content:{
            type:'p-block'
        },
          category:this.basic_text,
          attributes: {
            
            title: 'Insert p block',
            class:'fa fa-paragraph'
           
          },
      
        
        
        });
        blockManager.add('img-block', {
          id:'image',
          label: this.Image_block,
          content: { type: 'image' },
          category: this.basic_text,
          select: true,
          
         activate: true,
          attributes: {
            title: 'Insert img block',
            class: 'fa fa-image'
          }
        
        });
        blockManager.add('map', {
          label: this.Map_block,
          category: this.basic_text,
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
          label: this.columns_block,
          category: this.extra_text,
        //  content:{type:'the-row-block'},
        
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
          label:this.Link_block,
          category:this.basic_text,
          attributes: { class:'fa fa-youtube' },
          content:{
              type:'content-link'
          }
      });

  


      blockManager.add('INPUT',{
        id:'input',
        label:this.Input_block,
        category:this.basic_text,
          attributes: { 
            //class:'fa fa-youtube' 
          },
          content:'<div><input class="form-control" type="text"></div>',
          

      });
      blockManager.add('test-chart-block', {
        label: this.test_chart_block,
        attributes: {class: 'fa fa-text'},
        category: this.extra_text,
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
      label:this.highchart_block,
        category: this.extra_text,
        content: `<div style="padding-top: 10px;padding-right: 2px;padding-left: 2px;padding-bottom: 10px">
        <div id="highchart4" data-gjs-type="highcharts-type" style="width:100%; height:400px;"></div>
        </div>`,
        draggable: true,
        removable: true
      });

      this.addHighChartTraits(this.editor, 'highcharts-type');
   //   this.flowsActionButton(this);
    //  this.addGridTraits(this.editor, 'highcharts-type');
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
          traits: [
            {
              type: 'text',
              name: 'title',
              label:this.title_trait
          },
          {
            type: 'text',
            name: 'href',
            label:this.href_trait
        },
        {
          type: 'text',
          name: 'target',
          label:this.target_trait
      }
      
          ],
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
    this.editor.DomComponents.addType('h1', {
    //  extend: 'link',
      model: {
          defaults: {
        editable: true,
        droppable: true,
        select: true,
        traits: [
          this.id_trait, // Same as: { type: 'text', name: 'name' }
          this.title_trait,
    
        ],
        activate: true,
             
              content: '<h1>Put your title here</h1>',
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
          
            this.input_name_trait, // Same as: { type: 'text', name: 'name' }
          this.input_placeholder_trait,
            {
              type: 'select', // Type of the trait
              label: this.input_type_trait, // The label you will see in Settings
              name: 'type', // The name of the attribute/property to use on component
              options: [
                { id: 'text', name: this.input_text_trait},
                { id: 'email', name: this.input_email_trait},
                { id: 'password', name: this.input_pwd_trait},
                { id: 'number', name: this.input_number_trait},
              ]
            }, {
              type: 'checkbox',
              name: 'required',
              label:this.input_required_trait
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
          this.for_trait, // Same as: { type: 'text', name: 'name' }
          this.id_trait,
          {
            type: 'text',
            name: 'For',
            label: this.labelname_trait,
          },
        ]
      }
    }
  });
  this.editor.DomComponents.addType('h1', {
    
    model: {
      defaults: {
        traits: [
          this.id_trait,
          this.title_trait,
        ]
      }
    }
  });
  this.editor.DomComponents.addType('the-row-block', {
    
    model: {
      defaults: {
        traits: [
          this.id_trait,
          this.title_trait,
        ],
        editable: true,
        droppable: true,
        select: true,
        activate: true,
             
        content: `<div class="row" data-gjs-droppable=".row-cell" data-gjs-custom-name="Row">
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
      
      }
    }
  });
  this.editor.DomComponents.addType('p-block', {
    //  extend: 'link',
      model: {
          defaults: {
        editable: true,
        droppable: true,
        select: true,
        traits: [
          this.id_trait, // Same as: { type: 'text', name: 'name' }
          this.title_trait,
    
        ],
        activate: true,
             
              content: '<p>Put your paragraph here</p>',
          }
      }
  });
         
          this.editor.TraitManager.addType('AddSeriesName', {
            
            events: {
              
                'click': function () {
                 // const component = this.editor.getSelected();
                // alert("Series name clicked");
                //  console.log("ijijijijijij",component);
                  
                },
            },
            getInputEl() {
                const button = <HTMLElement>document.createElement('button');
                button.id = 'AddSeriesName';
                button.style.width = '100%';
                button.style.backgroundColor = '#4CAF50';
                button.style.border = 'none';
                button.style.color = 'white';
                button.style.backgroundColor = '#008CBA';
                button.style.fontSize = '16px';
                button.style.cursor = 'pointer';
                button.appendChild(document.createTextNode('AddSeriesName'));
                return button;
            },
        });
     
        this.editor.TraitManager.addType('AddSeriesData', {
          events: {
              'click': function () {
                alert("Series data clicked")
              },
          },
          getInputEl() {
              const button = <HTMLElement>document.createElement('button');
              button.id = 'AddSeriesData';
              button.style.width = '100%';
              button.style.backgroundColor = '#4CAF50';
              button.style.border = 'none';
              button.style.color = 'white';
              button.style.backgroundColor = '#008CBA';
              button.style.fontSize = '16px';
              button.style.cursor = 'pointer';
              button.appendChild(document.createTextNode('AddSeriesData'));
              return button;
          },
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

  addGridRowButton($this) {
    // add button

}

removeGridRowButton($this) {
    // remove button
   
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
  closeSeriesModel() {
    const model = document.getElementById('EventPopup');
    model.style.display = 'none';

  }
 
  closeSeriesModel1() {
    const model = document.getElementById('my_Series_Modal');
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

      });
    }

 
  
  }

  addHighChartTraits(editor, buttonName) {
    const comps = editor.DomComponents;
    const $this = this;
    const defaultType = comps.getType('default');
    const defaultModel = defaultType.model;
    //const dType = comps.getType(buttonName);
    //const dView = defaultType.view;
    const chartType ='column';
    const chartTitle='Food Used';
    const chartInverted='true';

    //const edit_text=this.edit_text;
    //console.log("hikkk",edit_text);
    
  

    let data_series_values=this.data_series_array;
    
    let gy=this.col_Cat;
   // let data_series_values=this.rowData;
   // let data_series_values=this.data_series_array['Category_values'];
    
    
    

    var Category_values=[];
    var series_name_values=[];
    var series_data_values=[];
    
    var chartTitle1;
    var myChart;
    comps.addType(buttonName, {
     
      model: defaultModel.extend(
        {
     
       
          defaults: Object.assign({}, defaultModel.prototype.defaults, {
            draggable: '*',
            droppable: false,
            charttype: chartType,
            charttitle:chartTitle,
            chartinverted:chartInverted,
         //   edit_text:edit_text,

            script: function () {
      
           
              const initHighChart = function () {
               // alert(JSON.stringify(this.data_series_values));

             myChart = Highcharts.chart('highchart4', {
                  chart: {
                    type: '{[ charttype ]}',
                  
                    inverted: '{[ chartinverted ]}'                 
                  },
                  title: {
                    text: '{[ charttitle ]}'
                  },
                  xAxis: {
                     categories: ['Apples', 'Bananas', 'Oranges']  ,
                    // categories: this.Category_values 
                 //  categories:[]
                     
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
                      
                      name: 'Ashok',
                      data: [57, 35, 45]
                    },
                    {
                      
                      name: 'Surendar',
                      data: [70, 18, 40]
                    },
                  
                ]
                
                });
             
                
              //  myChart.xAxis[0].setCategories(['sss','lpo','kio'], true, true);
          
                console.log("cc",myChart);

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
                console.log("init",this.myChart);
                script.src = url;
                document.body.appendChild(script);
             
              } else {
                initHighChart();

              }
             
              
            },
            traits: [
              {
                 label: this.input_type_trait,
             //  label:edit_text,
              
                type: 'select',
                name: 'charttype',
                options: [
                  { value: 'bar', name: this.highchart_bar_trait },
                  { value: 'line', name: this.highchart_line_trait },
                  { value: 'column', name: this.highchart_column_trait },
                  { value: 'area', name: this.highchart_area_trait },
                  { value: 'pie', name: this.highchart_pie_trait },  
                ],
                changeProp: 1
              },
              {
                label: this.highchart_inverted_trait,
                type: 'select',
                name: 'chartinverted',
                options: [
                  { value: true, name: this.highchart_inverted_true_trait },
                  { value: false, name: this.highchart_inverted_false_trait },
                ],
                changeProp: 1
              },
              {
                label:this.title_trait,
                type:'text',
                name:'charttitle',
                changeProp: 1
              },

              {
                text: this.highchart_addseries_trait,
                type: 'button',
                name:'AddSeriesData',
                full: true,
                command: () => {
                 //  const eventPopupModel = document.getElementById('my_Series_Modal');
               const eventPopupModel = document.getElementById('EventPopup');
                  eventPopupModel.style.display = 'block';

                  
                },
         
           
              },    
              {
                text: this.highchart_render_trait,
                type: 'button',
                name:'AddSeriesData',
                full: true,
                command: () => {
                 
                  this.rowData1.forEach(element => {
                 
                    Category_values.push(element['Categories']);
                    series_name_values.push(element['SeriesName']);
                    series_data_values.push(element['SeriesData']);
                    //return Category_values;
                  });
                  console.log(Category_values);
                  console.log(series_name_values);
                  console.log(series_data_values);
                  

                },
              },
              {
                label:'sample',
                type:'text',
                name:'sample',
                changeProp: 1
              },
              {
                text: 'save sample',
                type: 'button',
               // name:'AddSeriesData',
                full: true,
                command: () => {

                const component = editor.getSelected();
                console.log(component.getTrait('sample').props().value);

                },
              },
           
       
            ]
            
          }),
        
          init() {

            this.listenTo(this, 'change:charttype', this.chartType);
            this.listenTo(this,'change:charttitle',chartTitle1=this.chartTitle);
            this.listenTo(this,'change:chartinverted',this.chartInverted);
           // this.listenTo(this,'change:RenderChart',this.chartTitle);

          },
          
          chartType() { 
           const view = this.getView(); 
           view && view.render();
           
        },
        chartTitle(){
         // console.log(myChart);
          
        //  console.log(Category_values);
        
            const view = this.getView(); 
          view && view.render();

        },
       
        chartInverted(){
          const view = this.getView(); 
          console.log("view is",view);
          
          view && view.render();
        },
    
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
