import { LightningElement } from 'lwc';

export default class EpicReadinessCheck extends LightningElement {
    // Setting activeSections to an empty array ensures both accordions are closed on page load.
    activeSections = [];

    readinessChecks = [
        {
            id: 1,
            criteria: 'Did you have a kickoff with UX & ENG to share PRD or do any UX spiking?',
            analysis: 'This ensures alignment between product, UX, and engineering teams before work begins',
            action: 'Schedule and complete a kickoff meeting with UX and engineering teams to review the PRD and discuss any UX exploration needed'
        },
        {
            id: 2,
            criteria: 'Have you included Jobs to be Done in your PRD?',
            analysis: 'Jobs to be Done help UX teams understand user motivations and design appropriate solutions',
            action: 'Review PRD to ensure Jobs to be Done section is complete and clearly defines user goals and motivations'
        },
        {
            id: 3,
            criteria: 'Do you have expected due dates for the epic?',
            analysis: 'Clear timelines help UX teams plan their work and coordinate with engineering schedules',
            action: 'Define and communicate clear due dates for the epic to enable proper UX resource planning'
        }
    ];

    /**
     * This handler is required for the accordion to allow multiple sections to be open
     * and to allow sections to be closed.
     */
    handleSectionToggle(event) {
        // The event detail contains the name of the section that was opened or closed.
        const openSections = event.detail.openSections;

        // We can simply assign this back to our activeSections property.
        // The lightning-accordion component handles the logic of adding/removing names.
        this.activeSections = openSections;
    }

    /**
     * Opens the initial Slack notification window for the UX Manager (Carolina).
     */
    openSlackNotification() {
        // According to lwr.config.json, src/assets is served at '/public/assets'
        window.open('/public/assets/carolina.html', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
    }
}