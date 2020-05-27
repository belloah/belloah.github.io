var bananas = [
    { id: "name", label: "Name", help: "e.g. HOM Ka Ling" },
    { id: "position", label: "Position", help: "e.g. 量地官" },
    { id: "source", label: "Source name", help: "e.g. Parttime.hk, JobsDB, 兼職網" },
    { id: "link", label: "Source link", help: "e.g. http://www.parttime.hk/job/123456" },
    { id: "recipent", label: "Recipient", help: "e.g. Miss HOM, Mr HOM, default Sir/Madam in English" },
    { id: "receiver", label: "To", help: "e.g. csbcomp@csb.gov.hk" }
];
function testBananas() {
    $("#name").val("HOM Ka Ling");
    $("#position").val("hehe");
    $("#recipent").val("Miss HOM");
    $("#source").val("Parttime.hk");
    $("#link").val("http://www.parttime.hk/job/123456");
    $("#receiver").val("homkaling@belloah.github.io");
    return "DADA~~~";
}

function goBanana() {
    let mail = $("#receiver").val();
    goMail(mail, subject(), content());
}

function subject() {
    var name = $("#name").val();
    var position = $("#position").val();
    var subject = "我係濕直啊";
    if (name !== "" && position !== "") {
        if ($("#lang").prop("checked")) {
            subject = "申請 " + position + " - " + name;
        }
        else {
            subject = "Application for " + position + " - " + name;
        }
        $("#subject").val(subject);
        return subject;
    }
    $("#subject").val("");
    return "";
}

function content() {
    var banana = {
        name: $("#name").val(),
        position: $("#position").val(),
        source: $("#source").val(),
        link: $("#link").val(),
        recipent: $("#recipent").val()
    };
    if (banana.name !== "" && banana.position !== "" && banana.link !== "" && banana.source !== "") {
        if ($("#lang").prop("checked")) return cContent(banana);
        else return eContent(banana);
    }
    $("#content").val("");
    return "";
}
function eContent(banana) {
    let close = "";
    if (banana.recipent == "") {
        banana.recipent = "Dear Sir/Madam,";
        close = "faithfully";
    }
    else {
        banana.recipent = "Dear " + banana.recipent + ",";
        close = "sincerely";
    }

    var content = "我係 content 啊";

    content = banana.recipent + "\r\n\r\nI am writing to apply for the position of " + banana.position + " advertised on " + banana.source + " (" + banana.link + ").\r\n\r\nEnclosed is a copy of my resume which provides details of my qualifications for the position. I would appreciate the opportunity to meet with you to discuss my interest and qualifications. I look forward to hearing from you soon.\r\n\r\nThank you for your time and consideration.\r\n\r\nYours " + close + ",\r\n" + banana.name;
    $("#content").val(content);
    return content;
}
function cContent(banana) {
    if (banana.recipent !== "") banana.recipent = banana.recipent + "：\r\n\r\n";

    var content = "我係 content 啊";

    content = banana.recipent + "你好，在" + banana.source + " (" + banana.link + ") 看到了招聘訊息，隨函附上履歷表，謝謝。";
    $("#content").val(content);
    return content;
}
function goMail(mail, subject, content) {
    if (mail !== "" && content !== "" && subject !== "") {
        mailto = "mailto:" + mail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(content);
        $(".collapse").collapse('show');
        $("#mail").attr("href", mailto);
        return mailto;
    }
    return "#";
}

function eatBanana() {
    $(".banana").val("");
    $(".collapse").collapse('hide');
}
function takeBanana(banana) {
    var box = $("#" + banana);
    if (box.val() !== "") {
        box.select();
        document.execCommand("copy");
    }
}

function buildBanana(banana = { id: "", label: "", help: "" }) {
    var box = "";
    box += "<div class=\"form-group row\">";
    box += "<label for=\"" + banana.id + "\" class=\"col-lg-2 col-form-label\">" + banana.label + "</label>";
    box += "<div class=\"col-lg-10\">";
    box += "<input type=\"text\" id=\"" + banana.id + "\" class=\"form-control banana\">";
    if ("help" in banana) box += "<small class=\"help-text text-muted\">" + banana.help + "</small>";
    box += "</div>";
    box += "</div>";
    return box;
}
function stackBanana() {
    var stack = "";
    for (banana in bananas) {
        stack += buildBanana(bananas[banana]);
    }
    $("#stack").html(stack);
}