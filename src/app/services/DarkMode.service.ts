import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
private darkMode: boolean = false;
constructor() {
  this.darkMode = localStorage.getItem('dark-mode') == 'true';
  this.updateTHeme()
 }
toggleDarkMode(){
  this.darkMode = !this.darkMode;
  localStorage.setItem('dark-mode', String(this.darkMode))
  this.updateTHeme()
}
private updateTHeme(){
  if (this.darkMode){
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');

  }
}
isDarkMode():boolean {
  return this.darkMode
}
}
