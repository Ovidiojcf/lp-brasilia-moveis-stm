# Arquitetura da Landing Page

## Princípios

- A rota e os layouts do Next.js ficam em `src/app`.
- Componentes genéricos não conhecem regras de negócio da Brasília Móveis Planejados.
- Sections compõem a página e recebem dados; não concentram tokens globais.
- Dados editáveis ficam em `src/lib/constants`, separados da marcação.
- Tailwind CSS é mobile-first: estilos base atendem celulares e `sm`, `md`, `lg`, `xl` e `2xl` ampliam progressivamente.
- Componentes interativos recebem `"use client"` somente quando realmente precisam de estado, eventos ou APIs do navegador.

## Estrutura

```text
src/
├── app/
│   ├── layout.tsx              # metadata, fontes e shell global
│   ├── page.tsx                # composição da landing page
│   └── globals.css             # tokens CSS e estilos globais
├── components/
│   ├── ui/                     # primitivas sem regra de negócio
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   └── SectionHeading.tsx
│   ├── layout/                 # navegação e elementos compartilhados
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   └── sections/               # blocos específicos desta landing page
│       ├── HeroSection.tsx
│       ├── SolutionsSection.tsx
│       └── CtaSection.tsx
├── hooks/                      # hooks client reutilizáveis
├── lib/
│   ├── constants/              # conteúdo estruturado e configurações
│   │   └── landing-page.ts
│   └── utils.ts                # helpers puros e compartilhados
└── types/                      # tipos públicos compartilhados
```

## Componentes

### UI

- `Button`: ação semântica com variantes `primary`, `secondary` e `gold`; recebe `children`, `href`, `variant`, `className` e props nativas de link/botão.
- `Container`: largura máxima e padding horizontal responsivo; aceita `as` e `className`.
- `SectionHeading`: eyebrow opcional, título e descrição; recebe conteúdo via props ou composição.

### Layout

- `Navbar`: marca, links de navegação e CTA; deve virar client component apenas quando o estado de scroll/menu mobile for implementado.
- `Footer`: informações institucionais, navegação e canais confirmados; não deve inventar contatos.

### Sections

- `HeroSection`: primeira mensagem, CTA principal, composição visual e prova disponível.
- `SolutionsSection`: lista de ambientes/setores a partir de `landing-page.ts`.
- `CtaSection`: fechamento da página e entrada para orçamento; formulário deve ser extraído quando o fluxo for confirmado.

## Convenções

- Arquivos de componentes usam PascalCase: `HeroSection.tsx`.
- Hooks usam camelCase com prefixo `use`: `useScrolledHeader.ts`.
- Dados constantes usam kebab-case: `landing-page.ts`.
- Tipos e interfaces descrevem o domínio: `SolutionCard`, `ButtonProps`.
- Exports nomeados são preferíveis; a rota pode usar `export default` por convenção do Next.js.
- Classes Tailwind ficam próximas do componente. Classes repetidas devem virar UI component ou constante, não cópia extensa.
- Evitar barrel files até existir uma necessidade clara de reduzir imports; imports diretos facilitam navegação e tree-shaking.

## Responsividade e performance

- Começar pelo layout de celular e adicionar `sm`, `md`, `lg`, `xl` e `2xl` conforme a composição exigir.
- Usar `next/image` para imagens reais fornecidas pela empresa, sempre com `alt` útil e dimensões estáveis.
- Manter sections server-rendered por padrão; mover somente controles interativos para componentes client.
- Não carregar bibliotecas de ícones ou animação antes de existir uma necessidade concreta.
- Testar a rota em celular, tablet e desktop após cada alteração estrutural.

## Próximos componentes

A arquitetura está preparada para adicionar `ProcessSection`, `PortfolioSection`, `TestimonialsSection`, `FaqSection` e `QuoteForm` sem alterar a responsabilidade da rota. Esses blocos só devem ser ativados quando houver conteúdo real ou requisitos confirmados em `PRODUCT.md`.
