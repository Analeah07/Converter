function mil()
    {
        let milsec_input = document.getElementById('inputmilliSeconds').value;
        let sec_input = document.getElementById("inputSeconds");
        let min_input = document.getElementById("inputMinutes");
        let hr_input = document.getElementById("inputHours");
        let day_input = document.getElementById("inputDays");

        let sec = (milsec_input / 1000);
        sec_input.value = sec;
       
        let min = (milsec_input /  60000);
        min_input.value = min;
        
        let hr = (milsec_input / 3.6e+6);
        hr_input.value = hr;

        let day = (milsec_input / 8.64e+7);
        day_input.value = day;
    }
function sc()
    {
        let milsec_input = document.getElementById('inputmilliSeconds');
        let sec_input = document.getElementById("inputSeconds").value;
        let min_input = document.getElementById("inputMinutes");
        let hr_input = document.getElementById("inputHours");
        let day_input = document.getElementById("inputDays");

        let mil = (sec_input * 1000);
        milsec_input.value = mil;
       
        let min = (sec_input /  60);
        min_input.value = min;
        
        let hr = (sec_input / 3600);
        hr_input.value = hr;

        let day = (sec_input / 86400);
        day_input.value = day;
    }
function mins()
    {
        let milsec_input = document.getElementById('inputmilliSeconds');
        let sec_input = document.getElementById("inputSeconds");
        let min_input = document.getElementById("inputMinutes").value;
        let hr_input = document.getElementById("inputHours");
        let day_input = document.getElementById("inputDays");

        let mil = (min_input * 60000);
        milsec_input.value = mil;
       
        let sec = (min_input * 60);
        sec_input.value = sec;
        
        let hr = (min_input / 60);
        hr_input.value = hr;

        let day = (min_input / 1440);
        day_input.value = day;
    }
function hr()
    {
        let milsec_input = document.getElementById('inputmilliSeconds');
        let sec_input = document.getElementById("inputSeconds");
        let min_input = document.getElementById("inputMinutes");
        let hr_input = document.getElementById("inputHours").value;
        let day_input = document.getElementById("inputDays");

        let mil = (hr_input * 3.6e+6);
        milsec_input.value = mil;
       
        let sec = (hr_input * 3600);
        sec_input.value = sec;
        
        let min = (hr_input * 60);
        min_input.value = min;

        let day = (hr_input / 24);
        day_input.value = day;
    }
function days()
    {
        let milsec_input = document.getElementById('inputmilliSeconds');
        let sec_input = document.getElementById("inputSeconds");
        let min_input = document.getElementById("inputMinutes");
        let hr_input = document.getElementById("inputHours");
        let day_input = document.getElementById("inputDays").value;

        let mil = (day_input * 8.64e+7);
        milsec_input.value = mil;
       
        let sec = (day_input * 86400);
        sec_input.value = sec;
        
        let min = (day_input * 1440);
        min_input.value = min;

        let hr = (day_input * 24);
        hr_input.value = hr;
    }



function reset()
    {
        let milsec_input = document.getElementById('inputmilliSeconds').value = "";
        let sec_input = document.getElementById("inputSeconds").value = "";
        let min_input = document.getElementById("inputMinutes").value = "";
        let hr_input = document.getElementById("inputHours").value = "";
        let day_input = document.getElementById("inputDays").value = "";
    }
