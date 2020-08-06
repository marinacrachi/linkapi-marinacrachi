import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {

  profile = {
    name: '',
    age: '',
    favoriteMovie: '',
    favoriteGenre: '',
    favoritesList: []
  }

  constructor(private storage: StorageService, private router: Router) { }
  
  ngOnInit(): void {
    this.checkUser()
  }

  checkUser() {
    if (this.storage.getItem('profile'))
      this.profile = this.storage.getItem('profile')
  }

  saveProfile() {
    this.storage.setItem('profile', this.profile) 
    console.log(this.profile)
  }

  cancel() {
    console.log('cancel')
    this.router.navigate([''])
  }

}
