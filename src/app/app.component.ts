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
       
       // defaults: []  //this will disable all default panels
      
      },
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
       
        attributes: {
        title: 'Insert h1 block',
       
        }

        });
        blockManager.add('p-block', {
          label: 'Paragraph',
          content: '<p>Put your Parahraph here</p>',
          category: 'Basic',
          attributes: {
            
            title: 'Insert p block',
           // class: 'fa fa-text'
           
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
            title: 'Insert img block'
          }
        
        });
        blockManager.add('my-map-block', {
          label: 'Simple map block',
          content: {
            type: 'map', // Built-in 'map' component
            style: {
              height: '350px'
            },
            removable: false, // Once inserted it can't be removed
          }
        });
        // blockManager.add('the-row-block', {
        //   label: '2 Columns',
        //   content: '<div class="row" data-gjs-droppable=".row-cell" data-gjs-custom-name="Row">' +
        //       '<div class="row-cell" data-gjs-draggable=".row">1row</div>' +
        //       '<div class="row-cell" data-gjs-draggable=".row">2row</div>' +
        //     '</div>',
        //     render: ({ el }) => {
        //       const btn = document.createElement('button');
        //       btn.innerHTML = 'Click me';
        //       btn.addEventListener('click', () => alert('Do something'))
        //       el.appendChild(btn);
        //     },
        // });

        blockManager.add('the-row-block', {
          label: '2 Columns',
          content: `
          <div class="row" data-gjs-droppable=".row-cell" data-gjs-custom-name="Row">
            <div class="row-cell" data-gjs-draggable=".row"></div>
            <div class="row-cell" data-gjs-draggable=".row"></div>
          </div>
        
        `,
     
        });
  



       const block = blockManager.getAll();
       console.log(JSON.stringify(block));
        
       

        panelManager.addPanel({
          id: 'panel-top',
          el: '.panel__top',
        });
        panelManager.addPanel({
          id: 'basic-actions',
          el: '.panel__basic-actions',
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
  }
 
  
}

