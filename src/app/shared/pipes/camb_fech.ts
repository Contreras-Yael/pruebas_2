import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "camf",
  standalone: true
})

export class camf2 implements PipeTransform{

  transform(value:string | Date): string {

    if(!value){
      return '';
    }

    const fecha = new Date(value);

    const mes = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(fecha);


    const dia = fecha.getDate();

    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const tiempo = `${horas}:${minutos}`;

    const anio = fecha.getFullYear();

    return `${mes} ${dia}   ${tiempo}   ${anio}`;

  }

}
