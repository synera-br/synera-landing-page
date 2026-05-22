# SYN-12 — Revisão de layout para multi devices

Data da revisão: 2026-05-22

## Escopo validado
- Desktop (≥1280px)
- Laptop (1024px–1279px)
- Tablet (768px–1023px)
- Mobile (≤767px)

## Checklist
- [x] Revisar layout em desktop
- [x] Revisar layout em laptop
- [x] Revisar layout em tablet
- [x] Revisar layout em mobile
- [x] Registrar ajustes finais necessários

## Resultado geral
A landing page está consistente visualmente, respeita a direção de cores (laranja/azul/cinza claro), mantém terminologia de consultoria Synera e apresenta responsividade funcional entre os breakpoints existentes (`900px`, `800px`, `500px`).

## Ajustes finais aplicados nesta revisão
1. **Acessibilidade do menu mobile**
   - O botão hamburguer agora alterna `aria-label` dinamicamente entre **"Abrir menu"** e **"Fechar menu"**.
   - Benefício: melhora a leitura por tecnologias assistivas e reduz ambiguidade de estado.

2. **Área de toque mínima para CTAs e navegação**
   - Foi adicionado `min-height: 44px` para links e botões de ação principais (desktop/mobile nav, CTAs e envio de formulário).
   - Benefício: melhora usabilidade em tablet/mobile e reduz toques acidentais, especialmente em telas menores.

## Pendências recomendadas (não bloqueantes)
1. Validar com dispositivos reais iOS/Android além de emulação para confirmar comportamento de teclado virtual no formulário.
2. Executar rodada de QA visual com captura comparativa por breakpoint para baseline de regressão.
3. Considerar teste de contraste automatizado completo (axe/Lighthouse) no pipeline CI.
