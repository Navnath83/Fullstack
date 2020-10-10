import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { UserRegisterService } from '../user-register.service';
import {User} from '../user';
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  welcomeMessage = '';

  constructor(private route: ActivatedRoute,
    private router: Router, private userRegisterService: UserRegisterService) { }

  ngOnInit() {
    this.userRegisterService.executeUserRegisterService().subscribe((res) => {
      this.welcomeMessage = res.content;
    });
  }
}