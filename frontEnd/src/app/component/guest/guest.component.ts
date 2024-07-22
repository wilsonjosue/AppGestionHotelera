// src/app/components/guest/guest.component.ts
import { Component, OnInit } from '@angular/core';
import { GuestService } from '../../services/guest/guest.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  guests: any[] = [];
  guest: any = {};

  constructor(private guestService: GuestService) {}

  ngOnInit(): void {
    this.getGuests();
  }

  getGuests(): void {
    this.guestService.getGuests().subscribe(
      (guests) => {
        this.guests = guests;
        console.log('Guests:', this.guests);
      },
      (error) => {
        console.error('Error fetching guests:', error);
      }
    );
  }

  createGuest(): void {
    this.guestService.createGuest(this.guest).subscribe({
      next: (response) => {
        console.log('Guest created successfully:', response);
        this.getGuests();
        this.guest = {};
      },
      error: (error) => {
        console.error('Error creating guest:', error);
      }
    });
  }

  deleteGuest(id: number): void {
    this.guestService.deleteGuest(id).subscribe(
      () => {
        console.log('Guest deleted successfully');
        this.getGuests();
      },
      (error) => {
        console.error('Error deleting guest:', error);
      }
    );
  }
}