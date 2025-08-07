import { LightningElement, api, track } from 'lwc';

export default class ReadinessItem extends LightningElement {
    @api criteria;
    @api analysis;
    @api action;

    @track selectedStatus = null;

    get addressedVariant() {
        return this.selectedStatus === 'Addressed' ? 'brand' : 'neutral';
    }

    get rejectedVariant() {
        return this.selectedStatus === 'Rejected' ? 'brand' : 'neutral';
    }

    get ignoredVariant() {
        return this.selectedStatus === 'Ignored' ? 'brand' : 'neutral';
    }

    handleStatusClick(event) {
        this.selectedStatus = event.target.label;
    }
}