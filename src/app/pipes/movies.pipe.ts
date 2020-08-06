import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movies'
})

export class MoviesPipe implements PipeTransform {

  transform(items: any, searchText?: any): any {

    if (!searchText) {
      return items;
    }
    else {
      searchText = searchText.toUpperCase();
    }

    return items.filter(it => {
      return it.title.toUpperCase().startsWith(searchText) == true
    })

  }

}
