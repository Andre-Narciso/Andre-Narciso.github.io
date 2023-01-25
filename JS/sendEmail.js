function sendEmail() {
    event.preventDefault()
    let url = "https://opkp3t6gt3r7awxzwliwsl26sq0flryo.lambda-url.us-east-1.on.aws/"
    let email = document.getElementById("email")
    let msg = document.getElementById("msg")
    let name = document.getElementById("name")
    let lastname = document.getElementById("lastname")
    let sub = document.getElementById("subject")

    body = {
        "name": name.value,
        "lastname": lastname.value,
        "email": email.value,
        "subject": sub.value,
        "msg": msg.value
    }
    
    document.getElementById("submit").innerHTML = "Enviando..."
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
    request.onload = function() {
        //console.log(this.responseText)
        name.value = ""
        lastname.value = ""
        email.value = ""
        msg.value = ""
        document.getElementById("submit").innerHTML = "Enviar"
    }
    return request.responseText
}