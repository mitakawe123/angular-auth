import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css'],
})
export class LogInFormComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  get email() {
    return this.profileForm.get('email');
  }

  get password() {
    return this.profileForm.get('password');
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.httpClient
        .post(
          'https://angular-form-14117-default-rtdb.firebaseio.com/users.json',
          this.profileForm.value
        )
        .subscribe((res) => {
          this.profileForm.reset();
          alert('succ addded new acc');
        });
    }
  }
}
