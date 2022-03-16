window.onafterprint = function () {
    $("#dummy").remove();
}
window.onbeforeprint = function () {
    $("body").append($("<div id='dummy'></div>"));
    $("#dummy").html(loadMd("README.md"));
}
var version = loadMd("CHANGELOG.md");

function projectLoad() {
    let currentVersion = $.parseHTML(version)[2].innerText;
    let project = {
        comeOnText: {
            name: "Come On Text"
        },
        onYourMark: {
            name: "On Your Mark"
        },
        jobBeggar: {
            name: "Job Beggar"
        }
    }
    let projects = "";
    for (hehe in project) {
        projects += "<a href=\"" + hehe + "/index.html\" class=\"btn btn-light btn-lg btn-block\" target='_blank'>" + project[hehe].name + "</a>";
    }
    $("#projects").html(projects);
    $("#footNote").html(loadContacts() + "<small>Copyright &copy; Belloah <a href=\"#\" role=\"button\" onclick=\"displayReleaseNotes()\" data-toggle=\"modal\" data-target=\"#dada\">" + currentVersion + "</a></small>");
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
function displayArchive() {
    let archive = {
        dadaTitle: "Projects in archive",
        dadaFoot: "<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">hehe</button>",
        dadaBody: function () {
            let project = {
                imLearnding: {
                    name: "I'm Learnding"
                },
                spaceDestroyer: {
                    name: "Space Destroyer"
                },
                lineDestroyer: {
                    name: "Line Destroyer"
                }
            };
            let projects = "";
            for (hehe in project) {
                projects += "<a href=\"" + hehe + "/index.html\" class=\"btn btn-light btn-lg btn-block\" target='_blank'>" + project[hehe].name + "</a>";
            };
            return projects;
        }
    }
    displayDada(archive);
}
function displayReleaseNotes() {
    let releaseNotes = {
        dadaTitle: $.parseHTML(version)[0].innerText,
        dadaFoot: "<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">hehe</button>",
        dadaBody: version
    }
    displayDada(releaseNotes);
}

function loadContacts() {
    let contacts = [
        { i: { title: "Github", class: "fab fa-github" }, a: { href: "https://github.com/belloah", target: "_blank" } },
        { i: { title: "Linkedin", class: "fab fa-linkedin" }, a: { href: "https://www.linkedin.com/in/belloah", target: "_blank" } },
        { i: { title: "Instagram", class: "fab fa-instagram" }, a: { href: "https://www.instagram.com/mescreamson/", target: "_blank" } },
        { i: { title: "Archive", class: "fas fa-archive" }, a: { href: "#", role: "button", onclick: "displayArchive()", "data-toggle": "modal", "data-target": "#dada" } },
    ]
    let output = "<div class=\"h3\">"
    for (contact in contacts) {
        let tags = contacts[contact];
        let i = $("<i></i>");
        let a = $("<a></a>");
        for (attr in tags["i"]) {
            let tag = tags["i"];
            i.attr(attr, tag[attr]);
        }
        for (attr in tags["a"]) {
            let tag = tags["a"];
            a.attr(attr, tag[attr]);
        }
        a.addClass("text-warning");
        a.html(i[0].outerHTML);
        output += a[0].outerHTML + "\r\n";
    }
    output += "</div>";
    return output;
}
