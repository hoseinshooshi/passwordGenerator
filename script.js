function generate(){
    let dictionary = ''; 
    if(document.getElementById('cblowerCase').checked) {
        dictionary += "qwertyuiopasdfghjklzxcvbnm"
    } if (document.getElementById('cbupperCase').checked) {
        dictionary += "QWERTYUIOPASDFGHJKLMNBVCXZ"
    } if (document.getElementById('cbInt').checked) {
        dictionary +="0123456789"
    } if (document.getElementById('cbSpecial').checked) {
        dictionary +="!@#$%^&*()_+=-"
    };
    const length = document.querySelector('input[type="range"]').value;
    if(length < 1 || dictionary.length === 0) {
        return
    }
    let password = ''; 
    for(i = 0; i < length; i++) {
        const possible = Math.floor(Math.random() * dictionary.length)
        password += dictionary[possible]
    }
    document.getElementById("text-input").value = password;
    console.log(password)
}
[...document.querySelectorAll('input[type="checkbox"]', '.generateNewPass')].forEach(elem => {
    elem.addEventListener('click', generate)
})
document.querySelector('input[type="range"]').addEventListener('input', () => {
    document.getElementById("range-inputvalue").innerHTML = document.querySelector('input[type="range"]').value
    generate()
})
document.querySelector(".btncopy").addEventListener('click', () => {
    const pass = document.getElementById("text-input").value;
    navigator.clipboard.writeText(pass).then(() => {
        document.querySelector(".btncopy").innerHTML = "COPIED!";
        setTimeout(() => {
            document.querySelector(".btncopy").innerHTML = "COPY";
        }, 1000)
    })
})
generate();