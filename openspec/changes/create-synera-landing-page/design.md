## Context

O repositorio ainda esta em fase de planejamento e possui como fonte principal os documentos em `README.md` e `project/docs/`. A landing page precisa preservar o contexto de negocio em portugues e cobrir servicos de consultoria (Kubernetes, pipelines, DevOps/Platform Engineering), treinamentos in-company e contato com fluxo via WhatsApp, alem de entrada para chat com AI. Tambem existe requisito de deploy via Helm em `infra/`, com provisionamento por ArgoCD.

Como ainda nao ha stack definida no repositorio, o design deve priorizar uma estrutura desacoplada por secoes e capacidades, para permitir implementacao progressiva sem travar decisoes de ferramenta cedo demais.

## Goals / Non-Goals

**Goals:**
- Estruturar a landing page em modulos de conteudo que cubram Sobre, Servicos, Treinamento e Contato.
- Definir um fluxo de contato simples que gere mensagem para WhatsApp sem exigir backend transacional.
- Preparar um ponto de entrada para chat com AI, inicialmente como CTA/rota dedicada evolutiva.
- Formalizar base de tema visual com tokens de cor (laranja, azul e cinza claro) para consistencia da interface.
- Definir estrutura de deploy em Helm (`infra/`) adequada para publicacao com ArgoCD.

**Non-Goals:**
- Implementar CRM completo, persistencia de leads ou automacoes comerciais avancadas nesta fase.
- Entregar chatbot AI fully managed com memoria e integracoes internas no primeiro incremento.
- Cobrir internacionalizacao multilanguage; o foco inicial e portugues.
- Otimizacoes profundas de performance, observabilidade detalhada e analytics avancado na primeira entrega.

## Decisions

- Estruturar o produto por capacidades (conteudo institucional, contato, tema e deploy), em vez de uma unica entrega monolitica.
  - Rationale: reduz acoplamento e facilita paralelismo entre frontend e infraestrutura.
  - Alternativa considerada: implementar tudo em um unico pacote de codigo/deploy. Rejeitada por dificultar validacao incremental.

- Implementar envio de contato para WhatsApp via link pre-preenchido (`wa.me`/URL encode) a partir do formulario.
  - Rationale: atende o requisito funcional com baixa complexidade operacional e sem dependencia imediata de backend.
  - Alternativa considerada: API server-side para roteamento de mensagens. Adiada para fase futura caso haja necessidade de auditoria ou roteamento por equipe.

- Tratar o chat com AI como ponto de entrada desacoplado (botao/rota dedicada) com contrato de extensao.
  - Rationale: permite liberar valor de navegacao e conversao rapidamente sem bloquear por escolha de provedor/modelo.
  - Alternativa considerada: chat embutido completo na primeira entrega. Rejeitada por elevar risco tecnico e de seguranca no inicio.

- Definir tokens de design para paleta e elementos base de interface.
  - Rationale: garante consistencia visual e facilita ajustes futuros sem refatoracao ampla.
  - Alternativa considerada: estilos hardcoded por componente. Rejeitada por pior manutenibilidade.

- Provisionar deploy como Helm chart em `infra/` com valores separados por ambiente e manifestos compativeis com ArgoCD.
  - Rationale: segue requisito explicito de operacao e padrao esperado para GitOps.
  - Alternativa considerada: manifestos Kubernetes puros. Rejeitada por menor flexibilidade de parametrizacao.

## Risks / Trade-offs

- [Ambiguidade de stack frontend] -> Mitigacao: manter artefatos de especificacao agnosticos de framework e registrar decisoes tecnicas no momento da implementacao.
- [WhatsApp via link limita rastreabilidade de envio] -> Mitigacao: incluir campos essenciais na mensagem e planejar evolucao futura para backend quando necessario.
- [Chat AI sem definicao de provedor pode atrasar] -> Mitigacao: entregar ponto de entrada primeiro e isolar integracao em modulo evolutivo.
- [Escopo de conteudo institucional pode expandir rapidamente] -> Mitigacao: separar secoes obrigatorias de conteudo opcional e priorizar MVP.
- [Deploy Helm inicial sem pipeline formal] -> Mitigacao: definir chart minimo valido e evoluir com validacoes de CI em etapa posterior.

## Migration Plan

1. Implementar estrutura base da landing page com secoes obrigatorias e navegacao.
2. Adicionar formulario de contato com geracao de mensagem para WhatsApp.
3. Incluir CTA/rota de entrada para chat com AI.
4. Aplicar tokens de tema e consolidar identidade visual inicial.
5. Criar chart Helm em `infra/` e validar instalacao local.
6. Publicar via fluxo GitOps com ArgoCD em ambiente alvo.

Rollback (quando em deploy):
- Reverter versao do release Helm para revisao anterior estavel.
- Em caso de problema isolado no contato/chat, desativar CTA correspondente via configuracao mantendo landing institucional no ar.

## Open Questions

- Qual stack frontend sera oficializada para a implementacao (ex.: React/Vite, Next.js ou outra)?
- Qual numero/conta oficial de WhatsApp sera usado no formulario de contato?
- O chat AI inicial sera apenas redirecionamento (externo) ou incorporado na propria pagina?
- Havera ambientes distintos (dev/stage/prod) com valores Helm separados desde o primeiro deploy?
