import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private sidebarClosed = new BehaviorSubject<boolean>(false);
  sidebarState$ = this.sidebarClosed.asObservable();

  toggleSidebar(): void {
    this.sidebarClosed.next(!this.sidebarClosed.value);
  }

  setSidebarState(state: boolean): void {
    this.sidebarClosed.next(state);
  }

  get currentState(): boolean {
    return this.sidebarClosed.value;
  }
}
