import { DoctorLookupService } from './drlookup.js';
import $ from 'jquery';

$(document).ready(function() {
  $('#find').click(function(event) {
    event.preventDefault();
    

    console.log("button clicks");

    let name = $('#name').val();

    console.log(name);

    let doctorSearch = new DoctorLookupService();

    console.log(doctorSearch);

    let promise = doctorSearch.getDoctorByCondition(name);
    promise.then(function(response) {

      let body = JSON.parse(response);

      console.log(body);

      if(body.data.length > 0) {
        for(let i= 0; i<body.data.length; i++) {

          $('.showDoctor').append(`<ul> <li>${body.data[i].profile.first_name}</li> <li> ${body.data[i].profile.last_name}</li><li> ${body.data[i].specialties[0].description}</li><li> ${body.data[i].practices[0].accepts_new_patients}</li><li> ${body.data[i].practices[0].phones[0].number}</li></ul>`);
        }
      } else {
        $('.showDoctor').text('There are no matches for your search input.');
      }
    }, function(error) {
      $('.showErrors').text(`There was an error in processing your request. ${error.message}`);
    });
  });
});
