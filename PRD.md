Document Status Drafting

# Product requirements:  Agile Design Tracker  for GUS and Slack

# Points of Contact

* Product manager Person  
* Scrum Team \[TBD\]  
* Engineer(s)  Person  
* Engineering Manager  Person  
* Architect  [Rebecca Marshall](mailto:rebecca.marshall@salesforce.com)  
* UX designer [Carolina de Mello e Souza](mailto:cdemelloesouza@salesforce.com)[Ron Hemphill](mailto:rhemphill@salesforce.com)  
* CX writer Person  
* R\&I researcher Person  
* Legal  Person

# Summary

## Business Justification

This project aims to enhance the PRD upload function and introduce a comprehensive UX readiness review process within GUS to streamline workflows, improve collaboration between UX and engineering teams, and reduce manual work for UX designers and design managers. By automating task creation and management, we will enable designers to focus on high-value activities, resulting in a 50% reduction in manual work, a 90% alignment rate of tasks between teams, and a 30% faster task completion time. The improved processes will ensure that UX teams are well-prepared and aligned with overall project goals, leading to higher quality product designs and better user experiences.

The project will be executed in four phases over four months, involving requirements gathering, development, testing, and full deployment. A cross-functional team, including product managers, UX designers, engineers, and QA specialists, will be responsible for the implementation. The budget will cover development, testing, and training resources, with existing project management and collaboration tools supporting the process. Comprehensive training sessions and documentation will ensure successful adoption of the new features. This investment will significantly enhance the efficiency and effectiveness of our UX design processes, ultimately leading to better product outcomes and higher user satisfaction.

## Problem statement

**Current State:**  
UX designers currently face significant challenges in tracking their work alongside engineering teams within GUS. The system is primarily focused on engineering tasks, making it difficult for UX teams to manage their tasks, estimate effort, and track progress effectively. Additionally, engineering does not want to have design tasks mixed in with theirs to avoid complicating their velocity tracking. This misalignment leads to inefficiencies, increased manual work, and potential delays in delivering high-quality designs. Additionally, the process of ensuring UX readiness for new epics is cumbersome and lacks automation, resulting in inconsistent task creation and communication gaps between product managers and design management. 

**Target State:**  
Our vision is to enhance the PRD upload function and introduce a comprehensive UX readiness review process that will enable UX teams to autogenerate User Stories so they can leverage GUS’s work tracking capabilities while keeping their work items in a separate stream from engineering. This will include auto-generating user story templates, notifying design management of new epics, and extracting relevant parts of the PRD to reduce manual work. By implementing these improvements, we aim to streamline the workflow, improve collaboration, and ensure that UX teams are well-prepared and aligned with the overall project goals. The improved experience will enable UX designers to manage their tasks more efficiently, estimate effort accurately, and track progress seamlessly within GUS.

**Success Metrics:**  
\- Reduction in Manual Work: Decrease the time spent on manual task creation and management by 50%.  
\- Improved Task Alignment: Achieve a 90% alignment rate between UX and engineering tasks.  
\- Enhanced Collaboration: Increase the frequency of timely notifications and updates to design management by 75%.  
\- Faster Task Completion: Reduce the average time to complete design tasks by 30%.  
\- User Satisfaction: Achieve a user satisfaction score of 8/10 or higher among UX designers and design managers.

## Objectives

### V2MOM Alignment

List the strategic business objectives this product or feature aligns with

# User Personas

Define 2-3 persona and their goals. Map the persona’s journey with your product. The journey can be visual (flowchart, storyboard) or a narrative.

* Name/role with responsibilities

* Demographics, experience level, context

* Goals, motivations, frustrations, pain points

* Technology proficiency and preferences

* Key jobs and how solution addresses needs

1. PM  
   1. Responsibilities  
      1. Defining product requirements  
      2. Managing the product roadmap  
      3. Coordinating with cross-functional teams  
      4. Ensuring that product features are delivered on time and meet quality standards.   
   2. Goals  
      1. Ensure that all product requirements are clearly defined and communicated.  
      2. Streamline the workflow between product, engineering, and design teams.  
      3. Deliver high-quality features on time and within scope.  
   3. Motivations  
      1. Achieve seamless collaboration across teams.  
      2. Reduce time spent on administrative tasks.  
      3. Improve product quality and user satisfaction.  
   4. Frustrations  
      1. Manual and repetitive tasks that consume valuable time.  
      2. Misalignment between engineering and design teams.  
      3. Difficulty in tracking the readiness and progress of epics.  
   5. Pain Points:  
      1. Ensuring that all necessary information is included in the PRD.  
      2. Keeping track of multiple epics and their readiness status.  
      3. Communicating effectively with design management to ensure UX readiness.  
2. UX Design Lead  
   1. Responsibilities  
      1. Overseeing the UX design team  
      2. Ensuring that design work aligns with product requirements  
      3. Managing design resources  
      4. Maintaining high standards of user experience across all products.  
   2. Goals:  
      1. Ensure that all design tasks are clearly defined and aligned with product requirements.  
      2. Streamline the workflow between UX, product, and engineering teams.  
      3. Deliver high-quality, user-friendly designs on time.  
   3. Motivations:  
      1. Achieve seamless collaboration across teams.  
      2. Reduce time spent on administrative tasks.  
      3. Improve the overall user experience of the product.  
   4. Frustrations:  
      1. Manual and repetitive tasks that consume valuable time.  
      2. Misalignment between design and engineering teams.  
      3. Difficulty in tracking the readiness and progress of design tasks.  
   5. Pain Points:  
      1. Ensuring that all necessary design elements are prepared and reviewed.  
      2. Keeping track of multiple design tasks and their readiness status.  
      3. Communicating effectively with product managers to ensure UX readiness.  
3. UX Designer  
   1. Responsibilities  
      1. Creating user-centric designs  
      2. Conducting user research  
      3. Developing wireframes and prototypes  
      4. Collaborating with cross-functional teams to ensure the final product meets user needs and business goals.  
   2. Goals:  
      1. Ensure that design tasks are clearly defined and aligned with product requirements.  
      2. Deliver high-quality, user-friendly designs on time.  
      3. Continuously improve design skills and stay updated with industry trends.  
   3. Motivations:  
      1. Create designs that provide a great user experience.  
      2. Collaborate effectively with cross-functional teams.  
      3. See their designs come to life in the final product.  
   4. Frustrations:  
      1. Manual and repetitive tasks that consume valuable time.  
      2. Misalignment between design and engineering teams.  
      3. Difficulty in tracking the readiness and progress of design tasks.  
   5. Pain Points:  
      1. Ensuring that all necessary design elements are prepared and reviewed.  
      2. Keeping track of multiple design tasks and their readiness status.  
      3. Communicating effectively with product managers to ensure UX readiness.

# Jobs to Be Done & Key Deliverables

Table with columns:

• Priority (P0/P1/P2/P3)

• Job to be Done (As a \[user\], I want \[action\] so that \[benefit\])

**As a PM:**

1. When I need to ensure UX readiness for an epic, I want to complete a UX readiness check during the PRD upload, so that I can ensure UX is aware of new epics and aligned with the project goals.  
2. When I need to notify design management about a new epic, I want to automatically send a notification along with a pre-generated user story template, so that the design team can quickly start their work without manual setup.  
3. When I need to reduce the manual work for design managers, I want to extract relevant parts of the PRD (like user personas, user journeys, and functional requirements) to enable auto-generation of design user stories, so that the design team can focus on their core tasks.

**As a UX Design Manager:**

1. When I receive a notification about a new epic, I want to be notified in Slack, so that I can quickly assign the epic to a member or members of my team and ensure they have all the information they need to start their work.  
2. When my team has completed writer design users stories and has included their estimations, I want to run a report to view my team’s commitments by epic, so that I can see if there are overages or underages to address.   
3. When I need to track the progress of design tasks, I want to have a well-structured user story template that aligns with the epic, so that I can easily monitor the status and ensure timely completion.  
4. When I need to ensure my team is aligned with the project goals, I want to have all relevant information from the PRD (like acceptance criteria and key milestones) included in the user stories, so that we can deliver designs that meet the project requirements.

**As a UX Designer:**

1. When I receive a notification about a new epic, I want to have a pre-generated user story template with the correct product tag ready to go, so that I can write or autogenerate user stories based on the epic or other PRD content so that I can make sure my work is easy to track.  
2. When I need to create work items and user stories, I want to have relevant parts of the PRD (like user personas, user journeys, and functional requirements) automatically extracted and included, so that I can reduce manual work and ensure all necessary details are captured.  
3. When I need to ensure I am aligned with the project goals, I want to have all relevant information from the PRD (like acceptance criteria and key milestones) included in the user stories, so that we can deliver designs that meet the project requirements.

• Acceptance Criteria

# User Experience

• User journeys with numbered steps

• Narrative descriptions of realistic tasks

• Decision points, errors, and recovery paths

• First-time vs. returning user considerations

• Administrator vs. end-user experiences

# Functional requirements

## Feature List

| Functional Requirements | Details |
| :---- | ----- |
| **2\. UX Readiness Review Process** |  |
| Requirement 2.1 | The system shall provide a structured UX readiness checklist that includes the following “Did you have a kickoff with UX & ENG to share PRD or do any UX spiking?”  “Have you included Jobs to be Done in your PRD?”“Do you have expected due dates for the epic?” |
| Requirement 2.2 | The system shall allow product managers to review the UX readiness check list and mark items addressed, rejected, ignored. |
| Requirement 2.3 | The system shall notify the design manager associated with the assigned engineering scrum team in Slack when the UX readiness check is complete and an epic is ready for UX work, asking the design manager to assign a UX Lead. The design manager can assign lead and can also autogenerate UX stories.  |
| Requirement 2.4 | The assigned UX Lead receives a notification in Slack about the new work and links them to an experience in GUS where they will be able to generate UX stories. UX Stories will not have a 1:1 relationship with Epics or User Stories.  |
| **3\. Auto-Generation of UX Stories** |  |
| Requirement 3.1 | The system shall automatically generate UX stories based on the content of the Epic. The assigned UX lead or design manager can accept these stories or edit before accepting. |
| Requirement 3.2 | The user story template shall include the following fields. Fields that are bold and in **Blue** will be pre-populated from the Epic:  **Product Tag Epic  Schedule Release Design Due Date UX T-shirt Size** UX Theme  **Assigned to**  Project Phase: Discovery \> Ideation \> Build \[Bold the phase of the project and delete me.\] Overview:  **Work item problem statement: \[What problem are we solving and why. Who, What, and Why\]** To Do  \[What needs to be done or solved\] Deliverables \[What is the expected deliverable, how will we know this work is complete?\] Ideas \[Any thoughts or ideas that should be explored or considered?\] Open Questions\[Add open questions discussed during briefing to answer: Research, Open Design Qs, Product Questions, etc.. \] Links \[Add relevant links here: Figmas, decks, canvas, quips, etc.\] |
| Requirement 3.3 | Both design management and UX lead can review and customize auto-generated UX stories. |
| **4\. Notification System** |  |
| Requirement 4.1 | The system shall automatically send notifications to design management when a new epic is ready for UX work and the user story template is generated. |
| Requirement 4.2 | The system shall provide customizable notification settings to allow users to choose their preferred notification channels (e.g., email, Slack). |
| **5\. Task Management and Tracking** |  |
| Requirement 5.1 | The system shall allow UX designers to create, update, and track design stories within GUS, associated with the parent user story. |
| Requirement 5.2 | The system shall provide a clear overview of the readiness status and progress of each design task. |
| Requirement 5.3 | The system shall integrate with existing project management tools (e.g., Jira, Trello, Slack Lists) to ensure seamless task tracking and progress monitoring. |
| **6\. User Interface and Usability** |  |
| Requirement 6.1 | The system shall provide an intuitive user interface that is easy to navigate and use. |
| Requirement 6.2 | The system shall offer comprehensive training resources and documentation to help users understand and utilize the new features effectively. |
| Requirement 6.3 | The system shall be accessible and comply with relevant accessibility standards to ensure usability for all users. |

## Instrumentation & Quality

\[Key performance indicators and goals for the features being delivered, such as product usage, engagement, or performance. Include sufficient information on how these will be measured for the engineering team to put the appropriate instrumentation in place.\]

### Performance

Must be performant

### Security

Whatever is standard for Salesforce

### Accessibility

Please ensure A11Y compliance

### Compatibility

Whatever is standard for Salesforce

## Assumptions

- GUS will be the single source of truth for work tracking, but UX will leverage an information hierarchy of their choosing to enable a meaningful creation of design user stories.  
- An epic can autogenerate multiple design user stories, but the UX team will tag, edit, and organize those stories as they see fit.   
- Design user stories can link to multiple epics.   
- GUS will send notifications to Slack with embedded actions in a message.  
- Slack will update GUS based on embedded actions in a message. 

## Risks and mitigations

### Risks

Describe potential obstacles or challenges and mitigation plans

## User research

Designers have asked the following questions, expressed needs and concerns with adopting GUS for work tracking:

* How do we use GUS? What is the structure/guidance? level of granularity in how we break down work? how do we define an epic/task? how do we standardize?  
* How are we going to measure the work?  
* Communication challenges won’t be addressed automatically with a new work tracking mechanism  
* how do we avoid having comments throughout epics vs stories and it becomes hard to track  
* Do our PM partners need to change the way they’re working?  
* Would love to see examples of how other design teams are using GUS, and what they learned, to help us adopt  
* How does the design story get linked to the dev story?  
* Nervous for going back in: I’ve done this before and didn’t work well for us  
* How are we going to use fields in GUS in a standard way?  
* Tracking down dev stories where we were listed as dependency was a nightmare  
* Design effort estimation can be challenging when work is not well defined  
* Design needs to be planned ahead of dev  
* Experience in GUS can be painful  
* V2MOM tracking is happening elsewhere: in Basecamp  
* Will velocity tracking be used against us?  
* We work in waterfall, there are different phases for design work than dev  
* The system is not built for design work  
* How can we make this work for shared services, so we can prioritize user first experiences

# Questions & Resources

## Questions

| Questions | Comment | Owner | Status |
| :---- | :---- | :---- | :---- |
| Add question |  |  | Open |
| Add question |  |  | In discussion  |
| Add question |  |  | Resolved |

## Additional resources

File

File

File

