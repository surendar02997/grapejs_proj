import { Component, OnInit } from '@angular/core';

import grapesjs from 'node_modules/grapesjs';
import 'grapesjs-preset-newsletter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})

export class AppComponent implements OnInit{
  editor:any;
  ngOnInit()
  {
    this.editor = grapesjs.init({

      container: '#gjs',

      // plugins: ['gjs-preset-newsletter'],
      // pluginsOpts: {
      //   'gjs-preset-newsletter': {
      //     // options
      //   }
      // },
      
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
       fromElement: true,
      // // Size of the editor
       height: '500px',
       width: 'auto',
      //storageManager: false,
      

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
       
       // defaults: [
          // {
          //   id: 'panel-switcher',
          //   el: '.panel__switcher',
          //   buttons: [{
          //       id: 'show-layers',
          //       active: true,
          //       label: 'Layers',
          //       command: 'show-layers',
          //       // Once activated disable the possibility to turn it off
          //       togglable: false,
          //     }, {
          //       id: 'show-style',
          //       active: true,
          //       label: 'Styles',
          //       command: 'show-styles',
          //       togglable: false,
          //   }],
          // }
      //  ]  //this will disable all default panels
      
      },
      // selectorManager: {
      //   appendTo: '.styles-container'
      // },
      // styleManager: {
      //   appendTo: '.styles-container',
      //   sectors: [{
      //       name: 'Dimension',
      //       open: false,
      //       // Use built-in properties
      //       buildProps: ['width', 'min-height', 'padding'],
      //       // Use `properties` to define/override single property
      //       properties: [
      //         {
      //           // Type of the input,
      //           // options: integer | radio | select | color | slider | file | composite | stack
      //           type: 'integer',
      //           name: 'The width', // Label for the property
      //           property: 'width', // CSS property (if buildProps contains it will be extended)
      //           units: ['px', '%'], // Units, available only for 'integer' types
      //           defaults: 'auto', // Default value
      //           min: 0, // Min value, available only for 'integer' types
      //         }
      //       ]
      //     },{
      //       name: 'Extra',
      //       open: false,
      //       buildProps: ['background-color', 'box-shadow', 'custom-prop'],
      //       properties: [
      //         {
      //           id: 'custom-prop',
      //           name: 'Custom Label',
      //           property: 'font-size',
      //           type: 'select',
      //           defaults: '32px',
      //           // List of options, available only for 'select' and 'radio'  types
      //           options: [
      //             { value: '12px', name: 'Tiny' },
      //             { value: '18px', name: 'Medium' },
      //             { value: '32px', name: 'Big' },
      //           ],
      //        }
      //       ]
      //     }]
      // },


      
      commands: {
        
        // options
      }
      
    })
        const blockManager = this.editor.BlockManager;
        const assetManager = this.editor.AssetManager;
        const panelManager = this.editor.Panels;
        const commands = this.editor.Commands;

        // commands.add('myCommand', {
        //   run(editor, sender) {
        //     alert('Hello world!');
        //   },
        //   stop(editor, sender) {
        //   },
        // });

         this.editor.getConfig().showDevices = false;  //to remove the show device from top

        // this.editor.Commands.add('show-layers', {
        //   getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
        //   getLayersEl(row) { return row.querySelector('.layers-container') },
        
        //   run(editor, sender) {
        //     const lmEl = this.getLayersEl(this.getRowEl(editor));
        //     lmEl.style.display = '';
        //   },
        //   stop(editor, sender) {
        //     const lmEl = this.getLayersEl(this.getRowEl(editor));
        //     lmEl.style.display = 'none';
        //   },
        // });
        // this.editor.Commands.add('show-styles', {
        //   getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
        //   getStyleEl(row) { return row.querySelector('.styles-container') },
        
        //   run(editor, sender) {
        //     const smEl = this.getStyleEl(this.getRowEl(editor));
        //     smEl.style.display = '';
        //   },
        //   stop(editor, sender) {
        //     const smEl = this.getStyleEl(this.getRowEl(editor));
        //     smEl.style.display = 'none';
        //   },
        // });
        

       
        assetManager.add({
          src: 'https://bit.ly/3vBrzTp',
          type: 'image',	//image is default
          width: 200,
          height: 300,
        
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
      blockManager.add('link-replace', {
        name: 'link-replace',
        category: 'Extra',
        label: 'Link Replace',
        content: {
          removable: true,
          draggable: true,
          droppable: true,
          script: "console.log('the element', this)",
          components: "<h2>Test Block</h2>",
          traits: ['link-replace','name'],
          style: {
            width: '100px',
            height: '100px'
          }
        },
        attributes: {
          title: 'Link Replace',
          class: 'fa fa-external-link'
        }
      });

        blockManager.add('the-row-block', {
          label: '2 Columns',
          category: 'Basic',
          content: `
          <div class="row" data-gjs-droppable=".row-cell" data-gjs-custom-name="Row">
            <div class="row-cell" data-gjs-draggable=".row"></div>
            <div class="row-cell" data-gjs-draggable=".row"></div>
          </div>
        
        `,
     //   content:{type:'cell'},
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
          content:'<div><input class="form-control" type="text"></div>'

      })



       const block = blockManager.getAll();
       console.log(JSON.stringify(block));
        
       

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
          { id: 'save', className: 'fa fa-floppy-o icon-blank', command: function(editor1, sender) { alert('save button clicked') }, 
          attributes: { title: 'Save Template' } 
        }, 
      ]);
        
      //  const removedButton = panelManager.removeButton('myNewPanel', 'myNewButton');
       // var asset = assetManager.getAllVisible();
       // console.log(JSON.stringify(asset));



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


  }
 
  
}

