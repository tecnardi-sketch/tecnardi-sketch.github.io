# Implantação Estática - TecNardi

## Opções de implantação

### 1. Publicar em um serviço de hospedagem estática
- GitHub Pages
  - Crie um repositório GitHub e faça push dos arquivos do site para a branch `main`.
  - Em `Settings > Pages`, use a pasta raiz (`/`) como fonte.
  - Acesse via `https://<seu-usuario>.github.io/<nome-do-repositorio>/`.
- Netlify
  - Crie um novo site a partir do repositório ou arraste a pasta `c:\SITE`.
  - Configure o build como "None" (site estático) ou apenas publique.
- Vercel
  - Conecte o repositório Git e publique o projeto.
  - Sem build, o Vercel servirá os arquivos estáticos diretamente.

### 2. Testar localmente
- Abra o arquivo `c:\SITE\index.html` diretamente no navegador.
- Ou rode um servidor local na pasta do site:
  - `python -m http.server 8000`
  - Acesse `http://127.0.0.1:8000/`

### 3. Estrutura do site estático
- `index.html` — página inicial
- `styles.css` — estilos
- `script.js` — interações
- `pages/` — páginas de módulo e conteúdo
- `README.md` — documentação do projeto
- `deploy-instructions.md` — instruções de implantação
- `social-plan.md` — plano de divulgação em redes sociais

### 4. Observações
- Todos os links são relativos e funcionam sem servidor.
- Para usar um domínio personalizado, configure o host estático e o DNS com seu provedor.
