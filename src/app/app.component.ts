import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tailwind-angular-example';

  user?: string;

  ngOnInit(): void {
    this.user = localStorage.getItem('user')!;
  }

  barClickEvent() {
    const menu = document.getElementById('menu');

    if (menu?.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu?.classList.add('hidden');
    }
  }

  profileDrop() {
    const profile = document.getElementById('profile');

    if (profile?.classList.contains('hidden')) {
      profile.classList.remove('hidden');
    } else {
      profile?.classList.add('hidden');
    }
  }

}
