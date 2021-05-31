import { Component, OnInit } from '@angular/core';
import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fiserv-frontend-interview-task';
  categorys:any = (data as any).default;
  categorys_list:any;
  selectedItem:string = 'all';

  constructor(){}

  ngOnInit(){
    this.categorys_list = [...new Set(this.categorys.map((item:any) => item.category))];
    console.log(this.categorys_list);
  }

  //filter Categories by selection
  getList(value:any){
    this.selectedItem = value;
    this.categorys = (data as any).default;
    if(value === 'all'){
      this.categorys = (data as any).default;
    }else if(value){
      this.categorys = this.categorys.filter((item:any) => (item.category).toLowerCase() === value.toLowerCase());
    }
  }

  // filter Categories by search
  filterCategoryList(value:any){
    return value?
    this.categorys = this.categorys.filter((item:any) => item.category.toLowerCase().includes(value.toLowerCase())|| item.category_title.toLowerCase().includes(value.toLowerCase())):
    this.categorys = (data as any).default;
  }
}
