# Portfolio — João Paulo Lomba

Portfólio pessoal (AI Engineer & Full Stack Developer), construído em Next.js
(App Router) + TypeScript + Tailwind CSS v4. Dark mode fixo, tipografia
monoespaçada (Geist Mono) para métricas/código, acentos em verde-neon e
azul-elétrico.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Estrutura de pastas

```
app/
  layout.tsx        # shell raiz: fontes, metadata, Header/Footer
  page.tsx           # composição das seções da home
  globals.css         # design tokens (cores, fontes) via Tailwind v4 @theme

components/
  layout/             # Header, Footer — usados em todas as páginas
  sections/           # Hero, Projects, ProjectCard, Stack, Cta — 1 por seção do brief
  ui/                  # primitivos reutilizáveis: Container, Badge, SectionHeading

content/
  site.ts             # nome, headline, links de contato — fonte única de verdade
  projects.ts          # estudos de caso (caseStudies) + projetos menores (miniProjects)
  stack.ts             # stack tecnológica categorizada

types/
  project.ts           # tipos CaseStudy / MiniProject

lib/
  utils.ts             # helper cn() (clsx + tailwind-merge)
```

## Convenções

- **Conteúdo separado de apresentação.** Textos de projetos e stack vivem em
  `content/*.ts`, tipados — para adicionar um projeto, edite `content/projects.ts`,
  não os componentes.
- **Uma seção = um componente** em `components/sections/`, importado em
  `app/page.tsx` na ordem em que aparece na página.
- **Cores só via tokens** definidos em `app/globals.css` (`--background`,
  `--foreground`, `--accent-green`, `--accent-blue`, etc.), nunca hex direto
  nos componentes.

## Próximos passos sugeridos

- Adicionar página de detalhe por case study (`app/projetos/[slug]/page.tsx`)
  quando os textos dos estudos de caso crescerem além do card da home.
- Deploy: Vercel (recomendado para Next.js) ou GitHub Pages via `next export`
  se quiser manter a URL atual `joaolombabr.github.io/portfolio`.
- Adicionar OpenGraph image (`app/opengraph-image.tsx`) para preview em links
  compartilhados no LinkedIn.
