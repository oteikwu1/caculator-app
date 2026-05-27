const display = document.getElementById('display');
const caculateBtn = document.querySelector('.caculate-btn');
const deleteBtn = document.getElementById('delete-btn');
   
function renderDigit (value) {
    display.value += value;
};

function clearDisplay() {
    display.value = '';
};

 function toggleBtnState() {
    if( caculateBtn === "") {
        caculateBtn.disabled = true
    }else {
          caculateBtn.disabled = false
    }
 };

function caculate(){
    try {
        toggleBtnState()
         display.value = eval(display.value)
    }
    catch(error){
         display.value = 'Error';
    } 
};
 
function clearInput() {
    display.value = display.value.slice(0, -1);  
}