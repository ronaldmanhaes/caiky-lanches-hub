document.querySelectorAll('details.group').forEach(group => {group.addEventListener('toggle', () => {if (group.open) document.querySelectorAll('details.group').forEach(other => {if(other !== group) other.open = false;});});});
const copyButton = document.getElementById('copy-wifi');
if(copyButton) copyButton.addEventListener('click', async () => {
 const status = document.getElementById('wifi-status');
 try { await navigator.clipboard.writeText(document.getElementById('wifi-password').textContent); status.textContent = 'Senha copiada. Pode conectar!'; }
 catch { status.textContent = 'Selecione a senha acima para copiar ou use o QR Code.'; }
});
