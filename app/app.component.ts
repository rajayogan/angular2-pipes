import {Component} from 'angular2/core';

import {HelloPipe} from './hello.pipe';

@Component({
    selector: 'my-app',
    template: `<h1> {{mydate | date: 'MMM yyyy'}} </h1>
    <h1>{{randomval | number}}</h1>
    <h1> {{decval | number:'2.2-3'}} </h1>
    <h1> {{curr | currency:'INR':true}}</h1>
    <h1> {{name | hellopipe:'4'}}</h1>`,
    pipes: [HelloPipe]
    
})
export class AppComponent { 
    mydate = new Date();
    randomval = 123456;
    decval = 2.45637;
    curr = 452;
    name = 'victor';
}
