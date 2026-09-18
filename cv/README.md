# CV — fontes

Fonte dos currículos públicos servidos pelo site em `public/`:

| Fonte | PDF gerado | Linkado em |
|---|---|---|
| `en.html` | `public/Joao_Paulo_Lomba_CV_EN.pdf` | `/` (hero e contato) |
| `pt.html` | `public/Joao_Paulo_Lomba_CV_PT.pdf` | `/pt` (hero e contato) |

**Estas versões não têm telefone** — o site e o repositório são públicos. As versões com
telefone, para candidatura direta, ficam fora do repositório.

## Regerar os PDFs

Depois de editar `en.html`, `pt.html` ou `cv.css`, na raiz do projeto (Git Bash):

```bash
EDGE="/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
"$EDGE" --headless=new --no-pdf-header-footer --print-to-pdf="$(cygpath -w "$PWD/public/Joao_Paulo_Lomba_CV_EN.pdf")" "file:///$(cygpath -m "$PWD/cv/en.html")"
"$EDGE" --headless=new --no-pdf-header-footer --print-to-pdf="$(cygpath -w "$PWD/public/Joao_Paulo_Lomba_CV_PT.pdf")" "file:///$(cygpath -m "$PWD/cv/pt.html")"
```

Antes de commitar, confira que nenhum número de telefone entrou no PDF:

```bash
python -c "from pypdf import PdfReader; import sys; t=''.join(p.extract_text() for f in sys.argv[1:] for p in PdfReader(f).pages); print('telefone encontrado' if '98167' in t else 'ok')" public/*.pdf
```
