//Set the tax
var f_tax = 0.07,
    i_menu_base = 5;

//Declare all the variables that will be used
var e_menu = document.getElementById("menu"),
    e_checkboxes = e_menu.getElementsByTagName("input"),
    e_subtotal = document.getElementById("sub_total");

// Add event listeners for when any checkbox changes value
for(var i = 0; i < e_checkboxes.length; i++){
    e_checkboxes[i].onchange = function(){
        //Recalculate subtotal
        get_subtotal();
    }
}

//get_subtotal calculates the subtotal based on which checkboxes are checked
function get_subtotal(){
    var f_sub_total = 0.0,
        f_grand_total = 0.0;
    
    var subtotal, tax, grandtotal;
    
    for(var i = 1; i <= e_checkboxes.length; i++){
        //If the checkbox is checked, add it to the total
        if(e_checkboxes[i-1].checked){
            f_sub_total += i * i_menu_base
        }
    }
    
    //Calculate the grand total
    f_grand_total = f_sub_total*(1+f_tax);
    
    //Format them
    subtotal = (Math.round(f_sub_total*100)/100).toFixed(2);
    tax = (Math.round(f_tax*10000)/100).toFixed(2);
    grandtotal = (Math.round(f_grand_total*100)/100).toFixed(2);
    
    //Add them to the element
    e_subtotal.innerHTML = "Subtotal: "+subtotal+"<br />";
    e_subtotal.innerHTML += "Tax: "+tax+"%<br />";
    e_subtotal.innerHTML += "Total: "+grandtotal;
}
