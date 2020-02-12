import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

  items = [{
    id: 1,
    name: 'item one',
    imgPath: ['https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg',
      'https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__340.png'],
  },
  {
    id: 2,
    name: 'item two',
    imgPath: ['https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg',
      'https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__340.png'],

  },
  {
    id: 3,
    name: 'item three',
    imgPath: ['https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg',
      'https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__340.png'],

  }];

  name;
  id;
  methodType: string;

  constructor() { }

  ngOnInit() {

  }
  openModal(param) {
    this.name = '';
    document.getElementById('openModalButton').click();
    if (param) { this.methodType = 'update'; this.name = param.name; this.id = param.id; } else { this.methodType = 'add'; }
  }

  add(Param) {
    this.items.push({
      id: this.items.length + 1,
      name: Param.name,
      imgPath: [],
    });
  }

  update(obj) {
    this.items.map((v, i) => {
      if (v.id == obj.id) {
        v.name = obj.name;
      }
    });
  }

  onSelectFile(event, itemId) {
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.items.map((v) => {
            if (v.id == itemId) {
              v.imgPath.push(event.target.result);
            }
          });
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
}
