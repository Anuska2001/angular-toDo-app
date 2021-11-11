import { Component, OnInit } from '@angular/core';
import { Todo } from '../Models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css']
})
export class TodoComponent implements OnInit {

  todos!:Todo[];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [

    ]
  }

  toggleDone(id: number){
    this.todos.map((v, i)=>{
      if(i==id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo(id: number){
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  addTodo(){
    this.todos.push({
      content:this.inputTodo,
      completed:false
    })

    this.inputTodo = "";
  }
}
