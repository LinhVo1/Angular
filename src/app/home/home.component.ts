import { Component } from '@angular/core';
import {Student} from './student';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  student : Student ={
    hoten:'Võ Đan Linh',
    gioitinh:'Nam',
    ngaysinh:'19/03/2000',
    anh:'avatar.jpg',
    diemtb:'8.0'
  }
}
