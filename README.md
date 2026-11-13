# 🍔 Caiky Lanches - Hub Digital & BioSite NFC

Solução completa de presença digital e experiência do cliente desenvolvida para o **Caiky Lanches** (Lagomar - Macaé/RJ).

---

## 🔒 Arquitetura de Rotas Invertida (Segurança & Conversão)

Para evitar que usuários do Instagram acessem a senha do Wi-Fi ou façam avaliações sem estarem no local, a estrutura de URLs foi blindada:

### 1. 🌐 Rota Pública Raiz: Bio do Instagram & Redes Sociais
👉 **URL:** `https://caiky-lanches-hub.pages.dev/`
- **Objetivo:** Conversão direta de pedidos para novos clientes e seguidores.
- **Conteúdo Seguro:**
  - 🍔 **Delivery / Cardápio Digital (Anota Aí)** com 1 clique.
  - 💬 **WhatsApp Oficial** com mensagem de lead pré-formatada.
  - 📍 **Nossa Localização** no Google Maps (Lagomar).
  - 📸 **Siga no Instagram** (@lagomarcaikylanches).
  - 🏆 **Mais Pedidos da Casa** com fotos reais e botão duplo (Anota Aí + WhatsApp direto).
- **Blindagem:** ❌ **SEM** senha de Wi-Fi e ❌ **SEM** avaliação no Google.

### 2. 🏬 Rota Privada das Plaquinhas NFC: Mesas e Balcão
👉 **URL:** `https://caiky-lanches-hub.pages.dev/hub`
- **Objetivo:** Experiência VIP e fidelização para quem já está sentado no estabelecimento.
- **Acesso Exclusivo:** Gravado diretamente na tag NFC e no QR Code físico das plaquinhas.
- **Recursos Exclusivos:**
  - 📶 **Wi-Fi 1-Toque:** Cópia instantânea da senha (`caikylanches2026`) + Modal com QR Code de conexão automática.
  - ⭐ **Avalie no Google (5 Estrelas):** Avaliação legítima de quem já está consumindo no local.
  - 🍔 **Cardápio Digital:** Consulta rápida na mesa.
  - 💬 **WhatsApp:** Suporte e pedidos adicionais.
  - 🏆 **Mais Pedidos da Casa:** Vitrine interativa de fotos.

---

## 🚀 Tecnologias
- **Frontend:** HTML5 Semântico, CSS3 Modular (Design System Obsidian & Gourmet), Vanilla JS ultraleve.
- **Hospedagem & CDN:** Cloudflare Pages com edge global e HTTP/3.
- **Controle de Versão:** GitHub (`ronaldmanhaes/caiky-lanches-hub`).
