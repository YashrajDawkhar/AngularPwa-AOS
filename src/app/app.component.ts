import { Component } from '@angular/core';


import * as AOS from 'aos';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPwa';



  ngOnInit(){
    AOS.init({
      offset:150,
      duration:1500,
      easing: 'ease-in-out-sine',
      
    });



    
    }

}
