import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuestsComponent } from './component/guest/guest.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GuestsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
