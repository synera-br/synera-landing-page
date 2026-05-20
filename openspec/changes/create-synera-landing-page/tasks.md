## 1. Foundation and Project Setup

- [x] 1.1 Define and scaffold the frontend toolchain manifest/config (without inventing commands before manifest exists)
- [x] 1.2 Create base application structure for a single-page landing with section-oriented modules
- [x] 1.3 Add shared design tokens for orange, blue, and very light gray palette in the styling foundation

## 2. Landing Page Content and Navigation

- [x] 2.1 Implement mandatory sections: Sobre, Servicos, Treinamento, and Contato with Portuguese copy
- [x] 2.2 Implement Servicos content including explicit Kubernetes and Pipelines examples
- [x] 2.3 Implement Treinamento section with in-company offering highlighted
- [x] 2.4 Implement top-level navigation that scrolls or jumps to each mandatory section

## 3. Contact and AI Entry Flow

- [x] 3.1 Build contact form UI with required fields and validation states
- [x] 3.2 Implement WhatsApp redirect/link generation with pre-filled, URL-encoded message payload
- [x] 3.3 Add visible AI chat entry point in the Contato area as CTA/button/link
- [x] 3.4 Ensure WhatsApp and AI chat actions are independently accessible

## 4. Deployment Structure (Helm + ArgoCD)

- [x] 4.1 Create Helm chart scaffold under `infra/` for the landing page workload
- [x] 4.2 Add configurable values for image, service, and ingress without hardcoded environment data
- [x] 4.3 Add environment override values files (at least dev and prod style)
- [x] 4.4 Validate chart rendering locally with Helm template for each values profile

## 5. Quality and Documentation Alignment

- [ ] 5.1 Verify responsive behavior and readability across desktop and mobile for all sections
- [ ] 5.2 Verify contact flow behavior for validation and successful WhatsApp redirection
- [x] 5.3 Update README and `project/docs/` where needed to match implemented behavior and deploy flow
