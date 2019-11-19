/* *************************
*** USER SIGNUP ***
************************** */

function userSignUp() {
  let userEmail = document.getElementById('emailSignup').value;
  let userPass = document.getElementById('pwdSignup').value;
  console.log(userEmail, userPass);
  
  let newUserData = { user: { email: userEmail, password: userPass } };
  console.log(`NEWUSERDATA ==> ${newUserData.user.email}   ${newUserData.user.password}`)
  fetch('http://localhost:3000/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUserData)
    
  })
  .then(response => response.json())
  .then(function (response) {
    console.log(response.sessionToken);
    let token = response.sessionToken;
    localStorage.setItem('SessionToken', token);
    tokenChecker()
  })
  .catch((err) => {
    console.log(err)
  })
}


/* *************************
*** USER LOGIN ***
************************** */

function userLogin() {
  let userEmail = document.getElementById('emailLogin').value;
  let userPass = document.getElementById('pwdLogin').value;
  console.log(userEmail, userPass);
  
  let userData = { user: { email: userEmail, password: userPass } };
  console.log(`USERDATA ==> ${userData.user.email}   ${userData.user.password}`)
  fetch('http://localhost:3000/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
    
  })
  .then(response => response.json())
  .then(function (response) {
    console.log(response.sessionToken);
    let token = response.sessionToken;
    localStorage.setItem('SessionToken', token);
    tokenChecker()
  })
  .catch((err) => {
    console.log(err)
  })
}


/* *************************
*** USER LOGOUT ***
************************** */
function userLogout() {
  console.log('userLogout working')
  localStorage.setItem('SessionToken', undefined)
  tokenChecker()
}


/* *************************
 *** TOKEN CHECKER FUNCTION ***
************************** */
function tokenChecker() {

  let display = document.getElementById('journals')
  let header = document.createElement('h5')
  let accessToken = localStorage.getItem('SessionToken')
  let text = 'Login or signup to get started!'
  
  for (i = 0; i = display.childNodes.length; i++) {
    display.removeChild(display.firstChild)
  }

  if (accessToken === 'undefined') {
    display.appendChild(header);
    header.textContent = text
    header.setAttribute('id', 'defaultLogin');
  } else {
    null
  }

}
tokenChecker()