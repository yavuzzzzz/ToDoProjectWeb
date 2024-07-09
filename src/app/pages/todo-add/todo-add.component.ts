import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoAdd } from 'src/app/models/todo-add';
import { TodoService } from 'src/app/services/todo-service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  todoForm = new FormGroup({
    content: new FormControl(''),
  });

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {}

  add() {
    this.todoService.add(this.todoForm.value as TodoAdd).subscribe((result) => {
      if (result) {
        this.router.navigateByUrl('/todos');
      }
    });
  }
}
