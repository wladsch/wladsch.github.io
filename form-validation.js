src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"

  $(".tab-link").removeClass("w--current");
  $(".tab-pane").removeClass("w--tab-active");

  $(".tab-link:nth-child(0)").addClass("w--current");
  $(".tab-pane:nth-child(0)").addClass("w--tab-active");


var abfallmengeSet = false
var ContContainerVarianteSevenKubikShow = false
var ContContainerVarianteSevenKubikSet = false
var ContContainerVarianteTenKubikShow = false
var ContContainerVarianteTenKubikSet = false





var abfallArtSet = false
var andereabfaelle = false
$(document).ready(function(){
    $("#Abfallart").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            console.log("I am live")
            //validation for changed value
            if(optionValue != ""){
            abfallArtSet = true
            $("#Abfallart-error").hide();
            }
            else{
                abfallArtSet = false
                console.log("Abfallart nicht ausgewählt")
                $("#Abfallart-error").show();
            }
            if(optionValue == "andere Abfälle"){
                //$(".box").not("." + optionValue).hide();
                $("." + "weitere-abfaelle").show();
                andereabfaelle = true
            } else{
                $(".weitere-abfaelle").hide();
                andereabfaelle = false
                $("#Andere-Art-von-Abfall-error").hide();
            }
        });
    }).change();
});



$("#Andere-Art-von-Abfall").on("input", function()
{
if( $(this).val().length === 0 && andereabfaelle) {
   $("#Andere-Art-von-Abfall-error").show(); //add disable next page button
}
else {
    $("#Andere-Art-von-Abfall-error").hide(); //add disable next page button

}
});


$(document).ready(function(){
    $("#Abfallmenge").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
                        //validation for changed value
            if(optionValue != ""){
            abfallmengeSet = true
            $("#Abfallmenge-error").hide();
            }
            else{
                abfallmengeSet = false
                $("#Abfallmenge-error").show();
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
                $("#Container-Variante-7kubik-error").hide();
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
            $("#Container-Variante-7kubik-error").hide();
            }
            else{
                ContContainerVarianteSevenKubikSet = false
                $("#Container-Variante-7kubik-error").show();
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
            $("#Container-Variante-10kubik-error").hide();
            }
            else{
                ContContainerVarianteTenKubikSet = false
                $("#Container-Variante-10kubik-error").show();
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
            } else{
                $(".sondernutzungserlaubnis-holder").hide();
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
     console.log("Button Test");
     if(lieferdatumSet && abholdatumSet){
        $('.target-tab-link-3').triggerHandler('click');
        evt.preventDefault();
     }
  });

  $('.button-link-to-tab-4').on('click', function (evt) {
     console.log("Button Test");
    $('.target-tab-link-4').triggerHandler('click');
    evt.preventDefault();
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
    var lieferdatumSet = false
    var abholdatumSet = false
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
