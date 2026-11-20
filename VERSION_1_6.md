# KEKEL BARBEARIA MOBILE V1.6.0

Base: V1.5.3 com perfis corrigidos.

## Preservado
- Autenticação Supabase existente.
- Validação do papel em `public.profiles`.
- Separação entre cliente e administrador.
- Fluxo de sair, perfil, notificações e agendamentos existentes.
- Identidade visual e configuração Capacitor.

## Recursos V1.6
- Tela administrativa para editar os sete dias e marcar dias fechados, usando `business_weekly_hours`.
- Grade de horários de agendamento passa a respeitar o horário semanal; mantém fallback para `business_settings` caso a tabela semanal não responda.
- Prévia da foto do barbeiro selecionado no agendamento.
- Edição de nome, duração e preço dos serviços.
- Cadastro, edição, ativação/desativação e exclusão de planos mensais (`membership_plans`).
- Cadastro, edição, ativação/desativação e exclusão de promoções (`promotions`), com upload de imagem no bucket `promocoes`.
- Promoções e planos visíveis na área do cliente.

## Importante
Este pacote altera apenas arquivos do aplicativo mobile. Não contém SQL e não altera o site. Os recursos dependem das tabelas, políticas RLS e bucket já configurados no Supabase. A área de planos apenas exibe os planos; contratação e cobrança não foram implementadas nesta versão.
