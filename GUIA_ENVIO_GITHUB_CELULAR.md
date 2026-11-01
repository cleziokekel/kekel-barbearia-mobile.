# GUIA — ENVIAR A V1.5.1 AO GITHUB PELO CELULAR

O seletor de arquivos do Android pode não permitir selecionar uma pasta inteira. Por isso, envie o projeto em três etapas. Não misture os arquivos de `www` ou `resources` na raiz.

## Etapa 1 — arquivos da raiz
No repositório `cleziokekel/kekel-barbearia-mobile`, use **Add file → Upload files** e selecione somente:
- `ANDROID_BUILD_GUIDE.md`
- `ANDROID_TEST_CHECKLIST.md`
- `NATIVE_PUSH_SETUP.md`
- `GUIA_ENVIO_GITHUB_CELULAR.md`
- `README.md`
- `VERSION_1_5.md`
- `package.json`
- `capacitor.config.ts`

Confirme o envio com a mensagem `Adicionar arquivos principais V1.5.1`.

## Etapa 2 — conteúdo de www
1. No repositório, use **Add file → Create new file**.
2. No campo do nome do arquivo, digite `www/.gitkeep`.
3. Salve com **Commit changes**. Isso cria a pasta `www`.
4. Abra a pasta `www` no repositório.
5. Use **Add file → Upload files** e selecione, de dentro da pasta `www` extraída no celular, somente `config.js`, `index.html`, `logo.png` e `web-base.html`.
6. Confirme com a mensagem `Adicionar arquivos web em www`.

## Etapa 3 — conteúdo de resources
1. Volte à raiz do repositório.
2. Use **Add file → Create new file** e digite `resources/.gitkeep`.
3. Salve com **Commit changes**.
4. Abra a pasta `resources`.
5. Use **Add file → Upload files** e selecione `icon-512.png` e `splash-2732.png` da pasta `resources` extraída no celular.
6. Confirme com a mensagem `Adicionar ícones e splash em resources`.

## Conferência final
Na raiz devem aparecer `package.json`, `capacitor.config.ts` e os guias, além das pastas `www` e `resources`.
Dentro de `www` devem aparecer `index.html`, `config.js`, `logo.png` e `web-base.html`.
Dentro de `resources` devem aparecer `icon-512.png` e `splash-2732.png`.

Não faça commit se estiver vendo arquivos de `www` ou `resources` misturados na raiz. Se a interface do GitHub no celular não permitir seguir esses passos, pare e envie uma captura da tela antes de confirmar.
