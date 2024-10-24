import _ from 'lodash';     // a library that has methods that we can use to work on pagination

export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber-1) * pageSize;

    return _(items).slice(startIndex).take(pageSize).value();

}