const tags = [
    { text: "Lorem", weight: 13 },
    { text: "Ipsum", weight: 10.5 },
    { text: "Dolor", weight: 9.4 },
    { text: "Sit", weight: 8 },
    { text: "Amet", weight: 6.2 },
    { text: "Consectetur", weight: 5 },
    { text: "Adipiscing", weight: 5 },
    { text: "CSS", weight: 5 },
    { text: "Bootstrap", weight: 13 },
    { text: "パズドラ", weight: 1 },
    { text: "Visual Studio Code", weight: 2 },
    { text: "Travel", weight: 7 },
    { text: "Tools", weight: 1 },
    { text: "Snippet", weight: 4 },
    { text: "Reading", weight: 7 },
    { text: "PHP", weight: 3 },
    { text: "Information Security", weight: 1 },
    { text: "Japanese", weight: 2 },
    { text: "JavaScript", weight: 25 },
    { text: "jQuery", weight: 15 },
    { text: "Korean", weight: 4 },
    { text: "HTML5", weight: 15 },
    { text: "Idea", weight: 25 },
    { text: "Firebase", weight: 8 },
    { text: "Font Awesome", weight: 3 },
    { text: "Guitar", weight: 2 },
];
for (tag in tags) {
    tags[tag].handlers = {
        click: function () {
            copy(this.innerText);
        }
    };
}
function copy(text) {
    $("input").val(text);
    $("input").select();
    document.execCommand("copy");
}