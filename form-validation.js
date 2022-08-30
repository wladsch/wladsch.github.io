src = "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"

$(".tab-link").removeClass("w--current");
$(".tab-pane").removeClass("w--tab-active");

$(".tab-link:nth-child(0)").addClass("w--current");
$(".tab-pane:nth-child(0)").addClass("w--tab-active");


function isEmail(email) {
    var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return EmailRegex.test(email);
}

function hasNumber(myString) {
    return /\d/.test(myString);
}

var abfallArtSet = false
var andereabfaelle = false
var andereAbfaelleSet = false
var abfallmengeSet = false
var ContContainerVarianteSevenKubikShow = false
var ContContainerVarianteSevenKubikSet = false
var ContContainerVarianteTenKubikShow = false
var ContContainerVarianteTenKubikSet = false
var ContainerNoVariantNeeded = false


var lieferdatumSet = false
var abholdatumSet = false


var abstellflaecheSet = false
var abstellflaechePrivat = false
var abstellflaecheGewerblich = false
var sondernutzungserlaubnisSet = false
var zufahrt75tSet = false
var privatogewerblichSet = false
var telefonSet = false
var emailSet = false
var emailWrongFormat = false
var abstellortSet = false
var divAbholdatumVorLieferdarum = false

var isRechnungsadressePrivat = false
var isRechnungsadresseFirma = false

//privat Felder
var pNachnameSet = false
var pPlz = false
var pOrt = false
var streetPrivatSet = false

//gewerblich Felder
var fName = false
var fNachname = false
var fPlz = false
var fOrt = false
var streetFirmaSet = false

//anderer Abstellort
var lNachname = false
var lStreet = false
var lPlz = false
var lOrt = false

var andererAbstellortSet = false

$(document).ready(function () {
    $("#Abfallart").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            console.log("I am 7x alive")
            //validation for changed value
            if (optionValue != "") {
                abfallArtSet = true
                //$("#Abfallart-error").hide();
            }
            else {
                abfallArtSet = false
                console.log("Abfallart nicht ausgewählt")
                //$("#Abfallart-error").show();
            }
            if (optionValue == "andere Abfälle") {
                //$(".box").not("." + optionValue).hide();
                $("." + "weitere-abfaelle").show();
                andereabfaelle = true
            } else {
                $(".weitere-abfaelle").hide();
                andereabfaelle = false
                //$("#Andere-Art-von-Abfall-error").hide();
            }
        });
    }).change();
});



$("#Andere-Art-von-Abfall").on("input", function () {
    if ($(this).val().length === 0 && andereabfaelle) {
        andereAbfaelleSet = false
    }
    else {
        andereAbfaelleSet = true
    }
});


$(document).ready(function () {
    $("#Abfallmenge").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            //validation for changed value
            if (optionValue != "") {
                abfallmengeSet = true
                //$("#Abfallmenge-error").hide();
            }
            else {
                abfallmengeSet = false
                //$("#Abfallmenge-error").show();
            }
            if (optionValue == "7 m³") {
                //$(".box").not("." + optionValue).hide();
                $("#Container-Variante-7kubik").show();
                ContContainerVarianteSevenKubikShow = true
                $("#Container-Variante-10kubik").hide();
            } else {
                if (!(optionValue == "10 m³")) {
                    ContainerNoVariantNeeded = true
                }
                $("#Container-Variante-7kubik").hide();
                ContContainerVarianteSevenKubikShow = false

            }
            if (optionValue == "10 m³") {
                //$(".box").not("." + optionValue).hide();
                $("#Container-Variante-10kubik").show();
                ContContainerVarianteSevenKubikShow = true
                //$("#Container-Variante-7kubik-error").hide();
            } else {
                if (!(optionValue == "7 m³")) {
                    ContainerNoVariantNeeded = true
                }
                $("#Container-Variante-10kubik").hide();
                ContContainerVarianteSevenKubikShow = false
            }
        });
    }).change();
});

$(document).ready(function () {
    $("#Container-Variante-7kubik").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            //validation for changed value
            if (optionValue != "") {
                ContContainerVarianteSevenKubikSet = true
                //$("#Container-Variante-7kubik-error").hide();
            }
            else {
                ContContainerVarianteSevenKubikSet = false
                //$("#Container-Variante-7kubik-error").show();
            }
        });
    }).change();
});
$(document).ready(function () {
    $("#Container-Variante-10kubik").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            //validation for changed value
            if (optionValue != "") {
                ContContainerVarianteTenKubikSet = true
                //$("#Container-Variante-10kubik-error").hide();
            }
            else {
                ContContainerVarianteTenKubikSet = false
                //$("#Container-Variante-10kubik-error").show();
            }
        });
    }).change();
});





$(document).ready(function () {
    $("#Abstellflaeche").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue != "") {
                //$(".box").not("." + optionValue).hide();
                abstellflaecheSet = true
                if (optionValue == "Private Fläche") {
                    abstellflaechePrivat = true
                    $(".sondernutzungserlaubnis-holder").hide();
                }
                if (optionValue == "Öffentliche Fläche (Bürgersteig, öffentlicher Parkplatz, ...)")
                    $("." + "sondernutzungserlaubnis-holder").show();
                sondernutzungserlaubnisSet = false
                abstellflaecheGewerblich = true
            } else {
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
    if (abfallArtSet && abfallmengeSet && (!andereabfaelle || andereabfaelle && andereAbfaelleSet) && (ContContainerVarianteSevenKubikSet || ContContainerVarianteTenKubikSet || ContainerNoVariantNeeded)) {
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
    if (lieferdatumSet && abholdatumSet) {
        $('.target-tab-link-3').triggerHandler('click');
        $("#alle-pflichtfelder-ausfuellen-error-2").hide();
        $("#div-abholdatum-vor-lieferdarum").hide();
        evt.preventDefault();
    }
    else {
        if (divAbholdatumVorLieferdarum) {
            $("#alle-pflichtfelder-ausfuellen-error-2").hide();
            $("#div-abholdatum-vor-lieferdarum").show();

        }
        else {
            $("#alle-pflichtfelder-ausfuellen-error-2").show();
            $("#div-abholdatum-vor-lieferdarum").hide();
        }
    }
});




$(document).ready(function () {
    $("#Rechnungsadresse-Privat-oder-Gewerblich").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue == "Privat") {
                //$(".box").not("." + optionValue).hide();
                $("#Rechnungsadresse-Privat").show();
                $("#Rechnungsadresse-Gewerblich").hide();
                $("#kontaktdaten-container").show();
                isRechnungsadressePrivat = true
                isRechnungsadresseFirma = false
            } else if (optionValue == "Gewerblich") {
                $("#Rechnungsadresse-Gewerblich").show();
                $("#Rechnungsadresse-Privat").hide();
                $("#kontaktdaten-container").show();
                isRechnungsadresseFirma = true
                isRechnungsadressePrivat = false
            } else {
                $("#Rechnungsadresse-Gewerblich").hide();
                $("#Rechnungsadresse-Privat").hide();
                $("#kontaktdaten-container").hide();
                isRechnungsadressePrivat = false
                isRechnungsadresseFirma = false
            }
        });
    }).change();
});



$(document).ready(function () {
    $("#Lieferadresse-Wahl").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue == "anderen Abstellort wählen") {
                //$(".box").not("." + optionValue).hide();
                andererAbstellortSet = true
                $("#Anderen-Abstellort").show();
            } else {
                andererAbstellortSet = false
                $("#Anderen-Abstellort").hide();
            }
        });
    }).change();
});


var lieferdatumPicked = ""
var todayDate = new Date().toISOString().slice(0, 10);
todayDate = todayDate.slice(0, 4) + todayDate.slice(5, 7) + todayDate.slice(8)

$("#Lieferdatum").on("input", function () {
    if ($(this).val().length === 0) {
        $("#div-lieferdatum-vergangenheit").hide();
        $("#div-lieferdatum-bearbeitungszeit").hide();
        lieferdatumPicked = ""
        lieferdatumSet = false
    }
    else {
        $("#FL-Abholdatum").show();
        lieferdatumPicked = $(this).val()
        if (lieferdatumPicked.slice(8) + lieferdatumPicked.slice(4, 6) + lieferdatumPicked.slice(0, 2) < todayDate) {
            $("#div-lieferdatum-vergangenheit").show();
            $("#div-lieferdatum-bearbeitungszeit").hide();
            lieferdatumSet = false
        }
        else {
            if (lieferdatumPicked.slice(8) + lieferdatumPicked.slice(4, 6) + lieferdatumPicked.slice(0, 2) < todayDate + 1) {
                $("#div-lieferdatum-bearbeitungszeit").show();
                $("#div-lieferdatum-vergangenheit").hide();
                lieferdatumSet = false
            }
            else {
                $("#div-lieferdatum-vergangenheit").hide();
                $("#div-lieferdatum-bearbeitungszeit").hide();
                lieferdatumSet = true
            }
        }
    }
});


$("#Abholdatum").on("input", function () {
    if ($(this).val().length === 0) {
        $("#div-abholdatum-vor-lieferdarum").hide(); //add disable next page button
        abholdatumSet = false
    }
    else {
        if (lieferdatumPicked.slice(8) + lieferdatumPicked.slice(4, 6) + lieferdatumPicked.slice(0, 2) > $(this).val().slice(8) + $(this).val().slice(4, 6) + $(this).val().slice(0, 2)) {
            $("#div-abholdatum-vor-lieferdarum").show();
            abholdatumSet = false
            divAbholdatumVorLieferdarum = true
        }
        else {
            $("#div-abholdatum-vor-lieferdarum").hide();
            abholdatumSet = true
            divAbholdatumVorLieferdarum = false
        }

    }
});




$(document).ready(function () {
    $("#Rechnungsadresse-Privat-oder-Gewerblich").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue != "") {
                privatogewerblichSet = true
                //$("#Container-Variante-7kubik-error").hide();
            }
            else {
                privatogewerblichSet = false
                //$("#Container-Variante-7kubik-error").show();
            }
        });
    }).change();
});
$(document).ready(function () {
    $("#Lieferadresse-Wahl").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue != "") {
                abstellortSet = true
            }
            else {
                abstellortSet = false
            }
        });
    }).change();
});

$("#Telefon-Kontakt").on("input", function () {
    if ($(this).val().length === 0) {
        telefonSet = false
    }
    else {
        telefonSet = true
    }
});

//private Rechnungsadresse pflichtfelder Set Fields
$("#Rechnungsadresse-Privat-Nachname").on("input", function () {
    if ($(this).val().length === 0) {
        pNachnameSet = false
    }
    else {
        pNachnameSet = true
    }
});

$("#Rechnungsadresse-Privat-PLZ").on("input", function () {
    if ($(this).val().length === 0) {
        pPlz = false
    }
    else {
        pPlz = true
    }
});
$("#Rechnungsadresse-Privat-Ort").on("input", function () {
    if ($(this).val().length === 0) {
        pOrt = false
    }
    else {
        pOrt = true
    }
});

//gewerblich Rechnungsadresse pflichtfelder Set Fields

$("#Rechnungsadresse-Firma-Name").on("input", function () {
    if ($(this).val().length === 0) {
        fName = false
    }
    else {
        fName = true
    }
});
$("#Rechnungsadresse-Firma-Nachname-Ansprechpartner").on("input", function () {
    if ($(this).val().length === 0) {
        fNachname = false
    }
    else {
        fNachname = true
    }
});
$("#Rechnungsadresse-Firma-PLZ").on("input", function () {
    if ($(this).val().length === 0) {
        fPlz = false
    }
    else {
        fPlz = true
    }
});
$("#Rechnungsadresse-Firma-Ort").on("input", function () {
    if ($(this).val().length === 0) {
        fOrt = false
    }
    else {
        fOrt = true
    }
});


//anderer Abstellort pflichtfelder Set Fields

$("#Lieferadresse-Nachname").on("input", function () {
    if ($(this).val().length === 0) {
        lNachname = false
    }
    else {
        lNachname = true
    }
});
$("#Lieferadresse-Strasse").on("input", function () {
    if ($(this).val().length === 0) {
        lStreet = false
    }
    else {
        lStreet = true
    }
});
$("#Lieferadresse-PLZ").on("input", function () {
    if ($(this).val().length === 0) {
        lPlz = false
    }
    else {
        lPlz = true
    }
});
$("#Lieferadresse-Ort").on("input", function () {
    if ($(this).val().length === 0) {
        lOrt = false
    }
    else {
        lOrt = true
    }
});


$("#Email-Kontakt").on("input", function () {
    if ($(this).val().length === 0) {
        emailSet = false
        emailWrongFormat = false
    }
    else {

        if (isEmail($(this).val())) {
            emailSet = true
            emailWrongFormat = false
        }
        else {
            emailWrongFormat = true
            emailSet = false
        }
    }
});

$("#Rechnungsadresse-Privat-Strasse").on("input", function () {
    if ($(this).val().length === 0) {
        streetWrongFormat = false
        streetPrivatSet = false
        console.log("streetprivatWrongFormat false 1")
    }
    else {

        if (hasNumber($(this).val())) {
            streetWrongFormat = false
            streetPrivatSet = true
            console.log("streetprivatWrongFormat false 2")
        }
        else {
            streetWrongFormat = true
            streetPrivatSet = false
            console.log("streetprivatWrongFormat false 3")

        }
    }
});
$("#Rechnungsadresse-Firma-Strasse-Ansprechpartner").on("input", function () {
    if ($(this).val().length === 0) {
        streetWrongFormat = false
        streetFirmaSet = false
        console.log("streetfirmaWrongFormat false 1")

    }
    else {

        if (hasNumber($(this).val())) {
            streetWrongFormat = false
            streetFirmaSet = true
            console.log("streetfirmaWrongFormat false 2")

        }
        else {
            streetWrongFormat = true
            streetFirmaSet = false
            console.log("streetfirmaWrongFormat false 3")

        }
    }
});

$("#Sondernutzungserlaubnis-check").change(function () {
    if (this.checked) {
        sondernutzungserlaubnisSet = true
    } else {
        sondernutzungserlaubnisSet = false
    }
});

$("#75t-erlaubt").change(function () {
    if (this.checked) {
        zufahrt75tSet = true
    } else {
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

    if (emailSet && telefonSet && abstellortSet && privatogewerblichSet && (abstellflaecheSet && abstellflaechePrivat || abstellflaecheSet && abstellflaecheGewerblich && sondernutzungserlaubnisSet) && zufahrt75tSet && ((streetPrivatSet && (pNachnameSet && streetPrivatSet && pPlz && pOrt)) || (streetFirmaSet && (fName && fNachname && fPlz && fOrt)) && (!andererAbstellortSet  || (andererAbstellortSet && lNachname && lStreet && lOrt && lPlz)))) {
        $('.target-tab-link-4').triggerHandler('click');
        $("#alle-pflichtfelder-ausfuellen-error-3").hide();
        $("#email-falsches-format-error").hide();
        evt.preventDefault();
    }
    else {
        if (emailWrongFormat) {
            //show email error
            console.log("!emailWrongFormat")
            $("#alle-pflichtfelder-ausfuellen-error-3").hide();
            $("#street-falsches-format-error").hide();
            $("#email-falsches-format-error").show();
        }
        else {
            if (streetWrongFormat) {
                if(streetFirmaSet){
                    $("#alle-pflichtfelder-ausfuellen-error-3").hide();
                    $("#fstreet-falsches-format-error").show();
                    $("#email-falsches-format-error").hide();
                    $("#street-falsches-format-error").hide();
                    $("#lstreet-falsches-format-error").hide();

                }
                else if(streetPrivatSet){
                    $("#alle-pflichtfelder-ausfuellen-error-3").hide();
                    $("#street-falsches-format-error").show();
                    $("#email-falsches-format-error").hide();
                    $("#fstreet-falsches-format-error").hide();
                    $("#lstreet-falsches-format-error").hide();
                }
                else{
                    $("#alle-pflichtfelder-ausfuellen-error-3").hide();
                    $("#lstreet-falsches-format-error").show();
                    $("#email-falsches-format-error").hide();
                    $("#street-falsches-format-error").hide();
                    $("#fstreet-falsches-format-error").hide();
                }
                console.log("streetfirmaWrongFormat false 4")
                $("#alle-pflichtfelder-ausfuellen-error-3").hide();
                $("#street-falsches-format-error").show();
                $("#email-falsches-format-error").hide();
            }
            else {
                console.log("emailWrongFormat")
                $("#alle-pflichtfelder-ausfuellen-error-3").show();
                $("#email-falsches-format-error").hide();
                $("#street-falsches-format-error").hide();

            }
        }
    }

});
