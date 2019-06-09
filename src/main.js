import { DoctorLookupService } from './drlookup.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

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

      if(name == "") {
        $('.showDoctor').text('There are no matches for your search input.');
      } else if (body.data.length > 0) {
        $('.showDoctor').empty();
        
        for(let i= 0; i<body.data.length; i++) {

          $('.showDoctor').append(
            `<ul> <li><strong>First:</strong>
              ${body.data[i].profile.first_name}</li>
              
              <li><strong>Last:</strong> ${body.data[i].profile.last_name}</li>
              
              <strong><li>Specialty:</strong> ${body.data[i].specialties[0].description}</li>
              
              <li><strong>Accepting new patients:</strong> ${body.data[i].practices[0].accepts_new_patients}</li>
              
              <li><strong>Location:</strong> ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state} </li>
              
              <li><strong>Phone:</strong> ${body.data[i].practices[0].phones[0].number}</li>
            </ul>

              <img src="${body.data[i].profile.image_url}">
            `);
        }
      } else {
        $('.showDoctor').text('There are no matches for your search input.');
      }
    }, function(error) {
      $('.showErrors').text(`There was an error in processing your request. ${error.message}`);
    });
  });
});
