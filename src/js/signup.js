const inputUserId = document.getElementById('inputEmail');
const inputUserName = document.getElementById('inputNickname');
const inputPassword = document.getElementById('inputPassword');
const confrimPassword = document.getElementById('confirmPassword');

inputUserId.addEventListener('keyup', emailCheck);
inputUserName.addEventListener('keyup', nameCheck);
inputPassword.addEventListener('keyup', passwordCheck);
confrimPassword.addEventListener('keyup', isSameCheck);

function emailCheck() {
    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regEmail.test(inputUserId.value) === true) {
        document.querySelector('.validator.userId').innerHTML = `유효합니다.`;
        document.querySelector('.userId').style.color = `#00C040`;
    } else {
        document.querySelector('.validator.userId').innerHTML = `이메일 형식이 올바르지 않습니다.`;
        document.querySelector('.userId').style.color = `rgba(233 50 35)`;
    }
}

function nameCheck() {
    let userNameLength = inputUserName.value.length;
    if (userNameLength >= 2 && userNameLength <= 16) {
        document.querySelector('.validator.userName').innerHTML = `유효합니다.`;
        document.querySelector('.userName').style.color = `#00C040`;
    } else {
        document.querySelector('.validator.userName').innerHTML = `유효하지않습니다.`;
        document.querySelector('.userName').style.color = `rgba(233 50 35)`;
    }
}

function passwordCheck() {
    const regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (regPassword.test(inputPassword.value) === true) {
        document.querySelector('.validator.userPassword').innerHTML = `유효합니다.`;
        document.querySelector('.userPassword').style.color = `#00C040`;
    } else {
        document.querySelector('.validator.userPassword').innerHTML = `비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.`;
        document.querySelector('.userPassword').style.color = `rgba(233 50 35)`;
    }
}

function isSameCheck() {
    let pwd = inputPassword.value;
    let cpwd = confrimPassword.value;
    
    if (pwd === cpwd) {
        document.querySelector('.validator.confirmPw').innerHTML = `비밀번호가 일치합니다.`;
        document.querySelector('.confirmPw').style.color = `#00C040`;
    } else {
        document.querySelector('.validator.confirmPw').innerHTML = `비밀번호가 일치하지 않습니다.`;
        document.querySelector('.confirmPw').style.color = `rgba(233 50 35)`;
    }
}



