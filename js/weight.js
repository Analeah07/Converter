function choose_category()
    {
        let category =  document.getElementById('category').value;
        if (category == "mass")
        {
            mass();
        }
        else if (category == "length")
        {
            length();
        }
        else if (category == "")
        {
            blank();           
        }
    }

function mass()
    {
        let unit1 = document.getElementById('label1');
            unit1.textContent = "Micrograms";

        let unit2 = document.getElementById('label2');
            unit2.textContent = "Milligrams";
        
        let unit3 = document.getElementById('label3');
            unit3.textContent = "Centigrams";

        let unit4 = document.getElementById('label4');
            unit4.textContent = "Grams";
        
        let unit5 = document.getElementById('label5');
            unit5.textContent = "Kilograms";
    }
function length()
    {

        let unit1 = document.getElementById('label1');
            unit1.textContent = "Micrometers";
        
        let unit2 = document.getElementById('label2');
            unit2.textContent = "Millimeters";

        let unit3 = document.getElementById('label3');
            unit3.textContent = "Centimeters";
        
        let unit4 = document.getElementById('label4');
            unit4.textContent = "Meters";
            
        let unit5 = document.getElementById('label5');
            unit5.textContent = "Kilometers";
    }
function blank()
    {
        let unit1 = document.getElementById('label1');
            unit1.textContent = "Input 1";
        
        let unit2 = document.getElementById('label2');
            unit2.textContent = "Input 2";

        let unit3 = document.getElementById('label3');
            unit3.textContent = "Input 3";
        
        let unit4 = document.getElementById('label4');
            unit4.textContent = "Input 4";
            
        let unit5 = document.getElementById('label5');
            unit5.textContent = "Input 5";
    }
//----------------FORMULAS------------------------------------------------//
function mic()
    {
        let mic_input = document.getElementById("input1").value;
        let milli_input = document.getElementById("input2");
        let centi_input = document.getElementById("input3");
        let gr_input = document.getElementById("input4");
        let kl_input = document.getElementById("input5");

        let ml = (mic_input / 1000);
        milli_input.value = ml;
        
        let cm = (mic_input / 10000);
        centi_input.value = cm;

        let gr = (mic_input / 1e+6);
        gr_input.value = gr;

        let kl = (mic_input / 1e+9);
        kl_input.value = kl;
    }
function milli()
    {
        let mic_input = document.getElementById("input1");
        let milli_input = document.getElementById("input2").value;
        let centi_input = document.getElementById("input3");
        let gr_input = document.getElementById("input4");
        let kl_input = document.getElementById("input5");

        let mc = (milli_input * 1000);
        mic_input.value = mc;
        
        let cm = (milli_input / 10);
        centi_input.value = cm;

        let gr = (milli_input / 1000);
        gr_input.value = gr;

        let kl = (milli_input / 1e+6);
        kl_input.value = kl;
    }
function centi()
    {
        let mic_input = document.getElementById("input1");
        let milli_input = document.getElementById("input2");
        let centi_input = document.getElementById("input3").value;
        let gr_input = document.getElementById("input4");
        let kl_input = document.getElementById("input5");

        let mc = (centi_input * 10000);
        mic_input.value = mc;
        
        let ml = (centi_input * 10);
        milli_input.value = ml;

        let gr = (centi_input / 100);
        gr_input.value = gr;

        let kl = (centi_input / 1e+5);
        kl_input.value = kl;
    }
function grm()
    {
        let mic_input = document.getElementById("input1");
        let milli_input = document.getElementById("input2");
        let centi_input = document.getElementById("input3");
        let gr_input = document.getElementById("input4").value;
        let kl_input = document.getElementById("input5");

        let mc = (gr_input * 1e+6);
        mic_input.value = mc;
        
        let ml = (gr_input * 1000);
        milli_input.value = ml;

        let cm = (gr_input * 100);
        centi_input.value = cm;

        let kl = (gr_input / 1000);
        kl_input.value = kl;
    }
function kilo()
    {
        let mic_input = document.getElementById("input1");
        let milli_input = document.getElementById("input2");
        let centi_input = document.getElementById("input3");
        let gr_input = document.getElementById("input4");
        let kl_input = document.getElementById("input5").value;

        let mc = (kl_input * 1e+9);
        mic_input.value = mc;
        
        let ml = (kl_input * 1e+6);
        milli_input.value = ml;

        let cm = (kl_input * 100000);
        centi_input.value = cm;

        let gr = (kl_input * 1000);
        gr_input.value = gr;
    }
function reset()
    {
        let mic_input = document.getElementById("input1").value = "";
        let milli_input = document.getElementById("input2").value = "";
        let centi_input = document.getElementById("input3").value = "";
        let gr_input = document.getElementById("input4").value = "";
        let kl_input = document.getElementById("input5").value = "";                                                        
    }
