import { Component } from '@angular/core';
import { routerTransition} from './accueil/accueil/animation/router.animation'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'pipouFront';
}
