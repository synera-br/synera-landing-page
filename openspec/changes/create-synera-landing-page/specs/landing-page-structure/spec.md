## ADDED Requirements

### Requirement: Landing page MUST present mandatory institutional sections
The system SHALL render the Synera landing page with, at minimum, the sections Sobre, Servicos, Treinamento e Contato in Portuguese, preserving business context and service terminology from repository documentation.

#### Scenario: Mandatory sections are visible
- **WHEN** a visitor opens the landing page
- **THEN** the page displays identifiable sections for Sobre, Servicos, Treinamento e Contato

### Requirement: Services section MUST include core service examples
The system SHALL include explicit service examples for Kubernetes and Pipelines in the Servicos section, along with space for additional services without removing the required examples.

#### Scenario: Core examples are present in services
- **WHEN** a visitor navigates to the Servicos section
- **THEN** Kubernetes and Pipelines are shown as service offerings

### Requirement: Training section MUST represent in-company offering
The system SHALL present Treinamento in-company as a dedicated offering within the Treinamento section.

#### Scenario: In-company training appears as offering
- **WHEN** a visitor reads the Treinamento section
- **THEN** the in-company training option is displayed with clear labeling

### Requirement: Navigation MUST support section access
The system SHALL provide a navigation mechanism that allows users to access each mandatory section directly from the landing page interface.

#### Scenario: User navigates to a selected section
- **WHEN** a visitor selects a navigation item for one of the mandatory sections
- **THEN** the page moves focus to the corresponding section content
