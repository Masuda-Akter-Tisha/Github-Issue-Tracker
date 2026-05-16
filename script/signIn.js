const signInBtn = document.getElementById ('signIn-btn');
signInBtn.addEventListener ('click', () => {
    // get the userName input
    const userNameInp = document.getElementById ('userName');
    const userNameInpValue = userNameInp.value;

    // get the password
    const passwordInp = document.getElementById ('password');
    const passwordInpValue = passwordInp.value;

    // match userName and password input
    if (userNameInpValue === 'admin' && passwordInpValue === 'admin123'){
        // true--> alert > homepage
        alert ('Sign In Successful');
        
        window.location.assign ('./home.html');
    }
    else {
        // false ---> alert > sign In failed
        alert ('Sign In Failed!');
        return;
    }
    
    
})
