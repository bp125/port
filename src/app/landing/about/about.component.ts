import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  redirectToDashboard(): void {
    window.open('https://pi.aidtaas.com/dashboard', '_blank');
  }

  monet(): void {
    window.open('https://monet.aidtaas.com/#/', '_blank');
  }

  wizhob(): void {
    window.open('https://wizhob.com/', '_blank');
  }
  cstoreiq(): void {
    window.open('https://devcsiqbo.cstoreiq.com/#/dashboard', '_blank');
  }
  cstoreiqcmpn(): void {
    window.open('https://www.cstoreiq.com/', '_blank');
  }
  gaian(): void {
    window.open('https://www.gaiansolutions.com/', '_blank');
  }
  techmahindra(): void {
    window.open('https://www.techmahindra.com/', '_blank');
  }

}
