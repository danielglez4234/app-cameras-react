import * as $ from 'jquery';


const regex = {
  id:/^[A-Za-zÀ-ú0-9]{3,10}$/, //only letters, no spaces, 3 to 10 character, no special characters and no numbers allowed
  name:/^[A-Za-zÀ-ú0-9\s]{3,40}$/, //letters and numbers with spaces, 3 to 40 characters and no special characters allowed
  group:/^[A-Za-z0-9]{3,20}$/, //letters and numbers, 3 to 20 characters and no special characters allowed
  url:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, // In short, it only allows a valid format starting with https:// or http:// and the follow characters (except for invalid characters in a url like ''"" or !¡?¿)
  detecCrendentials:/[@]/, // if the url have an "@" it means that have credentials set on the url itself
  user:/^[A-Za-z0-9\s]{3,50}$/, //letters and numbers, 3 to 50 characters and no special characters allowed and no accents
  pwd:/^(?=.*[a-zA-ZÀ-ú0-9\d].*)[a-zA-Z\d!@#$%&*]{3,}$/, //letters, numbers and special characterç, no spaces, at least 3 character
  description:/.{3,400}$/ // matches any character except lines breaks and 3 to 400 characters
}
console.log(regex);
// -----------------------
setTimeout(function(){




// --------------------------------------------- ERROR HTML Messages -------------------------------------------------------------------------------------

var $errorIdCamera = $('<div class="contein_error_message margin-top-15px"><div class="error_message">The Id-Camera cannot contain less than 3 to 10 characters and any special character \'$%&\'.</div></div>');
$('.idCamera2').after($errorIdCamera);
$($errorIdCamera).hide();

// const $error = $('<div class="contein_error_message"><div class="error_message">The Email field cannot be Empty</div></div>');
var $errorName = $('<div class="contein_error_message margin-top-15px"><div class="error_message">The Name cannot contain less than 3 to 40 characters and any special character \'$%&\'.</div></div>');
$($errorName).hide();
// .after($errorEmail_2);
// $($errorEmail_2).hide();

var $errorGroup = $('<div class="contein_error_message margin-top-10px"><div class="error_message">You have to check at least one activity</div></div>');
$('#groupCamera').after($errorGroup);
$($errorGroup).hide();

var $errorUrl = $('<div class="contein_error_message margin-top-15px"><div class="error_message">Please provide a valid URL. example: http://... or https://...</div></div>');
$($errorUrl).hide();
var $errorChecCredentialsInUrl = $('<div class="contein_error_message margin-top-15px"><div class="error_message">An \"@\" has been detected this may mean that you have placed a username and password in the url and activated the credentials button at the same time. Please choose only one of the two options.</div></div>');
$($errorChecCredentialsInUrl).hide();

var $errorUser = $('<div class="contein_error_message margin-top-15px"><div class="error_message">This field cannot be empty or contain special characters</div></div>');
$($errorUser).hide();

var $errorPwd = $('<div class="contein_error_message"><div class="error_message">The password cannot have spaces and must have at least a minimum length of 3</div></div>');
var $errorConfirmPwd = $('<div class="contein_error_message"><div class="error_message">The passwords don\'t match</div></div>');
$($errorPwd).hide();
$($errorConfirmPwd).hide();

var $errorDescription = $('<div class="contein_error_message margin-top-15px"><div class="error_message">The Description field cannot be Empty! provide at least a short description.</div></div>');
$($errorDescription).hide();


var $submitError = $('<div class="error_message_submit">An error has occurred, check that all fields are correctly filled</div>');
$($submitError).hide();

var $errorCanNotBeEmpty = $('<div class="contein_error_message"><div class="error_message">This field cannot be empty!</div></div>');
$($errorCanNotBeEmpty).hide();


// --------------------------------------------- END OF ERROR HTML Messages -------------------------------------------------------------------------------------

function generalValidate(validateText, regexType, inputId_Name){
  const testingField = regexType.test(validateText);
  console.log(testingField + ' field: ' + validateText)
  if (inputId_Name.val() === '') {
    // inputId_Name.after($errorCanNotBeEmpty);
    var empty;
    return empty
  }else {
    return testingField;
  }
 //is returned for use when the 'register' button is pressed
}

// function validateURL(validateText, regexURL, regexCredentials, inputId_Name){
//   var testingFieldURL = regexURL.test(validateText);
//   var testingFieldCredentials = regexURL.test(validateText);
//   if (!testingFieldCredentials) {
//     testingFieldCredentials = true;
//     $(inputId_Name).after($errorConfirmPwd);
//     return testingFieldCredentials;
//   }
//   else if (inputId_Name.val() === '') {
//     var empty;
//     return empty
//   }else {
//     return testingFieldURL;
//   }
//  //is returned for use when the 'register' button is pressed
// }



$('#pwdCamera').on('keyup', function(event) {
  const confirmPwd = event.target.value;
  var pwd = $('#pwdCamera').val();
  var actualValueconfirmPwd = $('#confirmPwdCamera').val();
if (pwd === "" && confirmPwd === "") {
  $('#pwdCamera').removeClass('confirmed-green confirmed-red');
  $('#confirmPwdCamera').removeClass('confirmed-green confirmed-red');
}
else if (actualValueconfirmPwd && pwd != actualValueconfirmPwd) {
  $('#pwdCamera').addClass('confirmed-red').removeClass('confirmed-green');
  $('#confirmPwdCamera').addClass('confirmed-red').removeClass('confirmed-green');
}
else if (actualValueconfirmPwd === pwd) {
   $('#pwdCamera').addClass('confirmed-green').removeClass('confirmed-red');
   $('#confirmPwdCamera').addClass('confirmed-green').removeClass('confirmed-red');
}
});

$('#confirmPwdCamera').on('keyup', function(event) { //choose a color and the select appears with the colors of that design
const confirmPwd = event.target.value;
var pwd = $('#pwdCamera').val();

    if (pwd === "" && confirmPwd === "") {
      $('#pwdCamera').removeClass('confirmed-green confirmed-red');
      $('#confirmPwdCamera').removeClass('confirmed-green confirmed-red');
    }
    else if (pwd === "" && confirmPwd) {
      $('#pwdCamera').addClass('confirmed-red').removeClass('confirmed-green');
      $('#confirmPwdCamera').addClass('confirmed-red').removeClass('confirmed-green');
    }
   else if (confirmPwd === pwd || pwd === confirmPwd) {
      $('#pwdCamera').addClass('confirmed-green').removeClass('confirmed-red');
      $('#confirmPwdCamera').addClass('confirmed-green').removeClass('confirmed-red');
    }else {
      $('#pwdCamera').addClass('confirmed-red').removeClass('confirmed-green');
      $('#confirmPwdCamera').addClass('confirmed-red').removeClass('confirmed-green');
    }
});




$('.formCameras').on('submit', function(event){

  //we call and save the functions to check if they give the value true or false
  console.log($('#nameCamera'));
  console.log($errorName);
  var validIdCamera = generalValidate($('#idCamera').val(), regex.id, $('#idCamera'));
  var validName = generalValidate($('#nameCamera').val(), regex.name, $('#nameCamera'));

  var validUrl = generalValidate($('#urlCamera').val(), regex.url, $('#urlCamera'));

  var validDescription = generalValidate($('#descriptionCamera').val(), regex.description, $('#descriptionCamera'));
  var validUser = true;
  var validPwd = true;
  var credentialsCheck = $('#checkCreandentials:checkbox:checked');
  if (credentialsCheck.length > 0) {
    validUser = generalValidate($('#userCamera').val(), regex.user, $('#userCamera'));
    validPwd = generalValidate($('#pwdCamera').val(), regex.pwd, $('#pwdCamera'));
  }


  //if at least one returns 'false' the form is not sent
  if (!validIdCamera || !validName || !validUrl || !validDescription || !validUser || !validPwd){
    event.preventDefault();

    $('#title_container').after($submitError);
    $submitError.fadeIn(300);

    if (credentialsCheck.length > 0) { // if credentials is check validate user an password
      if (!validUser) {
        $('#userCamera').after($errorUser);
        $errorUser.fadeIn(200)
      }else{ $errorUser.hide() }

      if (!validPwd) {
        $('#pwdCamera').after($errorPwd);
        $errorPwd.fadeIn(200)
      }else{ $errorPwd.hide() }

      const macthPwd = $('#pwdCamera').val();
      const macthConfirmPwd = $('#confirmPwdCamera').val();
        if (macthPwd != macthConfirmPwd) {
          $('#confirmPwdCamera').after($errorConfirmPwd);
          $errorConfirmPwd.fadeIn(200)
        }else{ $errorConfirmPwd.hide() }
    }

    if (!validIdCamera) {
      $('#idCamera').after($errorIdCamera);
      $errorIdCamera.fadeIn(200);
    }else{ $errorIdCamera.hide() }

    if (!validName) {
      $('#nameCamera').after($errorName);
      $errorName.fadeIn(200)
    }else{ $errorName.hide() }

    // if (!validGroup) {
    //   $('#urlCamera').after($errorGroup);
    //   $errorGroup.fadeIn(200)
    // }else{ $errorGroup.hide() }

    if (!validUrl) {
      $('#urlCamera').after($errorUrl);
      $errorUrl.fadeIn(200)
    }else{ $errorUrl.hide() }

    if (!validDescription) {
      $('#descriptionCamera').after($errorDescription);
      $errorDescription.fadeIn(200)
    }else{ $errorDescription.hide() }

  }

});






//------------------------------------------------------------------------------------------------------------------


// $(".dropdown dt a").on('click', function() {
//   $(".dropdown dd ul").slideToggle('fast');
// });
//
// $(".dropdown dd ul li a").on('click', function() {
//   $(".dropdown dd ul").hide();
// });
//
// function getSelectedValue(id) {
//   return $("#" + id).find("dt a span.value").html();
// }
//
// $(document).bind('click', function(e) {
//   var $clicked = $(e.target);
//   if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
// });
//
// $('.mutliSelect input[type="checkbox"]').on('click', function() {
//
//   var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
//     title = $(this).val();
//
//   if ($(this).is(':checked')) {
//     var html = '<span title="' + title + '">' + title + '</span>';
//     $('.multiSel').append(html);
//     // $(".hida").hide();
//   } else {
//     $('span[title="' + title + '"]').remove();
//     // var ret = $(".hida");
//     // $('.dropdown dt a').append(ret);
//
//   }
// });







}, 100);
