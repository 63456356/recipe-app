import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,FooterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe';
  data:any=[];
  httpCliet=inject(HttpClient)

  ngOnInit(): void {
    this.httpCliet.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .subscribe((w:any)=>{
      console.log(w.meals)
      this.data=w.meals;
    })
  }
  
  
  
  
}
