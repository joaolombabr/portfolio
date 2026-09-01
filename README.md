# Portfolio — João Paulo Lomba

**[joaolomba.vercel.app](https://joaolomba.vercel.app)** · AI Engineer &
Full Stack Developer

Portfólio pessoal em Next.js (App Router) + TypeScript + Tailwind CSS v4. Dark mode fixo,
tipografia monoespaçada (Geist Mono) para métricas e código, acentos em verde-neon e
azul-elétrico.

O conteúdo é orientado a estudos de caso: problema de negócio, decisão de arquitetura e
resultado — não uma lista de tecnologias.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · lucide-react · deploy na Vercel

## Rodando localmente

```bash
npm install
npm run dev
```

Abra <http://localhost:3000>.

```bash
npm run build   # build de produção
npm run lint    # ESLint
```

## Estrutura

```
app/
  layout.tsx          # shell raiz: fontes, metadata, Header/Footer
  page.tsx            # composição das seções da home
  globals.css         # design tokens (cores, fontes) via Tailwind v4 @theme

components/
  layout/             # Header, Footer — usados em todas as páginas
  sections/           # Hero, Projects, ProjectCard, Stack, Cta — 1 por seção
  ui/                 # primitivos: Container, Badge, SectionHeading

content/
  site.ts             # nome, headline, links de contato — fonte única de verdade
  projects.ts         # estudos de caso (caseStudies) + projetos menores (miniProjects)
  stack.ts            # stack tecnológica categorizada
  experience.ts       # experiência profissional
  education.ts        # formação

types/
  project.ts          # tipos CaseStudy / MiniProject

lib/
  utils.ts            # helper cn() (clsx + tailwind-merge)
```

## Convenções

- **Conteúdo separado de apresentação.** Textos de projetos, stack e experiência vivem em
  `content/*.ts`, tipados. Para adicionar um projeto, edite `content/projects.ts` — nunca os
  componentes.
- **Uma seção = um componente** em `components/sections/`, importado em `app/page.tsx` na ordem
  em que aparece na página.
- **Cores só via tokens** definidos em `app/globals.css` (`--background`, `--foreground`,
  `--accent-green`, `--accent-blue`), nunca hex direto no componente.
- **Tipos antes do conteúdo.** `CaseStudy` exige `problem`, `solution`, `stack` e `impact` — o
  compilador recusa um estudo de caso incompleto, que é a garantia de que todo card tem a mesma
  profundidade.

## Deploy

Hospedado na Vercel, a partir da branch `main`. Cada push para `main` dispara um novo deploy de
produção.

## Roadmap

- Página de detalhe por estudo de caso (`app/projetos/[slug]/page.tsx`), quando os textos
  crescerem além do que cabe no card da home.
- OpenGraph image (`app/opengraph-image.tsx`) para preview dos links compartilhados no LinkedIn.
- Versão em inglês do conteúdo, com troca de idioma.

## Licença

MIT — ver [LICENSE](LICENSE). O código é livre; os textos dos estudos de caso descrevem trabalho
real e são de autoria própria.

---

[GitHub](https://github.com/joaolombabr) · [LinkedIn](https://www.linkedin.com/in/joaolombadev/)
