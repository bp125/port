import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  time: string = '';
  date: string = '';
  private timerId: any;

  ngOnInit(): void {
    this.updateDateTime();
    this.timerId = setInterval(() => this.updateDateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  private updateDateTime(): void {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    this.time = `${hours}:${minutes}:${seconds}`;

    const day = now.toLocaleString('en-US', { weekday: 'short' });
    const month = now.toLocaleString('en-US', { month: 'short' });
    const dateNum = now.getDate();
    const year = now.getFullYear();
    this.date = `${day}, ${month} ${dateNum}, ${year}`;
  }

  downloadCV() {
    const url = 'https://drive.google.com/uc?export=download&id=1GTU1stTVSn1ogi9Ebt3_1r36tyix59kT';
    window.open(url, '_blank');  // This will trigger the download
  }
}
