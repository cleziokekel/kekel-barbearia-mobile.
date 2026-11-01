# KEKEL BARBEARIA — V1.4 — PUSH E PUBLICAÇÃO

A V1.4 adiciona a dependência oficial `@capacitor/push-notifications`, a configuração do plugin e os recursos visuais de identidade.

## O que está pronto
- Preferências de notificações no aplicativo.
- Plugin Capacitor Push Notifications incluído no projeto.
- Configuração de apresentação de alerta, som e badge.
- Ícone 512x512 e arte de splash preparados.
- Projeto continua usando somente a chave pública/publishable do Supabase.

## O que ainda precisa ser feito fora deste pacote
1. Executar `npm install`.
2. Criar/atualizar as plataformas com `npx cap add android` e `npx cap add ios` (se ainda não existirem).
3. Android: configurar Firebase/FCM e o arquivo de credenciais no projeto Android, depois gerar o AAB.
4. iPhone: configurar APNs/Push Notifications no Apple Developer/Xcode.
5. Fazer testes em aparelho real.
6. Publicar primeiro em teste interno/TestFlight antes da loja pública.

## Importante
Este pacote **não afirma que o push já está funcionando sozinho**. FCM/APNs, certificados, credenciais e projetos de loja são necessários para o envio real.
