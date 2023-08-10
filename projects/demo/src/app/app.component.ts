import { Component , OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';
  hideMainNav = true;
  constructor(private router:Router){}
  ngOnInit(): void {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd))
        .subscribe(event => {
                  this.hideMainNav = event['url'].indexOf('/compass') !==-1?true:false;
                  if(this.hideMainNav){
                    document.querySelector('body').classList.add('compass');
                  }
        });
  }
}
