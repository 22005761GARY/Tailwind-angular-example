import { Component } from '@angular/core';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.css']
})
export class DumbComponent {

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
