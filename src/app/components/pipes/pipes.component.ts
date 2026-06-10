import { Component } from '@angular/core';
import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
 name: "Letras"
})

export class PipesComponent {

  transform( value: string){

    return value.replaceAll("e","3")
                .replaceAll("i")
  }

}
