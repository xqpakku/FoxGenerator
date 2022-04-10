import { Component } from '@angular/core';
import { GetFoxService } from './get-fox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FoxGenerator';

  constructor(private getFoxService : GetFoxService) {}

  showFox(){
    this.getFoxService.getFox().subscribe(
      x => {console.log(x)}
    );
  }


  generateButtonClick(){
    this.showFox();
  }

}
