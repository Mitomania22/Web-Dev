import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

interface AppConfig {
  selector: string;
  standalone: boolean;
  imports: (typeof CommonModule | typeof FormsModule | typeof RouterModule)[];
  templateUrl: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('album-browser');
}
