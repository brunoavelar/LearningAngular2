import { PipeTransform, Pipe } from 'angular2/core';
import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    
    transform(value: IProduct[], args: string[]){
        let filter = args ? args[0].toLowerCase() : null;
        
        let filteredArray: IProduct[] = value.filter((product: IProduct) => {  
            return product.productName.toLowerCase().indexOf(filter) >= 0;
        });
        
        return filteredArray;
    }
}