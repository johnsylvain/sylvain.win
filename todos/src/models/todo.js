export class Todo {
  constructor(text, completed = false) {
    this.text = text;
    this.completed = completed;
  }

  toggle() {
    this.completed = !this.completed;
    return this;
  }
}
