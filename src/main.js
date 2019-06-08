import { DoctorLookupService } from './drlookup.js';
import $ from 'jquery';

$(document).ready(function() {
  $('#find').click(function() {
    let search = $('#search').val();
    $('#search').val("");

    let doctorSearch = new DoctorLookupService();
    let promise = doctorSearch.getDoctorByCondition(search);

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showDoctor').text(``);
      $('.showErrors').text(`There was an error in processing your request. ${error.message}`);
    });
  });
});