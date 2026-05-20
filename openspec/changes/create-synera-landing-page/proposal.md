## Why

A Synera ainda nao possui uma landing page executavel para apresentar seus servicos, treinamentos e canais de contato em um unico ponto de entrada. Este change cria a base do site para acelerar presenca digital, geracao de leads e preparo para deploy via ArgoCD.

## What Changes

- Criar uma landing page institucional para a Synera com navegacao clara e copy em portugues.
- Incluir secoes obrigatorias: Sobre, Servicos (com exemplos de Kubernetes e Pipelines), Treinamento in-company e Contato.
- Implementar fluxo de contato com formulario que direcione a mensagem para WhatsApp e incluir entrada para chat com AI.
- Definir identidade visual inicial alinhada ao direcionamento de cores (laranja, azul e cinza claro).
- Estruturar deploy em `infra/` com Helm chart para provisionamento por ArgoCD.

## Capabilities

### New Capabilities
- `landing-page-structure`: Estrutura, navegacao e conteudo base da landing page institucional em portugues.
- `contact-whatsapp-ai-entry`: Fluxo de contato com envio via WhatsApp e ponto de entrada para conversa com AI.
- `branding-and-theme-foundation`: Diretrizes de tema visual inicial com paleta laranja/azul/cinza claro.
- `helm-deployment-for-argocd`: Estrutura de deploy em `infra/` usando Helm chart compativel com ArgoCD.

### Modified Capabilities
- Nenhuma capacidade existente (repositorio ainda sem specs publicadas em `openspec/specs/`).

## Impact

- Afeta estrutura de frontend da landing page e seus componentes de navegacao e conteudo.
- Introduz integracao de contato via link/endpoint de WhatsApp e ponto de extensao para chat AI.
- Adiciona manifestos de infraestrutura em `infra/` (Helm) para fluxo de deploy com ArgoCD.
- Estabelece base para evolucoes futuras de SEO, analytics e expansao de servicos apresentados no site.
