import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // use @Input so that the parent component can access this property
  @Input('srvElement') element: { type: string, name: string, content: string }
  constructor() { }

  ngOnInit() {
  }

}
