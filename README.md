# IRCTC-Form-Autofill
JS file that can be run to fill IRCTC booking form and tremendously decrease the time it takes to fill the same manually

## Setup
* Open `form-loader.js` file in any of the following recommended text editors:
  * vi or vim
  * sublime text
  * notepad++
  * nano

* See for the `input` variable mentioned as 
  ```javascript
  var input = {
    ...
  };
  ```
  Fill it up with the required appropriate fields as mentioned in [here](README.md#input-fields).

* Open the page in IRCTC which asks for various details of passengers.
* Open ***Inspect Element*** or ***Developers Console*** in your browser and switch to `Console` tab
* Paste the complete modified code present in `form-loader.js` in console and hit return key.
* Voila! the fields are populated as per the inputs given by you.


## Input Fields

* confirm_ticket_only - set this to `true` if you want to book ticket if it is confirmed.
* auto_upgrade - set this to `true` if you want to use the ***Auto Upgradation*** facility provided by IRCTC
* mobile_number - The mobile number to which notifications are to be sent
* persons - List of all the persons whose ticket is to be booked.
  * name - The name of the person. Should be written within inverted commas.
  * age - Age of the aforementioned person. Should be a number and not within inverted commas.
  * gender - Either `1` or `2` depending upon the person is Male or Female.  Should be a number and not within inverted commas.
  * icard_type - Any number between `1` to `9` according to the type of ID card number you want to enter. Should be a number and not within inverted commas. See this section for reference in `form-loader.js` file:
   ```javascript
    var field_values = {
      "icard_type": {
        ...
      }
    }
   ```
  * icard_number - The ID card number. Should be written within inverted commas.
