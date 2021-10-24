import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  loginForm!: any;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  isPasswordVisible: boolean = false;

  onSubmit() {
    console.log(this.loginForm.value);
    this._snackBar.open('Success!', '', {
      duration: 3000,
    });
  }

  showPass(pass: any) {
    this.isPasswordVisible = !pass.checked;
  }
}
