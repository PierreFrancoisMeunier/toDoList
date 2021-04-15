import { error } from '@angular/compiler/src/util';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  today;
  todos;

  constructor(private toDoService: TodoService,
              private router : Router){

  }
  ngOnInit(){
    this.today = this.toDoService.today;
     this.toDoService.todos
     .then((todosRecup) => {
       this.todos = todosRecup;
     })
     .catch((error) => {
       console.log("Erreur = "+ error);
     });


  }
  onChangeStatus(i){
    this.toDoService.onChangeStatus(i);
  }

  onChangeIsModif(i){
    this.toDoService.onChangeIsModif(i);
  }

  onView(id : number ){
    this.router.navigate(["single-todo",id])
  }
}
