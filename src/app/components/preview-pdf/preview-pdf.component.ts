import {Component, Input, OnInit} from '@angular/core';
@Component({
    selector: 'app-preview-pdf',
    templateUrl: './preview-pdf.component.html',
    styleUrls: ['./preview-pdf.component.scss']
})
export class PreviewPdfComponent implements OnInit {
    public pdfSrc =
        'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
    constructor() {}

    ngOnInit() {}
}
