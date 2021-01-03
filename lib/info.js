exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ INFO BOT! :
   
⚜ *GITHUB*:
⚜ *AUTHOR*:
⚜ *DESIGNER*:
⚜ *YOUTUBE*: 


OUTRAS INFORMAÇÕES!  :

 OH SIM, ESTE SCRIPT é 100% KOK GRÁTIS.
 O SCRIPT É FEITO NA LÍNGUA DE PROGRAMAÇÃO NODE.JS
 ÚLTIMA ATUALIZAÇÃO DO BOT NO YOUTUBE BINTANG NUR PRADANA

 ♻️ NÃO SE ESQUEÇA DE DOAR PARA CONTINUAR BOTS ATIVOS!
 ♻️ QUER DOAR?  POR FAVOR DIGITE # doar

 📺 * Publicidade *:

 ✅ Siga a conta do instagram do admin $ {instagramlu}

 ⚠️ ÚLTIMAS INFORMAÇÕES DO COVID-19!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

✳️ Official Grub [1] : ${grupch1}

✳️ Official Grub [2] : ${grupch2}

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
