import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  imports: [],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css',
})
export class TodoApp {
  newTodo = signal<string>('');

  todos = signal<{ text: string; done: boolean }[]>([

  ]);

  addTodo() {
    const text = this.newTodo().trim();

    if(text === ''){
      return;
    }

     this.todos.update((todo) => [...todo, { text, done: false }]);

     this.newTodo.set('');
  }

  deleteTodo(index: number) {
    this.todos.update((todo) => todo.filter((_, i) => i !== index));
  }

  toggleTodo(index: number) {
    this.todos.update((todos) => 
    todos.map((todo,i)=> 
    i === index ? { ...todo, done: !todo.done } : todo
    )
  );
}

}
