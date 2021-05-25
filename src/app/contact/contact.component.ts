import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { Contact } from '../contact';
@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contact: Contact;
  constructor(private service: EmpService,private router: Router) { }

  ngOnInit(): void {
    this.contact = new Contact();
  }

  
  sendContact() {
    this.service.contactAdd(this.contact)
    .subscribe(data => {
      this.contact = new Contact();
      alert("Contact Send Successfully !!!");
      this.router.navigate(['']);
    }, error => {
      console.log(error);
    });
  }
}

