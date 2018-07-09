import { Component, OnInit, ElementRef, ViewContainerRef, ViewChild, TemplateRef, Input } from '@angular/core'
import { TypeAheadConfig } from '../type-ahead-config'

@Component({
  selector: '[appTypeAhead]',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.css']
})
export class TypeAheadComponent implements OnInit {
  @Input('appTypeAhead') taConfig: TypeAheadConfig
  @ViewChild('tpl') tplRef: TemplateRef<any>

  constructor(private element: ElementRef, private viewContainer: ViewContainerRef) {}

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.tplRef)
  }
}
