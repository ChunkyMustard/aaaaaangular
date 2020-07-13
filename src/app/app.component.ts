import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-lab';
  filter: string = "";

  todos :Todo[]= [
    {
        task: "run",
        completed: false
    },
    {
        task: "hide",
        completed: false
    },
    {
        task: "die",
        completed: false
    },
    {
        task: "go away",
        completed: false
    },
    {
        task: "fly you fool",
        completed: false
    },
  ];

  completer(index)
  {
    this.todos[index].completed = true;
  }

  deleter(index)
  {
    this.todos.splice(index, 1);
  }

  adder()
  {
    let adderall = prompt("What to add?");
    let newTodo = {task: adderall, completed: false};
    this.todos.push(newTodo);
  }
  

  /* filterer(fltr)
  {
    let limit = this.todos.length;
    
    var i;
    for (i = 0; i < limit; i++)
    {
        let blank = this.todos[i].task;
        if (blank.includes(fltr))
        {
            alert();
        }
    }
  } */



}

export interface Todo
{
    task: string;
    completed: boolean;
}


//FILTER PROBLEMS
// USE A PIPE
//transform(value: Todo, filter: string)
//{
//  const displayedObj: Todo[]=[];
//  if(filter){
//      for(let obj of value)
//      {
//          if(obj.prop1.toLowerCase().inclued(filter.toLowerCase())){
//          displayedObj.push(obj);
//         }
//      }
//  }else{
//      displayedObj = value; 
//  }
//  
//
//  return displayedObj;
//}






// ng serve