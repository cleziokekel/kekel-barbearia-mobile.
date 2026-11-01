# KEKEL BARBEARIA — APP MOBILE V1.5.1 CORRIGIDA

Projeto mobile separado da versão Web atual. Esta edição corrige e documenta a organização das pastas para envio pelo GitHub usando o celular.

## Estrutura obrigatória

```text
kekel-barbearia-mobile/
├── capacitor.config.ts
├── package.json
├── README.md
├── ANDROID_BUILD_GUIDE.md
├── ANDROID_TEST_CHECKLIST.md
├── NATIVE_PUSH_SETUP.md
├── VERSION_1_5.md
├── GUIA_ENVIO_GITHUB_CELULAR.md
├── www/
│   ├── index.html
│   ├── config.js
│   ├── logo.png
│   └── web-base.html
└── resources/
    ├── icon-512.png
    └── splash-2732.png
```

## Importante
- `config.js`, `index.html`, `logo.png` e `web-base.html` pertencem a `www/`, não à raiz.
- `icon-512.png` e `splash-2732.png` pertencem a `resources/`.
- `capacitor.config.ts` e `package.json` ficam na raiz.
- Não envie o ZIP compactado como substituto dos arquivos extraídos.
- Consulte `GUIA_ENVIO_GITHUB_CELULAR.md` para enviar em etapas sem misturar as pastas.

## Android
Consulte `ANDROID_BUILD_GUIDE.md`. O pacote prepara o projeto para Capacitor, mas não contém APK/AAB compilado. A compilação Android requer um serviço de build compatível ou Android SDK/Gradle e assinatura.

## Supabase e segurança
O app usa a chave pública/publishable configurada em `www/config.js`. Nunca coloque a chave `service_role` em um aplicativo cliente. A proteção efetiva dos dados depende das políticas RLS do Supabase.

A versão Web atual permanece separada e não é modificada por este pacote.
