const nameUser = prompt("Напишите ваше имя", "Имя");
function greeting(nameUser) {
    return nameUser;
}

console.log(`Приветствую, ${greeting(nameUser)}!`);