# Brasília Móveis Planejados

Landing page de conversão para apresentar móveis planejados sob medida e direcionar clientes para atendimento e orçamento.

## Destaques

- Hero com destaque visual para cozinha planejada cinza, ilha central e painel ripado.
- CTA principal do hero abre um card de contatos do WhatsApp.
- Card de contatos reutilizável, com variantes de cor, botão de fechamento, tecla `Escape`, clique fora e bloqueio de scroll.
- Modal renderizado via portal para permanecer centralizado em qualquer componente, inclusive dentro de áreas animadas.
- Overlay com blur ocupando toda a viewport em desktop e mobile.
- Seção de projetos com imagens reais de ambientes planejados.
- Navegação interna com rolagem suave até a seção de projetos.
- Localização integrada ao Google Maps para Santarém, Pará.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- `next/image` para imagens otimizadas

## Executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts

| Comando         | Função                               |
| --------------- | ------------------------------------ |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run lint`  | Executa o ESLint                     |
| `npm run build` | Gera e valida a build de produção    |
| `npm run start` | Inicia a aplicação em produção       |

## Organização

```text
src/
├── app/                    # rota principal e estilos globais
├── components/
│   ├── layout/             # header e navegação
│   ├── sections/           # blocos da landing page
│   └── ui/                 # componentes reutilizáveis
└── lib/constants/          # conteúdo e configurações da página
```

## Validação

A aplicação foi validada com `npm run build`. O modal de WhatsApp também foi testado em viewport desktop e mobile, confirmando que o overlay ocupa toda a tela e que o card permanece centralizado.
