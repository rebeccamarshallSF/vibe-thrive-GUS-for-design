import { LightningElement, api } from 'lwc';

export default class RecommendationItem extends LightningElement {
    @api criteria;
    @api analysis;
    @api action;

    value = 'addressed';

    get statusOptions() {
        return [
            { label: 'Addressed', value: 'addressed' },
            { label: 'Rejected', value: 'rejected' },
            { label: 'Ignored', value: 'ignored' },
        ];
    }
}
