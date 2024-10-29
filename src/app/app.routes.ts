import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LojasComponent } from './lojas/lojas.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { ContatoComponent } from './contato/contato.component';
import { TermosCondicoesComponent } from './termos-condicoes/termos-condicoes.component';
import { DeclaracaoPrivacidadeComponent } from './declaracao-privacidade/declaracao-privacidade.component';
import { FaqComponent } from './faq/faq.component';

export const routes: Routes = [
    {path: '', component:MainComponent },
    {path: 'lojas', component:LojasComponent},
    {path: 'quem-somos', component:QuemSomosComponent},
    {path: 'parceiros', component:ParceirosComponent},
    {path: 'contato', component:ContatoComponent},
    {path: 'termos', component:TermosCondicoesComponent},
    {path: 'privacidade', component:DeclaracaoPrivacidadeComponent},
    {path: 'faq', component:FaqComponent},
];
