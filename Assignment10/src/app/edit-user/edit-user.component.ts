import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUser=new FormGroup({
    id:new FormControl(''),
    firstname:new FormControl(''),
    middlename:new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl(''),
    phoneno:new FormControl(''),
    address:new FormControl(''),
    customer_name:new FormControl(''),
    role:new FormControl('')
  })

  constructor(private route:ActivatedRoute,private fetch:FetchDataService) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params.id;
    console.log("params",this.route.snapshot.params.id);
    let doc=document.querySelector(`row${id}_id`);
    console.log(doc);
    this.fetch.getparticularUser(this.route.snapshot.params.id).subscribe((data:any)=>{
      
      this.editUser=new FormGroup({
      id:new FormControl(data[0].id),
      firstname:new FormControl(data[0].firstname),
      middlename:new FormControl(data[0].middlename),
      lastname:new FormControl(data[0].lastname),
      email:new FormControl(data[0].email),
      phoneno:new FormControl(data[0].phoneno),
      address:new FormControl(data[0].address),
      customer_name:new FormControl(data[0].customer_name),
      role:new FormControl(data[0].role)
      })
    }),(err:Error)=>{
      console.log(err);
    }
  }
  UpdateUser() {
    this.fetch.updateData(this.route.snapshot.params.id, this.editUser.value).subscribe((result: any) => {
      console.log(result);
    }, (err: Error) => {
      console.log(err);
    })
  }

}
