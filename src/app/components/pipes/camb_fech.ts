import { DatePipe, DatePipeConfig } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "camfech"
})

export class camfech implements PipeTransform{

  constructor(locale: string, defaultTimezone?: string| null | undefined, defaultOptions?: DatePipeConfig | null | undefined):DatePipe;

  transform(value:string | number)

}
