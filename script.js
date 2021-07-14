const signUpWithEmail = document.querySelector('.signup-option:first-of-type')
const returnHome = document.querySelector('#return-home')

const signUpOptions = document.querySelector('.signup-options')
const signUpForm = document.querySelector('.signup-form')

const toggleScreen = () => {
    signUpOptions.classList.toggle('active')
    signUpForm.classList.toggle('active')
}

signUpWithEmail.addEventListener('click', toggleScreen)
returnHome.addEventListener('click', toggleScreen)