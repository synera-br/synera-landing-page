# contact-whatsapp-ai-entry Specification

## Purpose
TBD - created by archiving change create-synera-landing-page. Update Purpose after archive.
## Requirements
### Requirement: Contact form MUST prepare message for WhatsApp delivery
The system SHALL provide a contact form that generates a WhatsApp-compatible message payload and routes the user to WhatsApp to send that message.

#### Scenario: Contact message is prepared and redirected
- **WHEN** a visitor submits valid contact information in the form
- **THEN** the system opens or redirects to a WhatsApp destination with a pre-filled message

### Requirement: Contact form MUST validate required fields before redirect
The system SHALL require minimally identifying and message fields before enabling WhatsApp submission.

#### Scenario: Invalid form blocks WhatsApp redirect
- **WHEN** a visitor attempts submission with missing required fields
- **THEN** the system blocks redirection and indicates validation errors

### Requirement: Landing page MUST expose an AI chat entry point
The system SHALL present a visible entry point for AI conversation in the Contato area as a button, link, or equivalent call-to-action.

#### Scenario: User can access AI chat entry
- **WHEN** a visitor accesses the Contato section
- **THEN** an actionable AI chat entry point is available

### Requirement: Contact actions MUST remain independently available
The system SHALL expose both WhatsApp and AI chat actions without making one action dependent on completion of the other.

#### Scenario: User chooses one contact channel directly
- **WHEN** a visitor chooses WhatsApp or AI chat from the contact area
- **THEN** the selected channel starts without forcing use of the other channel

