greeting = () => {
    window.alert("Hello, welcome!");
}

greeting();

const magicNumber = parseInt(prompt("Choose a number from 1 to 9 and see the message the universe has for you: "))

function message(magicNumber) {
    if(magicNumber >= 1 && magicNumber <= 5) {
        let dayMsg = "Your day today will be ";
        return dayMsg;
    } else if(magicNumber > 5 && magicNumber <= 10) {
        let dayMsg = "Your day tomorrow will be ";
        return dayMsg;
}
}

function endMsg() {
    if(magicNumber % 2 == 0) {
        let endMsg = "very good, and an interesting surprise awaits you.";
        return endMsg;
    } else if(magicNumber % 2 != 0) {
        let endMsg = "full of new experiences, allow yourself!";
        return endMsg;
    }
}

let magicMessage = message(magicNumber) + endMsg();

window.alert(magicMessage);