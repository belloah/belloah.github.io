var version = {
    ver22: {
        name: "ver 2.2",
        date: "April 22, 2020",
        list: [
            "UI update: change checkbox to custom form class and increase margin",
            "Added role button to a tag with no linking action"
        ]
    },
    ver21: {
        name: "ver 2.1",
        date: "April 22, 2020",
        list: [
            "Added redirect from lineDestroyer.html to lineDestroyer/index.html"
        ]
    },
    ver20: {
        name: "ver 2.0",
        date: "April 21, 2020",
        list: [
            "Introduced article mode and \"Bananas?\" config",
            "Unchecked \"Love minion?\" when \"Bananas?\" is checked",
            "Results textarea scroll to bottom",
            "Added display of current result in modal",
            "Removed \".\" after \"ver\"",
            "Changed \"Release Notes\" presentation from hard coding to JavaScript objects",
            "Used the same modal element \"dada\" for display results and release notes",
            "Changed order of version list",
            "Grammar correction"
        ]
    },
    ver10: {
        name: "ver 1.0",
        date: "April 20, 2020",
        list: [
            "Introduced basic transforming function",
            "Changed app description to a card element \"What is Line Destroyer?\"",
            "Fixed grammar mistake from \"design\" to \"designed\"",
            "Set viewport for mobile device",
            "Added putBanana function for pasting data of clipboard (client access grant needed)",
            "Migrated functions to one-touch Key \"Go banana!\" for paste, transform and copy",
            "Added option whether put banana (paste from clipboard) when using one-touch key, default checked",
            "Added option whether love minion (copy) when using one-touch key, default checked",
            "Added \"How to use Line Destroyer?\" section",
            "Changed layout for small screen",
            "Added Release Notes at footer"
        ]
    },
    ver01: {
        name: "ver 0.1",
        date: "April 20, 2020",
        list: [
            "Added footer",
            "Added Header",
            "Added a button to copy transformed text",
            "Commited to GitHub"
        ]
    },
    ver00: {
        name: "ver 0.0",
        date: "April 19, 2020",
        list: ["Introduced basic transforming function"]
    }
}
function releaseNotes(){
    $("#dadaLabel").html("Release Notes");
    $("#dadaBody").html(displayVersion());
    $(".modal-footer").html(hehe);
}
function displayVersion(){
    var versions="";
    for (var ver in version){
        versions+="<h6>"+version[ver].name+"</h6><p class=\"small\">"+version[ver].date+"</p><ul>";
        for (point in version[ver].list) {
            versions+="<li class=\"small\">"+version[ver].list[point]+"</li>";
        };
        versions+="</ul>";
    };
    return versions;
}
function currentVersion(){
    return version[Object.keys(version)[0]].name;
}
function greet(){
    console.log(
        "Bello 啊~ 我係雪糕啊~ 睇到呢行字就話我知啦~"
    )
}