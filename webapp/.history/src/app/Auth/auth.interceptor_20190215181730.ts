import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from '@angular/common/http';
import { UserService } from '../shared/user.service';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
