import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array = [];
  name = ''
  title = 'kanakaiplmania';

  log(val){
    this.name = val 
    console.log('name==>',this.name);
    this.array.push(this.name)
    console.log('array==>',this.array);
    
  }
}
