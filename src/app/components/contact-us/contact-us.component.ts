import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public save = '';
  public value = '+91';
  ngOnInit(): void{
  }
  onSave() {
    this.save = "You details have been submitted";
  }
  // keyup(value:string){
  //   this.text = value;
  // }
}
