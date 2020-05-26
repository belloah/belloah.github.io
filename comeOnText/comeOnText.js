$('input[name=buttonMode]').change(function () {
    $('.buttonSet').attr('hidden', '');
    $(this.value).removeAttr('hidden');
});
$('input.act').change(function () {
    let check = $('.act:checked').length;
    if (check == $('.act').length) {
        $('input#all').prop('checked', true);
        $('input#all').prop('indeterminate', false);
    }
    else if (check == 0) {
        $('input#all').prop('checked', false);
        $('input#all').prop('indeterminate', false);
    }
    else {
        $('input#all').prop('indeterminate', true);
    }
});
$('#all').change(function () {
    $('input.act').prop('checked', this.checked);
});
$("#art").change(function () {
    banana = "";
});
$('#switch').on('hide.bs.collapse', function () {
    $('#config').html('<i class="fas fa-angle-down"></i>');
});
$('#switch').on('show.bs.collapse', function () {
    $('#config').html('<i class="fas fa-angle-up"></i>');
})

function pasteBanana() {
    navigator.clipboard.readText()
        .then((text) => {
            $('#banana').val($('#banana').val() + text);
        });
}

function eatBanana() {
    $('#banana').val("");
}

function roger() {
    if ($('#art').is(':checked')) {
        saveBanana(giveBanana());
        showBanana();
    }
    else
        showBanana(giveBanana());
}

function gelato() {
    navigator.clipboard.readText()
        .then((text) => {
            $('#banana').val(text);
            roger();
        });
}
function paraTu() {
    roger();
    thankYouMinion();
}

function goBanana() {
    navigator.clipboard.readText()
        .then((text) => {
            $('#banana').val(text);
            roger();
            thankYouMinion();
        });
}

function giveBanana(banana = $('#banana').val()) {
    if ($('#line').is(':checked'))
        banana = lineBreak(banana);
    if ($('#space').is(':checked'))
        banana = space(banana);
    if ($('#full').is(':checked'))
        banana = markTran(banana);
    return banana;
}

// add functions for Chinese
function lineBreak(banana) {
    return banana.replace(/(\r\n|\n|\r)/gm, "");
}
function space(banana) {
    return banana.split(' ').join('');
}
function markTran(banana) {
    var tmp = "";
    for (var i = 0; i < banana.length; i++) {
        tmp += onYourMark(banana.charCodeAt(i));
    }
    return tmp;
}
function onYourMark(banana) {
    for (mark in hMarks) {
        if (banana == hMarks[mark]) return String.fromCharCode(fMarks[mark]);
    }
    return String.fromCharCode(banana);
}

function showBanana(banana = bananas) {
    var minion = $("#minion");
    minion.val(banana);
    minion.scrollTop($("#minion")[0].scrollHeight);
}
function dadaBanana() {
    displayDada({ dadaTitle: "Bello!", dadaBody: "<pre>" + $("#minion").val() + "</pre>", dadaFoot: hehe });
}

function saveBanana(banana) {
    bananas += banana + "\r\n\r\n";
}

var bananas = "";
const hehe = '<button type="button" class="btn btn-secondary" data-dismiss="modal">hehe</button>';
const fMarks = [65311, 65281, 65292, 65307, 65306, 65288, 65289];
const hMarks = [63, 33, 44, 59, 58, 40, 41];

function thankYouMinion() {
    $('#minion').select();
    document.execCommand("copy");
}
