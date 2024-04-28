// FUNCTION CALL
const getColor =() =>{

    const randomNumber=Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.querySelector(".message").textContent = randomCode;

    navigator.clipboard.writeText(randomCode);
};

// EVENT CALL

const button = document.getElementsByClassName("btn");
for (let i=0; i<button.length;i++){
    button[i].addEventListener("click",getColor)
}


// GET PAGE INITIAL COLOR 
getColor();