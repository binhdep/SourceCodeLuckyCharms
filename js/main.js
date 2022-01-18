$(document).ready(function (e) {
    function t(e, t = !1, a = "") {
        var n = "",
            o = "",
            i = "";
        return (
            "manager" === e && (n = '<img class="chat-content-desc-image" src="img/apple-1.png" alt="" />'),
            t && ((o = "text-" + t), (i = ' class="p' + t + '"')),
            '<div class="chat-content-item ' + e + " " + o + '"><div class="chat-content-desc">' + n + '<div class="chat-content-desc-item ' + e + '"><p' + i + ">" + a + "</p></div></div></div>"
        );
    }

    function a(a) {
        $(".chat-content-buttons-gender").remove(),
            $(".chat-content-list").append(t("user")),
            $(".chat-content-item.user p").html(e.managerDialog[1][a].text),
            $(".chat-content-list").append(t("manager")),
            $(".chat-content-item.manager p").typed({
                strings: [e.managerDialog[2].text],
                showCursor: !1,

                callback: function () {
                    setTimeout(function () {
                        //

                        //
                        var n, o, r;
                        $(".chat-content-list").append(
                            '<form name="questionForm" class="form"><div class="form-group"><div class="form-group-inline">' +
                            '<select name="day" class="custom-select select-day">' +
                            '<option value="" selected="selected">Day</option>' +
                            (function () {
                                for (i = e.DateBirthday[0].day[0]; i < e.DateBirthday[0].day[1] + 1; i++) n += '<option value="' + i + '">' + i + "</option>";
                                return n;
                            })() +
                            '</select>' +
                            '</div>' +
                            '<div class="form-group-inline full-month">' +
                            '<select name="month" class="custom-select select-month">' +
                            '<option value="" selected="selected">Month</option>' +
                            ($.each(e.DateBirthday[0].month, function (e, t) {
                                o += '<option value="' + (e + 1) + '">' + t + "</option>";
                            }),
                                o) +
                            '</select>' +
                            '</div>' +
                            '<div class="form-group-inline year">' +
                            '<select name="year" class="custom-select select-year">' +
                            '<option value="" selected="selected">Year</option>' +
                            (function () {
                                for (i = e.DateBirthday[0].year[0]; i < e.DateBirthday[0].year[1] + 1; i++) r += '<option value="' + i + '">' + i + "</option>";
                                return r;
                            })() +
                            "</select>" +
                            "</div>" +
                            "</div>" +
                            "</form>"
                        ),
                            e.Scroll();
                        var c,
                            s = [],
                            d = $('form[name="questionForm"]');
                        d.find("select").addClass("empty_field"),
                            d.find("select").change(function () {
                                if (
                                    (d.find("select").each(function () {
                                        "" != $(this).val() ? $(this).removeClass("empty_field") : $(this).addClass("empty_field"), (s[this.name] = $(this).val());
                                    }),
                                    0 == d.find(".empty_field").size())
                                ) {
                                    d.remove();
                                    var n = e.MonthVariantType[s.month - 1],
                                        o = e.MonthVariant[n][0],
                                        i = e.MonthVariant[n][1],
                                        r = e.MonthVariant[n][2];
                                    (c = [s.day, s.month]),
                                        (c = e.getZodiak(c)),
                                        (s.day = s.day.length > 1 ? s.day : "0" + s.day),
                                        (s.month = s.month.length > 1 ? s.month : "0" + s.month),
                                        $(".chat-content-list").append(t("user", "date")),
                                        $(".chat-content-item.user.text-date p").html(s.day + "." + s.month + "." + s.year);
                                    var l = [],
                                        m = [],
                                        p = {
                                            zodie: e.ZodiakName[c - 1].name,
                                            date: s.day,
                                            month1: o,
                                            month2: i,
                                            month3: r,
                                            year: s.year,
                                            number: e.randomIntFromInterval(4, 10)
                                        };
                                    $(".chat-content-list").append(t("manager", "birthday"));
                                    var u = e.userZodiak[0].text,
                                        h = e.Replace(u, p);
                                    $(".chat-content-item.manager p").typed({
                                        strings: [h],
                                        showCursor: !1,
                                        callback: function () {
                                            var t = [{text: e.Replace(e.socNumber[0].text, p)}];
                                            (l = $.merge(e.managerVariants[a][0][0], t)),
                                                (l = $.merge(l, e.managerVariants[a][0][1])),
                                                $.each(l, function (t, a) {
                                                    m.push(e.Replace(a.text, p));
                                                }),
                                                e.LoadListMessages(m, p.zodie);
                                        },
                                    });
                                }
                            });
                    }, 1e3);
                },
            });
    }

    var n = document.querySelector(".country_action").innerHTML,
        o = document.querySelector(".new_price_val").innerHTML,
        r = document.querySelector(".new_price_cur").innerHTML;
        console.log(o),
        console.log(r),
        (e.randomIntFromInterval = function (e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e);
        }),
        (e.managerDialog = [
            {
                text: "Hi!<br>Ako si Apple Paguio. Isang Physic reader at Astrologo.<br>Anong pangalan mo?",
            },
            {
                text: "Ikaw ba ay Lalaki o Babae?",
                m: {text: "Lalaki"}, w: {text: "Babae"}
            },
            {
                text: "Kailan ka ipinanganak?"
            },
        ]),
        (e.userZodiak = [
            {
                text: "Salamat. Ang iyong petsa ng kapanganakan ay nagsasabi sa akin na ang iyong horoscope ay: - <p style='color: #3fc726'>{zodie}</p>. <p class='hidden-zodie' style='display: none'>{zodie}</p>"
            }
        ]),
        (e.managerVariants = {
            w: [
                [
                    [
                        {text: 'Ang 3 card na iyong pinili ay may mga sumusunod na resulta:'},
                        {text: '<br><img width="200px" src="img/TENOFPENTACLES.png"></br>'},
                        {text: "Sampung ng Pentacles ay isang kahanga-hangang card na nagpapakita ng kayamanan at kayamanan, swerte at materyal na kasaganaan naghihintay para sa iyo. Ang iyong paglalakbay sa buhay ay may maraming positibong enerhiya para sa iyo. Ipinapakita ng iyong aura na mayroon kang maraming potensyal ngunit may pumipigil sa iyo na bumuo ng isang matatag, mapayapang buhay, hinahadlangan ka sa mga masasamang tao na ginugugol mo ng maraming oras at pagsisikap Ngunit mayroon ka pa ring maraming mga problema"},
                        {text: '<br><img width="200px" src="img/TENOFSWORDS.png"></br>'},
                        {text: 'Ang kard na "Sampung mga espada" ay kumakatawan sa isang biglaang pagkatalo o sakuna, at ang mapagkukunan ng kapangyarihang ito ay wala sa iyong kontrol. Dudurugin ka nito nang walang babala o anumang awa. Minsan nais mong baguhin ang kurso ng isang napipintong sakuna, ngunit halos hindi mo ito matiis, sa oras na maaari kang masaksak sa likuran o ipagkanulo ng isang taong pinagkakatiwalaan mo. Pinakamalala sa lahat, ang ilan sa mga taong ito ay napakalapit at hindi mo namamalayan na sinasaktan ka nila.'},
                        {text: '<br><img width="200px" src="img/THEWHEELOFFORTUNE.png"></br>'},
                        {text: "Ipinapahiwatig ng kard na Wheel of Fortune na hindi ka dapat tumahimik lamang at tanggapin. Maaari mong aktibong mapanatili ang positibong bahagi ng pag-ikot na ito. Kapag naging negatibo ang mga bagay, sa halip na maghintay at umasa na magiging maayos ang mga bagay, dapat mong aktibong gumana sa sitwasyon. Mayroong mga naninibugho at nakakahamak na tao sa mga nakakaalam na wala ka sa iyong kontrol, ang mga masasamang oras na pinagdadaanan mo ay maaari ding makita bilang pagtatapos ng mga maling desisyon na iyong nagawa. kasalukuyan, Kailangan mong pagbutihin ang iyong kapalaran at makuha muli ang kontrol sa iyong kapalaran"},
                        {text: 'Payo para sa iyo:'},
                        {text:
                             "Siguradong makiki-usyoso ka at magtataka kung bakit lahat ng tao sa paligid mo ay napaka-successful at may kasiya-siyang buhay, isang masayang pamilya, isang promosyon sa trabaho, maraming pera, ngunit ang iyong buhay ay hindi gumagalaw kahit na nagsisikap ka. Bumababa ba ang iyong kalusugan? Nakakaramdam ka ba ng pagod, kinakapos sa paghinga at madalas na nakakaranas ng hindi maipaliwanag na sakit?"
                        },
                        {text: "Maaaring tila lahat ng uri ng malas ay nahuhulog sa iyo, ngunit alam mo ba na ang lahat ng masasamang bagay ay hindi nangyayari nang hindi sinasadya, ang mga ito ay naayos na ng mga masasamang tao sa paligid mo!"},
                    ],
                    [
                        {text: "Napakaswerte mo pa rin dahil binibigyan ka ng Diyos ng pagkakataong magbago bago pa lumala ang mga pangyayari. Kaya ang kailangan mong gawin ay makinig ng mabuti at pahalagahan ang pagkakataong ito dahil hindi lahat ay pinalad na magabayan at matulungan ng mga diyos!"},
                        {text: "Paano mo maakit ang pera at swerte sa ngayong taong 2022 sa pamamagitan ng iyong horoscope?"},
                        {text: "Kung sumasang-ayon ka, makakalinutan mo ito habang buhay kung ano ang maging mahirap. Papalayain ko ang iyong swerte mula sa pagkabihag."},
                        {text: "Gagawa ako ng isang espesyal na anting-anting para sa iyo at bibigyan ito ng lakas na mahika, upang magbigay liwanag mula sa madilim na enerhiya."},
                        {text: '<br><img width="200px" src="img/product1.png"></br>'},
                        {text: "Ganito ang larawang ng isang Lucky Charms"},
                        {text: "Ang anting-anting na ito ay nagpapabago sa iyong buhay sa isang buwan. Mawawala ang lahat ng iyong mga utang, kagaya ng mababayaran mo ito dahil may darating na swerte sa iyong buhay na hindi mo inaasahan. Dadaloy sa iyo ang pera mula sa iba't ibang mga mapagkukunan, at makakalimutan mo ang tungkol sa mga pagkabigo sa pananalapi at pagtipid sa natitirang bahagi ng iyong buhay."},
                        {text: "Palagi kong sinusubukan na tulungan ang mga tao na malutas ang kanilang mga problema, at hindi ko kailanman sinubukan na kumita mula rito."},
                        {text: "Maaari kang mag-order ng anting-anting ngayon! Ilagay mo lamang ang iyong pangalan at numero ng telepono sa form at magbabago ang iyong buhay. Ipinapangako ko!"},
                    ],
                ],
            ],
            m: [
                [
                    [
                        {text: 'Ang 3 card na iyong pinili ay may mga sumusunod na resulta:'},
                        {text: '<br><img width="200px" src="img/TENOFPENTACLES.png"></br>'},
                        {text: "Sampung ng Pentacles ay isang kahanga-hangang card na nagpapakita ng kayamanan at kayamanan, swerte at materyal na kasaganaan naghihintay para sa iyo. Ang iyong paglalakbay sa buhay ay may maraming positibong enerhiya para sa iyo. Ipinapakita ng iyong aura na mayroon kang maraming potensyal ngunit may pumipigil sa iyo na bumuo ng isang matatag, mapayapang buhay, hinahadlangan ka sa mga masasamang tao na ginugugol mo ng maraming oras at pagsisikap Ngunit mayroon ka pa ring maraming mga problema"},
                        {text: '<br><img width="200px" src="img/TENOFSWORDS.png"></br>'},
                        {text: 'Ang kard na "Sampung mga espada" ay kumakatawan sa isang biglaang pagkatalo o sakuna, at ang mapagkukunan ng kapangyarihang ito ay wala sa iyong kontrol. Dudurugin ka nito nang walang babala o anumang awa. Minsan nais mong baguhin ang kurso ng isang napipintong sakuna, ngunit halos hindi mo ito matiis, sa oras na maaari kang masaksak sa likuran o ipagkanulo ng isang taong pinagkakatiwalaan mo. Pinakamalala sa lahat, ang ilan sa mga taong ito ay napakalapit at hindi mo namamalayan na sinasaktan ka nila.'},
                        {text: '<br><img width="200px" src="img/THEWHEELOFFORTUNE.png"></br>'},
                        {text: "Ipinapahiwatig ng kard na Wheel of Fortune na hindi ka dapat tumahimik lamang at tanggapin. Maaari mong aktibong mapanatili ang positibong bahagi ng pag-ikot na ito. Kapag naging negatibo ang mga bagay, sa halip na maghintay at umasa na magiging maayos ang mga bagay, dapat mong aktibong gumana sa sitwasyon. Mayroong mga naninibugho at nakakahamak na tao sa mga nakakaalam na wala ka sa iyong kontrol, ang mga masasamang oras na pinagdadaanan mo ay maaari ding makita bilang pagtatapos ng mga maling desisyon na iyong nagawa. kasalukuyan, Kailangan mong pagbutihin ang iyong kapalaran at makuha muli ang kontrol sa iyong kapalaran"},
                        {text: 'Payo para sa iyo:'},
                        {text:
                             "Siguradong makiki-usyoso ka at magtataka kung bakit lahat ng tao sa paligid mo ay napaka-successful at may kasiya-siyang buhay, isang masayang pamilya, isang promosyon sa trabaho, maraming pera, ngunit ang iyong buhay ay hindi gumagalaw kahit na nagsisikap ka. Bumababa ba ang iyong kalusugan? Nakakaramdam ka ba ng pagod, kinakapos sa paghinga at madalas na nakakaranas ng hindi maipaliwanag na sakit?"
                        },
                        {text: "Maaaring tila lahat ng uri ng malas ay nahuhulog sa iyo, ngunit alam mo ba na ang lahat ng masasamang bagay ay hindi nangyayari nang hindi sinasadya, ang mga ito ay naayos na ng mga masasamang tao sa paligid mo!"},
                    ],
                    [
                        
                        {text: "Napakaswerte mo pa rin dahil binibigyan ka ng Diyos ng pagkakataong magbago bago pa lumala ang mga pangyayari. Kaya ang kailangan mong gawin ay makinig ng mabuti at pahalagahan ang pagkakataong ito dahil hindi lahat ay pinalad na magabayan at matulungan ng mga diyos!"},
                        {text: "Paano mo maakit ang pera at swerte sa ngayong taong 2022 sa pamamagitan ng iyong horoscope?"},
                        {text: "Kung sumasang-ayon ka, makakalinutan mo ito habang buhay kung ano ang maging mahirap. Papalayain ko ang iyong swerte mula sa pagkabihag."},
                        {text: "Gagawa ako ng isang espesyal na anting-anting para sa iyo at bibigyan ito ng lakas na mahika, upang magbigay liwanag mula sa madilim na enerhiya."},
                        {text: '<br><img width="200px" src="img/product1.png"></br>'},
                        {text: "Ganito ang larawang ng isang Lucky Charms"},
                        {text: "Ang anting-anting na ito ay nagpapabago sa iyong buhay sa isang buwan. Mawawala ang lahat ng iyong mga utang, kagaya ng mababayaran mo ito dahil may darating na swerte sa iyong buhay na hindi mo inaasahan. Dadaloy sa iyo ang pera mula sa iba't ibang mga mapagkukunan, at makakalimutan mo ang tungkol sa mga pagkabigo sa pananalapi at pagtipid sa natitirang bahagi ng iyong buhay."},
                        {text: "Palagi kong sinusubukan na tulungan ang mga tao na malutas ang kanilang mga problema, at hindi ko kailanman sinubukan na kumita mula rito."},
                        {text: "Maaari kang mag-order ng anting-anting ngayon! Ilagay mo lamang ang iyong pangalan at numero ng telepono sa form at magbabago ang iyong buhay. Ipinapangako ko!"},
                    ],
                ],
            ],
        }),
        (e.socNumber = [{
            text: "Mayroon akong mga hula sa iyo!"
        },]),
        (e.Forms = function (t) {
            e.FormsParams = {
                method: "POST",
                action: "",
                inputs: [
                    {name: "name", value: "", placeholder: "Enter your name", type: "text", required: !0},
                    {name: "phone", value: "", placeholder: "Enter your phone", type: "tel", required: !0},
                ],
                btn_text: "Order Lucky Charms",
                title: "Order form Lucky Charms By Apple Paguio",
            };
            return function () {
                document.getElementById("cont_form").style.display = "block";
            };
        }),
        (e.getZodiak = function (t) {
            var a = parseInt(t[0]);
            switch (parseInt(t[1])) {
                case 1:
                    e.zodiak = a < 20 ? 10 : 11;
                    break;
                case 2:
                    e.zodiak = a < 19 ? 11 : 12;
                    break;
                case 3:
                    e.zodiak = a < 21 ? 12 : 1;
                    break;
                case 4:
                    e.zodiak = a < 20 ? 1 : 2;
                    break;
                case 5:
                    e.zodiak = a <= 21 ? 2 : 3;
                    break;
                case 6:
                    e.zodiak = a < 21 ? 3 : 4;
                    break;
                case 7:
                    e.zodiak = a < 23 ? 4 : 5;
                    break;
                case 8:
                    e.zodiak = a < 23 ? 5 : 6;
                    break;
                case 9:
                    e.zodiak = a < 23 ? 6 : 7;
                    break;
                case 10:
                    e.zodiak = a < 23 ? 7 : 8;
                    break;
                case 11:
                    e.zodiak = a < 22 ? 8 : 9;
                    break;
                case 12:
                    e.zodiak = a < 22 ? 9 : 10;
            }
            return e.zodiak;
        }),
        (e.ZodiakName = [
            {name: "Aries", id: 1},
            {name: "Taurus", id: 2},
            {name: "Gemini", id: 3},
            {name: "Cancer", id: 4},
            {name: "Leo", id: 5},
            {name: "Virgo", id: 6},
            {name: "Libra", id: 7},
            {name: "Scorpio", id: 8},
            {name: "Sagittarius", id: 9},
            {name: "Capricorn", id: 10},
            {name: "Aquarius", id: 11},
            {name: "Pisces", id: 12},
        ]),
        (e.DateBirthday = [{
            day: [1, 31],
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            year: [1940, 2000]
        }]),
        (e.MonthVariantType = ["january", "fabruary", "march", "april", "may", "june", "august", "august", "september", "october", "november", "december"]),
        (e.MonthVariant = {
            january: ["январь", "января", "январе"],
            fabruary: ["февраль", "февраля", "феврале"],
            march: ["март", "марта", "марте"],
            april: ["апрель", "апреля", "апреле"],
            may: ["май", "мая", "мае"],
            june: ["июнь", "июня", "июне"],
            july: ["июль", "июля", "июле"],
            august: ["август", "августа", "августе"],
            september: ["сентябрь", "сентября", "сентябре"],
            october: ["октябрь", "октября", "октебре"],
            november: ["ноябрь", "ноября", "ноябре"],
            december: ["декабрь", "декабря", "декабре"],
        }),
        (e.Scroll = function () {
            $(document).ready(function () {
                !(function (e, t = function () {
                }, a = []) {
                    (e = jQuery(e)), (t = t.bind(e));
                    var n = -1,
                        o = -1;
                    setInterval(function () {
                        (e.height() == n && e.width() == o) || ((n = e.height()), (o = e.width()), e.parent().animate({scrollTop: n}, 50), t.apply(null, a));
                    }, 100);
                })(".chat-content-container .chat-content-list", function (e) {
                }, []);
            });
        }),
        (e.Replace = function (e, t) {
            var a = e;
            return (
                Object.entries(t).forEach((e) => {
                    var t = "{" + e[0] + "}",
                        n = new RegExp(t, "g");
                    a = a.replace(n, e[1]);
                }),
                    a
            );
        }),
        (e.LoadListMessages = function (a, n) {
            var o,
                i = 1,
                r = 1,
                c = {showCursor: !1};
            for (o = a.length; i < o + 1; i++)
                (c.onStringTyped = function () {
                    ++r < o + 1 && ((c.array_id = r), (c.strings = [a[r - 1]]), $(".chat-content-list").append(t("manager", r)), $(".chat-content-item.manager p.p" + r).typed(c), e.Scroll()),
                    r == o + 1 &&
                    setTimeout(function () {
                        $(".chat-content-list").append(e.Forms(n)), e.Scroll();
                    }, 1500); // 1500
                }),
                1 == i && ((c.array_id = i), (c.strings = [a[i - 1]]), $(".chat-content-list").append(t("manager", i)), $(".chat-content-item.manager p.p" + i).typed(c), e.Scroll());
        }),
        $(window).on("load", function () {
            $(".chat-content-list").append(t("manager")),
                e.Scroll(),
                $(".chat-content-item.manager p").typed({
                    strings: [e.managerDialog[0].text],
                    showCursor: !1,
                    callback: function () {
                        setTimeout(function () {
                            $(".chat-content-list").append(t("manager")),
                                e.Scroll(),
                                $(".chat-content-item.manager p").typed({
                                    strings: [e.managerDialog[1].text],
                                    showCursor: !1,
                                    callback: function () {
                                        setTimeout(function () {
                                            var t;
                                            e.Scroll(),
                                                $(".chat-content-list").append(
                                                    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="m">' +
                                                    (t = e.managerDialog[1]).m.text +
                                                    '</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="w">' +
                                                    t.w.text +
                                                    "</span></div></div>"
                                                ),
                                                e.Scroll(),
                                                $(".chooseGender").on("click", function () {
                                                    a($(this).data("type"));
                                                });
                                        }, 1e3);
                                    },
                                });
                        }, 1e3);
                    },
                });
        });
});