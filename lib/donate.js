exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI ${BotName}* ]----- 🔰
  
oi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Você quer doar? ✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Por favor, doe abaixo :
   
⚜ *OVO*: 082390009516
⚜ *#DANA*: 081289096745
⚜ *#BANK BRI*: 753501017096533 A.N RIDHO SETIAWAN
⚜ *#PULSA*: 081289096745
⚜ *#GOPAY*: 082390009516

📺 *Propaganda* :

✅ Siga a conta de administrador do instagram ${instagramlu}

⚠️ ÚLTIMAS INFORMAÇÕES DO COVID-19!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ __ MANTENHA A SUA SAÚDE E USE SEMPRE MÁSCARA!_

♻️ Quer anunciar no *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Use com sabedoria‼ ️
 ⚠️ Este barco está funcionando ${kapanbotaktif} ‼️

✳️ Official Grub [1] : ${grupch1}

✳️ Official Grub [2] : ${grupch2}

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
