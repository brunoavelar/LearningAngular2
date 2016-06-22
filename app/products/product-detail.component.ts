import { Component, OnInit } from 'angular2/core';
import { ProductService } from './product.service';
import { RouteParams, Router} from 'angular2/router';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product detail page";
    
    constructor(private _productService: ProductService, 
                private _routeParams: RouteParams,
                private _router: Router) { 
        console.log(this._routeParams.get('id'));
        
    }
    
    onBack(): void {
        this._router.navigate(['Products']);
    }
    
    ngOnInit(): void { 

    }

}