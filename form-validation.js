src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"

  $(".tab-link").removeClass("w--current");
  $(".tab-pane").removeClass("w--tab-active");

  $(".tab-link:nth-child(0)").addClass("w--current");
  $(".tab-pane:nth-child(0)").addClass("w--tab-active");


  function isEmail(email) {
    var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return EmailRegex.test(email);
  }

var abfallmengeSet = false
var ContContainerVarianteSevenKubikShow = false
var ContContainerVarianteSevenKubikSet = false
var ContContainerVarianteTenKubikShow = false
var ContContainerVarianteTenKubikSet = false


var lieferdatumSet = false
var abholdatumSet = false


var abstellflaecheSet = false
var sondernutzungserlaubnisSet = false
var zufahrt75tSet = false
var privatogewerblichSet = false
var telefonSet = false
var emailSet = false
var emailWrongFormat = false
var abstellortSet = false



var abfallArtSet = false
var andereabfaelle = false
$(document).ready(function(){
    $("#Abfallart").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            console.log("I am 4x alive")
            //validation for changed value
            if(optionValue != ""){
            abfallArtSet = true
            //$("#Abfallart-error").hide();
            }
            else{
                abfallArtSet = false
                console.log("Abfallart nicht ausgewählt")
                //$("#Abfallart-error").show();
            }
            if(optionValue == "andere Abfälle"){
                //$(".box").not("." + optionValue).hide();
                $("." + "weitere-abfaelle").show();
                andereabfaelle = true
            } else{
                $(".weitere-abfaelle").hide();
                andereabfaelle = false
                //$("#Andere-Art-von-Abfall-error").hide();
            }
        });
    }).change();
});



$("#Andere-Art-von-Abfall").on("input", function()
{
if( $(this).val().length === 0 && andereabfaelle) {
   //$("#Andere-Art-von-Abfall-error").show(); //add disable next page button
}
else {
    //$("#Andere-Art-von-Abfall-error").hide(); //add disable next page button

}
});


$(document).ready(function(){
    $("#Abfallmenge").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
                        //validation for changed value
            if(optionValue != ""){
            abfallmengeSet = true
            //$("#Abfallmenge-error").hide();
            }
            else{
                abfallmengeSet = false
                //$("#Abfallmenge-error").show();
            }
            if(optionValue == "7 m³"){
                //$(".box").not("." + optionValue).hide();
                $("#Container-Variante-7kubik").show();
                ContContainerVarianteSevenKubikShow = true
                $("#Container-Variante-10kubik").hide();
            } else{
                $("#Container-Variante-7kubik").hide();
		ContContainerVarianteSevenKubikShow = false

            }
            if(optionValue == "10 m³"){
                //$(".box").not("." + optionValue).hide();
                $("#Container-Variante-10kubik").show();
                ContContainerVarianteSevenKubikShow = true
                //$("#Container-Variante-7kubik-error").hide();
            } else{
                $("#Container-Variante-10kubik").hide();
                ContContainerVarianteSevenKubikShow = false
            }
        });
    }).change();
});

$(document).ready(function(){
    $("#Container-Variante-7kubik").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            //validation for changed value
            if(optionValue != ""){
            ContContainerVarianteSevenKubikSet = true
            //$("#Container-Variante-7kubik-error").hide();
            }
            else{
                ContContainerVarianteSevenKubikSet = false
                //$("#Container-Variante-7kubik-error").show();
            }
        });
    }).change();
});
$(document).ready(function(){
    $("#Container-Variante-10kubik").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            //validation for changed value
            if(optionValue != ""){
            ContContainerVarianteTenKubikSet = true
            //$("#Container-Variante-10kubik-error").hide();
            }
            else{
                ContContainerVarianteTenKubikSet = false
                //$("#Container-Variante-10kubik-error").show();
            }
        });
    }).change();
});





$(document).ready(function(){
    $("#Abstellflaeche").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue == "Öffentliche Fläche (Bürgersteig, öffentlicher Parkplatz, ...)"){
                //$(".box").not("." + optionValue).hide();
                $("." + "sondernutzungserlaubnis-holder").show();
                abstellflaecheSet = true
            } else{
                $(".sondernutzungserlaubnis-holder").hide();
                abstellflaecheSet = false
            }
        });
    }).change();
});






  $('.button-link-to-tab-1').on('click', function (evt) {
     console.log("Button Test");
    $('.target-tab-link-1').triggerHandler('click');
    evt.preventDefault();
  });



//button-link-to-tab-2
var requiredDone = false;
  $('.button-link-to-tab-2').on('click', function (evt) {
     console.log("Button Test");
     console.log(abfallArtSet)
     console.log(abfallmengeSet)
     console.log(ContContainerVarianteSevenKubikSet)
     console.log(ContContainerVarianteTenKubikSet)
     if(abfallArtSet && abfallmengeSet && (ContContainerVarianteSevenKubikSet || ContContainerVarianteTenKubikSet)){
        $('.target-tab-link-2').triggerHandler('click');
        $("#alle-pflichtfelder-ausfuellen-error").hide();
     }
     else {
        $("#alle-pflichtfelder-ausfuellen-error").show();
    }
  });

  $('.button-link-to-tab-3').on('click', function (evt) {
     console.log("Button Test3");
     console.log(lieferdatumSet)
     console.log(abholdatumSet)
     if(lieferdatumSet && abholdatumSet){
        $('.target-tab-link-3').triggerHandler('click');
        evt.preventDefault();
     }
     else {
        $("#alle-pflichtfelder-ausfuellen-error-2").show();
    }
  });




    $(document).ready(function(){
        $("#Rechnungsadresse-Privat-oder-Gewerblich").change(function(){
            $(this).find("option:selected").each(function(){
                var optionValue = $(this).attr("value");
                if(optionValue == "Privat"){
                    //$(".box").not("." + optionValue).hide();
                    $("#Rechnungsadresse-Privat").show();
                    $("#Rechnungsadresse-Gewerblich").hide();
                    $("#kontaktdaten-container").show();
                } else if (optionValue == "Gewerblich") {
                    $("#Rechnungsadresse-Gewerblich").show();
                    $("#Rechnungsadresse-Privat").hide();
                    $("#kontaktdaten-container").show();
                } else {
                    $("#Rechnungsadresse-Gewerblich").hide();
                    $("#Rechnungsadresse-Privat").hide();
                    $("#kontaktdaten-container").hide();
                }
            });
        }).change();
    });



    $(document).ready(function(){
        $("#Lieferadresse-Wahl").change(function(){
            $(this).find("option:selected").each(function(){
                var optionValue = $(this).attr("value");
                if(optionValue == "anderen Abstellort wählen"){
                    //$(".box").not("." + optionValue).hide();
                    $("#Anderen-Abstellort").show();
                } else{
                    $("#Anderen-Abstellort").hide();
                }
            });
        }).change();
    });


    var lieferdatumPicked = ""
    var todayDate = new Date().toISOString().slice(0, 10);
    todayDate = todayDate.slice(0,4)+todayDate.slice(5,7)+todayDate.slice(8)

    $("#Lieferdatum").on("input", function() {
        if( $(this).val().length === 0 ) {
            $("#div-lieferdatum-vergangenheit").hide();
            lieferdatumPicked = ""
            lieferdatumSet = false
         }
         else {
             $("#FL-Abholdatum").show();
             lieferdatumPicked = $(this).val()
             if(lieferdatumPicked.slice(8)+lieferdatumPicked.slice(4,6)+lieferdatumPicked.slice(0,2) < todayDate){
                $("#div-lieferdatum-vergangenheit").show();
                lieferdatumSet = false
             }
             else {
                $("#div-lieferdatum-vergangenheit").hide();
                lieferdatumSet = true
             }
         }
     });


     $("#Abholdatum").on("input", function()
        {
        if( $(this).val().length === 0 ) {
           $("#div-abholdatum-vor-lieferdarum").hide(); //add disable next page button
           abholdatumSet = false
        }
        else {
            if(lieferdatumPicked.slice(8)+lieferdatumPicked.slice(4,6)+lieferdatumPicked.slice(0,2) > $(this).val().slice(8)+$(this).val().slice(4,6)+$(this).val().slice(0,2)){
                $("#div-abholdatum-vor-lieferdarum").show();
                abholdatumSet = false
            }
            else {
               $("#div-abholdatum-vor-lieferdarum").hide();
               abholdatumSet = true
            }

        }
    });




    $(document).ready(function(){
        $("#Rechnungsadresse-Privat-oder-Gewerblich").change(function(){
            $(this).find("option:selected").each(function(){
                var optionValue = $(this).attr("value");
                if(optionValue != ""){
                    privatogewerblichSet = true
                //$("#Container-Variante-7kubik-error").hide();
                }
                else{
                    privatogewerblichSet = false
                    //$("#Container-Variante-7kubik-error").show();
                }
            });
        }).change();
    });
    $(document).ready(function(){
        $("#Lieferadresse-Wahl").change(function(){
            $(this).find("option:selected").each(function(){
                var optionValue = $(this).attr("value");
                if(optionValue != ""){
                    abstellortSet = true
                }
                else{
                    abstellortSet = false
                }
            });
        }).change();
    });

    $("#Telefon-Kontakt").on("input", function()
{
if( $(this).val().length === 0) {
    telefonSet = false
}
else {
    telefonSet = true
}
});


$("#email-Kontakt").on("input", function()
{
if( $(this).val().length === 0) {
    emailSet = false
    emailWrongFormat = false
}
else {
    console.log("mail")
    console.log($(this).val())
    console.log(isEmail($(this).val()))
    console.log("mail2")

    if(isEmail($(this).val())){
        emailSet = true
    }
    else{
        emailWrongFormat = true
        emailSet = false
    }
}
});

$("#Sondernutzungserlaubnis-check").change(function() {
    if(this.checked) {
        sondernutzungserlaubnisSet = true
    }else{
        sondernutzungserlaubnisSet = false
    }
});

$("#75t-erlaubt").change(function() {
    if(this.checked) {
        zufahrt75tSet = true
    }else{
        zufahrt75tSet = false
    }
});

$('.button-link-to-tab-4').on('click', function (evt) {
    console.log("button 4")
    console.log(emailSet)
    console.log(telefonSet)
    console.log(abstellortSet)
    console.log(privatogewerblichSet)
    console.log(abstellflaecheSet)
    console.log(sondernutzungserlaubnisSet)
    console.log(zufahrt75tSet)
    console.log(emailWrongFormat)
    
    if(emailSet && telefonSet && abstellortSet && privatogewerblichSet && abstellflaecheSet && sondernutzungserlaubnisSet && zufahrt75tSet){
        $('.target-tab-link-4').triggerHandler('click');
        $("#alle-pflichtfelder-ausfuellen-error").hide();
        $("#email-falsches-format-error").hide();
        evt.preventDefault();
    }
    else {
        if(emailWrongFormat){
            //show email error
            $("#alle-pflichtfelder-ausfuellen-error").hide();
            $("#email-falsches-format-error").show();
        }
        else{
            $("#alle-pflichtfelder-ausfuellen-error-3").show();
            $("#email-falsches-format-error").hide();
        }
    }

 });
