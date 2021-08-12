import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';


@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.css']
})
export class ReadDataComponent implements OnInit {

  constructor(private fetch:FetchDataService) { }
  tableData:any;
  objectKeys=Object.keys
  // console.log(this.objectKeys);


  ngOnInit(): void {
    console.log("this")
    this.fetch.getData().subscribe((data)=>{
      console.log("1st",this.objectKeys);
      this.tableData=data;
      console.log("hello")
      console.log("this.data",this.tableData[0].id)
      console.log("2nd",this.objectKeys);
      console.log("real data",this.objectKeys(this.tableData[1]))
    })
  }
  deleteUser(id: any) {
    console.log("deleted--",id)
    this.fetch.deleteUser(id).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err)
    })
  }

}
