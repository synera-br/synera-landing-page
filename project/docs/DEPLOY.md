# DEPLOY

Precisa ter a estrutura de deploy no diretorio **infra/**. Deve ser um Helm chart, pois sera provisionado no ArgoCD.

Estamos trabalhando com Envoy Gateway API e nao com Ingress como rota principal.

Status da implementacao atual:
- Chart criado em `infra/`
- `HTTPRoute` criado em `infra/templates/httproute.yaml`
- Ingress mantido apenas como opcional e desabilitado por padrao


- Create a Dockerfile