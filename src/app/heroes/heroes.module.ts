import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //Cosas que quiero hacer publicas fuera de este modulo
        ListadoComponent
    ],
    imports: [ //modulos que quiero importar
        CommonModule
    ]
})

export class HeroesModule {}