import { Component } from '@angular/core';

function Theme() {
  // Define which theme should load next
  const themeMap = {
    dark: 'light',
    light: 'solar',
    solar: 'dark'
    };

    // Load the existing theme in local storage
    const theme = localStorage.getItem('theme');
    const bodyClass = document.body.classList;
    theme && bodyClass.add(theme);

    // Change the theme on a button click
    function toggleTheme() {
      const current = localStorage.getItem('theme');
      const next = themeMap[current];

      bodyClass.replace(current, next);
      localStorage.setItem('theme', next);
    }

    document.getElementById('themeButton').onclick = toggleTheme;
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarOpen = false;
  title = 'portfolio';

  ngOnInit(){
    Theme()
  }
}
