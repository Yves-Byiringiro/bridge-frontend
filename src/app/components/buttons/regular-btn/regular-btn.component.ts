import { Component } from '@angular/core';
import { Color} from '../../../../assets/colors'

@Component({
  selector: 'app-regular-btn',
  templateUrl: './regular-btn.component.html',
  styleUrls: ['./regular-btn.component.css']
})
export class RegularBtnComponent {
  public color = new Color();
  public btn_text = 'Register';

  handleClick(){
    console.log('button clicked....')
  }
}

