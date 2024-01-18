import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

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
