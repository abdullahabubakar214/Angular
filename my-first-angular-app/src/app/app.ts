import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //'signals to create and manage state. it's lightweight wrapper around function.
  protected readonly title = signal('Abdullah');
  name: string = "Abu Bakar" 
  date = new Date();
  

  //Signals
  // This ability to respond to changing signal values over time is known as `reactivity`.
  
  // Read a signal value by calling it— signals are functions.
  // console.log(title());

  // Change the value of this signal by calling its `set` method with a new value.
  // title.set('Jaime');

  // You can also use the `update` method to change the value
  // based on the previous value.
  // firstName.update(name => name.toUpperCase()); 


  //Computed expression
  //  A computed is a signal that produces its value based on other signals.

  //  const titleCapitalized = computed(() => title().toUpperCase());
  // console.log(titleCapitalized()); // ABDULLAH
}
