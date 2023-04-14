import {
    Component,
    ViewChild,
    Injector,
    Output,
    EventEmitter
} from "@angular/core";
import { ModalDirective } from "ngx-bootstrap";
import { AppComponentBase } from "@shared/common/app-component-base";
import { GetContactForViewDto, ContactDto } from "../../../../shared/service-proxies/service-proxies";

@Component({
    selector: "viewContactModal",
    templateUrl: "./view-contact-modal.component.html"
})
export class ViewContactModalComponent extends AppComponentBase {
    @ViewChild("createOrEditModal", { static: true }) modal: ModalDirective;
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    active = false;
    saving = false;

    item: GetContactForViewDto;

    constructor(injector: Injector) {
        super(injector);
        this.item = new GetContactForViewDto();
        this.item.contact = new ContactDto();
    }

    show(item: GetContactForViewDto): void {
        this.item = item;
        this.active = true;
        this.modal.show();
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }
}
