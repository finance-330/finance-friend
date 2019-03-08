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
  window.alert("New account created!\nEmail = " + $('#email').val() + "\nPassword = " +  $('#password').val());
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
  window.alert("Congratulations!\nBecause you completed another lesson today,\nYour points increased by 1!")
  num1 = 7;
  //dummy, doesn't work yet
}
