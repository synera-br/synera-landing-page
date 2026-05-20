# Synera Consultoria em Tecnologia

Synera é uma consultoria em tecnologia, que foi fundada em novembro/2010 com o CNPJ 2.810.862/0001-69.

O nome Synera é a união de (synchronize - syn) e (era), que tem como objetivo informar que é uma empresa que se atualiza com o tempo.  Em empresa que está em constante evolução para atender seus clientes.

A Synera é uma empresa de consultoria em TI (Tecnologia), abrangendo serviços como Kubernetes, desenvolvimento de kubernets operator, automação com (ansible, terraform e crossplane), desenvolvimento de pipelines e automação com (ArgoCD, github actions, azure devops, argo workflows e temporal.io), desenvolvimento de plataforma IDP com o Backstage, desenvolvimento de código em Golang, consultoria de DevOps e Platform Engineer  
- Também temos o serviços que auxiliamos os clientes a criarem stack de desenvolvimento com a utilização de AI.  Temos uma consultoria focada nisso, com treinamentos, suporte e evolução da stack para o cliente
- Também temos treinamentos incompany, focados nos serviços acima.

 A Synera é uma empresa em constante evolução no mercado Brasileiro e com participações em eventos no exterior como a KubeCon.

## Landing page (implementacao inicial)

A implementacao inicial foi criada com React + TypeScript + Vite, com secoes de Sobre, Servicos, Treinamento e Contato.

### Executar localmente

1. Instale dependencias: `npm install`
2. Rode em desenvolvimento: `npm run dev`
3. Gere build: `npm run build`

### Contato

- Formulario com validacao basica e envio via redirecionamento para WhatsApp
- CTA de entrada para conversa com AI

### Deploy

- Estrutura Helm em `infra/`
- Perfil base em `infra/values.yaml`
- Overrides por ambiente em `infra/values-dev.yaml` e `infra/values-prod.yaml`
- Exposicao principal via Gateway API (HTTPRoute), com ingress opcional desabilitado por padrao
