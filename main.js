// need to track actual dollar input tag
// need to track dollar input value
// need to output convert euro value into euro input tag

const dollarInput = document.getElementById("dollars")

console.log(dollarInput)

dollarInput.addEventListener('input', convertToEuros)

function convertToEuros(){
    //take the actual dollar input value
    const dollarValue = document.getElementById("dollars").value
    //multiply it by 0.85
    let euroValue = dollarValue * 0.85
    // set value of euros input tag to this converted value
    document.getElementById("euros").value = euroValue

}