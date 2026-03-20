import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  inputText: string = '';
  inputDescription: string = '';
  inputData: any = [];
  editId: number | null = null;

  saveTask() {
    if (this.inputText.trim() === '') return;

    if (this.editId === null) {
      this.inputData.push({
        id: this.inputData.length + 1,
        title: this.inputText.trim(),
        desc: this.inputDescription,
      });
    } else {
      this.inputData = this.inputData.map((item: any) =>
        item.id === this.editId
          ? {
              ...item,
              title: this.inputText.trim(),
              desc: this.inputDescription,
            }
          : item
      );
      this.editId = null;
    }

    this.inputText = '';
    this.inputDescription = '';
  }

  editTask(item: any) {
    this.inputText = item.title;
    this.inputDescription = item.desc;
    this.editId = item.id;
  }

  removeTask(id: number) {
    this.inputData = this.inputData.filter((item: any) => item.id !== id);
  }

  clearTask() {
    this.inputData = [];
  }
}