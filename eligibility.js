function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    let age= Math.abs(age_dt.getUTCFullYear() - 1970);
    if(age>14 && age<=24)
        alert(age+" Eligible");
    else
    alert(age+" Not Eligible");
}

calculate_age(new Date(1998, 11, 4));

calculate_age(new Date(1962, 1, 1));
