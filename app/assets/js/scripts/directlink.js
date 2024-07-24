const cafe = document.getElementById('cafe')
const discord = document.getElementById('discord')
const minepg = document.getElementById('minepg')

discord.onclick = () => {
    shell.openExternal('https://discord.gg/NBkXNW7kz7')
}

minepg.onclick = () => {
    // shell.openExternal('https://minelist.kr/servers/mcdolphin.kr')
    alert("Coming soon")
}

cafe.onclick = () => {
    shell.openExternal('https://cafe.naver.com/mutaroleplay')
}