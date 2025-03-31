import { Component } from '@angular/core';
import { DarkModeService } from '../../services/DarkMode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private theme: DarkModeService, private route: Router){}
  toggleTheme(){
    this.theme.toggleDarkMode()
  }
  onSearch(query:string){
    if(query.trim()){
      this.route.navigate(['/search', query])
    }
  }
}
