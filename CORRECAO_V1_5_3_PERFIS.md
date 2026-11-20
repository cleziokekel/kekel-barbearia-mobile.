# Kekel Barbearia Mobile V1.5.3 — correção de perfis

- Clientes veem somente as opções de cliente.
- Administradores veem a entrada da área administrativa e não veem a navegação de cliente.
- O papel é lido diretamente de `public.profiles` após login e restauração de sessão.
- Se o perfil não puder ser confirmado, o app encerra a sessão em vez de assumir `client`.
- O acesso à área administrativa continua fazendo uma nova verificação do papel no Supabase.

Esta atualização altera somente os arquivos do aplicativo móvel. Não executa SQL nem modifica o banco Supabase.
