let password = "ThisPassword123";

//makes sure this variable will contain lowercase letters, upper case letters, and numbers in password
let lowerCaseUpperCaseLettersAndNumbers = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z])/ ;
let success= lowerCaseUpperCaseLettersAndNumbers.test(password);
// this if statement checking whether password is greater than 10 characters long and if success returns true (checks password for atleast one lower case letter, upper case letter and number), then console log success.
  if (password.length >= 10  && success===true ) {
   console.log( " _______  _______________  __________\n" +
                 "/ ___/ / / / ___/ ___/ _ \/ ___/ ___/\n" +
                "(__  ) /_/ / /__/ /__/  __(__  |__  )\n" +
               "/____/\__,_/\___/\___/\___/____/____/");
  } 
   else {console.log(
   " ______      _ __         ____\n" +
  " / ____/___ _(_) /__  ____/ / /\n" +
 " / /_  / __ `/ / / _ \/ __  / /\n" +
 "/ __/ / /_/ / / /  __/ /_/ /_/\n" + 
"/_/    \__,_/_/_/\___/\__,_(_)"   );

  }
