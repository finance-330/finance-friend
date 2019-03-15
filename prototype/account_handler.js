function lightenGray(x){
  x.style.opacity = "0.5";
}

function returnGray(x){
  x.style.opacity = "1";
}


let accounts = [
  {
    "name": "Mr. Finance",
    "email": 'master@financefriend.com',
    "password": 'financefriend',
    "points": 5,
    "streak": 1,
    "level": "Beginner",
  },
  {
    "name": "Mrs. Finance",
    "email": "master2@financefriend.com",
    "password": "financefriend2",
    "points": 10,
    "streak": 3,
    "level": "Advanced",
  }
];

function get_profile(){
  let account = {
    "email": $('#email').val(),
    "password": $('#password').val(),
  };
  accounts.push(account);
}

function account_checker(){
  let email = $('#email').val();
  let password = $('#password').val();
  for(var i = 0; i < accounts.length; i++){
    if(accounts[i].email == email && accounts[i].password == password) {
      return true;
    }
  }
  return false;
}

function handleClick(){
  let email = $('#email').val();
  let password = $('#password').val();
  for(var i = 0; i < accounts.length; i++){
    if(accounts[i].email == email && accounts[i].password == password) {
      if(i==0) {
        document.getElementById("login-form").action = "home.html";
      }
      else {
        newPage = "home-" + i + ".html";
        document.getElementById("login-form").action = newPage;
      }
    }
  }
}

$('form[name=login-form]').submit((e) => {
  if(!account_checker()) {
    window.alert("Email and/or password does not match.  Please try again.");
    return false;
  }
});

$('form[name=landing-form]').submit((e) => {
  if($('#check-password').val() != $('#password').val()){
    window.alert("Error: Passwords do not match!\nPassword = " + $('#password').val() + "\nConfirm Password = " + $('#check-password').val());
    return false;
  }
  window.alert("New account created!\nEmail = " + $('#email').val() + "\nPassword = " +  $('#password').val() + "\n(Please allow up to several minutes for the account to be registered in our system.)");
});

$('#user-name').ready(() => {
  $('#user-name').html(accounts[0].name);
})

$('#points').ready(() => {
  $('#points').html(accounts[0].points);
})

$('#streak').ready(() => {
  $('#streak').html(accounts[0].streak);
})

$('#email').ready(() => {
  $('#email').html(accounts[0].email);
})

$('#level').ready(() => {
  $('#level').html(accounts[0].level);
})

function add_streak(){
  window.alert("Congratulations!\nBecause you completed another lesson today,\nYour streak increased by 1, and your points increased by 2!")
  $('#streak').html(2);
  $('#streak-1').html(4);
  $('#points').html(7);
  $('#points-1').html(12);
}

$('#user-name-1').ready(() => {
  $('#user-name-1').html(accounts[1].name);
})

$('#points-1').ready(() => {
  $('#points-1').html(accounts[1].points);
})

$('#streak-1').ready(() => {
  $('#streak-1').html(accounts[1].streak);
})

$('#email-1').ready(() => {
  $('#email-1').html(accounts[1].email);
})

$('#level-1').ready(() => {
  $('#level-1').html(accounts[1].level);
})