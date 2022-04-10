import { Component } from '@angular/core';
import { GetFoxService } from './get-fox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FoxGenerator'
  picture : any;

  constructor(private getFoxService : GetFoxService) {}

  showFox(){
    this.getFoxService.getFox().subscribe(
      x => {
        this.picture.imagepath = x;
        console.log(this.picture);
      }
    );
  }


  generateButtonClick(){
    this.showFox();
  }

}
