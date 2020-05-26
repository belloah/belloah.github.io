window.onafterprint = function () {
    $("#dummy").remove();
}
window.onbeforeprint = function () {
    $("body").append($("<div id='dummy'></div>"));
    $("#dummy").html(loadMd("README.md"));
}
var version = loadMd("CHANGELOG.md");

function projectLoad() {
    let Readme = loadMd("README.md");
    let projectName = $.parseHTML(Readme)[0].innerText;
    let currentVersion = $.parseHTML(version)[2].innerText;

    $("title").html(projectName + " by Belloah");
    $("#pageHeader").html("<h1>" + projectName + " <br class=\"d-block d-sm-none\"/> <small>by Belloah</small></h1>");
    $("#footNote").html("<small>Copyright &copy; " + projectName + " <a href=\"#\" role=\"button\" onclick=\"displayReleaseNotes()\" data-toggle=\"modal\" data-target=\"#dada\">" + currentVersion + "</a></small>");
    $("#readme").html(Readme);
    $("#butt").load("butt.html");
}

function loadMd(banana) {
    let md = $.ajax({
        url: banana,
        async: false
    }).responseText;
    md = marked(md);
    return md;
}

function displayDada(dada = { dadaTitle: "Bello!", dadaBody: "Bello!", dadaFoot: "Bello!" }) {
    $(".modal-title").html(dada.dadaTitle);
    $(".modal-body").html(dada.dadaBody);
    $(".modal-footer").html(dada.dadaFoot);
}

function displayReleaseNotes() {
    let releaseNotes = {
        dadaTitle: $.parseHTML(version)[0].innerText,
        dadaFoot: "<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">hehe</button>",
        dadaBody: version
    }
    displayDada(releaseNotes);
}