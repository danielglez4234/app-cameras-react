import * as $ from 'jquery';


const regex = {
  id:/^[A-Za-zÀ-ú0-9]{3,10}$/, //only letters, no spaces, 3 to 10 character, no special characters and no numbers allowed
  name:/^[A-Za-zÀ-ú0-9\s]{3,40}$/, //letters and numbers with spaces, 3 to 40 characters and no special characters allowed
  group:/^[A-Za-z0-9]{3,20}$/, //letters and numbers, 3 to 20 characters and no special characters allowed
  url:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, // In short, it only allows a valid format starting with https:// or http:// and the follow characters (except for invalid characters in a url like ''"" or !¡?¿)
  user:/^[A-Za-z0-9\s]{3,50}$/, //letters and numbers, 3 to 50 characters and no special characters allowed and no accents
  pwd:/^(?=.*[a-zA-Z\d].*)[a-zA-Z\d!@#$%&*]{3,}$/, //letters, numbers and special characterç, no spaces, at least 3 character
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

var $errorUrl = $('<div class="contein_error_message"><div class="error_message">Please provide a valid URL. example: http://... or https://...</div></div>');
$($errorUrl).hide();

var $errorUser = $('<div class="contein_error_message margin-top-10px"><div class="error_message">You have to check at least one activity</div></div>');
$('#userCamera').after($errorUser);
$($errorUser).hide();

var $errorPwd = $('<div class="contein_error_message margin-top-10px"><div class="error_message">You have to check at least one activity</div></div>');
$('#pwdCamera').after($errorPwd);
$($errorPwd).hide();

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









$('.formCameras').on('submit', function(event){

  //we call and save the functions to check if they give the value true or false
  console.log($('#nameCamera'));
  console.log($errorName);
  var validIdCamera = generalValidate($('#idCamera').val(), regex.id, $('#idCamera'));
  var validName = generalValidate($('#nameCamera').val(), regex.name, $('#nameCamera'));
  var validUrl = generalValidate($('#urlCamera').val(), regex.url, $('#urlCamera'));
  // const validUser = generalValidate($('#userCamera').val(), regex.user, $errorUser, $('#userCamera'));
  // const validPwd = generalValidate($('#pwdCamera').val(), regex.pwd, $errorPwd, $('#pwdCamera'));
  var validDescription = generalValidate($('#descriptionCamera').val(), regex.description, $('#descriptionCamera'));

  // const validEmail = validateEmail($('#mail').val());
  // const validCheckbox = validateCheckbox();
  // const validCardNumber = validateNameCardZipCvv($('#cc-num').val(), regex.cardNumber, $errorCardNumber, $('#cc-num'));
  // const validZip = validateNameCardZipCvv($('#zip').val(), regex.zipCode, $errorZip, $('#zip'));
  // const validCVV = validateNameCardZipCvv($('#cvv').val(), regex.cvv, $errorCVV, $('#cvv'));

  //if at least one returns 'false' the form is not sent
  if (!validIdCamera || !validName || !validUrl || !validDescription){
    event.preventDefault();
    $('#title_container').after($submitError);
    $submitError.fadeIn(300);

    if (!validIdCamera) {
      console.log($errorIdCamera);
      $('#idCamera').after($errorIdCamera);
      $errorIdCamera.fadeIn(200);
    }else{ $errorIdCamera.hide() }

    if (!validName) {
      $('#nameCamera').after($errorName);
      $errorName.fadeIn(200)
    }else{ $errorName.hide() }

    if (!validUrl) {
      $('#urlCamera').after($errorUrl);
      $errorUrl.fadeIn(200)
    }else{ $errorUrl.hide() }

    if (!validDescription) {
      $('#descriptionCamera').after($errorDescription);
      $errorDescription.fadeIn(200)
    }else{ $errorDescription.hide() }

  }
  // // the payment section is only validated if it is displayed
  // if ($('#payment').val() === 'Credit Card') {
  //   if (!validCardNumber || !validZip || !validCVV) {
  //     event.preventDefault();
  //     $(submitError).fadeIn(200);
  //   }
  // }
  // event.preventDefault();
  // console.log('por aquí no pasas');
});


















}, 100);
