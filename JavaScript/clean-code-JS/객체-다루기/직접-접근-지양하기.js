/* 
직접 접근 지양하기
예측 가능한 코드를 작성해서 동작이 예측 가능한 앱을 만들도록 노력하기
*/

const model = {
  isLogin: false,
  isValidToken: false,
};

// 모델에 직접 접근해서 값을 바꿈 => 모델에 접근하는 것이 너무 쉬움 => 직접 접근하는 방식은 좋지 않음.
function login() {
  model.isLogin = true;
  model.isValidToken = true;
}

function logout() {
  model.isLogin = false;
  model.isValidToken = false;
}

// -------------------------------------------------------------------------------------------------------------

// 직접 접근하는 것이 아니라 접근할 수 있게 하는 함수를 따로 만드는 것이 좋다. => 코드를 안전하게 변화시킬 수 있고, 어디서 어떻게 변하는지 파악하기 쉬움.
function setLogin(bool) {
  model.isLogin = bool;
}

function setValidToken(bool) {
  model.isValidToken = bool;
}

function login() {
  setLogin(true);
  setValidToken(true);
}

function logout() {
  setLogin(false);
  setValidToken(false);
}

someElement.addEventListener('click', login); // 특정 요소를 클릭했을 때 login 함수 실행
