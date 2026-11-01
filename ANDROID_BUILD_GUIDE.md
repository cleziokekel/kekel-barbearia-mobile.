# KEKEL BARBEARIA — ANDROID / V1.5

## Objetivo
Esta versão deixa o projeto pronto para gerar o projeto Android com Capacitor, testar em um aparelho Android e depois gerar um **Android App Bundle (.aab)** para a Google Play.

## 1. Requisitos no computador
- Node.js LTS
- Android Studio atualizado
- Android SDK instalado
- Android SDK Platform e Build-Tools instalados
- Java/JDK compatível com a versão do Android Studio
- Cabo USB para o primeiro teste físico (ou emulador Android)

## 2. Instalar dependências
Na pasta do projeto:

```bash
npm install
```

## 3. Criar o projeto Android
Execute apenas uma vez:

```bash
npm run android:add
```

Isso cria a pasta `android/`.

## 4. Sincronizar o aplicativo
Sempre que o conteúdo de `www/` ou plugins mudar:

```bash
npm run android:sync
```

## 5. Testar no celular
1. No Android, ative **Opções do desenvolvedor**.
2. Ative **Depuração USB**.
3. Conecte o aparelho ao computador.
4. Aceite a autorização de depuração no celular.
5. Execute:

```bash
npm run android:run
```

Ou abra o Android Studio:

```bash
npm run android:open
```

Selecione o aparelho e pressione **Run ▶**.

## 6. Checklist do primeiro teste
- Abrir o aplicativo.
- Fazer cadastro.
- Fazer login.
- Ver serviços.
- Ver barbeiros.
- Abrir perfil e salvar nome/telefone.
- Criar agendamento.
- Conferir em “Meus agendamentos”.
- Cancelar um agendamento de teste.
- Entrar com uma conta administrativa e conferir a área Admin.
- Conferir foto de barbeiro.
- Abrir Notificações e salvar preferências.

## 7. Gerar o AAB para Google Play
Para publicação, é necessário um **keystore de assinatura** próprio do aplicativo.

No Android Studio:

**Build → Generate Signed Bundle / APK → Android App Bundle**

Depois:
- criar/selecionar o keystore;
- selecionar a variante `release`;
- gerar o `.aab`;
- guardar o keystore e as senhas em local seguro.

O `.aab` é o arquivo que será enviado ao Google Play Console.

## 8. Importante sobre assinatura
Não coloque o keystore, senha ou chave privada dentro do ZIP compartilhado ou no código-fonte público.

## 9. Limitação desta V1.5 no ambiente de construção
O pacote entregue contém a aplicação e toda a preparação/documentação para o Android. A criação/compilação do diretório nativo `android/` e do `.aab` depende do Android SDK/Android Studio e do ambiente de assinatura. Esses componentes não estão disponíveis neste ambiente de construção, então **nenhum AAB fictício é apresentado como se fosse real**.
