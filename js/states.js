var ORG = ORG || {};

ORG.states = (function () {
    url = "https://people.rit.edu/dmgics/754/23/proxy.php";
    function getStates() {
        $.ajax({
            type: "GET",
            url: url,
            data: "path=" + encodeURI("/States"),
            dataType: "xml",
            success: function (data) {
                var stateOpts = "";
                stateOpts += "<option value=''>States</option>";
                $("row", data).each(function () {
                    stateOpts += "<option value='" + $("State", this).text() + "'>" + $("State", this).text() + "</option>";
                });
                $("#state").html(stateOpts);
            }
        });
    }

    return {
        getStates: getStates
    };
}());