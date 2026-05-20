# helm-deployment-for-argocd Specification

## Purpose
TBD - created by archiving change create-synera-landing-page. Update Purpose after archive.
## Requirements
### Requirement: Repository MUST include Helm chart under infra directory
The system SHALL provide deployment structure in `infra/` as a Helm chart for the landing page workload.

#### Scenario: Helm chart structure exists
- **WHEN** a maintainer inspects the repository
- **THEN** a valid Helm chart is present under `infra/`

### Requirement: Helm chart MUST be configurable for ArgoCD provisioning
The system SHALL expose chart values required for GitOps-based provisioning via ArgoCD, including image, service, and ingress-related configuration points.

#### Scenario: ArgoCD-targeted values can be set
- **WHEN** deployment parameters are supplied through Helm values
- **THEN** the chart renders Kubernetes manifests without requiring hardcoded environment-specific edits

### Requirement: Helm chart MUST support repeatable environment releases
The system SHALL allow environment-specific overrides through values files or equivalent Helm mechanisms to support at least dev and production-style deployments.

#### Scenario: Different values generate different manifests predictably
- **WHEN** a maintainer renders the chart with distinct values inputs
- **THEN** the generated manifests reflect the intended environment differences deterministically

