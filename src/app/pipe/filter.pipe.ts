import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string,keyword:string): any {
    if(!filterField||!keyword){
      return list;
    }else {
      return list.filter(item =>{
        return item[filterField].indexOf(keyword) != -1 ;
      })
    }

  }

}