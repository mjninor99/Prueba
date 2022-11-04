import { Component, OnInit } from '@angular/core';
import { Silla } from 'src/app/model/silla';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  private json: any[]=[
    {
      "id": 1,
      "numero": 1,
      "disponible": true
    },
    {
      "id": 2,
      "numero": 2,
      "disponible": true
    },
    {
      "id": 3,
      "numero": 3,
      "disponible": false
    },
    {
      "id": 4,
      "numero": 4,
      "disponible": true
    },
    {
      "id": 5,
      "numero": 5,
      "disponible": true
    },
    {
      "id": 6,
      "numero": 6,
      "disponible": true
    },
    {
      "id": 7,
      "numero": 7,
      "disponible": true
    },
    {
      "id": 8,
      "numero": 8,
      "disponible": true
    },
    {
      "id": 9,
      "numero": 9,
      "disponible": false
    },
    {
      "id": 10,
      "numero": 10,
      "disponible": true
    },
    {
      "id": 11,
      "numero": 11,
      "disponible": true
    },
    {
      "id": 12,
      "numero": 12,
      "disponible": true
    },
    {
      "id": 13,
      "numero": 13,
      "disponible": false
    },
    {
      "id": 14,
      "numero": 14,
      "disponible": true
    },
    {
      "id": 15,
      "numero": 15,
      "disponible": true
    },
    {
      "id": 16,
      "numero": 16,
      "disponible": true
    }

  ];

  public sillas:Silla[]=[];

  constructor() { }

  ngOnInit(): void {
    this.json.forEach(element => {
      let silla : Silla = new Silla(element.id,element.numero,element.disponible);
      this.sillas.push(silla);
    });
  }

}
