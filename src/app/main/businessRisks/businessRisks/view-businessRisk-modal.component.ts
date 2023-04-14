﻿import { Component, ViewChild, Injector, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { GetBusinessRiskForViewDto, BusinessRiskDto } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
    selector: 'viewBusinessRiskModal',
    templateUrl: './view-businessRisk-modal.component.html'
})
export class ViewBusinessRiskModalComponent extends AppComponentBase {

    @ViewChild('createOrEditModal', { static: true }) modal: ModalDirective;
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    active = false;
    saving = false;

    item: GetBusinessRiskForViewDto;


    constructor(
        injector: Injector
    ) {
        super(injector);
        this.item = new GetBusinessRiskForViewDto();
        this.item.businessRisk = new BusinessRiskDto();
    }

    show(item: GetBusinessRiskForViewDto): void {
        this.item = item;
        this.active = true;
        this.modal.show();
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }
}
