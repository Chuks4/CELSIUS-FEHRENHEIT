// Accessing The DOM
const enter= document.getElementById('input')
const convertBtn = document.getElementById('convert')
const clearBtn=document.getElementById('clear')


// Creating A Coversion Function
function convertToFehrenheit(){
  
    let fehrenheit = ((1.8 * (enter.value)) + 32).toFixed(2) +'°F'
  
    document.getElementById(
      'display'
    ).innerText = `${enter.value}°C is equivalent to ${fehrenheit}`
    
  }

// Adding An EventListener To The ConvertBtn
convertBtn.addEventListener('click',convertToFehrenheit)

// Adding An EventListener To The ClearBtn
clearBtn.addEventListener('click',()=>{
  document.getElementById('input').value=''
  document.getElementById(
    'display'
  ).innerText =''
})


enter.addEventListener('keyup', e =>{
if(e.key ==='Enter'){
  convertToFehrenheit()
}
})