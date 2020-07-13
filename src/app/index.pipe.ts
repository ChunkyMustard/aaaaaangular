import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './app.component';

@Pipe({
  name: 'index'
})
export class IndexPipe implements PipeTransform {

    transform(value: Todo[], filter: string): Todo[] {
        console.log(filter)
        let displayedObj: Todo[]=[];
        if(filter){
          for(let obj of value){
            if(obj.task.toLowerCase().includes(filter.toLowerCase())){
              displayedObj.push(obj);
            }
          }
        }else{
          displayedObj = value;
        }
        return displayedObj;
      }
    
    }
    