# DESIGN.md — Brasília Móveis Planejados

> Landing page de conversão (captação de orçamento). Agnóstico de ferramenta/framework — consumido por qualquer agente gerando UI.

---

## Colors

```
--color-ink: #14110D          /* preto principal — texto, header, footer, seções escuras */
--color-ink-soft: #2A251E     /* preto alternativo — cards escuros, estados hover */
--color-gold: #B8935A         /* dourado principal — CTA, ícones, detalhes, hover em links */
--color-gold-light: #D8BD8B   /* dourado claro — backgrounds sutis, badges, bordas */
--color-cream: #F7F1E7        /* fundo principal claro — base da página */
--color-sand: #EDE3D2         /* fundo secundário — seções alternadas, cards */
--color-wood: #6B4A34         /* marrom madeira — acentos, ícones de categoria */
--color-text-secondary: #6E6459  /* texto de apoio sobre fundo claro */
--color-white: #FFFFFF        /* cards, contraste */
--color-whatsapp: #25D366     /* apenas no botão flutuante de WhatsApp */
```

- Use `ink` e `gold` como cores de marca (extraídas do logo). Nunca introduzir uma terceira cor de marca (ex: azul, verde) fora de `whatsapp`, que é funcional, não estética.
- Alternância de fundo entre seções: `cream` → `white` → `ink` → `cream`. Nunca duas seções `ink` seguidas.
- `gold` é reservado para ação/destaque (CTA, hover, números de processo). Não usar como cor de fundo de seção inteira — cansa visualmente em área grande.

---

## Typography

```
--font-display: "Fraunces", serif       /* headlines, H1–H3 */
--font-sans: "Inter", sans-serif        /* corpo, UI, botões, labels */
```

| Papel | Fonte | Tamanho | Peso | Observação |
|---|---|---|---|---|
| H1 | display | 48px mobile / 72px desktop | 400–600 | `leading-[1.05]`; palavra de destaque pode ir em `gold` e itálico |
| H2 | display | 32px / 48px | 500 | |
| H3 | display | 20px / 24px | 500 | |
| Body | sans | 16px / 18px | 400 | cor `text-secondary` |
| Botão/label | sans | 14px | 500–600 | |
| Eyebrow (tag acima de título) | sans | 12px | 500 | uppercase, `letter-spacing: 0.15em` |

- Nunca usar `display` (Fraunces) em textos longos de corpo — é fonte de destaque, não de leitura corrida.
- Nunca mais de uma palavra em itálico por título.

---

## Spacing

Escala base 4px.

```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-12: 48px
--space-16: 64px
--space-24: 96px
```

- Padding vertical entre seções: `--space-24` (desktop) / `--space-16` (mobile).
- Padding interno de cards: `--space-6` a `--space-8`.
- Gap em grids: `--space-6` (desktop), `--space-4` (mobile).

---

## Shadows

```
--shadow-card: 0 20px 60px -20px rgba(20, 17, 13, 0.25)
--shadow-card-hover: 0 24px 70px -18px rgba(20, 17, 13, 0.32)
```

- Usar apenas em elementos elevados sobre o fundo (cards de portfólio, formulário de orçamento). Não aplicar em botões — botões usam apenas mudança de cor no hover, sem sombra.

---

## Border Radius

```
--radius-sm: 8px    /* inputs, badges */
--radius-md: 16px   /* cards pequenos */
--radius-lg: 24px   /* cards grandes, imagens de destaque */
--radius-full: 999px /* botões (pill), avatar */
```

---

## Components

### Button
- Variantes: `primary`, `secondary`, `gold`, `whatsapp`
- `primary`: fundo `ink`, texto `cream`, hover vira fundo `gold` + texto `ink`. Uso: CTA principal ("Solicitar Orçamento Gratuito") — **um por viewport**.
- `secondary`: borda `ink/20%`, texto `ink`, sem preenchimento. Uso: ação de apoio ("Falar com um Especialista", "Ver Projetos").
- `gold`: fundo `gold` sólido, texto `ink`. Uso: CTA dentro de seções escuras (`ink`), onde `primary` perderia contraste.
- `whatsapp`: fundo `#25D366`, texto branco. Uso exclusivo: botão flutuante fixo.
- Formato: sempre `radius-full` (pill), padding `24px 32px` (default) ou `32px 40px` (lg).
- **Nunca**: dois botões `primary` lado a lado. Nunca `primary` sobre fundo `ink` (usar `gold` nesse caso). Nunca botão sem estado de hover definido.

### Card (Portfólio / Ambiente)
- Imagem `object-cover`, `radius-lg`, ocupa 60–70% da altura do card.
- Overlay dourado translúcido (`gold` a 15% opacidade) aparece só no hover, junto com leve `scale-105` na imagem.
- Tag de categoria (badge pequeno, `radius-sm`, fundo `sand`, texto `ink`) no canto superior da imagem.
- **Nunca** mostrar preço fixo no card — é orçamento sob consulta, não produto de prateleira.

### Badge / Tag
- `radius-sm`, padding `4px 12px`, `font-sans` 12px uppercase.
- Fundo `sand` + texto `ink` (padrão) ou fundo `gold-light` + texto `ink` (destaque, ex: "Novo projeto").

### Input (Formulário de orçamento)
- `radius-sm`, borda `1px solid ink/15%`, fundo `white`, padding `12px 16px`.
- Foco: borda vira `gold`, sem outline azul padrão do navegador.
- Label sempre visível acima do campo (não usar apenas placeholder como label).

### Accordion (FAQ)
- Header: `font-display` 20px + ícone `+`/`–` em `gold` à direita.
- Corpo expandido: `font-sans`, texto `text-secondary`, animação de altura suave (~250ms).
- Apenas um item aberto por vez.

### Stat Bar (números de credibilidade)
- Número grande em `font-display`, `gold`; label pequeno abaixo em `font-sans` uppercase, `text-secondary`.
- Layout horizontal, 3 itens, separados por espaço (não usar divisórias verticais — visual mais limpo, como na referência).

---

## Layout Patterns

- **Container:** max-width 1280px, padding lateral `--space-6` mobile / `--space-12` desktop.
- **Hero:** grid 2 colunas desktop (texto 45% / imagem 55%), empilhado no mobile com imagem primeiro seguida do texto — ou texto primeiro se a imagem for muito alta (testar ambos; priorizar que o H1 apareça sem scroll).
- **Grids de conteúdo:** 4 colunas desktop → 2 colunas tablet → 1 coluna mobile. Gap consistente (`--space-6`).
- **Seção escura (depoimentos):** fundo `ink`, 3 cards, o card central em destaque com fundo `gold` sólido (inverte o padrão dos outros dois, que ficam em `ink-soft`).
- **Seção "Como Funciona":** 4 passos numerados horizontalmente no desktop, número grande em `gold` acima do texto; empilha verticalmente no mobile.
- **CTA final:** full-width, fundo de contraste (`ink` ou `gold`), formulário centralizado, max-width 600px.

---

## Do / Don't

**Do**
- Repetir sempre o mesmo par de CTA (texto idêntico) em todas as seções — reforça a ação esperada.
- Usar fotos reais de ambientes/projetos entregues, nunca stock genérico ou ilustração.
- Manter no máximo 2 cores de marca visíveis por seção (`ink` + `gold`, ou `cream` + `gold`).
- Deixar respiro generoso entre seções (`--space-24`) — a marca é "alto padrão", layout apertado contradiz isso.

**Don't**
- Não usar preço fechado/tabela de preços em nenhum lugar da página.
- Não colocar mais de um CTA `primary` na mesma viewport.
- Não usar ícones genéricos de UI kit sem curadoria (ex: emojis) — usar line-icons finos, coerentes com o traço do logo.
- Não aplicar `gold` como cor de fundo em blocos de texto longo (baixo contraste de leitura).
- Não misturar `Fraunces` com pesos acima de 600 — a fonte perde a leveza que a diferencia de uma serif "pesada" tradicional.

---

## Behavior Annotations

- **Loading (formulário de orçamento):** botão `primary` vira estado disabled com opacidade 60% + spinner discreto substituindo o texto; nunca desabilitar o formulário inteiro (usuário deve poder corrigir campo com erro sem perder o resto preenchido).
- **Empty state (portfólio filtrado sem resultado):** mensagem curta + CTA `secondary` para "Ver todos os projetos" — nunca deixar grid vazio sem texto.
- **Validação de campo:** erro aparece abaixo do input em vermelho neutro (`#B3261E`, único uso de cor fora da paleta de marca — reservado exclusivamente para erro), borda do input também muda para essa cor. Sucesso não precisa de feedback visual (evita poluição).
- **Scroll no header:** transparente sobre o hero, transiciona para fundo `cream` sólido + sombra leve (`--shadow-card` reduzida) após ~80px de scroll. Transição `300ms ease`.
- **Animação de entrada de seção:** fade + slide-up sutil (16px), disparado ao entrar no viewport, `duration: 400ms`, sem repetir a cada scroll para cima/baixo (`once: true`).
- **Botão WhatsApp flutuante:** pulso leve (`scale` 1 → 1.05 → 1, opacidade da sombra) a cada 8s quando o usuário está inativo, para chamar atenção sem ser intrusivo.