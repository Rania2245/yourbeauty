import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      email: [
        '',
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"'),
      ],
      password: ['', [Validators.required]],
      couleurs: this.fb.array([]),
    });
  }
  public get email() {
    return this.loginForm.get('email');
  }
  public get password() {
    return this.loginForm.get('password');
  }
  isValidPattern() {
    return (
      this.loginForm.controls['email'].errors?.['pattern'] &&
      this.loginForm.controls['email'].dirty
    );
  }

  onVide() {
    this.loginForm.reset();
  }

  onSubmit() {
    if (this.email !== null && this.password !== null) {
      const userEmail = this.email.value;
      const passwordEmail = this.password.value;
      this.apiService.verifyUser(userEmail, passwordEmail).subscribe((data) => {
        if (data.length === 0) {
        } else {
          const user = new User(userEmail, passwordEmail);
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/back/home']);
        }
      });
    }
  }
}
