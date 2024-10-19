import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { ApiConnectivityComponent } from './api-connectivity/api-connectivity.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormDemoComponent, ApiConnectivityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-second-app';
}
