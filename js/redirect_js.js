function redirect() {
    txt = document.getElementById("fname").value;
    myFunction();
}

async function myFunction() {
    let url = 'http://212.80.206.87/'
    r = await axios.post(url).then(res => res.data)
}
