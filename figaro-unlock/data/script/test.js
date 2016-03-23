function viewNbaBar() {
    $("#global-nav").slideDown(500)
}
function gplus_sign_in_callback(e) {
    $(".view.signin:visible").length && "PROMPT" === e.status.method && $.ajax({
        type: "POST",
        url: "/club/google_signin_manager.php",
        data: {code: e.code},
        success: function (e) {
            switch (e) {
                case"started":
                case"connected":
                    document.location.href = document.location.href;
                    break;
                case"notfound":
                    alert("Aucun compte L'Equipe.fr n'a été trouvé pour votre adresse e-mail Google.\n\nPour créer votre compte L'Equipe.fr avec Google, cliquez sur l'onglet inscription.")
            }
        }
    }), $(".view.signup:visible").length && "PROMPT" === e.status.method && $.ajax({
        type: "POST",
        url: "/club/google_signup_manager.php",
        data: {code: e.code},
        success: function (e) {
            switch (e) {
                case"ready":
                    $("#gplus_pseudo_area").show().find("input").focus(), $("#gplus_signinButton").hide(), $(".signup.view").hide(), $("#popin-compte-nav div").off("click"), $("#gplus_pseudo_area button").on("click", function () {
                        return 0 == $("#gplus_cgv:checked").length ? (alert("Vous devez accepter les conditions d'utilisation."), !1) : void $.ajax({
                            type: "POST",
                            url: "/club/google_signup_validation.php",
                            data: {pseudo: $("#gplus_pseudo_area input").val()},
                            success: function (e) {
                                switch (e) {
                                    case"connected":
                                        document.location.href = document.location.href;
                                        break;
                                    case"already":
                                        alert("Ce pseudo n'est pas disponible, veuillez en choisir un autre.");
                                        break;
                                    case"pattern":
                                        alert("Votre pseudo ne doit contenir que des lettres, des chiffres, et des tirets. (min 3, max 25)");
                                        break;
                                    case"success":
                                        $("#gplus_pseudo_area").remove(), $("#social_crea_ok").show(), $("#social_crea_ok button").on("click", function () {
                                            window.location.reload()
                                        })
                                }
                            }
                        })
                    });
                    break;
                case"already":
                    window.location.reload()
            }
        }
    })
}
function init_orange_popunder() {
    return
}
function init_countdownOreillette() {
    $("div[type='OREILLETTE_V65'] #countdown-blog").each(function () {
        var e = $(this).parent().find("[date]").attr("date");
        obj = new Date(1e3 * e), noww = new Date, obj.getTime() - noww.getTime() <= 864e5 ? $(this).countdown({
            until: obj,
            format: "DHMS",
            layout: '<ul><li class="lejmoins">H </li>{h<}<li>-{hnn}{h>}{m<}:{mnn}{m>}:{snn}</li></ul>'
        }) : $(this).countdown({
            until: obj,
            format: "DHMS",
            layout: '<ul><li class="lejmoins">J </li>{d<}<li>-{dn}</li>{d>}</ul>'
        })
    })
}
function cookieLequipe() {
    var e = "cookieLequipebis";
    $("#cookiesLequipe a,#cookiesLequipe b").click(function () {
        $("#cookiesLequipe").slideUp("fast")
    }), readCookie(e) || $("#cookiesLequipe").length && ($("#cookiesLequipe").slideDown("fast"), createCookie(e, 1, 365)), readCookie("cookieLequipe") && eraseCookie("cookieLequipe")
}
function init_orange() {
    0 != $("#video .orange_small .day ul").length && $("#video .orange_small .day ul").jList("slide", {
        auto: 4e3,
        loop: !0
    }), 0 != $(".actuinside #orange_big .day ul").length && $(".actuinside #orange_big .day ul").jList("slide", {
        auto: 4e3,
        loop: !0
    })
}
function resizeDatawrapper() {
    0 != $('iframe[src*="dwp.lequipe.fr"]').length && $('iframe[src*="dwp.lequipe.fr"]').iFrameResize({
        enablePublicMethods: !0,
        heightCalculationMethod: "lowestElement",
        interval: -1,
        tolerance: 80
    })
}
function init_menu() {
    $("#top-part a:last-child").hover(function () {
        $(this).parent().parent().addClass("hover")
    }, function () {
        $(this).parent().parent().removeClass("hover")
    }), "" != $("body").attr("sport") && $("body").attr("sport") + "" != "undefined" ? ($("a#OngletNavSport").html($("body").attr("sport") + "<span></span>").addClass($("body").attr("sport").replace(" ", "")).attr("href", "/" + $("body").attr("sport").replace(" ", "") + "/"), $("body").hasClass("Jo") || $("body").hasClass("jo") || $("body").hasClass("JO") ? $("a#OngletNavSport").html("Tous sports<span></span>").addClass("Aussi").attr("href", "/Tous-sports/") : "Ski" == $("body").attr("sport") || "Ski-glace" == $("body").attr("sport") ? $("a#OngletNavSport").html("Ski-Glace<span></span>").addClass("Aussi").attr("href", "/Aussi/Ski-glace/") : "Sports-US" == $("body").attr("sport") ? $("a#OngletNavSport").html("Sports US<span></span>").addClass("Aussi").attr("href", "/Sports-us/") : $("body").attr("sport").indexOf("CDM_2014") >= 0 ? $("a#OngletNavSport").html("CM 2014<span></span>").addClass("Football").attr("href", "/Football/") : "Wtf" == $("body").attr("sport") ? $("a#OngletNavSport").html("#Wtf<span></span>") : "FootballVideo" == $("body").attr("sport") ? $("a#OngletNavSport").html("#L1 Vidéos<span></span>").addClass("Football") : "Formule1" == $("body").attr("sport") ? $("a#OngletNavSport").html("Formule 1<span></span>").attr("href", "/Formule-1/") : "Rallye raid" == $("body").attr("sport") ? $("a#OngletNavSport").html("Auto Moto<span></span>").attr("href", "/Auto-moto/") : $("body").hasClass("index") && "Aussi" == $("body").attr("sport") && "http://www.lequipe.fr/Aussi/" != window.location.href && "http://orig-www.lequipe.fr/Aussi/" != window.location.href ? $("a#OngletNavSport").html(window.location.href.replace("orig-", "").replace("http://www.lequipe.fr/General/Bakou-2015/", "Bakou 2015").replace("http://abonnes.lequipe.fr/General/Bakou-2015/", "Bakou 2015").replace("http://www.lequipe.fr/Tous-sports/", "Tous sports").replace("http://abonnes.lequipe.fr/Tous-sports/", "Tous sports").replace("http://www.lequipe.fr/Sports-de-combat/", "Sports-de-combat").replace("http://abonnes.lequipe.fr/Sports-de-combat/", "Sports-de-combat").replace("http://www.lequipe.fr/Aussi/", "").replace("http://abonnes.lequipe.fr/Aussi/", "").replace("/", "").replace("-", " ").replace("-", " ").replace("-", " ").replace("Volley ball", "Volley-ball") + "<span></span>").addClass($("body").attr("sport").replace(" ", "")).attr("href", "/" + window.location.href.replace("http://orig-www.lequipe.fr/", "").replace("http://www.lequipe.fr/", "").replace("http://abonnes.lequipe.fr/", "")) : $("body").hasClass("index") && "Natation" == $("body").attr("sport") && window.location.href.indexOf("Water-polo") > 0 ? $("a#OngletNavSport").html("Water Polo").attr("href", "/Natation/Water-polo/") : $("body").hasClass("index") && "Cyclisme" == $("body").attr("sport") && window.location.href.indexOf("Cyclisme-sur-piste") > 0 ? $("a#OngletNavSport").html("Cyclisme sur piste").attr("href", "/Cyclisme/Cyclisme-sur-piste/") : $("body").hasClass("article") && "Hockey sur gazon" == $("body").attr("sport") ? $("a#OngletNavSport").attr("href", "/Aussi/Hockey-sur-gazon/") : $("body").hasClass("article") && "Tennis de table" == $("body").attr("sport") ? $("a#OngletNavSport").attr("href", "/Aussi/Tennis-de-table/") : $("body").hasClass("article") && "Canoë-kayak" == $("body").attr("sport") ? $("a#OngletNavSport").attr("href", "/Aussi/Canoe-kayak/") : $("body").hasClass("article") && "Cyclisme sur route" == $("body").attr("sport") ? $("a#OngletNavSport").attr("href", "/Cyclisme/") : $("body").hasClass("article") && "Cyclisme sur piste" == $("body").attr("sport") ? $("a#OngletNavSport").attr("href", "/Cyclisme/Cyclisme-sur-piste/") : $("body").hasClass("article") && "Volley-ball" == $("body").attr("sport") ? $("a#OngletNavSport").attr("href", "/Aussi/Volley-ball/") : $("body").hasClass("article") && "Tous sports" == $("body").attr("sport") ? $("a#OngletNavSport").addClass("Aussi").attr("href", "/Tous-sports/") : $("body").hasClass("article") && "Athlétisme" == $("body").attr("sport") ? $("a#OngletNavSport").addClass("Aussi").attr("href", "/Athletisme/") : $("body").hasClass("article") && "Water polo" == $("body").attr("sport") ? $("a#OngletNavSport").attr("href", "/Natation/Water-polo/") : $("body").hasClass("article") && "Surf" == $("body").attr("sport") ? $("a#OngletNavSport").attr("href", "/Aussi/Surf/") : $("body").hasClass("article") && "Hockey sur glace" == $("body").attr("sport") ? $("a#OngletNavSport").addClass("Aussi").attr("href", "/Aussi/Hockey-sur-glace/") : $("body").hasClass("article") && "Biathlon" == $("body").attr("sport") ? $("a#OngletNavSport").attr("href", "/Aussi/Biathlon/") : $("body").hasClass("article") && "Rallye" == $("body").attr("sport") ? $("a#OngletNavSport").attr("href", "/Auto-moto/Rallye/") : $("body").hasClass("article") && "Moto" == $("body").attr("sport") ? $("a#OngletNavSport").attr("href", "/Auto-moto/Moto/") : $("body").hasClass("article") && "Sport Auto" == $("body").attr("sport") ? $("a#OngletNavSport").attr("href", "/Auto-moto/") : "Aussi" == $("body").attr("sport") && $("a#OngletNavSport").html("Tous sports<span></span>").addClass("Aussi").attr("href", "/Tous-sports/")) : $("a#OngletNavSport").html("Tous sports").addClass("Aussi").attr("href", "/Tous-sports/"), "Wtf" == $("body").attr("sport") && $("#naveau-1").length > 0 && $("#naveau-1 a").each(function () {
        -1 != document.location.href.indexOf($(this).attr("href")) && $(this).parent().addClass("active")
    }), $("#naveau-2").length > 0 && $("#naveau-2 a").each(function () {
        -1 != document.location.href.indexOf($(this).attr("href")) && $(this).addClass("active")
    })
}
function showMenu() {
    isMenuOver = !0;
    var e = $(this);
    timerMenu && clearTimeout(timerMenu), timerMenu = setTimeout(function () {
        isMenuOver && ($(e).next().removeClass("displayNone").fadeIn(), $(e).addClass("active"))
    }, 200)
}
function hideMenu() {
    isMenuOver = !1, $("div.MenuPlus").addClass("displayNone"), $("a.PLUS").removeClass("active"), $("a.multimedia,a.mediatv,a.services,.liens-searsh a,.liens-enplus > a").removeClass("active")
}
function onMenu() {
    $(this).removeClass("displayNone"), $(this).prev().addClass("active")
}
function init_livesBloc() {
    var e = "", t = new Date;
    t = t.getTime() - 1728e5;
    for (var a = t + 864e6, r = new Date, o = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"), i = -2, s = t; a > s; s += 864e5) {
        r.setTime(s);
        var l = r.getFullYear() + "" + n(1 + r.getMonth()) + n(r.getDate()), c = o[r.getDay()] + " " + r.getDate() + (1 == r.getDate() ? "er" : "");
        -1 == i ? c += " (hier)" : 0 == i ? c += " (auj.)" : 1 == i && (c += " (dem.)"), e += '<option value="' + l + '">' + c + "</option>", i++
    }
    $("#filtretemps").append(e).on("change", function () {
        var e = "/directs/includes/blochome/" + $("#filtretemps").val() + "_v65.html";
        $("#en-direct .content div:first").load(e, function () {
            $("#filtresport").change(), $("#en-direct img.lazy").show().lazyload({threshold: 200})
        })
    });
    var p = "";
    if ($(".direct-sport").each(function () {
            p += '<option value="' + $(this).find("span:first").html() + '">' + $(this).find("span:first").html() + "</option>"
        }), $("#filtresport").append(p).on("change", function () {
            "" !== $("#filtresport").val() ? ($("#en-direct").find(".direct-sport").hide(), $("#en-direct").find(".direct-sport." + $("#filtresport").val()).show()) : $("#en-direct").find(".direct-sport").show(), livesBloc_updateNbLivesTickers()
        }), $("#menu li.active").length > 0) {
        var u = $.trim($("#menu li.active").attr("class").replace("active", ""));
        $("#menu li.active").length && ($("#filtresport").val(u).change(), 0 == $('#filtresport option[value="' + u + '"]').length && $("#en-direct").hide())
    }
    $("#en-direct .header span").on("click", function () {
        $("#filtretemps").change()
    }), livesBloc_updateNbLivesTickers(), $("#en-direct").on("click", "a.Multiplex", function () {
        "" != $("#filtretemps").val() && $(this).attr("href", $(this).attr("href") + "#filtretemps-" + $("#filtretemps").val())
    })
}
function livesBloc_updateNbLivesTickers() {
    var e = 0;
    $("#en-direct .direct-sport:visible .nb-direct-on").each(function () {
        e += parseInt($(this).html())
    }), e >= 0 && $("#en-direct .header span").html(e)
}
function init_pageLives() {
    if ($("#Directs").attr("class"))var e = $("#Directs").attr("class"); else var e = "All";
    if ($("#Directs").hasClass("All"))var e = "All";
    CountDownLives(61, e), $("a#refresh").live("click", function () {
        rechargeLive(e)
    }), setTimeout(function () {
        $("body").attr("init", "1")
    }, 5e3)
}
function init_matchLive() {
    TypeLive = $("#Placar").parent().attr("class"), "zoneload" !== TypeLive && (CountDownLives(61, TypeLive), $("a#refresh").live("click", function () {
        rechargeLive(TypeLive)
    }), setTimeout(function () {
        $("body").attr("init", "1")
    }, 5e3))
}
function CountDownLives(e, t) {
    if (e--, 0 == e) {
        var e = 61;
        bcl = parseInt($("body").attr("bcl")), tt_bcl = parseInt($("body").attr("total_bcl")), bcl++, tt_bcl++, bcl >= 3 && (refreshPub("auto"), bcl = 0), $("body").attr("bcl", bcl), $("body").attr("total_bcl", tt_bcl), $(".match").removeClass("event"), $("a#refresh span.minute").html("-"), checkChangesMatchLive(t), is_page_lives && ($(".match.avenir").length > 0 && ($("#Directs .filtre_avenir").fadeIn(vitesseFade), $("#Directs #contenu").css("padding-top", "10px"), $("#Directs .filtre_compet").css("top", "130px"), $("#Directs .compets").css("margin-top", "28px")), $(".match.termine").length > 0 && ($("#Directs .filtre_termine").fadeIn(vitesseFade), $("#Directs #contenu").css("padding-top", "10px"), $("#Directs .filtre_compet").css("top", "130px"), $("#Directs .compets").css("margin-top", "28px")))
    } else $("a#refresh span.minute").html(e);
    clearTimeout(upd), upd = setTimeout(function () {
        CountDownLives(e, t)
    }, 1e3)
}
function rechargeLive(e) {
    clearTimeout(upd), $("body").attr("bcl", 0), $("body").attr("total_bcl", 0), CountDownLives(1, e), is_fichematchlive && reLoadComms(), $("body").attr("bcl", 0), $("body").attr("total_bcl", 0), "1" == $("body").attr("init") ? refreshPub("byclick") : $("body").attr("init", "1")
}
function checkChangesMatchLive(e) {
    void 0 == e && (e = "All");
    var t = new Date, a = (Math.round(t.getTime() / 6e4), e), n = a.split(" "), e = n[0];
    "Ski" == e || "Formule1" == e || "Cyclisme" == e || "Universel" == e || "Aussi" == e || "JO" == e ? updateLiveCourses(e) : $.ajax({
        url: "/directs/empreintes/check" + e + ".json",
        async: !0,
        dataType: "json",
        success: function (t) {
            ("Football" == e || "Rugby" == e) && $(".classement_direct").length > 0 && $(".classement_direct").each(function () {
                idniveau = $(this).attr("idniveau"), spor = $(this).attr("sport").toLowerCase(), rechargeClaDirect(idniveau, spor)
            }), $.each(t, function (e, t) {
                var a = e.split("-"), n = parseInt(a[0]), r = a[1];
                if ($(".match-" + r).length > 0) {
                    var o = $(".match-" + r + " .min").attr("minute"), i = $(".match-" + r + " .min").attr("statut"), s = $(".match-" + r + " .min").html();
                    36 != n && 6 != n && 101 != n && 37 != n || 0 == t.M || !(o < t.M || o != s || "Mi-Temps" == s && "M" != i.substr(0, 1)) || (($(".match-" + r).hasClass("encours") && 0 != t.M && "" != t.M && t.M > parseInt($(".match-" + r + " .min").attr("minute")) || 0 == s.length) && ($(".match-" + r + " .min").html(t.M + "'"), $(".match-" + r + " .min").attr("minute", t.M), 1 == $("#fichebase_v65").length && ($("body").attr("minutejson", t.M), updateTimeLine())), $(".match-" + r + " .tiret").html("-")), ($(".match-" + r).attr("empreinte") != t.E || $(".match-" + r + " .attente").length > 0 || is_fichematchlive && r == $("body").attr("idmatch")) && (updateMatchLive(e, t.E), $("#Placar").length > 0 && updateTimeLine())
                } else is_page_lives && 39 == n && $("body").hasClass("Tennis") && $(".filtre_date, .filtre_compet").show()
            })
        }
    })
}
function updateMatchLive(e, t) {
    var a = e.split("-"), n = new Date;
    Math.round(n.getTime() / 6e4);
    $.ajax({
        url: "/directs/empreintes/" + a[0] + "/" + a[1].slice(-2) + "/" + a[1] + ".json",
        dataType: "json",
        success: function (a) {
            var n = e.split("-"), r = parseInt(n[0]), o = n[1];
            new RegExp("[0-9]", "g");
            $(".match-" + o).attr("empreinte", t), $(".lives .match-" + o).attr("empreinte", t);
            var i = (a.STATUT.statut, a.STATUT["class"]);
            a.PROL && $(".match-" + o + " #scoSpec .prol").html("<span id='matchExtra'> Prol.</span>"), a.TAB && $(".match-" + o + " #scoSpec .prol").html("<span id='matchExtra'>Tirs au b.<br>" + a.TAB_DOM + "-" + a.TAB_EXT + "</span>");
            var s = a.ID_VAINQUEUR, l = "EQ" + s;
            if (39 == r && l == $(".match-" + o + " .concurr.ek2").attr("id")) {
                var c = $(".match-" + o + " .concurr.ek1").html(), p = $(".match-" + o + " .concurr.ek2").html();
                $(".match-" + o + " .concurr.ek1").html(p), $(".match-" + o + " .concurr.ek2").html(c), $(".match-" + o + " .concurr.ek1").html(p).addClass("vainqueur").removeClass("perdant"), $(".match-" + o + " .concurr.ek2").html(c).addClass("perdant").removeClass("vainqueur"), $(".match-" + o + " .set1:not(.gagne),.match-" + o + " .set2:not(.gagne)").each(function () {
                    $(this).addClass("new-gagne")
                }), $(".match-" + o + " .gagne").each(function () {
                    $(this).removeClass("vainqueur").removeClass("gagne").removeClass("event").addClass("old-gagne")
                })
            }
            switch ($(".match-" + o + " .concurr span").removeClass("vainqueur"), $(".match-" + o + " span").removeClass("vainqueur"), $(".match-" + o + " #EQ" + s).addClass("vainqueur"), $(".concurr.ek2").parent().removeClass("vainqueur"), $(".match-" + o).hasClass("avenir") && "avenir" != i && is_page_lives && $(".match-" + o + " .logo img").each(function () {
                var e = $(this).attr("src") + "PP";
                $(this).attr("src", e.replace("/20PP", "/40"))
            }), "termine" == i && $("#Directs .filtre_termine").fadeIn(vitesseFade), $(".match-" + o).removeClass("avenir").removeClass("termine").removeClass("encours").addClass(i), ("avenir" != i || $(".lives .match-" + o).hasClass("termine")) && ($(".lives .match-" + o).removeClass("avenir").removeClass("termine").removeClass("encours").addClass(i), $(".match-" + o).attr("classe", i), $(".lives .match-" + o).attr("classe", i)), "encours" == i && 101 != r && 39 != r && 6 != r && 0 == $("#fichebase_v65").length && $(".match-" + o + " .min").html(a.MIN_EN_COURS + "'"), $(".match-" + o + " .min").attr("statut", a.STATUT.statut), "V" != a.STATUT.statut && "R" != a.STATUT.statut && "A" != a.STATUT.statut && $(".match-" + o + " .sco .tiret").html("-"), ("M" == a.STATUT.statut || "MT" == a.STATUT.statut) && ($(".match-" + o + " .min").html("Mi-Temps"), $(".match-" + o + " .min").attr("statut", "M")), "TB" == a.STATUT.statut && ($(".match-" + o + " .min").html("Tirs au but"), $(".encours").addClass("termine").removeClass("encours")), 6 == r && ("RM" == a.STATUT.statut && $(".match-" + o + " .min").html("2ème MT"), "DM" == a.STATUT.statut && $(".match-" + o + " .min").html("1ère MT")), "1Q" == a.STATUT.statut && $(".match-" + o + " .min").html("1er Qt-Temps"), "2Q" == a.STATUT.statut && $(".match-" + o + " .min").html("2e Qt-Temps"), "3Q" == a.STATUT.statut && $(".match-" + o + " .min").html("3e Qt-Temps"), "4Q" == a.STATUT.statut && $(".match-" + o + " .min").html("4e Qt-Temps"), "T" == a.STATUT.statut && ($(".match-" + o + " .liens a.direct").remove(), $(".match-" + o + " .commente").html("revoir"), $(".match-" + o + " .min").html("Termin&eacute;"), $(".match-" + o + " .min").attr("statut", "T"), $(".match-" + o + " .liens a.pariez").remove(), $(".match-" + o + " .liens").append('<a class="revoir" href="">revoir</a>')), r) {
                case 39:
                    updateLiveTennis(a);
                    break;
                case 36:
                case 37:
                case 6:
                case 101:
                    updateLiveSportCo(a)
            }
        }
    })
}
function updateLiveCourses(e) {
    var t = new Date;
    Math.round(t.getTime() / 15e3);
    ("Universel" == e || "Aussi" == e || "JO" == e || "Cyclisme" == e || "Formule1" == e || "Ski" == e && $("body").hasClass("NewVers")) && updateTimeLine(), "Ski" != e || $("body").hasClass("NewVers") || ($(".info_cl a").removeClass("bloc_on").removeClass("opa_75").addClass("opa_50"), obj = $(".info_cl a:first-child"), obj.addClass("bloc_on").removeClass("opa_50").addClass("opa_75"), $("#Placar #manche1").hasClass("manche_on") ? ($(".info_cl a").addClass("opa_50").removeClass("bloc_on").removeClass("opa_75"), $(".info_cl a.manche1").removeClass("opa_50").addClass("bloc_on").addClass("opa_75"), $(".ClaTemp").length > 0 && $(".ClaTemp").load("/base/ski/fiches/matchs/classement/" + $("#Placar #manche1").attr("epreuve").slice(-3) + "/" + $("#Placar #manche1").attr("epreuve") + "/" + $("#Placar #manche1").attr("manche") + ".html")) : $(".ClaTemp").length > 0 && $(".ClaTemp").load("/base/ski/fiches/matchs/classement/" + obj.attr("epreuve").slice(-3) + "/" + obj.attr("epreuve") + "/" + obj.attr("manche") + ".html"), $(".ClaForf").length > 0 && $(".ClaForf").load("/base/ski/fiches/matchs/forfaits/" + obj.attr("epreuve").slice(-3) + "/" + obj.attr("epreuve") + "/" + $("#Directs.Ski").attr("idmanche") + ".html"), $(".ProchPartant").length > 0 && $(".ProchPartant").load("/base/ski/fiches/matchs/participants/" + obj.attr("epreuve").slice(-3) + "/" + obj.attr("epreuve") + "/" + $("#Directs.Ski").attr("idmanche") + ".html")), reLoadComms()
}
function updateLiveSportCo(e) {
    identifier = e.IDENTIFIER;
    var t = identifier.split("-"), a = parseInt(t[0]), n = t[1], r = parseInt("0" + e.SCORE_DOM, 10), o = parseInt("0" + e.SCORE_EXT, 10), s = (e.STATUT.statut, e.STATUT["class"]);
    if ("encours" == s && parseInt($(".match-" + n + " .sc2").html()) + "" == "NaN" && ($(".match-" + n + " .sc2").html("0"), $(".match-" + n + " .sc1").html("0")), is_page_lives || is_fichematchlive) {
        var l = parseInt("0" + $(".match-" + n + " .sc1").html().replace("-", "").replace("&nbsp;", ""), 10), c = parseInt("0" + $(".match-" + n + " .sc2").html().replace("-", "").replace("&nbsp;", ""), 10), p = $(".match-" + n + " .cr1 div").length, u = $(".match-" + n + " .cr2 div").length;
        !$.browser.msie && is_fichematchlive && 36 != a && $("title").html($("#EqDom .equipe a").html() + " " + $("#scoDom").html() + "-" + $("#scoExt").html() + " " + $("#EqExt .equipe a").html() + ", " + $("#live-placar .sco .min").html().replace("undefined", "").replace("null", "Terminé") + ", " + $(".entete.opa_75 .droite.p5").text()), NaN == r && (r = l), NaN == o && (o = c);
        var d = r - l, h = o - c;
        if (36 == a || 101 == a) {
            var f = parseInt(e.CR_DOM), m = parseInt(e.CR_EXT);
            for ((0 != f || 0 != m) && $(".match-" + n + " .cr").fadeIn(50), i = 0; i < f - p; i++)$(".match-" + n + " .cr1").append("<div class='carton_rouge'></div>");
            for (i = 0; i < m - u; i++)$(".match-" + n + " .cr2").append("<div class='carton_rouge'></div>")
        }
        0 != d && (updateScore(n, l, r, "sc1"), $(".match-" + n + ".match").addClass("event"), setTimeout(function () {
            $("div.match").removeClass("event")
        }, 15e3)), 0 != h && (updateScore(n, c, o, "sc2"), $(".match-" + n + ".match").addClass("event"), setTimeout(function () {
            $("div.match").removeClass("event")
        }, 15e3)), 36 == a && $(".match-" + n).length > 0 && (e.BUTS_DOM + "" != "undefined" && updateButeur(e.BUTS_DOM, n, "1"), e.BUTS_EXT + "" != "undefined" && updateButeur(e.BUTS_EXT, n, "2")), 37 != a && 36 != a && 6 != a && 101 != a || !is_fichematchlive || (reLoadComms(), $("#Placar").hasClass("commented") && (minCom = parseInt($("#firstload span:first-child").html()), stamin = parseInt($("#live-placar .statut .sco .min").attr("minute")), minCom > stamin && $("#live-placar .statut .sco .min").attr("minute", $("#firstload span:first-child").html())), updateTimeLine()), 101 != a || is_fichematchlive || (e.NB_ESSAI_DOM > 0 && $(".match-" + n + " .but.ek1").html('<div class="buteur">' + e.NB_ESSAI_DOM + " essai" + (e.NB_ESSAI_DOM > 1 ? "s" : "") + "</div>"), e.NB_ESSAI_EXT > 0 && $(".match-" + n + " .but.ek2").html('<div class="buteur">' + e.NB_ESSAI_EXT + " essai" + (e.NB_ESSAI_EXT > 1 ? "s" : "") + "</div>"))
    } else r >= 0 && r > l && animationNumber($(".match-" + n + " .sc1"), r), o >= 0 && o > c && animationNumber($(".match-" + n + " .sc2"), o)
}
function updateLiveTennis(e) {
    console.log("updateLIveTennis"), identifier = e.IDENTIFIER;
    var t = identifier.split("-"), a = (parseInt(t[0]), t[1]);
    is_fichematchlive && reLoadComms();
    var n = e.SERVICE;
    if ($(".match-" + a + " .service-j2,.match-" + a + " .service-j1").hide().removeClass("hidden").hide(), "1" == n && ($(".match-" + a + " .service-j2").hide(), $(".match-" + a + " .service-j1").fadeIn(vitesseFade)), "2" == n && ($(".match-" + a + " .service-j1").hide(), $(".match-" + a + " .service-j2").fadeIn(vitesseFade)), $(".match-" + a + " #sco1").html(e.JOUEURS.JOUEUR1.PTS), $(".match-" + a + " #sco2").html(e.JOUEURS.JOUEUR2.PTS), 0 == $("#fichebase_v65").length && (e.JOUEURS.JOUEUR1.PTS > 0 || e.JOUEURS.JOUEUR2.PTS > 0 ? ($("#Placar .match-" + a + " #sco1, #Placar .match-" + a + " #sco2 ").animate({
            width: "46px",
            opacity: "1"
        }, {
            queue: !1,
            duration: 500
        }), $("#Placar .ligne ").removeClass("llong"), $("#Placar .nom ").animate({width: "210px"}, {
            queue: !1,
            duration: 500
        })) : (0 == $(".tdouble").length ? ($("#Placar .match-" + a + " #sco1,#Placar .match-" + a + " #sco2 ").animate({
            width: "0px",
            opacity: "0"
        }, {queue: !1, duration: 500}), $("#Placar .nom ").animate({width: "256px"}, {
            queue: !1,
            duration: 500
        })) : $("#Placar .match-" + a + " #sco1,#Placar .match-" + a + " #sco2 ").html("-"), $("#Placar .ligne ").addClass("llong"))), e.ID_VAINQUEUR == e.JOUEURS.JOUEUR1.IDJOUEUR && ($(".match-" + a + " .ek1").addClass("vainqueur"), $(".match-" + a + " .ek2").addClass("perdant")), e.ID_VAINQUEUR == e.JOUEURS.JOUEUR2.IDJOUEUR) {
        $(".match-" + a + " .ek2").addClass("vainqueur").removeClass("perdant"), $(".match-" + a + " .ek1").addClass("perdant").removeClass("vainqueur");
        var r = $(".match-" + a + " .concurr.ek1").html(), o = $(".match-" + a + " .concurr.ek2").html();
        $(".match-" + a + " .concurr.ek1").html(o).addClass("vainqueur").removeClass("perdant"), $(".match-" + a + " .concurr.ek2").html(r).addClass("perdant").removeClass("vainqueur"), $(".match-" + a + " .set1, .match-" + a + " .set2").removeClass("gagne").removeClass("event")
    }
    if ("AB" == e.MOTIF_RESULT && 0 == $("#fichebase_v65").length) {
        var i = $(".match-" + a + " .perdant .nom span:last-child").html().split("(abandon)").join("");
        $(".match-" + a + " .perdant .nom span:last-child ").html(i), $(".match-" + a + " .perdant .nom span:last-child ").append("(abandon)")
    }
    $(".concurr.ek2").parent().removeClass("vainqueur");
    for (var s = 1; 6 > s; s++) {
        var l = "#" + identifier + "_setj1-" + s, c = "#" + identifier + "_setj2-" + s;
        $(l).removeClass("event"), $(c).removeClass("event");
        var p = e.SETS_INFOS_J1[s - 1].SET, u = e.SETS_INFOS_J2[s - 1].SET, d = e.SETS_INFOS_J1[s - 1].TIE, h = e.SETS_INFOS_J2[s - 1].TIE;
        console.log("set:" + s + " " + p + "-" + u + ' tie("' + d + '"-"' + h + '"")'), 0 != e.JOUEURS.DUREE[s] ? $(".tempsset .duree-" + s).html(e.JOUEURS.DUREE[s] + "'") : $(".tempsset .duree-" + s).hide(), p != parseInt($(l).html()) && p && $(".old-gagne").length > 0 && ("-" != $(l).html() && $(l).addClass("event"), $(l).removeClass("opak").html(p), "" != d && 0 == $("#fichebase_v65").length ? $(l).append("<span>" + d + "</span>") : $(l).append('<b class="score--tie">' + d + "</b>"), "1" == e.SETS_INFOS_J1[s - 1].GAGNANT && ($(l).addClass("gagne").addClass("vainqueur"), $(l + "," + c).removeClass("encours"))), u != parseInt($(c).html()) && u && $(".old-gagne").length > 0 && ("-" != $(c).html() && $(c).addClass("event"), $(c).html(u).removeClass("opak"), "" != h && 0 == $("#fichebase_v65").length ? $(c).append("<span>" + h + "</span>") : $(c).append('<b class="score--tie">' + h + "</b>"), "1" == e.SETS_INFOS_J2[s - 1].GAGNANT && ($(c).addClass("gagne").addClass("vainqueur"), $(l + "," + c).removeClass("encours"))), "1" != e.SETS_INFOS_J1[s - 1].GAGNANT && "1" != e.SETS_INFOS_J2[s - 1].GAGNANT && $(l + "," + c).addClass("encours"), setTimeout(function () {
            $(".set1, .set2").removeClass("event")
        }, 15e3)
    }
}
function updateScore(e, t, a, n) {
    t != a && a > t && ($(".match-" + e + " ." + n).fadeOut(5 * vitesseFade, function () {
        $(this).fadeIn(2 * vitesseFade), animationNumber($(this), a)
    }), is_fichematchlive && 0 != a && $("#Placar .event .but").fadeIn(500, function () {
        setTimeout(function () {
            $("#Placar .event .but").fadeOut(500)
        }, 1e4)
    }))
}
function updateButeur(e, t, a) {
    if (setTimeout(function () {
            var e = parseInt("0" + $(".match-" + t + " .sc1").html().replace("-", "").replace("&nbsp;", "")), a = parseInt("0" + $(".match-" + t + " .sc2").html().replace("-", "").replace("&nbsp;", ""));
            $(".match-" + t).attr("empreinte").substr(0, 2) != e + "" + a && $(".match-" + t).attr("empreinte", "-")
        }, 1e4), $(".match-" + t + " .but.ek" + a).empty(), e.length)for (i = 0; i < e.length; i++) {
        null != e[i].MINUTE_ADD && "" != e[i].MINUTE_ADD ? minute = e[i].MINUTE + "+" + e[i].MINUTE_ADD : minute = e[i].MINUTE;
        var n = e[i].TYPE_BUT;
        " " != e[i].PRENOM && "" != e[i].PRENOM && null != e[i].PRENOM ? prenom = e[i].PRENOM.substr(0, 1) + "." : prenom = "";
        var r = e[i].NOM;
        r.length > 14 && (r = r.substr(0, 13) + "."), null == e[i].NOM ? $(".match-" + t + " .but.ek" + a + ".b" + Math.floor(i / 5)).append('<div class="buteur attente"></div>') : ("" != n ? classbut = 'class="showd"' : classbut = "", "" == minute ? $(".match-" + t + " .but.ek" + a + ".b" + Math.floor(i / 5)).append('<div but="0" class="item opa_75 buteur" id="MIN' + minute.replace("+", "") + '"><span class="opa_75"> <i ' + classbut + ">" + n + "</i> </span><strong>" + prenom + r + "</strong></div>") : $(".match-" + t + " .but.ek" + a + ".b" + Math.floor(i / 5)).append('<div but="0" class="item opa_75 buteur" id="MIN' + minute.replace("+", "") + '"><span class="opa_75">' + minute + "' <i " + classbut + ">" + n + "</i> </span><strong>" + prenom + r + "</strong></div>"))
    }
}
function rechargeClaDirect(e, t) {
    var a = new Date;
    Math.round(a.getTime() / 6e4);
    $.ajax({
        url: "/base/" + t + "/classements/directs/json/" + e.slice(-3) + "/" + e + ".json",
        async: !0,
        dataType: "json",
        success: function (e) {
            pos_start = 25, l_hght = 25, $.each(e, function (t) {
                var a = e[t];
                matchsmoy = $(".classement_direct #CONT #CLUB" + a.IDC).parent().attr("matchs"), $(".classement_direct #CLUB" + a.IDC).css("opacity", .2), $(".classement_direct #CLUB" + a.IDC).find(".rang").html(a.CLA), $(".classement_direct #CLUB" + a.IDC).find(".points").html(a.PTS), diffmatch = parseInt(a.MAT) - parseInt(matchsmoy), diffmatch > 0 && (dfm = "+" + diffmatch + "m."), diffmatch < 0 && (dfm = diffmatch + "m."), 0 == diffmatch && (dfm = ""), $(".classement_direct #CLUB" + a.IDC).find(".j").html(dfm), diffbut = parseInt(a.DIF), diffbut > 0 ? diffbutAff = "+" + diffbut : diffbutAff = diffbut, $(".classement_direct #CLUB" + a.IDC).find(".diff").html(diffbutAff), setTimeout(function () {
                    $(".classement_direct #CLUB" + a.IDC).animate({opacity: 1}, {
                        queue: !1,
                        duration: 350
                    }), $(".classement_direct #CLUB" + a.IDC).animate({top: pos_start + l_hght * t + "px"}, {
                        queue: !1,
                        duration: 1200
                    })
                }, 100 * t)
            })
        }
    })
}
function init_chrono() {
    $("#chrono").size() && ($("#chrono .footer .nav").click(function () {
        if (!$(this).hasClass("disabled") && !$("#chrono").hasClass("loading")) {
            var e = $(this).attr("data-dir");
            switch ($("#chrono").addClass("loading"), e) {
                case"prev":
                    chronoScroll("up", $(this));
                    break;
                case"next":
                    chronoScroll("down", $(this))
            }
        }
    }), $("#chrono .filter select").change(function () {
        ChargeChrono($("#chrono .filter select option:selected").val())
    }))
}
function ChargeChrono(e) {
    $("#chrono ul.chrono ").attr("tag", e), pageChrono = 0, pageChronoDerniereChargee = 0, $("#chrono ul.chrono").fadeOut(200, function () {
        $("#chrono ul.chrono ").hide().css("top", 0), $("#chrono .pager span").html(1), $("#chrono ul.chrono ").load("/edito/chronos/tags/" + e + "/actualite_0.html", function () {
            $("#chrono ul.chrono ").fadeIn(200, function () {
                $("#chrono .pager a").show()
            })
        })
    })
}
function chronoScroll(e, t) {
    if ("up" == e ? pageFut = pageChrono : pageFut = pageChrono + 1, pageFut > 0 && pageFut < 10)switch (e) {
        case"up":
            pageChrono--, animatechrono(pageChrono, 1);
            break;
        case"down":
            pageChrono++, animatechrono(pageChrono, -1)
    }
    0 == pageChrono || 9 == pageChrono ? t.addClass("disabled") : $("#chrono .footer .nav").removeClass("disabled")
}
function animatechrono(e, t) {
    var a = $("#scrollerChrono ul.chrono").attr("tag"), n = $("#scrollerChrono ul.chrono").position().top, r = $("#scrollerChrono").height();
    1 == t ? ($("#scrollerChrono ul.chrono").animate({top: n + r}, 500, function () {
        $("#chrono").removeClass("loading")
    }), $("#chrono .pager span").html(e + 1)) : e > pageChronoDerniereChargee ? (pageChronoDerniereChargee++, $("#scrollerChrono ul#precharge").load("/edito/chronos/tags/" + a + "/actualite_" + e + ".html", function () {
        prechargeContent = $("#scrollerChrono ul#precharge").html(), $("#scrollerChrono ul.chrono").append(prechargeContent), $("#scrollerChrono ul.chrono").animate({top: n - r}, 500, function () {
            $("#chrono").removeClass("loading")
        }), $("#chrono .pager span").html(e - t)
    })) : ($("#scrollerChrono ul.chrono").animate({top: n - r}, 500, function () {
        $("#chrono").removeClass("loading")
    }), $("#chrono .pager span").html(e + 1))
}
function init_video() {
    if ($("#video").size()) {
        var e = $("#video .pager").attr("data-nbpage");
        $("#video .footer .nav").click(function () {
            if (!$(this).hasClass("disabled") && !$("#video").hasClass("loading")) {
                var t = $(this).attr("data-dir");
                switch ($("#video").addClass("loading"), t) {
                    case"prev":
                        videoScroll("up", e, $(this));
                        break;
                    case"next":
                        videoScroll("down", e, $(this))
                }
            }
        })
    }
}
function videoScroll(e, t, a) {
    if ("up" == e ? pageFut = pageVideo : pageFut = pageVideo + 1, pageFut > 0 && pageFut < t)switch (e) {
        case"up":
            pageVideo--, animatevideo(pageVideo, 1);
            break;
        case"down":
            pageVideo++, animatevideo(pageVideo, -1)
    }
    0 == pageVideo || pageVideo == t - 1 ? a.addClass("disabled") : $("#video .footer .nav").removeClass("disabled")
}
function animatevideo(e, t) {
    var a = ($("#scrollerVideo ul.video").attr("tag"), $("#scrollerVideo ul.video").position().top), n = $("#scrollerVideo").height();
    1 == t ? ($("#scrollerVideo ul.video").animate({top: a + n - 30}, 500, function () {
        $("#video").removeClass("loading")
    }), $("#video .pager span").html(e + 1)) : ($("#scrollerVideo ul.video").animate({top: a - n}, 500, function () {
        $("#video").removeClass("loading")
    }), $("#video .pager span").html(e + 1))
}
function init_club() {
    $("#usercoms-inscription").click(function (e) {
        e.preventDefault()
    }), $(document).on("click", "#social-links a.profil, .liste_service a.profil, a.foo-compte, .connectMenu,#usercoms-inscription", function (e, t) {
        $(this).hasClass("connected") ? $("#social-links .box").is(":visible") || $(".connectMenu .lienInterne.lienConnect").is(":visible") ? ($("#social-links .box").fadeOut(), $("#social-links a.profil").removeClass("open"), $(".connectMenu .lienInterne.lienConnect").hide(), $(".connectMenu a").removeClass("active")) : ($("#social-links .box").fadeIn(), $("#social-links a.profil").addClass("open"), $(this).find(".lienInterne.lienConnect").show(), $(".connectMenu a").addClass("active"), $(this).addClass("active")) : conxpopup({
            width: 320, height: 500, load: "/v6/include/connexion.html", onload: function () {
                if (initExt(), setTimeout(function () {
                        $("#connexpopup .signin form input:first").focus()
                    }, 200), $('body[data-type="concours"], body[data-type="quotidien"]').size()) {
                    var e = $("body").attr("data-type");
                    "concours" == e && $("#connexpopup h1").text("Identifiez-vous pour participer"), "quotidien" == e && ($("#connexpopup").height("500"), $("#connexpopup .signup").hide())
                }
                $(document).bind("connection-login-ext", function (e, a) {
                    console.log(a);
                    $.ajax({
                        url: "/club/connect.php",
                        type: "POST",
                        data: {query: "extlogin", datas: JSON.stringify(a)},
                        success: function (e) {
                            $("body").trigger("lequipe-login", e.datas), setUserConnect(), t ? $(t).trigger("click") : $("#connexpopup a.close").trigger("click"), clubRefreshRubrique(!1), clubconnectedCheckLogged(clubconnectedSetup)
                        }
                    })
                }), $(".connexionV2 .signin.formView .btn.submit").click(function () {
                    $(".connexionV2 .signin.formView").submit();
                }), $("#connexpopup .signin form,.connexionV2 .signin.formView").on("submit", function () {
                    if ($("#connexpopup .signin form a.submit,.connexionV2 .signin.formView .btn.submit").hasClass("disabled"))return !1;
                    $.ajax({
                        url: "/club/connect.php",
                        type: "POST",
                        data: {
                            query: "login",
                            login: $("#connexpopup .signin form [name='username'],.connexionV2 .signin.formView [name='username']").val(),
                            pass: $("#connexpopup .signin form [name='password'],.connexionV2 .signin.formView [name='password']").val(),
                            remember: $("#connexpopup .signin form [name='remember']").is(":checked"),
                            session: 1
                        },
                        dataType: "json",
                        beforeSend: function () {
                            $("#connexpopup .signin form a.submit,.connexionV2 .signin.formView .btn.submit").addClass("disabled")
                        },
                        success: function (e) {
                            if (200 != e.code) {
                                switch (e.code) {
                                    case 511:
                                    case 513:
                                        var a = "Votre adresse email ne semble pas être correcte.";
                                        break;
                                    case 514:
                                    case 517:
                                        var a = "Votre mot de passe n'est pas renseigné ou trop court.";
                                        break;
                                    case 529:
                                        var a = "L'association email/mot de passe ne correspond pas, veuillez vérifier vos identifiants.";
                                        break;
                                    default:
                                        var a = "Une erreur s'est produite."
                                }
                                return $("#connexpopup .signin form .error,.connexionV2 .signin.formView .error").text(a).fadeIn(), void $("#connexpopup .signin form a.submit,.connexionV2 .signin.formView .btn.submit ").removeClass("disabled")
                            }
                            $("body").trigger("lequipe-login", e.datas), setUserConnect(), t ? $(t).trigger("click") : $("#connexpopup a.close").trigger("click"), clubRefreshRubrique(!1), clubconnectedCheckLogged(clubconnectedSetup)
                        },
                        error: function (e) {
                            var t = jQuery.parseJSON(e.responseText);
                            switch (t.code) {
                                case 511:
                                case 513:
                                    var a = "Votre adresse email ne semble pas être correcte.";
                                    break;
                                case 514:
                                case 517:
                                    var a = "Votre mot de passe n'est pas renseigné ou trop court.";
                                    break;
                                case 529:
                                    var a = "L'association email/mot de passe ne correspond pas, veuillez vérifier vos identifiants.";
                                    break;
                                default:
                                    var a = "Une erreur s'est produite."
                            }
                            $("#connexpopup .signin form .error,.connexionV2 .signin.formView .error").text(a).fadeIn(), $("#connexpopup .signin form a.submit,.connexionV2 .signin.formView .btn.submit").removeClass("disabled")
                        }
                    });
                    return !1
                }), $("#connexpopup .signin form a.submit").on("click", function () {
                    return $("#connexpopup .signin form").trigger("submit"), !1
                })
            }
        })
    }), $("#social-links .box a.signout, #menu-premium .signout, .lienConnect ul li:last-child").on("click", function () {
        var e = "lequipe-connected-infos", t = document.location.href;
        -1 != t.indexOf("qlf-") && (e += "-qlf"), eraseCookie(e);
        $.ajax({
            url: "/club/connect.php", data: {query: "logout"}, type: "POST", success: function (e) {
                setUserConnect(), $("#social-links .box").fadeOut(), clubRefreshRubrique(!0), window.location.reload()
            }
        });
        return !1
    }), $("a.authRequired").on("click", function (e) {
        return _userInfos ? void 0 : ($("#social-links a.profil, .connectMenu").trigger("click"), e.stopImmediatePropagation(), !1)
    }), setUserConnect()
}
function like(e, t, a, n) {
    return $.inArray(t, ["like", "dislike"]) === !1 ? !1 : $.inArray(a, ["news", "commentaire", "match"]) === !1 ? !1 : void $.ajax({
        url: "/like.php",
        type: "post",
        data: {query: t, typedoc: a, iddoc: n},
        dataType: "json",
        success: function (t) {
            if (200 === t.code) {
                var a = "" == $(e).html() ? 0 : parseInt($(e).html());
                $(e).html(a + 1)
            } else 503 === t.code && alert("Vous devez être connecté pour effectuer cette action."), 520 === t.code && alert("Votre vote a déjà été enregistré.")
        }
    })
}
function clubconnectedCheckLogged(e, t) {
    var a = "lequipe-connected-infos", n = document.location.href;
    -1 != n.indexOf("qlf-") && (a += "-qlf");
    var r = decodeURIComponent(readCookie(a));
    if ("null" != r) {
        var o = $.parseJSON(r);
        "object" == typeof o && (clubconnectedSetup(o), "undefined" != typeof e && e != clubconnectedSetup && e(o))
    } else"function" == typeof t && t()
}
function clubconnectLogin(e, t, a) {
    var n = !1, r = getInputTextVal(e + " .clubconnect-email"), o = getInputTextVal(e + " .clubconnect-pass");
    return "" != r && "" != o ? $.ajax({
        url: "/club/connect.php",
        type: "post",
        data: {query: "login", login: r, pass: o, session: 1, headers: 0},
        dataType: "json",
        async: !1,
        error: function () {
            null != a && a()
        },
        success: function (r) {
            if (200 === r.code)$("body").trigger("lequipe-login", r.datas), setUserConnect(), n = !0, "undefined" != typeof t && t != clubconnectedSetup && t(r.datas); else {
                null != a && a();
                var o = "";
                switch (r.code) {
                    case 511:
                    case 513:
                        o = "Votre adresse email ne semble pas être correcte.", $(e + " .clubconnect-email").focus();
                        break;
                    case 514:
                    case 517:
                        o = "Votre mot de passe n'est pas renseigné ou trop court.", $(e + " .clubconnect-pass").focus();
                        break;
                    case 529:
                        o = "L'association email/mot de passe ne correspond pas, veuillez vérifier vos identifiants.", $(e + " .clubconnect-pass").focus();
                        break;
                    default:
                        o = r.message
                }
                alert(o)
            }
        }
    }) : alert("Entrez un email et un mot de passe"), n
}
function clubRefreshRubrique(e) {
    var t = document.location.pathname;
    ($("#social-links .profil").hasClass("rfshConnex") || -1 != t.indexOf("/Article/") || -1 != t.indexOf("/club/") || -1 != t.indexOf("/alertes/") || -1 != t.indexOf("/live-video/")) && window.location.reload()
}
function clubconnectedSetup(e) {
    $("#clubconnect-form").hide(), $("#ComForm h3 span").hide();
    var t = e.nickname;
    return e.firstname && "" != e.firstname && (t = e.firstname), $("#clubconnect-connected").show().find("#clubconnect-infos").html("Bienvenue " + t), "function" == typeof commentSetupConnectedInfos && commentSetupConnectedInfos(e), !1
}
function clubconnectLogout(e) {
    var t = !1, a = "lequipe-connected-infos", n = document.location.href;
    return -1 != n.indexOf("qlf-") && (a += "-qlf"), eraseCookie(a), $.ajax({
        url: "/club/connect.php",
        type: "post",
        data: {query: "logout"},
        dataType: "json",
        async: !1,
        success: function (a) {
            200 === a.code && ($("body").trigger("lequipe-logout"), t = !0, $("#toolbar #clubconnect-form").show(), $(".clubconnect-email,.clubconnect-pass").val(""), $("#clubconnect-connected").hide().find("#clubconnect-infos").empty(), "undefined" != typeof e && e != clubconnectLogout && e(a.data))
        }
    }), t
}
function init_agenda() {
    $("#agenda").size() && (nbPageAgenda = $("#agenda").attr("data-nbpages"), dateAgenda = $("#agenda").attr("data-date"), $("#agenda .footer .nav").click(function () {
        if (!$(this).hasClass("disabled") && !$("#agenda").hasClass("loading")) {
            var e = $(this).attr("data-dir");
            switch ($("#agenda").addClass("loading"), e) {
                case"prev":
                    AgendaScroll("up", nbPageAgenda, $(this), dateAgenda);
                    break;
                case"next":
                    AgendaScroll("down", nbPageAgenda, $(this), dateAgenda)
            }
        }
    }))
}
function AgendaScroll(e, t, a, n) {
    if ("up" == e ? pageFut = pageAgenda - 1 : pageFut = pageAgenda, 0 < pageFut && pageFut < t)switch (e) {
        case"up":
            pageAgenda--, animateAgenda(pageAgenda, 1, n);
            break;
        case"down":
            pageAgenda++, animateAgenda(pageAgenda, -1, n)
    }
    1 == pageAgenda || pageAgenda == t ? a.addClass("disabled") : $("#agenda .footer .nav").removeClass("disabled")
}
function animateAgenda(e, t, a) {
    var n = $(agendaSelect + " ul.agendaList").position().top, r = $(agendaSelect).outerHeight();
    1 == t ? ($(agendaSelect + " ul.agendaList").animate({top: n + r}, 500, function () {
        $("#agenda").removeClass("loading")
    }), $("#agenda .pager span").html(e)) : e > agendaDernierePageCharge ? (agendaDernierePageCharge++, $(agendaSelect + " ul.prechargeAgenda").load("/v6/include/programme-tv/" + a + "/bloc_agenda_" + e + ".html", function () {
        $(agendaSelect + " ul.agendaList").append($(agendaSelect + " ul.prechargeAgenda").html()), $(agendaSelect + " ul.agendaList").animate({top: n - r}, 500, function () {
            $("#agenda").removeClass("loading")
        }), $("#agenda .pager span").html(e - 1 - t)
    })) : ($(agendaSelect + " ul.agendaList").animate({top: n - r}, 500, function () {
        $("#agenda").removeClass("loading")
    }), $("#agenda .pager span").html(e))
}
function afficheBlocsProgHomes() {
    $(".ZoneClick[data-prog-active=1]").each(function () {
        var e = $(this), t = $(this).data("prog-infos");
        t = t.split("|");
        var a = t[0].split(";"), n = new Date, r = n.getDay();
        if (-1 != $.inArray("" + r, a)) {
            var o = (new Date).getHours(), i = (new Date).getMinutes(), s = 100 * o + i, l = parseInt(t[1].replace(":", "")), c = parseInt(t[2].replace(":", ""));
            s >= l && c >= s && e.parent().show()
        }
    })
}
function manageClubList(e, t) {
    var a = $("#liste_club").width(), n = $("#liste_club a").length, r = a / n;
    e.css("width", r), e.parents("#liste_club").fadeIn(200)
}
function blocsResultatsHomes() {
    $(".slider-jour ul").length > 0 && $(".slider-jour ul").height(function () {
        return $(this).children("li").height()
    }), $("ul.tabs li a").live("click", function () {
        codeCompet = $(this).attr("code"), url = "/base/" + $(this).attr("sport").toLowerCase() + "/include/bloc_res_" + codeCompet + ".html ", $.ajax({
            url: url,
            success: function (e) {
                $(".block.resultats").html(e), $(".slider-jour ul").css("height", $(".slider-jour ul li").height() + "px")
            }
        })
    }), $(".slider-jour a.prev-classement, .slider-jour a.next-classement").live("click", function () {
        idp = $(".slider-jour li").attr("prec"), dir = "right", $(this).hasClass("next-classement") && (idp = $(".slider-jour li").attr("suiv"), dir = "left"), sport_att = $(this).parent().parent().parent().attr("sport").toLowerCase(), $("#block-CLA-button").hasClass("active") ? url = "/base/" + sport_att + "/classements/niveaux/block/" + idp.slice(-3) + "/" + idp + ".html" : (url = "/base/" + sport_att + "/resultats/niveaux/block/" + idp.slice(-3) + "/" + idp + ".html", "PHA" == $(".slider-jour li").attr("type") && (url = "/base/" + sport_att + "/resultats/phases/block/" + idp.slice(-3) + "/" + idp + ".html")), $(".slider-jour ul").hasClass("noaction") || $.ajax({
            url: url,
            success: function (e) {
                if ($(".slider-jour ul a").remove(), $(".slider-jour ul").append(e), $(".slider-jour ul").addClass("noaction"), $(".slider-jour ul li:first").remove(), $(".slider-jour ul").removeClass("noaction"), $(".slider-jour ul").animate({height: $(".slider-jour ul li").height() + "px"}, 100), $(".slider-jour ul").length > 1)for (k = 2; k <= $(".slider-jour ul").length; k++)$(".slider-jour ul li:nth-child(" + k + ")").remove()
            }
        })
    }), $("#block-RES-button").live("click", function () {
        $(this).addClass("active"), $("#block-CLA-button").removeClass("active"), codeCompet = $(this).parent().parent().attr("id"), url = "/base/" + $(this).parent().parent().attr("sport").toLowerCase() + "/resultats/block/" + codeCompet + ".html", $.ajax({
            url: url,
            success: function (e) {
                $(".slider-jour ul li").fadeOut(500, function () {
                    $(".slider-jour ul li").remove(), $(".slider-jour ul").html(e), $(".slider-jour ul li").fadeIn(500, function () {
                        $(".slider-jour ul").css("height", $(".slider-jour ul li").height() + "px")
                    })
                })
            }
        })
    }), $("#block-CLA-button").live("click", function () {
        $(this).addClass("active"), $("#block-RES-button").removeClass("active"), $("#block-CAL-button").removeClass("active"), codeCompet = $(this).parent().parent().attr("id"), url = "/base/" + $(this).parent().parent().attr("sport").toLowerCase() + "/classements/block/" + codeCompet + ".html", $.ajax({
            url: url,
            success: function (e) {
                $(".slider-jour ul li").fadeOut(500, function (t) {
                    $(".slider-jour ul li").remove(), $(".slider-jour ul").html(e), $(".slider-jour ul li").fadeIn(500, function () {
                        $(".slider-jour ul").css("height", $(".slider-jour ul li").height() + "px")
                    })
                })
            }
        })
    }), $("#block-CAL-button").live("click", function () {
        $(this).addClass("active"), $("#block-CLA-button").removeClass("active"), codeCompet = $(this).parent().parent().attr("id"), url = "/base/" + $(this).parent().parent().attr("sport").toLowerCase() + "/calendriers/block/" + codeCompet + ".html", $.ajax({
            url: url,
            success: function (e) {
                $(".slider-jour ul li").fadeOut(500, function (t) {
                    $(".slider-jour ul li").remove(), $(".slider-jour ul").html(e), $(".slider-jour ul li").fadeIn(500, function () {
                        $(".slider-jour ul").css("height", $(".slider-jour ul li").height() + "px")
                    })
                })
            }
        })
    }), $("body").hasClass("Jo") && (0 == $(".block.medailles .slider-jour .tab-base td").length && ($(".block.medailles .slider-jour ul").height("68"), $(".block.medailles .footer").hide(), $(".slider-jour .tab-base").append("<tr><td class=\"no-data\">Il n'y a pas de données pour l'instant</td></tr>")), $("#block_pays_medailles, #bloc_francais_medailles").on("click", function () {
        if ($("#block_pays_medailles, #bloc_francais_medailles").removeClass("active"), $(this).addClass("active"), $("#bloc_francais_medailles").hasClass("active"))var e = "/base/jo/medailles/block/2014/FRA-2014-H.html", t = "/Jo/JoPaysMedailleFRA_H_2014.html"; else var e = "/base/jo/medailles/block/2014/2014-H.html", t = "/Jo/JoTableauMedailleH_2014.html";
        "undefined" != typeof e && $.ajax({
            url: e, success: function (e) {
                $(".footer a").attr("href", t), $(".slider-jour ul li").fadeOut(500, function (t) {
                    $(".slider-jour ul").html(e), 0 != $(".slider-jour .tab-base td").length ? ($(".block.medailles .footer").show(), "undefined" == typeof heightli && setTimeout(function () {
                        $(".slider-jour ul").height(function () {
                            return $(".slider-jour ul li").height()
                        })
                    }, 100)) : ($(".slider-jour ul").height("68"), $(".block.medailles .footer").hide(), $(".slider-jour .tab-base").append('<tr style="font-size:15px; color:#000;"><td style="text-align:center; border-bottom:1px solid #CCC;">Il n\'y a pas de donnée pour l\'instant</td></tr>')), $(".slider-jour ul li").fadeIn(500)
                })
            }
        })
    }))
}
function init_autorefresh(e) {
    setTimeout(function () {
        window.location = window.location.pathname
    }, 1e3 * e)
}
function init_lazyloads() {
    $("#edito-gauche > div:not(.mea-Premium2) img.lazy").show().lazyload({threshold: 200}), $("#col-droite img.lazy").show().lazyload({threshold: 100}), $("#bk-surf img.lazy").show().lazyload({threshold: 200}), $(".mosaic_twitter img.lazy").show().lazyload({threshold: 200})
}
function init_tops() {
    if ($("#bk-surf").size()) {
        var e = 1, t = $("#bk-surf #inside").outerWidth(), a = $("#surfer-nave a").length;
        $("#surfer-nave a").on("click", function () {
            var n = parseInt($(this).attr("href").replace("#", "")), r = n > e ? -1 : 1;
            return $(this).hasClass("active") || ($("#surfer-nave a").removeAttr("class"), $(this).addClass("active"), $("#bk-surf .bloc-surfeur").animate({marginLeft: r * t}, "fast", function (a) {
                $("#bk-surf .bloc-surfeur").load("/v6/top-internautes/top" + n + ".html", function () {
                    var a = n > e ? 1 : -1;
                    $("#bk-surf .bloc-surfeur").css({marginLeft: a * t}).animate({marginLeft: 0}, "fast", function () {
                        e = n, $("#bk-surf .bloc-surfeur").removeAttr("style")
                    }), $("#bk-surf img.lazy").show().attr("src", $("#bk-surf img.lazy").attr("data-original"))
                })
            }), $("#bk-surf .ico").removeClass("o-ff"), 1 == n ? $("#bk-surf .ico.ar-left").addClass("o-ff") : n == a && $("#bk-surf .ico.ar-right").addClass("o-ff")), !1
        }), $("#bk-surf .ico").on("click", function () {
            var e = parseInt($("#surfer-nave a.active").attr("href").replace("#", "")), t = $("#surfer-nave a").length;
            $(this).hasClass("ar-right") && t > e ? $("#surfer-nave a.active + a").trigger("click") : $(this).hasClass("ar-left") && e > 1 && $("#surfer-nave a.active").prev("a").trigger("click")
        })
    }
}
function init_floatableNav() {
    var e = $("nav").offset().top;
    $(window).scroll(function () {
        $(window).scrollTop() >= e ? $("#nav-content").addClass("floatable") : $("#nav-content").removeClass("floatable")
    })
}
function refreshPub(e) {
    if ("undef" == e && (e = "auto"), "" != sas_tmstp && "undefined" != typeof SmartAdServerAjax) {
        var t = new Array;
        0 != $("#Ads_2077").length && t.push("2077"), 0 != $("#Ads_2078").length && t.push("2078"), 0 != $("#Ads_647").length && t.push("647"), 0 != $("#Ads_7185").length && t.push("7185"), 0 != $("#Ads_650").length && t.push("650"), 0 != $("#Ads_9394").length && t.push("9394"), 0 != $("#Ads_630").length && t.push("630"), 0 != $("#Ads_653").length && t.push("653"), 0 != $("#Ads_631").length && t.push("631"), 0 != $("#Ads_3075").length && t.push("3075"), 0 != $("#Ads_4738").length && t.push("4738"), 0 != $("#Ads_736").length && t.push("736"), 0 != $("#Ads_632").length && t.push("632"), 0 != $("#Ads_1075").length && t.push("1075"), 0 != $("#Ads_1446").length && t.push("1446"), 0 != $("#Ads_651").length && t.push("651"), 0 != $("#Ads_648").length && t.push("648"), 0 != $("#Ads_16752").length && t.push("16752"), 0 != $("#Ads_12336").length && t.push("12336"), 0 != $("#Ads_12335").length && t.push("12335")
    }
    if (m6shop = $("#inshop iframe").attr("src"), $("#inshop iframe").attr("src", m6shop), sv_xtpage = svt_page, "auto" == e ? sv_xtpage = sv_xtpage + "::refresh_" + e + "_" + $("body").attr("total_bcl") : "byclick" == e && (sv_xtpage = sv_xtpage + "::refresh_" + e), "undefined" != typeof Ads && Ads.refresh(sas_pageid, t, sas_target), "auto" == e || "byclick" == e) {
        sv_xtpage;
        !function () {
            var e = document.createElement("script");
            e.type = "text/javascript", e.async = !0, e.src = "/v6/js/smarttag-prod.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.getElementsByTagName("script")[0].parentNode).insertBefore(e, null)
        }()
    }
}
function refreshPubAllo(e, t) {
    if ("" != sas_tmstp && "undefined" != typeof SmartAdServerAjax && "undefined" != typeof Ads) {
        var a = new Array;
        0 != $("#Ads_647").length && a.push("647"), 0 != $("#Ads_630").length && a.push("630"), m6shop = $("#inshop iframe").attr("src"), $("#inshop iframe").attr("src", m6shop), Ads.refresh(sas_pageid, "647", sas_target), Ads.refresh(sas_pageid, "630", sas_target)
    }
    sv_xtpage = t, t = "auto" == e ? t + "::refresh_" + e + "_" + $("body").attr("total_bcl") : t + "::refresh_" + e, function () {
        var e = document.createElement("script");
        e.type = "text/javascript", e.async = !0, e.src = "/v6/js/xtcore.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.getElementsByTagName("script")[0].parentNode).insertBefore(e, null)
    }();
    var t = sv_xtpage
}
function watermark() {
    $("a.photo").prepend("<span></span>"), $("a.video").prepend("<span></span>"), $(".block.magazine .img-caption a, .block.magazine .content a").prepend("<span></span>")
}
function qdjVoteHome(e, t) {
    $.post("/question_du_jour/EnregQJour.php", {I: e, R: t}, function () {
        window.location.href = "/qdj/" + e
    })
}
function quotiAfterCheckLoggedHome(e) {
    quotiInitLiensHome()
}
function clubconnectLogoutQuotiHome() {
    clubconnectLogoutHome(quotiAfterLogout)
}
function quotiAfterLogoutHome() {
    $(".formuleLogin").show(), $("#quoti_form_login .not_connected").show(), $("#quoti_form_login .connected").hide(), $("#formuleQuotidien .offreAmateur, #formuleQuotidien .offrePro").show(), quotiLiensNonConnecteHome(), isConnectedAmateur = !1
}
function quotiInitLiensHome() {
    info = setUserConnect(), void 0 != info && null != info && void 0 != info.id && (isConnectedAmateur = !0), isConnectedAmateur ? quotiLiensConnecteHome() : quotiLiensNonConnecteHome()
}
function quotiLiensNonConnecteHome() {
    $(".lien_1euro a").click(function () {
        $("#choix_paiement").slideDown(), $(".lien_1euro").addClass("actf")
    }), $("#choix_paiement .hipay").attr("href", _url_compte_amateur_home + "?quoti=1&paiement=HIPAY" + codetraking), $("#choix_paiement .allopass").attr("href", _url_compte_amateur_home + "?quoti=1&paiement=ALLOPASS" + codetraking)
}
function quotiLiensConnecteHome() {
    $(".lien_1euro a").click(function () {
        $("#choix_paiement").slideDown(), $(".lien_1euro").addClass("actf")
    }), $("#choix_paiement .hipay").attr("href", _url_quoti_achat_home + "?quoti=1&paiement=HIPAY" + codetraking), $("#choix_paiement .allopass").attr("href", _url_quoti_achat_home + "?quoti=1&paiement=ALLOPASS" + codetraking)
}
function init_premium() {
    if ("undefined" == typeof PopInArticle)return void console.log("PopInArticle is not loaded.");
    mpp_mode ? PopInArticle.gbType = "mpp" : PopInArticle.gbType = -1 != document.location.href.indexOf("#mpp") ? "mpp" : "oldschool", PopInArticle.ieVersion = -1 != navigator.userAgent.indexOf("MSIE") ? navigator.userAgent.substr(navigator.userAgent.indexOf("MSIE") + 5, 1) : null, PopInArticle.homeTitle = document.title;
    var e = PopInArticle.parsePremiumUrl(document.location.href);
    e && PopInArticle.init(e.id, 1), $(document).on("closePopinArticle", function (e) {
        window.opener ? window.location.href = window.location.origin : -1 != document.referrer.indexOf(window.location.pathname) ? window.location.href = window.location.origin : -1 != document.referrer.indexOf("lequipe.fr") ? window.history.go(-1) : window.location.href = window.location.origin
    }), $(document).on("click", "#popinArticle .head", function (e) {
        $(document).trigger("closePopinArticle"), e.preventDefault()
    }), $(window).on("keydown", function (e) {
        27 != e.keyCode || $("body").hasClass("aboOnly") || $(document).trigger("closePopinArticle")
    }), $(document).on("submit", "#popinArticle .signin form", function (e) {
        if (!$("#popinArticle .signin form a.submit").hasClass("disabled")) {
            $.ajax({
                url: "/club/connect.php",
                type: "POST",
                data: {
                    query: "login",
                    login: $('#popinArticle .signin form [name="username"]').val(),
                    pass: $('#popinArticle .signin form [name="password"]').val(),
                    remember: $('#popinArticle .signin form [name="remember"]').is(":checked"),
                    session: 1
                },
                dataType: "json",
                beforeSend: function () {
                    $("#popinArticle .signin form a.submit").addClass("disabled")
                },
                success: function (e) {
                    if (200 != e.code) {
                        switch (e.code) {
                            case 511:
                            case 513:
                                var t = "Votre adresse email ne semble pas être correcte.";
                                break;
                            case 514:
                            case 517:
                                var t = "Votre mot de passe n'est pas renseigné ou trop court.";
                                break;
                            case 529:
                                var t = "L'association email/mot de passe ne correspond pas, veuillez vérifier vos identifiants.";
                                break;
                            default:
                                var t = "Une erreur s'est produite."
                        }
                        return $("#popinArticle .signin form .error").text(t).fadeIn(), void $("#popinArticle .signin form a.submit").removeClass("disabled")
                    }
                    $("body").trigger("lequipe-login", e.datas), setUserConnect(), clubRefreshRubrique(!1), clubconnectedCheckLogged(clubconnectedSetup)
                },
                error: function (e) {
                    var t = jQuery.parseJSON(e.responseText);
                    switch (t.code) {
                        case 511:
                        case 513:
                            var a = "Votre adresse email ne semble pas être correcte.";
                            break;
                        case 514:
                        case 517:
                            var a = "Votre mot de passe n'est pas renseigné ou trop court.";
                            break;
                        case 529:
                            var a = "L'association email/mot de passe ne correspond pas, veuillez vérifier vos identifiants.";
                            break;
                        default:
                            var a = "Une erreur s'est produite."
                    }
                    $("#popinArticle .signin form .error").text(a).fadeIn(), $("#popinArticle .signin form a.submit").removeClass("disabled")
                }
            });
            e.preventDefault()
        }
    }), $(document).on("click", "#popinArticle .signin form a.submit", function (e) {
        $("#popinArticle .signin form").trigger("submit"), e.preventDefault()
    }), $(document).on("click", "#popinArticle .nav .up, #popinArticle .nav .down", function (e) {
        if (!$(this).hasClass("disabled")) {
            var t = parseInt($("#popinArticle .nav .num .current").text());
            if (PopInArticle.bodyScrollTop == $("#popinArticle .article").eq(t - 1).offset().top)var a = $(this).hasClass("up") ? t - 1 : t + 1; else var a = $(this).hasClass("up") ? t : t + 1;
            if ($("#popinArticle .article").eq(a - 1).length) {
                var n = a > 1 ? PopInArticle.popinScrollTop - PopInArticle.bodyScrollTop : 0, r = $("#popinArticle .article").eq(a - 1).offset().top;
                $("#popinArticle .body").animate({scrollTop: r + n}, "slow")
            }
        }
        e.preventDefault()
    }), $(document).on("click", "#popinArticle .infos .favorite", function (e) {
        var t = $(this), a = $(this).hasClass("selected") ? "remove" : "add";
        $.ajax({
            url: "/premium/news/bookmark.php",
            type: "POST",
            data: {action: a, nid: $(t).parents(".article").data("content-id")},
            dataType: "json",
            beforeSend: function (e) {
                "add" == a ? $(t).addClass("selected") : $(t).removeClass("selected")
            }
        }), e.preventDefault()
    }), $(document).on("click", "#popinArticle .navigation .social a", function (e) {
        PopInArticle.sharePopup($(this).attr("href")), e.preventDefault()
    }), $("#popinArticle .body .full .image").length && $(window).width() < 1024 && $("#popinArticle .body .full .image").css({height: PopInArticle.format169Full().height}), $(window).on("resize", function (e) {
        $("#popinArticle .body .full .image").length && $("#popinArticle .body .full .image").css({height: PopInArticle.format169Full().height})
    }), "mpp" == PopInArticle.gbType && (VEL ? $(document).on("click", "a.action-button", function (e) {
        VEL.Routes || (VEL.Routes = VELRoutes), VEL.setBuyContext($(this), $("article")), VEL.BuyContext.processAction = "buyArticle";
        var t = function () {
            VEL.buyProduct()
        }, a = null;
        $(this).hasClass("jeton") ? VEL.buyArticle() : VEL.goBuy(t, a), e.preventDefault()
    }) : console.log("VEL doesnt exists")), _userInfos && 1 == _userInfos.quotiAbonne || !$("body").hasClass("aboOnly") || (console.log("PopInAboOnly"), PopInAboOnly.init())
}
function animationNumber(e, t) {
    var a = parseInt(e.html()), n = 0;
    if (!(a > t) && t > a) {
        n = 1;
        var r = setInterval(function () {
            e.html(parseInt(e.html()) + n), n > 0 ? parseInt(e.html()) >= t && (e.html(parseInt(t)), clearInterval(r)) : parseInt(e.html()) <= t && (e.html(parseInt(t)), clearInterval(r))
        }, 100)
    }
}
function n(e) {
    return e > 9 ? "" + e : "0" + e
}
function setPlaceHolders() {
    $("input:text, textarea, input:password").live("focus", function () {
        $(this).attr("placeholder") && "" != $(this).attr("placeholder") && $(this).val() == $(this).attr("placeholder") && $(this).val("").removeClass("hasPlaceholder")
    }).live("blur", function () {
        $(this).attr("placeholder") && ("" == $(this).attr("placeholder") || "" != $(this).val() && $(this).val() != $(this).attr("placeholder") || $(this).val($(this).attr("placeholder")).addClass("hasPlaceholder"))
    }).blur().focusout()
}
function getInputTextVal(e) {
    var t = $(e);
    return t.attr("placeholder") && t.val() == t.attr("placeholder") ? "" : t.val()
}
function checkBadBrowser() {
    $.browser.msie && parseInt($.browser.version.substr(0, 1)) <= 6 && parseInt($.browser.version.substr(0, 2)) < 10 && ($("body").append('<div id="overlayBDB"></div><img id="imgBDB" src="/v6/img/badbrowsers.jpg">'), $("#overlayBDB").css({
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        zIndex: 1e4,
        backgroundColor: "#fff",
        opacity: .8
    }), $("#imgBDB").css({position: "absolute", top: 166, left: ($(window).width() - 800) / 2, zIndex: 10001}))
}
function init_eservices() {
    var e = ($("body").attr("sport"), Array());
    $(".ticketnet_event").each(function (t, a) {
        if (-1 == jQuery.inArray(a.id, e)) {
            e.push(a.id);
            var n = $(this).find(".ticketnet_liens_a").attr("href"), r = location.href.toLowerCase(), o = "AUTRE";
            if (-1 != r.indexOf("breve"))o = "BREVE"; else if (-1 != r.indexOf("live"))o = "LIVE"; else if (-1 != r.indexOf("match"))o = "MATCH"; else if (-1 != r.indexOf("club"))o = "CLUB"; else if (-1 != r.indexOf("resultat"))o = "RESULTAT"; else if (-1 != r.indexOf("/res_"))o = "RESULTAT"; else if (-1 != r.indexOf("classement"))o = "CLASSEMENT"; else if (-1 != r.indexOf("/cla_"))o = "CLASSEMENT"; else if (-1 != r.indexOf("palmares"))o = "PALMARES"; else if (-1 != r.indexOf("tableau"))o = "TABLEAU"; else {
                var i = ["/football/2", "/formule1/2", "/moto/2", "/tennis/2", "/golf/2", "/rugby/2", "/basket/2", "/volley/2", "/handball/2", "/cyclisme/2", "/ski/2", "/voile/2", "/natation/2", "/judo/2", "/surf/2", "/athletisme/2", "/aussi/2"];
                $.each(i, function (e, t) {
                    -1 != r.indexOf(t) && (o = "BREVE")
                })
            }
            $(this).find(".ticketnet_liens_a").attr("href", n + "?EMPL=" + o)
        } else $(this).remove();
        $(this).attr("name") == tknetAjd() && $(this).find(".heure").text() < tknetNow() && $(this).remove()
    });
    for (var t = 1; 2 >= t; t++)$(".col_droite .ticketnet_event .eq" + t).each(function (e, t) {
        $(this).text(tknetTrunc($(this).text(), 16))
    }), $("#savoir_plus .ticketnet_event .eq" + t).each(function (e, t) {
        $(this).text(tknetTrunc($(this).text(), 10))
    });
    parseInt($(".ticketnet_event").attr("name")) >= parseInt(tknetAjd()) && $(".ticketnet_event").fadeIn("slow");
    var a = $(this).find(".evoyages_event .liens_a").attr("href");
    $(this).find(".evoyages_event .liens_a").attr("href", a + "&EMPL=BREVE"), $("#savoir_plus .evoyages_event .libelleManif").text(function (e) {
        $(this).text(tknetTrunc($(this).text(), 40))
    }), parseInt($(".evoyages_event").attr("name")) >= parseInt(tknetAjd()) && $(".evoyages_event").fadeIn("slow")
}
function tknetAjd() {
    var e = new Date, t = e.getMonth() + 1;
    10 > t && (t = "0" + t);
    var a = e.getDate();
    return 10 > a && (a = "0" + a), e.getFullYear().toString() + t.toString() + a.toString()
}
function tknetNow() {
    var e = new Date, t = e.getHours();
    10 > t && (t = "0" + t);
    var a = e.getMinutes();
    return 10 > a && (a = "0" + a), t.toString() + a.toString()
}
function tknetTrunc(e, t) {
    return e.length > t ? jQuery.trim(e.substring(0, t)) + "." : void 0
}
function openLinkHome(e) {
    return e.length > 0 && ("_blank" == e.attr("target") ? window.open(e.attr("href")) : document.location.href = e.attr("href")), !1
}
function init66() {
    eventsNavMenu(), stickyMenu(), barreRebond(), homeWtfPlusArticle(), homeWtfnbPartages()
}
function homeWtfnbPartages() {
    $("body").hasClass("index") && "Wtf" == $("body").attr("sport") && ($("#edito-gauche .les-blocs").append('<div class="edito-nb-partages"></div>'), $("#edito-gauche .big-Leader, #edito-gauche .Coleader").hover(function () {
        var e = "PARTAGE", t = $(this).find("div:first-child").attr("data-nb-partage");
        "0" != t && "1" != t && (e = "PARTAGES"), $(this).find(".edito-nb-partages").html("<span>" + t + "</span> " + e).css("opacity", "1")
    }, function () {
        $(this).find(".edito-nb-partages").css("opacity", "0")
    })), $(".edito-nb-partages").on("click", function () {
        openLinkHome($(this).parent().parent().parent().find("h1 a,h2 a"))
    })
}
function homeWtfPlusArticle() {
    pagecur = 1, $("#AffichePLusEditos").on("click", function () {
        $.ajax({
            type: "GET", dataType: "html", url: "liste_" + pagecur + ".html", success: function (e) {
                $("#AffichePLusEditos").before(e), $("#edito-gauche img.lazy").show().lazyload({threshold: 200}), pagecur += 1
            }, error: function () {
                $("#AffichePLusEditos").hide()
            }
        })
    })
}
function barreRebond() {
    var e = 1, t = $(".js-scroller-scene").width(), a = $(".js-scroller-list").children().first().width(), n = Math.round(t / a), r = $(".js-scroller-list").children().length, o = r / n;
    $(document).on("click", ".js-scroller-btn span.next", function () {
        !$(".js-scroller").hasClass("is-scrolling") && $(this).hasClass("active") && ($(".js-scroller").addClass("is-scrolling"), $("#oreillettes--scroller--inside #oreillettes").animate({left: "-=" + t}, 500, function () {
            e += 1, e == o && $(".js-scroller-btn span.next").removeClass("active"), $(".js-scroller-btn span.prev").addClass("active"), $(".js-scroller").removeClass("is-scrolling")
        }))
    }), $(document).on("click", ".js-scroller-btn span.prev", function () {
        !$(".js-scroller").hasClass("is-scrolling") && $(this).hasClass("active") && ($(".js-scroller").addClass("is-scrolling"), $("#oreillettes--scroller--inside #oreillettes").animate({left: "+=" + t}, 500, function () {
            e -= 1, 1 == e && $(".js-scroller-btn span.prev").removeClass("active"), $(".js-scroller-btn span.next").addClass("active"), $(".js-scroller").removeClass("is-scrolling")
        }))
    })
}
function eventsNavMenu() {
    var e = null;
    $(document).on("click", "#nav-content .menuSportPlus > a:not(.active)", function () {
        $(".firstsLinks").remove();
        var e = "", t = "";
        return $("#nav-content.NavSport ul#menu > li").each(function () {
            this.offsetTop > 0 && (t = $(this).attr("class"), e += '<li class="' + t + '">' + $(this).html() + "</li>")
        }), e.length > 0 && $(this).next().prepend('<ul class="firstsLinks">' + e + '<div class="clear"></div></ul>').show(), $(this).next().css("display", "table"), $(this).parent().addClass("active"), $(this).addClass("active"), !1
    }), $(document).on("click", "#nav-stiky .menuSportPlus > a:not(.active)", function () {
        $(".firstsLinks").remove();
        var e = "", t = "";
        return $("#nav-content.NavSport ul#menu li:not(.home)").each(function () {
            t = $(this).attr("class"), e += '<li class="' + t + '">' + $(this).html() + "</li>"
        }), $(this).next().prepend('<ul class="firstsLinks">' + e + '<div class="clear"></div></ul>').show(), $(this).next().css("display", "table"), $(this).parent().addClass("active"), $(this).addClass("active"), !1
    }), $(document).on("click", "#naveau-1 .LeMenuPLus a.PLUS", function () {
        $("#naveau-1 .MenuPlus > a.lienHtml").remove();
        var e = "";
        $("body > nav #naveau-1 > ul > li a").each(function () {
            this.offsetTop > 0 && (e += '<a href="' + $(this).attr("href") + '" class="lienHtml">' + $(this).html() + "</a>")
        }), $(this).next().prepend(e)
    }), $(document).on("click", ".LeMenuPLus:not(.active)", function () {
        $(this).addClass("active"), $(this).find(".MenuPlus").show(), $(this).find(".MenuPlus").addClass("active"), $(this).find(".PLUS").addClass("active")
    }), $(document).on("click", ".hamburger:not(.active)", function () {
        $(this).find(".drop-menu-content").show(), $(".hamburger span").addClass("active"), $(this).addClass("active")
    }), $(document).on("click", ".connectMenu.connected:not(.active)", function () {
        return $(this).find(".drop-menu-content").show(), $(this + ".connectMenu a").addClass("active"), $(this).addClass("active"), !1
    }), $(document).on("click", ".hamburger.active, .LeMenuPLus.active, #nav-content .menuSportPlus > a.active, #nav-stiky .menuSportPlus > a.active, .connectMenu.connected.active", function () {
        $(".menuSportPlus a,.menuSportPlus,.hamburger,.hamburger span, .connectMenu, .connectMenu a, #naveau-1 .PLUS, #naveau-1 .MenuPlus, #naveau-1 .MenuPlus > a, .LeMenuPLus, .LeMenuPLus a.PLUS, .menuSportPlus > a").removeClass("active"), $(".drop-menu-content, #naveau-1 .MenuPlus").hide()
    }), $(".menuSportPlus, .hamburger, .connectMenu, #naveau-1 .MenuPlus, .LeMenuPLus").live("mouseleave", function () {
        e && clearTimeout(e), $(".drop-menu-content, #naveau-1 .MenuPlus").is(":visible") ? e = setTimeout(function () {
            $(".drop-menu-content, #naveau-1 .MenuPlus").live("mouseenter", function () {
                clearTimeout(e)
            }), $(".menuSportPlus a,.menuSportPlus,.hamburger,.hamburger span, .connectMenu, .connectMenu a, #naveau-1 .PLUS, #naveau-1 .MenuPlus, .LeMenuPLus, .LeMenuPLus a.PLUS").removeClass("active"), $(".drop-menu-content, #naveau-1 .MenuPlus").hide()
        }, 300) : ($(".menuSportPlus a,.menuSportPlus,.hamburger,.hamburger span, .connectMenu, .connectMenu a, #naveau-1 .PLUS, #naveau-1 .MenuPlus, .LeMenuPLus, .LeMenuPLus a.PLUS").removeClass("active"), $(".drop-menu-content, #naveau-1 .MenuPlus").hide())
    })
}
function stickyMenu() {
    if ($("#nav-content").length > 0)var e = $("#nav-content").offset().top;
    $(document).on("click", "#nav-stiky #OngletNavSport", function () {
        return $(this).hasClass("clickee") ? ($(this).removeClass("clickee"), $("#nav-inside-stiky").remove(),
            $("#nav-inside-stiky").css("margin-top", "-100px")) : ($(this).addClass("clickee"), $("#nav-inside-global").clone().appendTo("#nav-stiky").attr("id", "nav-inside-stiky"), $("#nav-inside").clone().appendTo("#nav-inside-stiky"), $("#nav-inside-stiky").css("margin-top", "0")), !1
    }), isStiky = 0, $(window).scroll(function () {
        $(window).scrollTop() - 200 > e ? (0 == isStiky && ($("#nav-content").clone().prependTo("body").attr("id", "nav-stiky"), $("#nav-stiky").html("<div><div>" + $("#nav-stiky").html() + "</div></div>"), isStiky = 1), $("#nav-stiky").css("top", "0"), $("#nav-stiky").css("height", "auto")) : ($("#nav-stiky").css("top", "-240px"), $("#nav-stiky .drop-menu-content").fadeOut("fast"), $("#nav-stiky").css("height", "40px"))
    })
}
function fbLogin() {
    return $("#fbloginBtn").hasClass("is-loading") ? !1 : ($("#fbloginBtn").addClass("is-loading"), void FB.login(function () {
        FB.getLoginStatus(function (e) {
            if ("connected" === e.status) {
                var t = e.authResponse.accessToken;
                FB.api("/me", function (e) {
                    var a = {};
                    a.provider = "facebook", a.token = t, a.id = e.id, a.email = e.email, a.full_name = e.name, a.first_name = e.first_name, a.last_name = e.last_name, a.gender = e.gender, a.lang = e.locale.substring(0, 2), a.image = "http://graph.facebook.com/" + e.id + "/picture", a.link = e.link, $(document).trigger("connection-login-ext", [a])
                })
            } else $("#fbloginBtn").removeClass("is-loading")
        })
    }, {scope: "email", auth_type: "rerequest"}))
}
function gup(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)"), a = t.exec(location.search);
    return null === a ? "" : decodeURIComponent(a[1].replace(/\+/g, " "))
}
function initExt() {
    settings = {}, settings.facebookAppId = "261959740493169", settings.fbIsLoaded = 0, settings.googleAppId = "808164840644-vagfc86hr7830bdlmeksvjel5rvgj7ge.apps.googleusercontent.com", settings.ggIsLoaded = 0, settings.facebookAppId && !settings.fbIsLoaded && $.getScript("//connect.facebook.net/en_US/sdk.js", $.proxy(function (e, t, a) {
        200 == a.status ? (FB.init({
            appId: settings.facebookAppId,
            cookie: !0,
            xfbml: !0,
            version: "v2.2"
        }), $(document).on("click", "#fbloginBtn", $.proxy(function (e) {
            fbLogin(), e.preventDefault()
        }, this)), settings.fbIsLoaded = !0) : $("#fbloginBtn").hide()
    }, this)), settings.googleAppId && !settings.ggIsLoaded && $.getScript("https://apis.google.com/js/client:plusone.js?parsetags=explicit", $.proxy(function (e, t, a) {
        200 == a.status ? ($(document).on("click", "#ggloginBtn", $.proxy(function (e) {
            console.log("google"), gapi.signin.render("ggloginBtn", {
                callback: "ggLogin",
                clientid: settings.googleAppId,
                cookiepolicy: "single_host_origin",
                scope: "https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email"
            }), e.preventDefault()
        }, this)), settings.ggIsLoaded = !0) : $("#ggloginBtn").hide()
    }, this))
}
function floatingPartage() {
    var e = $(window).scrollTop(), t = $(".partageons.duhaut").offset().top + 200, a = 0;
    $("body #container").length > 0 && (a = $("body").hasClass("article") || $("#container #allo").length > 0 ? $("#col-gauche").length > 0 ? $("body #col-gauche").position().left - 20 : $("body .news").position().left - 20 : $("body #container").position().left - 10), $("#fichebase_v65").length > 0 && (a = $("#fichebase_v65").position().left), e >= t && ($("#rebonds_partage").addClass("floatingPartageOn"), $("#rebonds_partage").css("top", "0"), $("#rebonds_partage").css("left", a + 220)), t >= e && $("#rebonds_partage").removeClass("floatingPartageOn").css("top", "-120px")
}
function twt_click(e) {
    var a = e.target || e.srcElement;
    if ("SPAN" == a.tagName && (a = a.parentNode), null == a.href || "" == a) {
        u = location.href, $("body").hasClass("article") ? t = $("#col-gauche h1 strong").html() : $('meta[name="twitter:title"]').length > 0 ? t = $('meta[name="twitter:title"]').attr("content") : t = $("title").html(), t = t.replace(/\&nbsp;/g, " ");
        var n = "https://twitter.com/intent/tweet?&text=" + encodeURIComponent(t) + "&url=" + encodeURIComponent(u) + "&via=lequipe";
        a.href = n
    }
    return !0
}
function fbs_click() {
    return u = location.href, $("body").hasClass("article") ? t = $("#col-gauche h1 strong").html() : t = $("#col-gauche h1").text(), fbShare(u, t, null, null, 600, 600), !1
}
function fbShare(e, t, a, n, r, o) {
    var i = screen.height / 2 - o / 2, s = screen.width / 2 - r / 2;
    fb_sharer = window.open("http://www.facebook.com/sharer.php?s=100&p[title]=" + t + "&p[summary]=" + a + "&p[url]=" + e + "&p[images][0]=" + n, "sharer", "top=" + i + ",left=" + s + ",toolbar=0,status=0,width=" + r + ",height=" + o), $.get("/v6/php/socialCountUpdate.php?provider=google&href=" + u), $.get("/v6/php/socialCountUpdate.php?provider=facebook&href=" + u, function (e) {
        parseInt(e) && $(".shareCount b").html(parseInt(e)), checkShareCountColor()
    })
}
function gog_click(e) {
    return u = location.href, $("body").hasClass("article") ? t = $("#col-gauche h1 strong").html() : t = $("#col-gauche h1").text(), window.open("https://plus.google.com/share?url=" + encodeURIComponent(u) + "&text=" + encodeURIComponent(t), "sharerGoogle", "toolbar=0,status=0,width=626,height=436"), !1
}
function getShareCount() {
    u = location.href, t = document.title;
    var e = "/club/commentaires/includes/";
    u = u.replace("http://www.lequipe.fr", "").toString(), u = u.replace("http://abonnes.lequipe.fr", "").toString(), md5 = calcMD5(u.replace(/\//g, "")).toString(), filename = md5.substr(0, 2) + "/" + md5.substr(2, 2) + "/" + md5.substr(4), filepath = e + filename + "-share.data", $(".shareCount b").load(filepath, function (e, t, a) {
        "error" == t ? $(this).html(0) : $(this).html(e), checkShareCountColor()
    })
}
function checkShareCountColor() {
    var e = parseInt($(".shareCount b:eq(0)").html()), t = "#000000", a = "30px";
    e > 0 && (e >= 49 && 99 >= e ? t = "#0f3189" : e >= 100 && 499 >= e ? t = "#608c02" : e >= 500 && 999 >= e ? t = "#ff8400" : e >= 1e3 && (t = "#ed2024", a = "26px", $("#partageons.duhaut.v66 .partage_v65>span").css("font-size", "16px"))), $(".shareCount b").css("color", t).css("font-size", a)
}
function rhex(e) {
    for (str = "", j = 0; j <= 3; j++)str += hex_chr.charAt(e >> 8 * j + 4 & 15) + hex_chr.charAt(e >> 8 * j & 15);
    return str
}
function str2blks_MD5(e) {
    for (nblk = (e.length + 8 >> 6) + 1, blks = new Array(16 * nblk), i = 0; i < 16 * nblk; i++)blks[i] = 0;
    for (i = 0; i < e.length; i++)blks[i >> 2] |= e.charCodeAt(i) << i % 4 * 8;
    return blks[i >> 2] |= 128 << i % 4 * 8, blks[16 * nblk - 2] = 8 * e.length, blks
}
function add(e, t) {
    var a = (65535 & e) + (65535 & t), n = (e >> 16) + (t >> 16) + (a >> 16);
    return n << 16 | 65535 & a
}
function rol(e, t) {
    return e << t | e >>> 32 - t
}
function cmn(e, t, a, n, r, o) {
    return add(rol(add(add(t, e), add(n, o)), r), a)
}
function ff(e, t, a, n, r, o, i) {
    return cmn(t & a | ~t & n, e, t, r, o, i)
}
function gg(e, t, a, n, r, o, i) {
    return cmn(t & n | a & ~n, e, t, r, o, i)
}
function hh(e, t, a, n, r, o, i) {
    return cmn(t ^ a ^ n, e, t, r, o, i)
}
function ii(e, t, a, n, r, o, i) {
    return cmn(a ^ (t | ~n), e, t, r, o, i)
}
function calcMD5(e) {
    for (x = str2blks_MD5(e), a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, i = 0; i < x.length; i += 16)olda = a, oldb = b, oldc = c, oldd = d, a = ff(a, b, c, d, x[i + 0], 7, -680876936), d = ff(d, a, b, c, x[i + 1], 12, -389564586), c = ff(c, d, a, b, x[i + 2], 17, 606105819), b = ff(b, c, d, a, x[i + 3], 22, -1044525330), a = ff(a, b, c, d, x[i + 4], 7, -176418897), d = ff(d, a, b, c, x[i + 5], 12, 1200080426), c = ff(c, d, a, b, x[i + 6], 17, -1473231341), b = ff(b, c, d, a, x[i + 7], 22, -45705983), a = ff(a, b, c, d, x[i + 8], 7, 1770035416), d = ff(d, a, b, c, x[i + 9], 12, -1958414417), c = ff(c, d, a, b, x[i + 10], 17, -42063), b = ff(b, c, d, a, x[i + 11], 22, -1990404162), a = ff(a, b, c, d, x[i + 12], 7, 1804603682), d = ff(d, a, b, c, x[i + 13], 12, -40341101), c = ff(c, d, a, b, x[i + 14], 17, -1502002290), b = ff(b, c, d, a, x[i + 15], 22, 1236535329), a = gg(a, b, c, d, x[i + 1], 5, -165796510), d = gg(d, a, b, c, x[i + 6], 9, -1069501632), c = gg(c, d, a, b, x[i + 11], 14, 643717713), b = gg(b, c, d, a, x[i + 0], 20, -373897302), a = gg(a, b, c, d, x[i + 5], 5, -701558691), d = gg(d, a, b, c, x[i + 10], 9, 38016083), c = gg(c, d, a, b, x[i + 15], 14, -660478335), b = gg(b, c, d, a, x[i + 4], 20, -405537848), a = gg(a, b, c, d, x[i + 9], 5, 568446438), d = gg(d, a, b, c, x[i + 14], 9, -1019803690), c = gg(c, d, a, b, x[i + 3], 14, -187363961), b = gg(b, c, d, a, x[i + 8], 20, 1163531501), a = gg(a, b, c, d, x[i + 13], 5, -1444681467), d = gg(d, a, b, c, x[i + 2], 9, -51403784), c = gg(c, d, a, b, x[i + 7], 14, 1735328473), b = gg(b, c, d, a, x[i + 12], 20, -1926607734), a = hh(a, b, c, d, x[i + 5], 4, -378558), d = hh(d, a, b, c, x[i + 8], 11, -2022574463), c = hh(c, d, a, b, x[i + 11], 16, 1839030562), b = hh(b, c, d, a, x[i + 14], 23, -35309556), a = hh(a, b, c, d, x[i + 1], 4, -1530992060), d = hh(d, a, b, c, x[i + 4], 11, 1272893353), c = hh(c, d, a, b, x[i + 7], 16, -155497632), b = hh(b, c, d, a, x[i + 10], 23, -1094730640), a = hh(a, b, c, d, x[i + 13], 4, 681279174), d = hh(d, a, b, c, x[i + 0], 11, -358537222), c = hh(c, d, a, b, x[i + 3], 16, -722521979), b = hh(b, c, d, a, x[i + 6], 23, 76029189), a = hh(a, b, c, d, x[i + 9], 4, -640364487), d = hh(d, a, b, c, x[i + 12], 11, -421815835), c = hh(c, d, a, b, x[i + 15], 16, 530742520), b = hh(b, c, d, a, x[i + 2], 23, -995338651), a = ii(a, b, c, d, x[i + 0], 6, -198630844), d = ii(d, a, b, c, x[i + 7], 10, 1126891415), c = ii(c, d, a, b, x[i + 14], 15, -1416354905), b = ii(b, c, d, a, x[i + 5], 21, -57434055), a = ii(a, b, c, d, x[i + 12], 6, 1700485571), d = ii(d, a, b, c, x[i + 3], 10, -1894986606), c = ii(c, d, a, b, x[i + 10], 15, -1051523), b = ii(b, c, d, a, x[i + 1], 21, -2054922799), a = ii(a, b, c, d, x[i + 8], 6, 1873313359), d = ii(d, a, b, c, x[i + 15], 10, -30611744), c = ii(c, d, a, b, x[i + 6], 15, -1560198380), b = ii(b, c, d, a, x[i + 13], 21, 1309151649), a = ii(a, b, c, d, x[i + 4], 6, -145523070), d = ii(d, a, b, c, x[i + 11], 10, -1120210379), c = ii(c, d, a, b, x[i + 2], 15, 718787259), b = ii(b, c, d, a, x[i + 9], 21, -343485551), a = add(a, olda), b = add(b, oldb), c = add(c, oldc), d = add(d, oldd);
    return rhex(a) + rhex(b) + rhex(c) + rhex(d)
}
var global_65 = "on";
xtnv = document, xtsd = "http://logc215", xtsite = "492987", "undefined" == typeof xt_multc && (xt_multc = ""), "undefined" == typeof xtn2 && (xtn2 = ""), xtdi = "", an = $("body").attr("an").replace("undefined", ""), ac = $("body").attr("ac").replace("undefined", ""), xt_an = an, xt_ac = ac, -1 != document.location.href.indexOf("abonnes.lequipe") ? xt_multc += "&x13=[abonnee]" : xt_multc += "&x13=[nonabonnee]", $("body:not(.servicesPage)").hasClass("article") && (xt_multc += "&x14=[Web_Gratuit]", $(".edito_auteur span").length > 0 ? xt_multc += "&x16=[" + $(".edito_auteur span").html() + "]" : xt_multc += "&x16=[Redaction]", $("#naveau-1").length > 0 && (xt_multc += "&x17=[" + $("#naveau-1 li.active a").text() + "]"), "undefined" != typeof $("body").attr("sport") && $("body").attr("sport").length > 0 && (xt_multc += "&x18=[" + $("body").attr("sport") + "]"), $(".date time").length > 0 && (xt_multc += "&x19=" + $(".date time").attr("datetime").substring(0, 10).replace(/\-/g, ""))), "Article" == $("body").attr("type") && ($("article .vignette-provenance").length > 0 && "/premium/img/issu_du_magazine.png" == $("article .vignette-provenance img").attr("src") ? xt_multc += "&x14=[Equipe_Mag]" : $("article .vignette-provenance").length > 0 && "/premium/img/issu_du_quotidien.png" == $("article .vignette-provenance img").attr("src") ? xt_multc += "&x14=[Quotidien_Payant]" : "articlejournal" == $("#popinArticle article").attr("data-content-type") ? xt_multc += "&x14=[Quotidien_Payant]" : xt_multc += "&x14=[Web_Payant]", $(".author span").length > 0 ? xt_multc += "&x16=[" + $(".author span").html() + "]" : xt_multc += "&x16=[Redaction]", $("article .tag.sport").attr("sport").length > 0 && (xt_multc += "&x18=[" + $("article .tag.sport").attr("sport") + "]"), $("article").attr("data-date").length > 0 && (xt_multc += "&x19=" + $("article").attr("data-date").substring(0, 10).replace(/\-/g, "")), "object" == typeof _userInfos && null != _userInfos && (1 != _userInfos.quotiAbonne ? xt_multc += "&x20=10" : xt_multc += "&x20=100", 1 != _userInfos.quotiAbonne ? xt_multc += "&x21=[Achat_acte]" : xt_multc += "&x21=[Abonnement]")), "undefined" == typeof Ads ? adblock = "on" : adblock = "off", "off" == adblock && ("undefined" == typeof Ads.display ? adblock = "on" : adblock = "off"), nbDivPub = $("[id*=Ads_]").length, scriptPub = $("script[src*='/v6/js/ads-'],script[src*='smartadserver.com']").length, createCookie("etat-adblock", adblock), "off" == adblock && document.removeEventListener("click", function (e) {
    return !0
}, !0), "/" != document.location.pathname && "/v6/adblock.html" != document.location.pathname && "abonnes.lequipe.fr" != document.location.hostname && "/votre-bloqueur-de-pub-est-active" != document.location.pathname && "/Fonctions/page_mentions.html" != document.location.pathname && "/recherche/search.php" != document.location.pathname && scriptPub > 0 && nbDivPub > 0 && "on" == adblock && (readCookie("social-adblock") || -1 != document.referrer.indexOf("lequipe.fr") || "" == document.referrer ? (console.log("%cMerci de désactiver votre ADBLOCK !!!! ", "font-size:20px"), 1 == is_orig ? console.log("Redirection adBlock") : document.location.href = "/votre-bloqueur-de-pub-est-active") : createCookie("social-adblock", 1)), ("/v6/adblock.html" == document.location.pathname || "/votre-bloqueur-de-pub-est-active" == document.location.pathname) && (createCookie("vu-adblock", 1), $(".btnBlock").click(function () {
    createCookie("etat-adblock", "off"), -1 != document.referrer.indexOf("lequipe.fr") && -1 == document.referrer.indexOf("/v6/adblock.html") && -1 == document.referrer.indexOf("/votre-bloqueur-de-pub-est-active") ? document.location = document.referrer : document.location = "/"
}), $("#menu li a[href!='/'],.drop-menu-content li a,.menuSportPlus,#menuGrey li a,#menuRight li a").unbind("click"), $("#menu li a[href!='/'],.drop-menu-content li a,.menuSportPlus,#menuGrey li a,#menuRight li a").off("click"), $("#menu li a[href!='/'],.drop-menu-content li a,.menuSportPlus,#menuGrey li a,#menuRight li a").click(function () {
    return !1
})), "object" == typeof _userInfos && null != _userInfos ? (xt_multc += "&x22=1", -1 != document.location.href.indexOf("abonnes.lequipe") ? xt_multc += "&x23=1" : xt_multc += "&x23=2") : xt_multc += "&x22=2", null != window.xtparam ? window.xtparam += "&ac=" + xt_ac + "&an=" + xt_an + xt_multc : window.xtparam = "&ac=" + xt_ac + "&an=" + xt_an + xt_multc;
var vitesseFade = 200, tpRefresh;
if ("undefined" == typeof sas_tmstp)var sas_tmstp = "";
var xtpage;
if ("undefined" == typeof xtpage)var xtpage = "no-xtpage::" + window.location.href.replace("http://www.lequipe.fr", "");
var lesport, upd, pageChrono = 0, pageVideo = 0, auto = "undef", pageChronoDerniereChargee = 0, is_bloc_directs, is_page_lives, is_fichematchlive, date = new Date, jour = new Date, numjour = jour.getDay(), pageAgenda = 1, agendaSelect = "#agenda #scrollerAgenda", agendaDernierePageCharge = 1, _url_compte_amateur_home = "/club/compte/formulaire_amateur.php", _url_quoti_achat_home = "/club/compte/paiement/prepare_paiement.php", isConnectedAmateur = !1, codetraking = "", svt_page = xtpage;
if (xtpage.indexOf("home") >= 0) {
    var ss = document.location.href.split("/");
    "undefined" == typeof sas_target && (sas_target = "@"), ss.length >= 3 && (sas_target = sas_target + ";" + ss[ss.length - 2].replace("-", "_").toUpperCase() + ";", sas_target = sas_target + ss[ss.length - 3].replace("-", "_").toUpperCase() + ";", sas_target = sas_target.replace("@;", ""))
}
cookieLequipeName = "lequipe-connected-infos";
var urlcourante = document.location.href;
-1 != urlcourante.indexOf("qlf-") && (cookieLequipeName += "-qlf");
var mpp_mode = !0;
$(function () {
    if (cookieLequipe(), init_lazyloads(), init_club(), init_premium(), init_menu(), init_chrono(), init_video(), init_livesBloc(), init_agenda(), init_tops(), quotiInitLiensHome(), watermark(), init_eservices(), checkBadBrowser(), blocsResultatsHomes(), init_orange(), resizeDatawrapper(), init66(), readCookie("vu-adblock") && "/v6/adblock-popin.html" != document.location.pathname && "/v6/adblock.html" != document.location.pathname && "off" == adblock && (conxpopup({
            width: 800,
            height: 480,
            html: "<iframe src='/v6/adblock-popin.html' width='800' height='480'/>"
        }), eraseCookie("vu-adblock")), "function" == typeof commentLoad && commentLoad(), $("body").hasClass("index") && -1 == window.location.href.indexOf("edito/homes"), "#activation" == window.location.hash && (conxpopup({
            width: 300,
            height: 150,
            html: "<iframe src='/v6/pop_in/activation-popin.html' width='600' height='300'/>"
        }), window.history.pushState("activationCompte", "", "/")), $("body").hasClass("HomePremium") || $(".big-Leader p").click(function () {
            openLinkHome($(this).parent().parent().find("h1 a,h2 a"))
        }), $(".Coleader .ZoneEdito p").click(function () {
            openLinkHome($(this).parent().find("h2 a"))
        }), $(".concours .content p").click(function () {
            openLinkHome($(this).parent().find("h3 a"))
        }), $(".concours img").click(function () {
            openLinkHome($(this).parent().parent().find("h3 a"))
        }), $(".blogs .blog p").click(function () {
            openLinkHome($(this).parent().find("h2 a"))
        }), $("#surfer-content .img-surfer img").click(function () {
            openLinkHome($(this).parent().find(".top-surf a"))
        }), $(".classement-surfer li").click(function () {
            openLinkHome($(this).find("a"))
        }), jQuery.support.placeholder = !1, test = document.createElement("input"), "placeholder" in test && (jQuery.support.placeholder = !0), jQuery.support.placeholder || setPlaceHolders(), $(window).bind("keyup", function (e) {
            return 27 == e.keyCode && $("#Ads_2078").size > 0 ? (e.originalEvent.keyCode = 0, $("#Ads_2078").hide(), !1) : 164 == e.keyCode || 186 == e.keyCode ? (e.originalEvent.keyCode = 0, $(".ads").fadeOut(500), !1) : void 0
        }), 0 != $(".sondage[idsondage]").length && createCookie("lequipe-sondage", 1), $(".videos.l1 .list ul").each(function () {
            pagin = parseInt(1e6 * Math.random()), $(this).next().find(".num .page span").addClass("currentPaging").addClass("currentPagin-" + pagin), $(this).next().find(".num .nbpage").addClass("totalPaging").addClass("totalPaging-" + pagin), $(this).jList("slide", {
                currentPaging: $(".currentPagin-" + pagin),
                totalPaging: $(".totalPaging-" + pagin)
            })
        }), $("#lastpremium ul").size() && $("#lastpremium ul").jList("slide", {
            speed: "slow",
            pager: !0,
            arrows: $("#lastpremium a.prev,#lastpremium a.next")
        }), $("#plusluspremium ul").size() && $("#plusluspremium ul").jList("slide", {
            speed: "slow",
            pager: !1,
            arrows: $("#plusluspremium a.prev,#plusluspremium a.next")
        }), $("[type*='EDITO'] .les-blocs,[type*='UNE'] .les-blocs,[type*='MINICOL'] .les-blocs").click(function () {
            return $(this).parent().find("a").attr("href") ? void(document.location.href = $(this).parent().find("a").attr("href")) : !1
        }), $(".videos.actus .list ul").size() && $(".videos.actus .list ul").each(function () {
            $(this).next().find(".num .page").addClass("currentPaging"), $(this).next().find(".num .nbpage").addClass("totalPaging"), $(this).jList("slide", {
                currentPaging: $(this).next().find(".num .page"),
                totalPaging: $(this).next().find(".num .nbpage")
            })
        }), $(".partageons .cc_part").length > 0 && $(".partageons .cc_part").delay(250).animate({opacity: 1}, 500), $("#liste_club").length > 0 && 0 == $("#liste_club.NBA").length) {
        $("#liste_club + #col-gauche").length > 0 && $("#col-gauche").css("padding-top", "0");
        var e = $("#liste_club a img").width();
        manageClubList($("#liste_club > a"), e)
    }
    $(".partageons.duhaut").length > 0 && (floatingPartage(), $(window).scroll(function () {
        floatingPartage()
    }), $(window).resize(function () {
        floatingPartage()
    }), u = location.href, $("body").hasClass("article") ? t = $("#col-gauche h1 strong").html() : $("body").hasClass("quizz") ? t = $("title").html() : t = $("#col-gauche h1").text(), function (e, t, a) {
        var n, r = e.getElementsByTagName(t)[0];
        e.getElementById(a) || (n = e.createElement(t), n.id = a, n.src = "//connect.facebook.net/fr_FR/sdk.js", r.parentNode.insertBefore(n, r))
    }(document, "script", "facebook-jssdk"), window.fbAsyncInit = function () {
        FB.init({appId: "261959740493169", status: !0, cookie: !0, xfbml: !0, version: "v2.3"})
    }, window.fbAsyncInit(), "undefined" != typeof twttr && twttr.events.bind("tweet", function (e) {
        location.href;
        $.get("/v6/php/socialCountUpdate.php?provider=google&href=" + u), $.get("/v6/php/socialCountUpdate.php?provider=twitter&href=" + u, function (e) {
            parseInt(e) && $(".shareCount b").html(parseInt(e)), checkShareCountColor()
        })
    }), getShareCount()), is_page_lives = $("#Directs a#refresh").hasClass("allo_direct"), is_page_lives && init_pageLives(), setTimeout(function () {
        0 == $("#bt-refresh.rotate").length && $("#Placar").length >= 1 ? init_matchLive() : $("a#refresh .minute").hide()
    }, 1e3), init_countdownOreillette(), init_orange_popunder(), afficheBlocsProgHomes()
});
var isMenuOver = !1, timerMenu = null, conxpopup = function (e) {
    var t = $.extend({width: 400, height: 100, html: "", load: !1, onload: !1}, e);
    $("body #connexbackground").size() && $("body #connexbackground").remove(), $("body #connexpopup").size() && $("body #connexpopup").remove(), $("body").append('<div id="connexbackground" class="popin-background"></div><div id="connexpopup" class="popin-lequipe"><div class="head"><a href="#" class="close"></a></div><div class="body"></div></div>'), $("#connexpopup").css({
        width: t.width,
        height: t.height,
        marginLeft: -t.width / 2,
        marginTop: -t.height / 2
    }), $("#connexbackground").fadeIn("fast", function () {
        $("#connexpopup").fadeIn("fast")
    }), $("#connexpopup a.close, #connexbackground").on("click", function () {
        return $("#connexpopup").fadeOut("fast", function () {
            $("#connexpopup").remove(), $("#connexbackground").fadeOut("fast", function () {
                $("#connexbackground").remove()
            })
        }), !1
    }), t.html ? $("#connexpopup .body").html(t.html) : "string" == typeof t.load ? $.ajax({
        url: t.load,
        type: "GET",
        dataType: "html",
        success: function (e) {
            $("#connexpopup .body").html(e), t.onload && t.onload()
        }
    }) : "object" == typeof t.load && ($("#connexpopup .body").html(t.load), t.onload && t.onload()), $(window).on("keydown", function (e) {
        27 == e.keyCode && $("#connexpopup a.close").trigger("click")
    })
}, setUserConnect = function () {
    document.cookie = "lequipe-connected-infos=; path=/; domain=www.lequipe.fr; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    var e = "lequipe-connected-infos", t = document.location.href;
    if (-1 != t.indexOf("qlf-") && (e += "-qlf"), $.cookie(e) && !isOptOut()) {
        if (_userInfos = jQuery.parseJSON($.cookie(e)), $("body").trigger("lequipe-checklogin", _userInfos), !$("#social-links a.profil").hasClass("connected") || !$(".connectMenu").hasClass("connected")) {
            $("#social-links a.profil,.connectMenu").addClass("connected"), $(".connectMenu").addClass("connected");
            var a = _userInfos.nickname;
            "" != _userInfos.firstname && null != _userInfos.firstname && "" != _userInfos.lastname && null != _userInfos.lastname && (a = _userInfos.firstname + " " + _userInfos.lastname), $("#social-links .box .text, .connectMenu li.lienTete").text(a), $(".liens-profil span.name-abonne").text(a)
        }
        if (65 == _userInfos.quotiOffre || 633258 == _userInfos.id) {
            var n = readCookie("PopinRyder");
            1 != n && (conxpopup({
                width: 720,
                height: 395,
                html: "<a href='/Golf/'><img src='/premium/img/popin_rydercup.jpg'/></a>"
            }), createCookie("PopinRyder", 1, 10))
        }
        "undefined" != typeof _userInfos.statusEstore && "pdf-only" == _userInfos.statusEstore && ($("#quotidien a.achat").remove(), $("#quotidien a.une-quotidien").after('<a class="achat QuotLire" href=""><span></span><b>LIRE</b> L\'ÉDITION DU JOUR</a><a class="achat archive" href=""><span></span><b>LES ÉDITIONS</b> PRÉCÉDENTES</a>'), $("#quotidien .une-quotidien,#quotidien .QuotLire").attr("href", "/Quotidien/liseuse.php"), $("#quotidien .archive").attr("href", "/premium/mes-editions/"))
    } else _userInfos = null, $("body").trigger("lequipe-checklogin", !1), ($("#social-links a.profil").hasClass("connected") || $(".connectMenu").hasClass("connected")) && ($("#social-links a.profil").removeClass("connected open"), $(".connectMenu a").removeClass("active")), $("#popinArticle").length && $("#social-links a.profil").length && !$("#social-links a.profil").hasClass("connected") && $("#popinArticle .signin").addClass("view");
    return clubconnectedCheckLogged(clubconnectedSetup), _userInfos
};
if ($(window).load(function () {
        $("#sas_2077").length > 0 && $("#sas_2077").children("script").length >= 2 && $(".block.pb_630").css("padding", "0");
        var e = 0;
        $("#nav-content.NavSport ul#menu").width(""), $("#nav-content.NavSport ul#menu > li").each(function () {
            this.offsetTop > 0 || (e += $(this).outerWidth(!0))
        }), $("#nav-content.NavSport ul#menu").width(e + 2), $(window).resize(function () {
            var e = 0;
            $("#nav-content.NavSport ul#menu").width(""), $("#nav-content.NavSport ul#menu > li").each(function () {
                this.offsetTop > 0 || (e += $(this).outerWidth(!0))
            }), $("#nav-content.NavSport ul#menu").width(e + 2)
        })
    }), ggLogin = function (e) {
        return console.log("ggLogin"), $("#ggloginBtn").hasClass("is-loading") ? !1 : ($("#ggloginBtn").addClass("is-loading"), void(e.access_token ? gapi.client.load("plus", "v1").then(function () {
            var t = gapi.client.plus.people.get({userId: "me"});
            t.then(function (t) {
                var a = {};
                a.provider = "google", a.code = e.code, a.token = e.access_token, a.id = t.result.id, a.email = t.result.emails[0].value, a.full_name = t.result.displayName, a.first_name = t.result.name.givenName, a.last_name = t.result.name.familyName, a.gender = t.result.gender, a.lang = t.result.language, a.image = t.result.image.url, a.link = t.result.url, $(document).trigger("connection-login-ext", [a])
            }, function (e) {
                $("#ggloginBtn").removeClass("is-loading")
            })
        }) : e.error && $("#ggloginBtn").removeClass("is-loading")))
    }, "undefined" != typeof taggage && "ON" == taggage) {
    var at_url = document.location.href.toLowerCase(), at_repUrl = at_url.toLowerCase().split("/")[3];
    if ("undefined" == typeof pageTypeIndicators)var pageTypeIndicators = "";
    if ("undefined" == typeof at_typePage)var at_typePage = "";
    if ("undefined" == typeof atname)var atname = "";
    if ("undefined" == typeof atchapter0)var atchapter0 = "";
    if ("undefined" == typeof atchapter1)var atchapter1 = "";
    if ("undefined" == typeof atchapter2)var atchapter2 = "";
    if ("undefined" == typeof atchapter3)var atchapter3 = "";
    var keyword = "", resultPageNumber = "";
    if ("undefined" == typeof s13)var s13 = "";
    if ("undefined" == typeof s14)var s14 = "";
    if ("undefined" == typeof s16)var s16 = "";
    if ("undefined" == typeof s17)var s17 = "";
    if ("undefined" == typeof s18)var s18 = "";
    if ("undefined" == typeof s19)var s19 = "";
    if ("undefined" == typeof s20)var s20 = "";
    if ("undefined" == typeof s21)var s21 = "";
    if ("undefined" == typeof s22)var s22 = "";
    if ("undefined" == typeof s23)var s23 = "";
    if ("undefined" == typeof s26)var s26 = "";
    if ("undefined" == typeof s27)var s27 = "";
    if ("undefined" == typeof s28)var s28 = "";
    if ("undefined" == typeof s29)var s29 = "";
    if ("undefined" == typeof s30)var s30 = "";
    if ("undefined" == typeof s31)var s31 = "";
    if ("undefined" == typeof at_typePage)var at_typePage = "";
    if ("undefined" == typeof special)var special = "";
    if ("undefined" == typeof patrim)var patrim = "";
    if ("undefined" == typeof at_visitor)var at_visitor = "";
    if ("undefined" == typeof _recherche)var _recherche = "";
    if ("undefined" == typeof at_visitor_cat)var at_visitor_cat = "";
    if ("undefined" != typeof xtn2)var xtn2 = xtn2; else xtn2 = "";
    if (s13 = -1 != document.location.href.indexOf("abonnes.lequipe") ? "abonnee" : "nonabonnee", s23 = "undefined" == typeof Ads ? "0" : "1", "object" == typeof _userInfos && null != _userInfos ? (s22 = "1", at_visitor = _userInfos.id, at_visitor_cat = "M" == _userInfos.gender ? 1 == _userInfos.quotiAbonne ? 1 : 2 : "F" == _userInfos.gender ? 1 == _userInfos.quotiAbonne ? 3 : 4 : 5) : s22 = "2", "undefined" != typeof xtpage && "home" == at_typePage && ("undefined" != typeof xtpage && -1 == xtpage.indexOf("no-xtpage") ? (AtTableau = xtpage.toLowerCase().split("::"), 3 == AtTableau.length ? (atchapter1 = AtTableau[1], atchapter2 = "", ("wtf" == atchapter1 || "medias" == atchapter1) && (atchapter1 = ""), atname = "home_" + AtTableau[0], -1 != at_url.indexOf("ski-glace") && (atchapter1 = "")) : 2 == AtTableau.length ? (atname = "home_" + AtTableau[0], atchapter1 = "") : atname = "home_" + AtTableau[0], s18 = AtTableau[0].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_"), "tous_sports" == s18 && (s18 = AtTableau[1])) : (AtTableau = at_url.toLowerCase().split("/"), 7 == AtTableau.length || 8 == AtTableau.length ? (("" == atchapter1 || atchapter1 != AtTableau[5]) && (atchapter1 = AtTableau[5]), atname = "home_" + AtTableau[3]) : 6 == AtTableau.length ? (atname = "home_" + AtTableau[3], atchapter1 = AtTableau[4], -1 != at_url.indexOf("ski-glace") && (atchapter1 = "")) : 5 == AtTableau.length ? (atname = "home_" + AtTableau[3], atchapter1 = "") : (atname = "home_general", atchapter1 = ""), -1 != at_url.indexOf("ski-glace") && (atname = "home_ski-glace"), s18 = at_url.toLowerCase().split("/").slice(3)[0].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_")), s17 = atchapter1 = atchapter1.toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace("_2016", "").replace("_football", "").replace("_rugby", ""), atname = atname.toLowerCase().replace(/\-/g, "_").replace("aussi", "tous_sports").replace("aussi", "tous_sports").replace("tssports", "tous_sports").replace("formule_1", "formule1"), (-1 != at_url.indexOf("ski") || $("body").attr("sport") && "ski" == $("body").attr("sport").toLowerCase()) && (atname = atname.replace("tous-sports", "ski_glace").replace("tous_sports", "ski_glace")), -1 != at_url.indexOf("wtf/") && (xtn2 = "31", atname = "home_wtf"), -1 != at_url.indexOf("explore/") && (xtn2 = "35", atname = "home_explore"), (-1 != at_url.indexOf("snowboard") || -1 != at_url.indexOf("curling") || -1 != at_url.indexOf("short-track") || -1 != at_url.indexOf("patinage-de-vitesse")) && (atname = "home_ski_glace"), -1 != at_url.indexOf("voile") && (xtn2 = "16"), "home_football" == atname && "france" == atchapter1 && (atchapter1 = "equipe_de_france"), "home_rugby" == atname && "france_fra" == atchapter1 && (atchapter1 = "XV_de_france"), "home_tous_sports" == atname && "" != atchapter1 && (atname = "home_" + atchapter1), "home_ski_glace" == atname && "" != atchapter1 && (atname = "home_" + atchapter1, xtn2 = "19", s18 = "ski_glace"), -1 != at_url.indexOf("cyclisme-sur-route/") && "cyclisme_sur_route" == atchapter1 && (xtn2 = "14", atchapter1 = at_url.split("/").slice(-2)[0].replace(/\-/g, "_").replace(/\ /g, "_")), "" == atchapter1 && $(".h1auto h1").length > 0 && (s17 = atchapter1 = $(".h1auto h1").text().toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_")), $("body").attr("sport") ? atsport = $("body").attr("sport").toLowerCase() : atsport = "Aussi", (-1 != at_url.indexOf("ski") || "ski" == atsport) && (xtn2 = 19, s18 = "ski_glace"), (-1 != at_url.indexOf("golf") || "golf" == atsport) && (xtn2 = 13), (-1 != at_url.indexOf("cyclisme") || "cyclisme" == atsport) && (xtn2 = 14), (-1 != at_url.indexOf("rugby") || "rugby" == atsport) && (xtn2 = 8), (-1 != at_url.indexOf("natation") || "natation" == atsport) && (xtn2 = 15), -1 != at_url.indexOf("/resultats/") && (atname = "resultats_general", atchapter1 = "divers"), -1 != at_url.indexOf("handball") && (xtn2 = 12), -1 != at_url.indexOf("jeux-video") && (xtn2 = "34", atname = "home_jeux_video", s18 = "jeux_video", atchapter1 = ""), -1 != at_url.indexOf("/medias") && (xtn2 = "23", atname = "home_medias", s17 = "divers", s18 = "medias", atchapter1 = "general"), -1 != at_url.indexOf("/facebook") && (xtn2 = "23", atname = "home_facebook", s17 = "divers", s18 = "facebook", atchapter1 = "general"), -1 != at_url.indexOf("/twitter") && (xtn2 = "23", atname = "home_twitter", s17 = "divers", s18 = "twitter", atchapter1 = "general"), ("" == s17 || s17.replace(/\-/g, "_") == s18.replace(/\-/g, "_")) && (s17 = "divers"), s18 = s18.replace("formule_1", "formule1")), "undefined" != typeof xtpage && "patrimonial" == at_typePage) {
        lxitiP = 1;
        var pageTypeIndicators = "patrimonial", patrim = 1;
        if (s14 = $("article .vignette-provenance").length > 0 && "/premium/img/issu_du_magazine.png" == $("article .vignette-provenance img").attr("src") ? "[Equipe_Mag]" : $("article .vignette-provenance").length > 0 && "/premium/img/issu_du_quotidien.png" == $("article .vignette-provenance img").attr("src") ? "[Quotidien_Payant]" : "articlejournal" == $("#popinArticle article").attr("data-content-type") ? "[Quotidien_Payant]" : "[Web_Payant]", $(".author span").length > 0 ? s16 += "[" + $(".author span").html() + "]" : s16 = "[Redaction]", $("article .tag.sport").attr("sport").length > 0 && (s18 = "[" + $("article .tag.sport").attr("sport") + "]"), $("article").attr("data-date").length > 0 && (s19 = "article" == $("article").attr("data-content-type") ? "[" + $("article").attr("data-date").replace(/\//g, "").substring(4) + $("article").attr("data-date").replace(/\//g, "").substring(2, 4) + $("article").attr("data-date").replace(/\//g, "").substring(0, 2) + "]" : "[" + $("article").attr("data-date").replace(/\-/g, "").substring(0, 4) + $("article").attr("data-date").replace(/\-/g, "").substring(4, 6) + $("article").attr("data-date").replace(/\-/g, "").substring(6, 8) + "]"), "object" == typeof _userInfos && null != _userInfos && (s20 = 1 != _userInfos.quotiAbonne ? "10" : "100", s21 = 1 != _userInfos.quotiAbonne ? "[Achat_acte]" : "[Abonnement]"), "undefined" != typeof xtpage) {
            "undefined" != typeof $("article.article").data("xtpage") ? AtTableau = $("article.article").data("xtpage").split("::") : AtTableau = xtpage.toLowerCase().split("::"), "no-xtpage" == AtTableau[0] ? (atname = AtTableau[1].split("/").slice(-2)[0] + "_" + AtTableau[1].split("/").slice(-1)[0].substring(0, 6), s30 = AtTableau.slice(-1)[0], atchapter1 = AtTableau[1].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_"), at_typePage = AtTableau[1].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace("patrimonial", "premium"), s18 = AtTableau[0].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_")) : (atname = AtTableau.slice(-2)[0] + "_" + AtTableau.slice(-1)[0], s30 = AtTableau.slice(-1)[0], atchapter1 = AtTableau[1].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_"), at_typePage = "article" == $("article").attr("data-content-type") ? AtTableau[1].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace("patrimonial", "premium").replace("breve", "premium").replace("premiumfree", "premium_free") : at_url.indexOf("abonnes.lequipe.fr") > -1 ? "premium_full" : "premium_preview", s18 = AtTableau[0].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_"));
            var s28 = "news_premium";
            atchapter2 = "news", s17 = atchapter1 = "string" == typeof xtcompetition && null != xtcompetition && "news" != xtcompetition.split("::")[1] ? xtcompetition.split("::")[1].replace(/\-/g, "_").replace(/\ /g, "_").replace("cyclisme_sur_route", "cyclisme").replace("formule_1", "formule1").replace(/\'/g, "_").replace(" ", "").replace("é", "e").replace("ê", "e").replace("ë", "e").replace("ï", "i").replace("à", "a").replace("è", "e").replace("ö", "o").replace("ô", "o").replace("ñ", "n").replace("toussports", "tous_sports").replace("tssports", "tous_sports") : "divers", atchapter2 = atchapter2.replace(/\-/g, "_").replace(/\ /g, "_"), atname = atname.replace(/\-/g, "_").replace(/\ /g, "_"),
            "tous_sports" == atchapter1 && (s17 = atchapter1 = "divers")
        } else console.log("no::::::xtttttt")
    }
    if ("undefined" != typeof xtpage && "news" == at_typePage && 1 != patrim) {
        var pageTypeIndicators = "articles";
        $("body:not(.servicesPage)").hasClass("article") && (s14 = "[web_Gratuit]", s16 = $(".edito_auteur span").length > 0 ? "[" + $(".edito_auteur span").html().trim().toLowerCase().replace(/\ /g, "_").replace(" ", "").replace("é", "e").replace("ê", "e").replace("ë", "e").replace("ï", "i").replace("à", "a").replace("è", "e").replace("ö", "o").replace("ô", "o").replace("ñ", "n") + "]" : "[Redaction]", "" == s17 && (s17 = $("#naveau-2").length > 0 ? "[" + $("#naveau-2 h3 a").attr("href").toLowerCase().replace(/\-/g, "_").split("/")[2] + "]" : ""), $("body").attr("sport").length > 0 && (s18 = "[" + $("body").attr("sport").toLowerCase().replace(/\-/g, "_").replace(" sur route", "") + "]"), $(".date time").length > 0 && (s19 = "[" + $(".date time").attr("datetime").substring(0, 10).replace(/\-/g, "") + "]"), "undefined" != typeof mots_cles ? s29 = "[" + mots_cles.toLowerCase().replace(/\ /g, "_").replace(" ", "").replace("é", "e").replace("ê", "e").replace("ë", "e").replace("ï", "i").replace("à", "a").replace("è", "e").replace("ö", "o").replace("ô", "o").replace("ñ", "n") + "]" : mots_cles = "", videoInterne = 0, videoExterne = 0, $("#col-gauche article iframe").each(function () {
            $(this).attr("src") && (iframeSrc = $(this).attr("src"), iframeSrc.indexOf("dailymotion") > 0 ? videoInterne = 1 : iframeSrc.indexOf("youtube") > 0 && (videoExterne = 1))
        }), s27 = 1 == videoInterne ? 1 == videoExterne ? 3 : 1 : 1 == videoExterne ? 2 : 0, nbPhotos = 0, $("#col-gauche article img").each(function () {
            $(this).attr("src") && (imgSrc = $(this).attr("src"), imgSrc.indexOf("medias.lequipe.fr") > 0 && (nbPhotos += 1))
        }), s26 = nbPhotos), "undefined" != typeof xtpage ? (AtTableau = xtpage.toLowerCase().split("::"), atname = AtTableau.slice(-2)[0] + "_" + AtTableau.slice(-1)[0], "breve" == AtTableau.slice(-2)[0] && (atname = at_url.split("/").slice(-2)[0] + "_" + AtTableau.slice(-1)[0]), at_typePage = "news", s30 = AtTableau.slice(-1)[0].substr(-6), s18 = atchapter0 = AtTableau[0].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace("toussports", "tous_sports").replace("tssports", "tous_sports"), -1 == AtTableau[1].indexOf("transferts-") && (atchapter1 = AtTableau[1].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace("cyclisme_sur_route", "cyclisme").replace("formule_1", "formule1").replace(/\'/g, "_").replace(" ", "").replace("é", "e").replace("ê", "e").replace("ë", "e").replace("ï", "i").replace("à", "a").replace("è", "e").replace("ö", "o").replace("ô", "o").replace("ñ", "n").replace("toussports", "tous_sports").replace("tssports", "tous_sports").replace("d1", "ligue_1").replace("d2", "ligue_2"), "wim" == atchapter1 && (atchapter1 += "bledon")), "undefined" != typeof AtTableau[2] && (atchapter2 = AtTableau[2].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace("cyclisme_sur_route", "cyclisme").replace("formule_1", "formule1").replace(/\'/g, "_").replace(" ", "").replace("é", "e").replace("ê", "e").replace("ë", "e").replace("ï", "i").replace("à", "a").replace("è", "e").replace("ö", "o").replace("ô", "o").replace("ñ", "n").replace("toussports", "tous_sports").replace("tssports", "tous_sports").replace("breve", "")), "skiglace" == atchapter0 && (s17 = atchapter2 = atchapter1.toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace("cyclisme_sur_route", "cyclisme").replace("formule_1", "formule1").replace(/\'/g, "_").replace(" ", "").replace("é", "e").replace("ê", "e").replace("ë", "e").replace("ï", "i").replace("à", "a").replace("è", "e").replace("ö", "o").replace("ô", "o").replace("ñ", "n").replace("toussports", "tous_sports").replace("tssports", "tous_sports"), s18 = atchapter1 = $("body").attr("sport").replace(/\-/g, "_").replace(/\ /g, "_").replace("skiglace", "ski_glace").toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace("cyclisme_sur_route", "cyclisme").replace("formule_1", "formule1").replace(/\'/g, "_").replace(" ", "").replace("é", "e").replace("ê", "e").replace("ë", "e").replace("ï", "i").replace("à", "a").replace("è", "e").replace("ö", "o").replace("ô", "o").replace("ñ", "n").replace("toussports", "tous_sports").replace("tssports", "tous_sports")), ("divers" == atchapter1 || atchapter1 == atchapter0 || "news" == atchapter1) && (atchapter1 = $(".SousMenu h3 a").attr("href") ? $(".SousMenu h3 a").text().trim().toLowerCase().replace(/\-/g, "_").replace(/\'/g, "_").replace(/\ /g, "_") : "tennis" == atchapter0 && "undefined" != typeof $("h1 span:not(.surtitre-black)") && $("h1 span:not(.surtitre-black)").length ? $("h1 span:not(.surtitre-black)").text().trim().toLowerCase().replace(/\ /g, "_").replace(/\-/g, "_").replace("é", "e").replace("ê", "e").replace("ë", "e").replace("ï", "i").replace("à", "a").replace("è", "e").replace("ö", "o").replace("ô", "o").replace("ñ", "n") : "undefined" != typeof $("h1 .surtitre-black") && $("h1 .surtitre-black").length ? $("h1 .surtitre-black").text().trim().toLowerCase().replace(/\ /g, "_").replace(/\-/g, "_").replace("é", "e").replace("ê", "e").replace("ë", "e").replace("ï", "i").replace("à", "a").replace("è", "e").replace("ö", "o").replace("ô", "o").replace("ñ", "n") : "divers"), $("body").hasClass("Aussi") && (s18 = atchapter1 = AtTableau[1], s17 = "divers"), "wtf" == AtTableau[1] && (atchapter1 = atchapter2, s18 = "tous_sports" == atchapter0 ? atchapter1 : atchapter0.replace("skiglace", "ski_glace"), s17 = atchapter2, "wtf" == s17 && (s17 = "divers"), xtn2 = 31, special = 1), ("jeux-video" == AtTableau[1] || "jeuxvideos" == AtTableau[1]) && (atchapter1 = atchapter2, s18 = atchapter0, s17 = atchapter2, xtn2 = 34, special = 1), "medias" == AtTableau[1] && (atchapter1 = atchapter2, s18 = atchapter0, xtn2 = ""), -1 != at_url.indexOf("volley-ball/") && ("volley_ball" != atchapter1 && (s17 = atchapter2 = AtTableau[1]), s18 = atchapter1 = "volley_ball"), $("body").hasClass("Ski-Glace") && (atchapter1 = atchapter2, atchapter2 = "")) : (AtTableau = window.location.href.replace("http://www.lequipe.fr/", "").replace("http://orig-www.lequipe.fr/", "").replace("http://abonnes.lequipe.fr/", "").split("/"), ("undefined" == typeof atchapter1 || "" == atchapter1) && (atchapter1 = "divers"), at_typePage = "news", atname = AtTableau.slice(-2)[0] + "_" + AtTableau.slice(-1)[0], s30 = AtTableau.slice(-1)[0].substr(-6)), atname = atname.replace(/\-/g, "_").replace(/\ /g, "_").replace("news_", ""), $("body").hasClass("Wtf") && (xtn2 = 31), window.location.href.toLowerCase().indexOf("football") && "france" == atchapter1 && (atchapter1 = "equipe_de_france"), window.location.href.toLowerCase().indexOf("rugby") && "fra-france" == atchapter2 && (atchapter2 = "XV_de_france"), ("" == s17 || "divers" != atchapter1 && "volley_ball" != atchapter1 && 1 != special) && (s17 = atchapter1), "volley_ball" == atchapter1.replace(/\-/g, "_") && ("volley_ball" == atchapter2.replace(/\-/g, "_") ? (atchapter1 = "divers", atchapter2 = "") : (atchapter1 = atchapter2, atchapter2 = "")), s17.replace(/\-/g, "_").replace("formule_1", "formule1") == s18.replace(/\-/g, "_") && (s17 = "divers"), ("wtf" == s18 || "medias" == s18) && (s18 = s17, s17 = "divers"), at_typePage = at_typePage.toLowerCase().replace(/\-/g, "_"), atchapter1 = atchapter1.toLowerCase().replace(/\-/g, "_"), atchapter2 = atchapter2.toLowerCase().replace(/\-/g, "_"), ("divers" == atchapter2 || "news" == atchapter2 || "divers" == atchapter2 || atchapter2 == atname.replace("news_", "") || atchapter1 == atchapter2) && (atchapter2 = ""), ("divers" == atchapter1 || "news" == atchapter1) && (atchapter2 = ""), "medias" == atchapter1 && (atchapter1 = atchapter2, atchapter2 = ""), "wtf" == atchapter1 && (atchapter1 = "divers"), 1 != special && ($("body").attr("sport") ? atsport = $("body").attr("sport").toLowerCase() : atsport = "Aussi", (-1 != at_url.indexOf("ski") || "ski" == atsport) && (xtn2 = 19), (-1 != at_url.indexOf("golf") || "golf" == atsport) && (xtn2 = 13), (-1 != at_url.indexOf("cyclisme") || "cyclisme" == atsport) && (xtn2 = 14), (-1 != at_url.indexOf("rugby") || "rugby" == atsport) && (xtn2 = 8), (-1 != at_url.indexOf("natation") || "natation" == atsport) && (xtn2 = 15), -1 != at_url.indexOf("handball") && (xtn2 = 12))
    }
    if ("undefined" != typeof xtpage && "base" == at_typePage && ("" == atchapter1 && (atchapter1 = "undefined" != typeof xtpage && 3 == xtpage.split("::").length ? xtpage.toLowerCase().split("::")[1].replace(/\ /g, "_").replace(/\-/g, "_") : "universel" != at_repUrl ? at_repUrl : "divers"), ("classements" == at_repUrlUri || "classement" == at_repUrlUri || -1 != at_url.indexOf("_cla_") || -1 != at_url.indexOf("dakar") && -1 != at_url.indexOf("classement")) && (atname = "classement", -1 != at_url.indexOf("_d") ? atname += "_domicile" : -1 != at_url.indexOf("_e.") ? atname += -1 != at_url.indexOf("nba") ? "_est" : "_exterieur" : -1 != at_url.indexOf("_r.") ? atname += "_relief" : -1 == at_url.indexOf("_f.") || -1 == at_url.indexOf("football") && -1 == at_url.indexOf("rugby") ? -1 != at_url.indexOf("_but") || -1 != at_url.indexOf("/but_") || -1 != at_url.indexOf("-buteurs.") ? atname += "_buteurs" : -1 != at_url.indexOf("_p.") ? atname += "_passeurs" : -1 != at_url.indexOf("-pilotes.") ? atname += "_pilotes" : -1 != at_url.indexOf("-ecuries.") ? atname += "_ecuries" : -1 != at_url.indexOf("_w.") ? atname += "_ouest" : -1 != at_url.indexOf("atp-") ? atchapter1 = "atp" : -1 != at_url.indexOf("dakar") ? (-1 != at_url.indexOf("auto") && (atname += "_auto"), -1 != at_url.indexOf("moto") && (atname += "_moto"), -1 != at_url.indexOf("camion") && (atname += "_camion"), -1 != at_url.indexOf("quad") && (atname += "_quad")) : -1 != at_url.indexOf("wta-") ? atchapter1 = "wta" : (-1 != at_url.indexOf("football") || -1 != at_url.indexOf("rugby")) && (atname += "_general") : atname += "_fairplay"), ("resultats" == at_repUrlUri || "championnats" == at_repUrlUri && -1 != at_url.indexOf("natation") || -1 != at_url.indexOf("_res_")) && (atname = "resultat", -1 != at_url.indexOf("_general") && (atname += "_general"), -1 != at_url.indexOf("_etape") && (atname += "_etape"), -1 != at_url.indexOf("_montagne") ? atname += "_montagne" : -1 != at_url.indexOf("dakar") && (-1 != at_url.indexOf("auto") && (atname += "_auto"), -1 != at_url.indexOf("moto") && (atname += "_moto"), -1 != at_url.indexOf("camion") && (atname += "_camion"), -1 != at_url.indexOf("quad") && (atname += "_quad")), -1 != at_url.indexOf("_jeune") && (atname += "_jeune"), -1 != at_url.indexOf("_points") && (atname += "_points"), -1 != at_url.indexOf("_equipe") && (atname += "_equipes"), -1 != at_url.indexOf("/circuits/") && (atname += "_circuit")), ("palmares" == at_repUrlUri || "records" == at_repUrlUri) && (atname = "records", -1 != at_url.indexOf("/pal_") && (atname = "palmares")), "medailles" == at_repUrlUri && (atname = "medailles"), "programmes" == at_repUrlUri && -1 != at_url.indexOf("/prog_") && (atname = "programme"), "fiches" == at_repUrlUri && -1 != at_url.indexOf("circuits") && (atname = "circuit"), (-1 != at_url.indexOf("calendrier") || -1 != at_url.indexOf("cal_")) && (atname = "calendrier", -1 != at_url.indexOf("pga-tour") && (atchapter1 = "pga_tour"), -1 != at_url.indexOf("tour-europeen") && (atchapter1 = "tour_europeen"), -1 != at_url.indexOf("atp-") && (atchapter1 = "atp"), -1 != at_url.indexOf("wta-") && (atchapter1 = "wta")), -1 != at_url.indexOf("dakar") && (atchapter1 = "dakar", -1 != at_url.indexOf("_part_") && (-1 != at_url.indexOf("auto") && (atname = "participants_auto"), -1 != at_url.indexOf("moto") && (atname = "participants_moto"), -1 != at_url.indexOf("camion") && (atname = "participants_camion"), -1 != at_url.indexOf("quad") && (atname = "participants_quad"))), ("tableaux" == at_repUrlUri || "tableau" == at_repUrlUri) && (atname = "tableau", -1 != at_url.indexOf("/sh_") && (atname += "_simple_hommes"), -1 != at_url.indexOf("/sd_") && (atname += "_simple_dames"), -1 != at_url.indexOf("/dh_") && (atname += "_double_hommes"), -1 != at_url.indexOf("/dd_") && (atname += "_double_femmes")), "coupe-davis" == at_repUrlUri && (atchapter1 = "coupe_davis", atname = "tableau"), "tableau-bord" == at_repUrlUri && (atname = "tableau_bord"), -1 != at_url.indexOf("_fra_") && (atname = "francais"), (-1 != at_url.indexOf("stats") || "stats" == at_repUrlUri) && (atname = "statistiques", -1 != at_url.indexOf("francais") && (atname += "_francais"), -1 != at_url.indexOf("mqr_") && (atname += "_marqueurs")), -1 != at_url.indexOf("palmares") && (atname = "palmares"), -1 != at_url.indexOf("programme") && (atname = "programme"), (-1 != at_url.indexOf("fichejoueur") || -1 != at_url.indexOf("fichecoureur") || -1 != at_url.indexOf("ficheathlete") || -1 != at_url.indexOf("ficheentraineur") || -1 != at_url.indexOf("ficheequipe") || -1 != at_url.indexOf("fichepilote") || -1 != at_url.indexOf("ficheecurie") || -1 != at_url.indexOf("/tfj") || -1 != at_url.indexOf("ficheskieur")) && (atchapter2 = "fiches_joueurs", (-1 != at_url.indexOf("ficheequipe") || -1 != at_url.indexOf("ficheecurie")) && (atchapter2 = "fiches_equipe"), -1 != at_url.indexOf("ficheentraineur") && (atchapter2 = "fiches_entraineurs"), "golf" == atchapter1 && (atchapter1 = atchapter2, atchapter2 = ""), atname = $.trim($("h1").text().toLowerCase()).replace(/\ /g, "_").replace("é", "e").replace("ê", "e").replace("ë", "e").replace("ï", "i").replace("à", "a").replace("è", "e").replace("ö", "o").replace("ô", "o").replace("ñ", "n"), at_typePage = ""), "transferts" == at_repUrlUri && (atname = "transferts"), -1 != at_url.indexOf("golf/tournoi-") && (atname = "resultat_tournoi"), -1 != at_url.indexOf("ficheclub") && (at_typePage = "", atchapter2 = "fiches_equipe", $("h1").length > 0 && (atname = $("h1").html().trim().toLowerCase().replace(/\ /g, "_").replace("é", "e").replace("ê", "e").replace("ë", "e").replace("ï", "i").replace("à", "a").replace("è", "e").replace("ö", "o").replace("ô", "o").replace("ñ", "n"))), (-1 != at_url.indexOf("/eq_") || -1 != at_url.indexOf("ecuries_pilotes") || -1 != at_url.indexOf("equipes")) && (at_typePage = "", atname = "liste_equipes", -1 != at_url.indexOf("/eq_transfert") && (atname = "transferts"), -1 != at_url.indexOf("/formule1") && (atname = "ecuries_pilotes")), -1 != at_url.indexOf("/maps_") && (atname = "cartes"), -1 != at_url.indexOf("/hist") && (atname = "historique"), -1 != at_url.indexOf("/hist_nba") && (atchapter1 = "nba", atname = "historique"), -1 != at_url.indexOf("playoff") && (atname = "playoffs"), -1 != at_url.indexOf("recap-vainqueurs") && (atname = "tous_les_vainqueurs"), "undefined" != typeof atchapter1 && "aussi" != atchapter1 && "base" != atchapter1 && "jo" != atchapter1 || -1 == at_url.indexOf("/aussi/") && -1 == at_url.indexOf("/universel/") || !$(".SousMenu h3 a").attr("href") || (atchapter1 = $(".SousMenu h3 a").attr("href").toLowerCase().replace(/\-/g, "_").split("/")[2]), ("undefined" == typeof atchapter1 || "" == atchapter1 || atchapter1.replace(/\_/g, "").replace(/\ /g, "") == document.location.href.toLowerCase().split("/")[3] || atchapter1.replace(/\_/g, "").replace(/\ /g, "") == document.location.href.toLowerCase().split("/")[4] && "volley" != document.location.href.toLowerCase().split("/")[3]) && "moto" != document.location.href.toLowerCase().split("/")[3] && "rallye" != document.location.href.toLowerCase().split("/")[3] && "dakar" != document.location.href.toLowerCase().split("/")[3] || -1 != xtpage.toLowerCase().indexOf("voile") ? atchapter1 = -1 != xtpage.indexOf("no-xtpage") && $(".SousMenu h3 a").attr("href") ? $(".SousMenu h3 a").attr("href").toLowerCase().replace(/\-/g, "_").split("/")[2] : "divers" : "undefined" == typeof xtpage || -1 == xtpage.toLowerCase().indexOf("volley") && -1 == at_url.toLowerCase().indexOf("volley") ? "undefined" != typeof atchapter1 && "gymnastique_rythmique" == atchapter1 && (atchapter1 = "gymnastique") : "undefined" != typeof atchapter1 && "volley_ball" != atchapter1 ? (atchapter2 = atchapter1, atchapter1 = "volley_ball") : atchapter1 = "volley_ball", s18 = "undefined" != typeof xtpage && "no-xtpage" != xtpage.substring(0, 9) ? xtpage.toLowerCase().split("::").slice(0)[0] : at_repUrl, -1 != at_url.indexOf("handball") && (xtn2 = 12), s17 = "" == atchapter1 ? atchapter1 = "divers" : atchapter1, "" == atname && (atname = "resultats"), s18 = s18.replace("athle", "athletisme").replace("tssports", "tous_sports"), "tous_sports" == s18 && (s18 = s17, s17 = "divers")), "undefined" != typeof xtpage && "directs" == at_typePage && ("undefined" != typeof xtpage && -1 == xtpage.indexOf("no-xtpage") ? (AtTableau = xtpage.toLowerCase().split("::"), atname = AtTableau.slice(-1)[0] + "_" + AtTableau[0].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_"), s18 = atchapter0 = AtTableau[0].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace("toussports", "tous_sports"), atchapter1 = "") : (s18 = atchapter0 = at_url.split("/").slice(3)[0], atname = "directs_" + AtTableau[0].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_"), atchapter1 = ""), ("" == s17 || s17 == s18) && (s17 = "divers"), atname = atname.replace(/\-/g, "_").replace(/\ /g, "_")), "undefined" != typeof xtpage && "live" == at_typePage) {
        if ("undefined" != typeof $("#timeline .min").attr("statut")) {
            var statut = $("#timeline .min").attr("statut");
            s31 = "V" == statut ? "[a_venir]" : "T" == statut ? "[termine]" : "M" == statut ? "[mi_temps]" : "[en_cours]"
        }
        "undefined" != typeof xtpage && -1 == xtpage.indexOf("no-xtpage") ? (AtTableau = xtpage.toLowerCase().split("::"), atname = AtTableau.slice(-1)[0], s18 = atchapter0 = AtTableau[0].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace("toussports", "tous_sports"), ("" == atchapter1 || atchapter1 == AtTableau[0]) && (s17 = atchapter1 = AtTableau[1].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_")), "" == atchapter1 && "base" != AtTableau[1] && AtTableau[1] != AtTableau[0] && "handball" == AtTableau[0] && (s17 = atchapter1 = AtTableau[1])) : s18 = atchapter0 = at_url.split("/").slice(3)[0], ("" == atchapter1 || atchapter1 == atchapter0 || "live" == atchapter1) && ($(".info_match_sub .info_niveau").length ? s17 = atchapter1 = $(".info_match_sub .info_niveau").html().toLowerCase().split(",")[0].replace(/\-/g, "_").replace(/\ /g, "_").replace(/\'/g, "_") : $(".SousMenu h3 a").attr("href") ? s17 = atchapter1 = $(".SousMenu h3 a").attr("href").toLowerCase().split(",")[0].replace(/\-/g, "_").replace(/\ /g, "_").replace(/\'/g, "_").split("/")[2] : atchapter1 = "divers"), atname = atname.replace(/\-/g, "_").replace(/\ /g, "_"), s30 = "cyclisme" == atchapter0 ? at_url.split("/").slice(-2)[0] : at_url.split("/").slice(-1)[0].replace(".html", "")
    }
    if ("recherche" == at_typePage) {
        var _recherche = 1;
        atchapter1 = "general", at_typePage = "", atname = "recherche", -1 != at_url.indexOf("?r=") && (atname = "resultat_recherche")
    }
    if ("page_videos" == at_typePage) {
        at_typePage = "";
        var _video = 1;
        "undefined" != typeof xtpage && -1 == xtpage.indexOf("no-xtpage") && (AtTableau = xtpage.toLowerCase().split("::"), s17 = atchapter1 = AtTableau[1].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace("d1", "ligue_1"), s18 = atchapter0 = AtTableau[0].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_"), atchapter2 = AtTableau.slice(-2)[0], "home" == AtTableau.slice(-1)[0] ? (atchapter0 = atchapter2 = "", atname = "home_video", at_url.toLowerCase().split("/").slice(-2)[0].indexOf("journe") > -1 && (atname += "::" + at_url.toLowerCase().split("/").slice(-2)[0].replace(/\-/g, "_").replace(/\ /g, "_"))) : atname = AtTableau.slice(-1)[0] + "_" + at_url.toLowerCase().split("/").slice(-3)[0].replace(/\-/g, "_").replace(/\ /g, "_") + "_" + at_url.toLowerCase().split("/").slice(-2)[0].replace(/\-/g, "_").replace(/\ /g, "_"), s28 = "videos")
    }
    "quizs" == at_typePage && ("undefined" != typeof xtpage && -1 == xtpage.indexOf("no-xtpage") && (AtTableau = xtpage.toLowerCase().split("::"), atname = AtTableau.slice(-2)[0] + "_" + AtTableau.slice(-1)[0], atname = atname.replace("_:_", "_"), s17 = atchapter1 = "divers", atchapter0 = AtTableau[0].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_"), s18 = $("body").attr("sport") ? atsport = $("body").attr("sport").toLowerCase().replace("aussi", "tous_sports") : atsport = "tous_sports"), xtn2 = -1 != at_url.indexOf("football") || "football" == atsport ? 6 : -1 != at_url.indexOf("tennis") || "tennis" == atsport ? 7 : -1 != at_url.indexOf("rugby") || "rugby" == atsport ? 8 : -1 != at_url.indexOf("formule1") || "formule1" == atsport ? 9 : -1 != at_url.indexOf("auto-moto") || "auto-moto" == atsport ? 10 : -1 != at_url.indexOf("handball") || "handball" == atsport ? 12 : -1 != at_url.indexOf("basket") || "basket" == atsport ? 11 : -1 != at_url.indexOf("golf") || "golf" == atsport ? 13 : -1 != at_url.indexOf("cyclisme") || "cyclisme" == atsport ? 14 : -1 != at_url.indexOf("ski") || "ski" == atsport ? 19 : -1 != at_url.indexOf("voile") || "voile" == atsport ? 16 : 17), "erreur" == at_typePage && (pageTypeIndicators = "erreur", at_typePage = "", atchapter1 = "general", atname = "pages_404", xtn2 = 37, s17 = "divers", s18 = at_repUrl), "top" == at_typePage && (atchapter1 = "special", atname = "" == at_url.toLowerCase().split("/").slice(-1)[0] ? at_url.toLowerCase().split("/").slice(-3)[0] + "_" + at_url.toLowerCase().split("/").slice(-2)[0] : at_url.toLowerCase().split("/").slice(-2)[0] + "_" + at_url.toLowerCase().split("/").slice(-1)[0], atname = atname.replace(/\-/g, "_").replace(/\ /g, "_"), s28 = at_typePage, at_typePage = "top", s17 = "undefined" != typeof topcompetition && "" != topcompetition ? topcompetition.toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_") : "divers", s18 = at_url.toLowerCase().split("/").slice(3)[1]), ("infogs" == at_typePage || "blogs" == at_typePage || "webdocs" == at_typePage || "concours" == at_typePage || "agenda_sports" == at_typePage || "programme_tv" == at_typePage) && (pageTypeIndicators = "divers", atchapter1 = "", atname = "homes_" + at_typePage, xtn2 = 23, s28 = at_typePage, at_typePage = "general", s18 = at_repUrl), "archives" == at_typePage && (pageTypeIndicators = "divers", atchapter1 = at_typePage, atname = "home", xtn2 = 36, s28 = at_typePage, at_typePage = "", s18 = at_repUrl), "undefined" == typeof xtpage || "allos" != at_typePage && "portfolio" != at_typePage && "relive" != at_typePage || ("undefined" != typeof xtpage && -1 == xtpage.indexOf("no-xtpage") ? (AtTableau = xtpage.toLowerCase().split("::"), atname = "relive" == at_typePage ? AtTableau.slice(-2)[0] + "_" + AtTableau.slice(-1)[0] : AtTableau.slice(-1)[0], s18 = atchapter0 = AtTableau[0].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace("toussports", "tous_sports"), ("" == atchapter1 || atchapter1 == AtTableau[0]) && (s17 = atchapter1 = AtTableau[1].toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_")), "" == atchapter1 && "base" != AtTableau[1] && AtTableau[1] != AtTableau[0] && "handball" == AtTableau[0] && (s17 = atchapter1 = AtTableau[1])) : s18 = atchapter0 = at_url.split("/").slice(3)[0], ("" == atchapter1 || atchapter1 == atchapter0 || "live" == atchapter1 || "portfolio" == atchapter1) && ($("#nav-inside.NavSport").attr("libelle") ? s17 = atchapter1 = $("#nav-inside.NavSport").attr("libelle").toLowerCase().split(",")[0].replace(/\-/g, "_").replace(/\ /g, "_").replace(/\'/g, "_") : $(".SousMenu h3 a").attr("href") ? s17 = atchapter1 = $(".SousMenu h3 a").attr("href").toLowerCase().split(",")[0].replace(/\-/g, "_").replace(/\ /g, "_").replace(/\'/g, "_").split("/")[2] : atchapter1 = "divers"), atname = atname.replace(/\-/g, "_").replace(/\ /g, "_"), s30 = at_url.split("/").slice(-1)[0].replace(".html", ""), "allos" == s28 && (atname += "_" + s30)), atname = atname.toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace(/\'/g, "_"), atchapter1 = atchapter1.toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace(/\'/g, "_"), atchapter2 = atchapter2.toLowerCase().replace(/\-/g, "_").replace(/\ /g, "_").replace(/\'/g, "_"), "undefined" != typeof xtn2 && "" == xtn2 && ($("body").attr("sport") ? atsport = $("body").attr("sport").toLowerCase() : atsport = "Aussi", console.log("security--xtn2"), xtn2 = -1 != at_url.indexOf("football") || "football" == atsport ? 6 : -1 != at_url.indexOf("tennis") || "tennis" == atsport ? 7 : -1 != at_url.indexOf("rugby") || "rugby" == atsport ? 8 : -1 != at_url.indexOf("formule1") || "formule1" == atsport ? 9 : -1 != at_url.indexOf("auto-moto") || "auto-moto" == atsport ? 10 : -1 != at_url.indexOf("handball") || "handball" == atsport ? 12 : -1 != at_url.indexOf("basket") || "basket" == atsport ? 11 : -1 != at_url.indexOf("golf") || "golf" == atsport ? 13 : -1 != at_url.indexOf("cyclisme") || "cyclisme" == atsport ? 14 : -1 != at_url.indexOf("ski") || "ski" == atsport ? 19 : -1 != at_url.indexOf("voile") || "voile" == atsport ? 16 : 17), "undefined" != typeof xtn2 && "21" == xtn2 && (xtn2 = 17), -1 != at_url.indexOf("/handball") && (xtn2 = 12), -1 != at_url.indexOf("/voile") && (xtn2 = 16), ("undefined" != typeof xtpage && "home" == at_typePage || "undefined" != typeof xtpage && "directs" == at_typePage || "undefined" != typeof xtpage && "directs" == at_typePage) && (at_typePage = ""), -1 != at_url.indexOf("/base/tennis/duels/") && (atchapter1 = "divers", atname = "face_a_face"), s18 = s18.replace("tssports", "tous_sports"), window.ATInternet = {
        onTrackerLoad: function () {
            window.tag = new window.ATInternet.Tracker.Tag, "" != at_typePage ? "" != atchapter2 ? tag.page.set({
                name: atname,
                chapter1: atchapter1.toLowerCase(),
                chapter2: atchapter2.toLowerCase(),
                chapter3: at_typePage.toLowerCase(),
                level2: xtn2
            }) : "" != atchapter1 ? tag.page.set({
                name: atname,
                chapter1: atchapter1.toLowerCase(),
                chapter2: at_typePage.toLowerCase(),
                level2: xtn2
            }) : tag.page.set({
                name: atname,
                chapter1: at_typePage.toLowerCase(),
                level2: xtn2
            }) : "" != atchapter2 ? tag.page.set({
                name: atname,
                chapter1: atchapter1.toLowerCase(),
                chapter2: atchapter2.toLowerCase(),
                level2: xtn2
            }) : "" != atchapter1 ? tag.page.set({
                name: atname,
                chapter1: atchapter1.toLowerCase(),
                level2: xtn2
            }) : tag.page.set({name: atname, level2: xtn2}), tag.identifiedVisitor.set({
                id: at_visitor,
                category: at_visitor_cat
            }), "articles" == pageTypeIndicators || "patrimonial" == pageTypeIndicators ? tag.customVars.set({
                site: {
                    13: "[" + s13 + "]",
                    14: s14,
                    16: s16,
                    17: "[" + s17 + "]",
                    18: "[" + s18.replace(/\-/g, "_").replace(/\ /g, "_") + "]",
                    19: s19,
                    20: s20,
                    21: s21,
                    22: s22,
                    26: s26,
                    27: s27,
                    23: s23,
                    28: "[" + s28 + "]",
                    29: s29,
                    30: s30
                }
            }) : "erreur" == pageTypeIndicators ? tag.customVars.set({
                site: {
                    13: "[" + s13 + "]",
                    17: "[" + s17 + "]",
                    18: "[" + s18.replace(/\-/g, "_").replace(/\ /g, "_") + "]",
                    22: s22,
                    23: s23,
                    28: "[" + s28 + "]"
                }
            }) : "divers" == pageTypeIndicators ? tag.customVars.set({
                site: {
                    13: "[" + s13 + "]",
                    22: s22,
                    23: s23,
                    28: "[" + s28 + "]"
                }
            }) : tag.customVars.set({
                site: {
                    13: "[" + s13 + "]",
                    17: "[" + s17 + "]",
                    18: "[" + s18.replace(/\-/g, "_").replace(/\ /g, "_") + "]",
                    22: s22,
                    23: s23,
                    28: "[" + s28 + "]",
                    30: s30,
                    31: s31
                }
            }), 1 == _recherche && (tag.internalSearch.set({
                keyword: window.location.search.substring(1).split("&")[0].replace("r=", ""),
                resultPageNumber: $(".formulaireRecherche > .pagination b").text()
            }), tag.page.set({name: atname})), tag.dispatch()
        }
    }, "orig-www.lequipe.fr" != window.location.hostname && "object" == typeof _userInfos && null != _userInfos && 1 == _userInfos.quotiAbonne && "abonnes.lequipe.fr" != window.location.hostname || !function () {
        var e = document.createElement("script");
        e.type = "text/javascript", e.async = !0, e.src = "/v6/js/smarttag-prod.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.getElementsByTagName("script")[0].parentNode).insertBefore(e, null)
    }()
}
var hex_chr = "0123456789abcdef";