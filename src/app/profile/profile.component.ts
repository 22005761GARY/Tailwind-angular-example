import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  positionDrop() {
    const profile = document.getElementById('position');

    if (profile?.classList.contains('hidden')) {
      profile.classList.remove('hidden');
    } else {
      profile?.classList.add('hidden');
    }
  }
}
