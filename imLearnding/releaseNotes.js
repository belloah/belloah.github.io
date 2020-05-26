var releaseNotes = {
    dadaTitle: "Release Notes",
    dadaFoot: "<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">hehe</button>",
    dadaBody: function () {
        var versions = "";
        for (var ver in version) {
            versions += "<h6>" + version[ver].name + "</h6><p class=\"small\">" + version[ver].date + "</p><ul>";
            for (point in version[ver].list) {
                versions += "<li class=\"small\">" + version[ver].list[point] + "</li>";
            };
            versions += "</ul>";
        };
        return versions;
    }
}
var version = {
    ver01: {
        name: "ver 0.1",
        date: "April 29, 2020",
        list: ["Introduced basic tag copying UI"]
    },
    ver00: {
        name: "ver 0.0",
        date: "April 28, 2020",
        list: ["Introduced I'm Learnding"]
    }
}
function currentVersion() {
    return version[Object.keys(version)[0]].name;
}