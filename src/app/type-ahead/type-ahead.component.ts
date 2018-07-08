import { Component, OnInit, ElementRef, ViewContainerRef, ViewChild, TemplateRef, Input } from '@angular/core'

@Component({
  selector: '[appTypeAhead]',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.css']
})
export class TypeAheadComponent implements OnInit {
  results: string[]
  @ViewChild('tpl') tplRef: TemplateRef<any>

  constructor(private element: ElementRef, private viewContainer: ViewContainerRef) {}

  ngOnInit() {
    this.results = ['Paris', 'Marseille', 'Bordeaux']
    this.viewContainer.createEmbeddedView(this.tplRef)
  }
}
