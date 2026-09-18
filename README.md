# Portfolio — João Paulo Lomba

**[joaolomba.vercel.app](https://joaolomba.vercel.app)** · AI Automation Engineer

Portfólio pessoal em Next.js (App Router) + TypeScript + Tailwind CSS v4, bilíngue: inglês na raiz
(`/`), português em `/pt`. Dark mode fixo, preto com um acento laranja, Geist Mono para números
e nomes de repositório.

O conteúdo é orientado a estudos de caso — problema de negócio, decisão de arquitetura e o que
quebrou em produção — e a página segue a ordem em que um recrutador lê: afirmação e números de
prova, a sequência incidente → padrão → ferramenta em uma tela, depois a profundidade.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · `next/og` · deploy na Vercel

## Rodando localmente

```bash
npm install
npm run dev
```

Abra <http://localhost:3000> (inglês) e <http://localhost:3000/pt> (português).

```bash
npm run build   # build de produção
npm run lint    # ESLint
```

## Estrutura

```
app/
  (en)/               # layout raiz em inglês — <html lang="en">, rota /
    layout.tsx
    page.tsx
    opengraph-image.tsx
  (pt)/               # layout raiz em português — <html lang="pt-BR">, rota /pt
    layout.tsx
    pt/page.tsx
    pt/opengraph-image.tsx
  globals.css         # design tokens (cores, fontes) via Tailwind v4 @theme

components/
  HomePage.tsx        # compõe as seções na ordem da página, recebe o locale
  layout/             # RootShell (html/body/fontes), Header, Footer
  sections/           # Hero, Arc, Projects, ProjectCard, Principles, Experience, Stack, Cta
  ui/                 # primitivos: Container, Badge, SectionHeading

content/
  shared.ts           # nome, e-mail, links, URL — o que não muda com o idioma
  index.ts            # getContent(locale)
  en/ · pt/           # site, ui, projects, experience, stack — mesmo formato nos dois

types/
  content.ts          # Content, Site, Ui, Role, Principle… — o contrato dos dois idiomas
  project.ts          # CaseStudy, MiniProject, ArcStep, Metric

lib/
  metadata.ts         # metadata por idioma (hreflang, OpenGraph) e JSON-LD Person
  og.tsx              # imagem de preview dos links (LinkedIn, WhatsApp, job boards)
  utils.ts            # helper cn() (clsx + tailwind-merge)
```

## Convenções

- **Conteúdo separado de apresentação.** Todo texto vive em `content/en/` e `content/pt/`. Para
  adicionar um projeto, edite `projects.ts` **nos dois idiomas** — nunca os componentes.
- **O compilador guarda a tradução.** Os dois idiomas são tipados contra o mesmo `Content`; uma
  seção criada em um e esquecida no outro quebra o build em vez de ir para o ar pela metade.
- **Todo número é verificável.** Os números do hero (`site.proof`) e dos cards (`metrics`) têm
  que existir num repositório público ou no CV. Se o repositório mudar, mude o número aqui.
- **Uma seção = um componente** em `components/sections/`, composto em `components/HomePage.tsx`
  na ordem em que aparece na página.
- **Cores só via tokens** definidos em `app/globals.css` (`--background`, `--foreground`,
  `--accent`, `--accent-muted`, `--border`), nunca hex direto no componente. A exceção é
  `lib/og.tsx`: o gerador de imagem não lê CSS, então repete os hex dos tokens.

## Deploy

Hospedado na Vercel, a partir da branch `main`. Cada push para `main` dispara um novo deploy de
produção.

## Roadmap

- Página de detalhe por estudo de caso (`app/(en)/work/[slug]/page.tsx` e o par em `/pt`), quando
  os textos crescerem além do que cabe no card.
- Link para o CV em PDF no hero e no contato — versão pública, sem telefone.

## Licença

MIT — ver [LICENSE](LICENSE). O código é livre; os textos dos estudos de caso descrevem trabalho
real e são de autoria própria.

---

[GitHub](https://github.com/joaolombabr) · [LinkedIn](https://www.linkedin.com/in/joaolombadev/)
