import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [ //Cosas que quiero hacer publicas fuera de este modulo
        ContadorComponent
    ]
})

export class ContadorModule {}