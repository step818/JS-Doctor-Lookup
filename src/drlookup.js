//4df9d59bd9a27c19344ad10d1b395dbb

export class DoctorLookupService {

  getDoctorByCondition() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=4df9d59bd9a27c19344ad10d1b395dbb`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}