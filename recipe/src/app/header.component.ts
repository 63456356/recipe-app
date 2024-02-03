import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { ContactComponent } from './contact/contact.component';
// import { AboutComponent } from './about/about.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  template: `
  <nav class="navbar navbar-expand-lg bg-warning  text-blue">
  <div class="container-fluid ">
    <a class="navbar-brand  text-blue" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  " id="navbarNavDropdown">
      <ul class="navbar-nav ">
        <li class="nav-item ">
          <a class="nav-link  text-blue" aria-current="page" routerLink="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-blue" routerLink="about">about</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-blue" routerLink="contact">contact</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link  text-blue dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
              `,
  styles: [``]
})
export class HeaderComponent {
  title = 'my-project';
  
}
