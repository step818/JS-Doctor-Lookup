import { DoctorLookupService } from './drlookup.js';
import $ from 'jquery';

$(document).ready(function() {
  $('#drForm').submit(function(e) {
    e.preventDefault();

    let name = $('#name').val();
    let doctorSearch = new DoctorLookupService();
    let promise = doctorSearch.getDoctorByCondition(name);
    promise.then(function(response) {

      let body = JSON.parse(response);

      if(body.data.length > 0) {
        for(let i= 0; i<body.data.length; i++) {

          $('.showDoctor').append(`<ul> ${body.data[i].profile.first_name} ${body.data[i].profile.last_name} ${body.data[i].specialties}`);
        }
      } else {
        $('.showDoctor').text('There are no matches for your search input.');
      }
    }, function(error) {
        $('.showErrors').text(`There was an error in processing your request. ${error.message}`);
      }
    };
  });
});