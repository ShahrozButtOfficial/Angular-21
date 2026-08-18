import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-headercomp',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './headercomp.html',
  styleUrl: './headercomp.css',
})
export class Headercomp {}
