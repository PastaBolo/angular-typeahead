import { Component } from '@angular/core'
import { TypeAheadConfig } from './type-ahead-config'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taConfig: TypeAheadConfig

  constructor() {
    this.taConfig = new TypeAheadConfig()
    setTimeout(() => {
      this.taConfig.results = ['Paris', 'Marseille', 'Bordeaux']
    }, 2000)
  }
}
