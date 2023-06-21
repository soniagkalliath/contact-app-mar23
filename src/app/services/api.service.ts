import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url:string ='https://contact-server-api.onrender.com'

  constructor(private http:HttpClient) { }

  //get all contacts
  getallcontacts(){
    //make api call to http://localhost:3000/contacts
   return this.http.get(`${this.base_url}/contacts`)
  }

  //view-contact
  viewcontact(id:any){
    //make api call to http://localhost:3000/contacts/id
   return this.http.get(`${this.base_url}/contacts/${id}`)
  }
  
  //get single group details
  getAgroup(id:any){
//make api call to http://localhost:3000/groups/id
return this.http.get(`${this.base_url}/groups/${id}`)
  }

  //get all groups
  getallgroups(){
    //make an api call to http://localhost:3000/groups
   return this.http.get(`${this.base_url}/groups`)
  }

  //addContact
  addContact(contact:contactSchema){
    //make an api call to http://localhost:3000/contacts
    return this.http.post(`${this.base_url}/contacts`,contact)
  }

  //editcontact
  editcontact(id:any,body:contactSchema){
    //make api call to http://localhost:3000/contacts/id
    return this.http.put(`${this.base_url}/contacts/${id}`,body)
  }

  //remove contact
  removeContact(id:any){
        //make api call to http://localhost:3000/contacts/id
    return this.http.delete(`${this.base_url}/contacts/${id}`)

  }
}
