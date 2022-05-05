import {Component, HostListener, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ width: 0 }), animate('300ms', style({ width: '70%' }))]
  ),
  transition(':leave',
    [style({ width: '70%' }), animate('300ms', style({ width: 0 }))]
  )
]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit{
  width!: number;
  search: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
  }

  ngOnInit(): void {
    this.width = window.innerWidth;
  }

  triggerSearch() {
    this.search =  !this.search
  }
}
