import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'hellopipe'})

export class HelloPipe implements PipeTransform {
    transform(value: string, args: string[]) {
        if(value) {
            return 'hello ' + value.substring(0, parseInt(args[0]));
        }
    }
}