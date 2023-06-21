import { Component, OnInit } from '@angular/core';
import { contactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  allGroups:any=[]
  contact:contactSchema={}
  constructor(private api:ApiService,private navigate:Router){}
  
  ngOnInit(): void {
    //make an call to service
    this.api.getallgroups().subscribe({
      next:(result:any)=>{
        console.log(result);
        this.allGroups = result
      }
    })
  }

  //addContact
  addContact(){
    // make call to service
    this.api.addContact(this.contact).subscribe({
      next:()=>{
        //alert contact added
        alert("New contact added successfully")
        //redirect to all contact page
        this.navigate.navigateByUrl("")
      }
    })
  }
}
