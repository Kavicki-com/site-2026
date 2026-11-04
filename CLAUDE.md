# Site Kavicki 2026

Informações verificadas nos arquivos e no git em 2026-11-04. Status pode ter mudado depois disso.

## O que é

Site institucional da Kavicki ("Experience Design & AI"). Apresenta serviços, produtos próprios (Llord, GymApp, Kbot, Krovo), portfólio e contato (`index.html`).

Público: potenciais clientes; `outsourcing.html` fala com agências.

Páginas:

- `index.html`: página principal.
- `landing.html`: oferta de apps, sites e produtos digitais.
- `host.html`: host e infraestrutura.
- `outsourcing.html`: outsourcing de design.
- `presentation.html`: apresentação comercial.
- `obrigado.html`: confirmação após o formulário.
- `email-template.html`: modelo de e-mail.

## Stack

- HTML, CSS e JavaScript puro, sem `package.json` nem build. Principais arquivos: `style.css`, `script.js`, `outsourcing.css`, `outsourcing.js`.
- Internacionalização própria com `data-i18n` (`script.js`).
- Via CDN em `index.html`: Three.js r128, Font Awesome 6.4.0, @emailjs/browser 4 (formulário de contato).
- Analytics: Google Tag Manager e Microsoft Clarity (`d54c44d`, 2026-04-07; `74301a8`, 2026-04-14).

## Situação real

**Não determinado pelos arquivos.** O site aponta para o domínio kavicki.com, mas nada prova que este repo é o que está publicado lá.

- `index.html` exibe "kavicki.com" no hero; `reforma-ai` também usa esse domínio como site da empresa.
- `c243698` (2026-10-27) adiciona `app-ads.txt` para o AdMob. Indica intenção de servir o arquivo na raiz do domínio, mas não confirma a publicação.
- Não há config de deploy, `CNAME`, workflow de CI nem tag canônica.
- Falta um registro de deploy ou a configuração de hospedagem.

Os links de loja no portfólio (Llord e GymApp, App Store) são referências do site, não evidência para este repo.

## Em andamento

- Só existe a branch `main`, igual a `origin/main`, sem alterações não commitadas (`git status` limpo).
- Commits mais recentes: `c243698`, 2026-10-27 (`app-ads.txt`), `cdec321`, 2026-10-14 (remove um cliente do portfólio) e `3016df8`, 2026-08-27 (galeria e conteúdo).

## Pendências

- Não há TODO, FIXME, HACK ou XXX no código, nem checklists em docs.
- Sem README ou outra documentação. O app "Natalina", citado em `c243698`, não aparece em nenhuma página.
- `index.backup.html` está versionado e foi alterado em `cdec321`. Mudanças de conteúdo podem precisar ser replicadas nele, ou o arquivo pode ser removido.
- Apenas `outsourcing.html` tem `meta description` entre as páginas conferidas (`index`, `landing`, `host`, `outsourcing`).
- `presentation.html` usa `lang="pt-PT"`; as demais páginas conferidas usam `pt-BR`.
- `script.js` ainda tem comentários "Substituir pelo..." na config do EmailJS, embora os valores já estejam preenchidos.
