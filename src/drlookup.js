//4df9d59bd9a27c19344ad10d1b395dbb

export class DoctorLookupService {

  getDoctorByCondition(name) {

    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${name}&location=wa-seattle&skip=0&limit=11&user_key=4df9d59bd9a27c19344ad10d1b395dbb`;
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