function random(maximum, minimum = 0){
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

function generatePassword(length){
    let pwd = ''
    const lowers = 'abcdefghijklmnopqrstuvwxyyz'
    const uppers = lowers.toUpperCase()
    const numbers = '0123456789';
    const simbols = '`~!@#$%^&*()_+}{":?></.,\';][=-]'

    let count = 0
    while(count < length){
        
        pwd += lowers[random(lowers.length)]
        count++
        if(count == length) break
        pwd += uppers[random(uppers.length)]
        count++
        if(count == length) break
        pwd += numbers[random(numbers.length)]
        count++
        if(count == length) break
        pwd += simbols[random(simbols.length)]
        count++
        if(count == length) break
    }

    return pwd
}

// Manipulacion del DOM
const btnPassword = document.getElementById('btn-new-password')

btnPassword.addEventListener('click', function(){
    const newPassword = document.getElementById('new_password')
    const inputLength = document.getElementById('digito')
    const length = parseInt(inputLength.value)
    const pwd = generatePassword(length)
    console.log(pwd);

    newPassword.innerText = pwd

} )


