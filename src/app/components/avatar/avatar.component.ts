import { Component, Input} from '@angular/core';
import Host from 'src/app/models/host';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent{

     @Input() public host: Host;

}
