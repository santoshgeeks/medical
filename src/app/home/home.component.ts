import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import { HomeService } from './home.service';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  allListDetails
  searchlense
  color=['green','red','blue','pink']
  orderList=[{"orderid":"8246323","patient":"RUIZ,DIANA","frame_name":"224","order_date":"2019-10-24", "status":"SHIFTED"},
  {"orderid":"2722760","patient":"BOROUGHF,SUZAN","frame_name":"q4012","order_date":"2019-10-31", "status":"SHIFTED"},
  {"orderid":"23997","patient":false,"frame_name":false,"order_date":false},
  {"orderid":"11248448","patient":"schreiner,zoe","frame_name":"rage 010","order_date":"2019-11-13", "status":"DRAFT"},
  {"orderid":"4372244","patient":"INGLEMIKE","frame_name":"Airrage","order_date":"2019-11-11", "status":"SHIFTED"},
  {"orderid":"5143359","patient":"PAYAN,ARTHUR","frame_name":"NIKE 4141","order_date":"2019-10-24", "status":"SHIFTED"},
  {"orderid":"11108126","patient":"80217","frame_name":"JANE VIOLET MAGNOLIA 252","order_date":"2019-11-13", "status":"ERRORS"},
  {"orderid":"10212463","patient":"52204-HINKLEGARY","frame_name":"1-3990","order_date":"2019-11-13", "status":"SHIFTED"},
  {"orderid":"7636058","patient":"1232 FARMER,K.","frame_name":"*SAKS 277","order_date":"2019-10-27", "status":"SHIFTED"},
  {"orderid":"3845611","patient":"BECK, CHRISTY A","frame_name":"CLAURA","order_date":"2019-11-07", "status":"MISSING"},
  {"orderid":"1103790","patient":"HERNANDEZ,JOSE","frame_name":"JA162","order_date":"2019-11-02", "status":"SHIFTED"},
  {"orderid":"8905099","patient":"Driskell,Corey","frame_name":"255","order_date":"2019-11-06", "status":"SHIFTED"},
  {"orderid":"7975854","patient":"ORTH,KATHY","frame_name":"BB7024","order_date":"2019-11-09", "status":"SHIFTED"},
  {"orderid":"7303299","patient":"4037-REID,CATHLEE","frame_name":"2-TNT AR 18430","order_date":"2019-11-20", "status":"SHIFTED"},
  {"orderid":"1953257","patient":"KEYS,LESLIE","frame_name":"GU 1585ST","order_date":"2019-10-27", "status":"SHIFTED"},
  {"orderid":"9694807","patient":"AN,LAN","frame_name":"M-FIT","order_date":"2019-11-06", "status":"SHIFTED"},
  {"orderid":"9676323","patient":"Parker,Warby","frame_name":"Moriarty Burnt Lemon Tort","order_date":"2019-10-30", "status":"SHIFTED"},
  {"orderid":"4391011","patient":"1281BUELL","frame_name":"*MANCHESTER","order_date":"2019-11-02", "status":"SHIFTED"},
  {"orderid":"11245257","patient":"BROWN,JANICE","frame_name":"Prodesign 4161","order_date":"2019-10-26", "status":"SHIFTED"},
  {"orderid":"6062222","patient":"SCHOUWEILER,ST","frame_name":"16345","order_date":"2019-11-14", "status":"SHIFTED"}]
  
  searchByFieldName:string
  
  constructor(private requestTypes:HomeService, private router:Router) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.orderList);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  allList(){
    this.requestTypes.getlists().subscribe(results=>{
      this.allListDetails=results;
      console.log(this.allListDetails);
      
    })
  }
  search(me){
    this.orderList=this.orderList.filter(res=>{
      // return res.toLocaleLowerCase().match(this.searchByFieldName.toLocaleLowerCase());
    })
  }
  getColor(country) { (2)
    switch (country) {
      case 'SHIFTED':
        return '#00B368';
      case 'DRAFT':
        return '#A5C000';
      case 'ERRORS':
        return '#FF000F';
      case 'MISSING':
        return '#8D70CB';
    }
  }

  getRandomColor1(index) {
    var totalNoOfColors =this.color.length;
    for(var i=0;i<this.orderList.length; i++){
      if(this.orderList[i].status=='SHIFTED'){
        console.log('SHIFTED');
        return this.color[index % totalNoOfColors];
        
      }
    }
    return this.color[index % totalNoOfColors];
    
  }
  ngOnInit() {
    this.allList()
  }

}
