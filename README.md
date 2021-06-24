# _Be my neighbor_
# https://github.com/KevinFunez5/Mr-Roboger.git


#### _A user will enter a number into the box and the user will recive an output of numbers and words_

#### By _**Kevin Funez**_

## Technologies Used

* CSS
* Bootstrap
* HTML
* JQuery
* Javascript

## Description

_This application will let a user enter a number and the user will recieve back an output of numbers up to the inputted number and exchange the numbers 1 with "Beep!, 2 with "Boop!", and 3 with "Won't you be my neighbor?"_

## Setup/Installation Requirements

* _clone repository on to your machine_
* _open in vs code_
* _open index in a browser_


## Known Bugs

* _Currently no known bugs_

## License

This software is licensed under the MIT license.

Copyright © 2021 Kevin Funez


## Contact Information

_Kevin Funez (kevin.funez315@gmail.com)_

## Here is the Test-Driven-Development (TDD) logic worked on for this project.

### TDD

> Test: "It should return an array with a 0 if the number 0 is inputted"
> Code:processNumber(0);
> Expected Output: [0]

> Test: "It should return an array of numbers up to the inputted number"
> Code:processNumber(3);
> Expected Output: [0, 1, 2, 3]

> Test: "Any string containing 1s in it, will output "Beep!"  "
> Code:processNumber(1);
> Expected Output: [0, Beep!]

> Test: "Any string containing 2s in it, will output "Boop!"  "
> Code:processNumber(2);
> Expected Output: [0, Beep!, Boop!]

> Test: "Any string containing 3s in it, will output "Won't you be my nieghbor?"  "
> Code:processNumber(3);
> Expected Output: [0, Beep!, Boop!, Won't you be my nieghbor?]