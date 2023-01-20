let user_name = prompt ("Come ti chiami?")

let user_surname = prompt ("Qual e' il tuo cognome?")

let user_color = prompt ("E il tuo colore preferito?")

let pass = "La tua password è: $user_name $user_surname $user_color"

document.getElementById("pass").innerHTML = pass;