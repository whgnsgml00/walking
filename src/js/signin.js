let email = document.getElementById('floatingInput');
let password = document.getElementById('floatingPassword');
const btnLogin = document.querySelector('.btn-primary');
//이메일 비밀번호 일치한다면 로그인 버튼 눌렀을 때 로그인 완료 띄우고 index.html로 이동
function moveIndex() {
    if (email.value && password.value) {
        alert('로그인되었습니다.'); 
    } else {
        alert('아이디나 비밀번호를 확인하새요.');
    }
}

btnLogin.addEventListener('click', moveIndex);