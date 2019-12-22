import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {};
    tokenObject;
    userDetails;
    brandAndLogoImage;
    erroMassege
    loginForm: FormGroup;
    bgImage;
    bgImage1;
    finalImage
    loginButton
    submitted
  constructor(private formBuilder: FormBuilder,private loginservice:LoginService,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
  },);
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.login()
       
    }else{
      return;
    }
  }
  onReset() {
    this.loginForm.reset();
  }
  get f() { return this.loginForm.controls; }
    login() {
      this.user.rememberMe = true;
      console.log(this.user);
      
      this.loginservice.authenticate(this.user).subscribe(
        response => {
          if (response.success == false) {
              // Get the user object who loggedin currently.
              this.loginservice.getAccountDetails().subscribe(result => {
                  this.userDetails = result;
                  console.log('post data', this.userDetails);
                  this.router.navigate(['home']);
              });
          }
      },
      error =>{
        console.log(error)
        // this.erroMassege=JSON.stringify(error.error)
        if("Error"+JSON.stringify(error.error.AuthenticationException)){
          this.erroMassege="Username and Password do not match!";
          console.log(this.erroMassege)
          this.router.navigate(['home']);
        }
      })
  }

}
