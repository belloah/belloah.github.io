const links = [
    {
        label: "Load and view an example",
        attribute: {
            onclick: "homkaling()",
            class: "nav-link"
        }
    },
    {
        label: "Download a template",
        attribute: {
            id: "download",
            download: "template.md",
            class: "nav-link"
        },
        href: "homkaling.md"
    },
    {
        label: "Load your file",
        attribute: {
            onclick: "showFileReader()",
            class: "nav-link"
        }
    }
];
$("#navbarNav").html(nav(links));
$(document).click(function (event) {
    if (!$(event.target).is('#navbarNav')) {
        $('.navbar-collapse').collapse('hide');
    }
});
$("#control").collapse('show');
$("#readme").collapse('show');
function homkaling() {
    let md = loadResume("homkaling.md");
    $("#detail").collapse("hide");
}

function loadFile(evt) {
    let files = evt.target.files;
    let file = files[0];
    if (file.name.endsWith(".md")) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let md = marked(event.target.result);
            $("#resume").html(md);
            $("#minionBlock").removeAttr('hidden');
        }
        reader.readAsText(file);
    }
    else {
        alert("Please upload a markdown file");
    }
}
function showFileReader() {
    let box = "";
    box += "<div class=\"custom-file\">";
    box += "<label for=\"file\" class=\"custom-file-label\">Load your file here</label>";
    box += "<input type=\"file\" id=\"file\" class=\"custom-file-input\" enctype=\"multipart/form-data\" onChange=\"loadFile(event)\">";
    box += "</div>";

    $("#detail").collapse("show");
    $("#detail .card-body").html(box);
}

function buildButton(banana = { class: "bello", label: "bello", attribute: { id: "bello" } }) {
    {
        let button = $("<button></button>");
        if (banana.label !== undefined) button.html(banana.label);
        if (banana.class !== undefined) button.attr("class", "btn " + banana.class + " form-control");
        else button.attr("class", "btn form-control");
        for (attr in banana.attribute) {
            button.attr(attr, banana.attribute[attr]);
        }
        return button[0].outerHTML;
    }
}
function stackButton(banana = []) {
    let buttons = "<div class=\"form-group row\">";
    for (button in banana) {
        buttons += "<div class=\"col\">";
        buttons += buildButton(banana[button]);
        buttons += "</div>";
    }
    buttons += "</div>";
    return buttons;
}
function buildLink(banana = { label: "bello", href: "#", attribute: { id: "bello" } }) {
    {
        let link = $("<a></a>");
        link.attr('class','nav-item')
        if (banana.label !== undefined) link.html(banana.label);
        if (banana.href !== undefined) link.attr("href", banana.href);
        else {
            link.attr("href", "#");
            link.attr("role", "button");
        }
        for (attr in banana.attribute) {
            link.attr(attr, banana.attribute[attr]);
        }
        return link[0].outerHTML;
    }
}
function stackLink(banana = []) {
    let links = "<div class=\"text-center\">";
    let link = 0;
    links += buildLink(banana[link]);
    link++;
    for (link; link < banana.length; link++) {
        links += " | "
        links += buildLink(banana[link]);
    }
    links += "</div>";
    return links;
}
function nav(banana = []) {
    let nav = "<div class=\"navbar-nav\">";
    let link = 0;
    nav += buildLink(banana[link]);
    link++;
    for (link; link < banana.length; link++) {
        nav += buildLink(banana[link])
    }
    nav += "</div>";
    return nav;
}

function loadResume(md) {
    $.ajax({
        url: md,
        async: false,
        success: function (data, status, xhr) {
            $("#resume").html($(marked(data)));
            $("#minionBlock").removeAttr('hidden');
        },
        error: function (xhr, status, error) {
            console.log("Error!" + xhr.status);
        }
    });
}
