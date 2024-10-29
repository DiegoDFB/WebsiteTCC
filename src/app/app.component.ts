import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LojasComponent } from "./lojas/lojas.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, RodapeComponent, LojasComponent],  // Aqui os componentes são separados por vírgulas
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrigido 'styleUrl' para 'styleUrls'
})
export class AppComponent {
  title = 'site';
}
