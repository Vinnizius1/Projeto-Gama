const form1 = document.getElementById("Form1")
const form2 = document.getElementById("Form2")

const next = document.getElementById("Next")
const back = document.getElementById("Back")
const submit = document.getElementById("Submit")

const progress = document.getElementById("progress")

next.onclick = function() {
    form1.style.left = "-450px";
    form2.style.left = "40px";
    progress.style.width = "360px";
}

back.onclick = function() {
    form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.width = "180px";
}