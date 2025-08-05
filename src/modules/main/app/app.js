import { LightningElement } from 'lwc';

export default class EpicReadinessCheck extends LightningElement {
    activeSections = ['epic-details', 'reviewable-recommendations'];

    recommendations = [
        {
            id: 1,
            criteria: 'Content Experience Lead is required',
            analysis: 'CCX Lead was not set and it should be',
            action: 'This field needs to be filled out to meet the definition of ready'
        },
        {
            id: 2,
            criteria: 'Design Lead is required',
            analysis: 'Design Lead was not set and it should be',
            action: 'This field needs to be filled out to meet the definition of ready'
        },
        {
            id: 3,
            criteria: 'High Level Architecture is required',
            analysis: 'High Level Architecture was not set and it should be',
            action: 'This field needs to be filled out to meet the definition of ready'
        },
        {
            id: 4,
            criteria: 'Must contain testable criteria for functional testing',
            analysis: 'The description mentions E2E testing, but lacks specific, testable criteria for functional testing.',
            action: 'Define functional test scenarios'
        }
    ];
}
