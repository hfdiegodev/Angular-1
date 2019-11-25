import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  luke = {name: 'Luke', isJedi: true, temple: 'Coruscant'}
  heisenberg = {name: 'Heisenberg', isJedi: false}
  gabriel = {name: 'Gabriel', isJedi: true, temple: 'Holy Terra'}
}
