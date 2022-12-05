import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private produitService: ServiceService) {}

  ngOnInit(): void {}

  goBackToLogin() {
    localStorage.removeItem('user');
    this.router.navigate(['/back/login']);
  }
}
