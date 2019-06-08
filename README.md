# _Doctor Lookup_

#### _9th Independent project, 06/7/2019_

#### By _**Stephen Trewick**_

## Program Name _Doctor Lookup_ 9th Independent Project

## Description

This exercise is designed to take user input to search for relevant doctors in the area. The user will either search by type or name to find a list of doctors retrieved by the BetterDoctor API. The app will also let the user know if the selected doctors are taking new clients along with the doctors contact information. This project is practice to solidify my knowledge on how to make API calls. 

### Specs

| Spec | Input | Output |
| :-----------------    | :------------------ | :-------------- |
| Returns a list of doctors by issue. | _Input:_ "Physical Therapy" | _Output:_ A list of doctors in the area that specialize or take clients based on physical therapy  |
| Returns a list of doctors by name | _Input:_ "Rodriguez" | _Output:_ A list of doctors who have the name Rodriguez |
| Returns error if the input has no matches | _Input:_ "0" | _Output:_ "No doctors match your search input" |
| When a list is returned, information about each doctor will be included. | _Input:_ "Sleep problems" | _Output:_ Doctor name, address, phone number, website, and availability |

## Setup/Installation Requirements

* _You can check out the repository link in my github pages [Link to repository](https://github.com/step818/)_

#### Install, build and run the application
1. Navigate to the application root directory:

       $ cd DoctorLookup
2. Install the required packages:

       $ npm install
3. Build the application:

       $ npm run build
4. Run the application:

       $ npm run start

#### Test the application
1. Execute the tests with Jasmine and Karma:

       $ npm run test


## Support and contact details

_stephent818@gmail.com_

## Support and contact details

If you have any feedback or concerns, please contact Stephen Trewick.

## Technologies Used

_Windows 10.1, Visual Studio Code _

### License
*Licensed under the GPL License*
Copyright (c) 2019 **_Stephen Trewick_**