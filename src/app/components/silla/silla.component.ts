import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-silla',
  templateUrl: './silla.component.html',
  styleUrls: ['./silla.component.css']
})
export class SillaComponent implements OnInit {

  @Input() 
  public numero: any;
  @Input() 
  public estado: boolean = true;

  public color: String = "aqua";

  constructor() { }

  ngOnInit(): void {
    if (!this.estado){
      console.log("entra")
      this.color = "red";
    }
  }

  ngOnChanges(): void{
    
  }

  

}
