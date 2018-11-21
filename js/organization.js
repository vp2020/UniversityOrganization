var ORG = ORG || {};

ORG.org = (function () {
    url = "https://people.rit.edu/dmgics/754/23/proxy.php";
    function getOrgTypes() {
        $.ajax({
            type: "GET",
            url: url,
            data: "path=" + encodeURI("/OrgTypes"),
            dataType: "xml",
            success: function (data) {
                var orgOpts = "";
                orgOpts += "<option value=''>All Organization Types</option>";
                $("row", data).each(function () {
                    orgOpts += "<option value='" + $("type", this).text() + "'>" + $("type", this).text() + "</option>";
                });
                $("#orgType").html(orgOpts);
            }
        });
    }

    return {
        getOrgTypes: getOrgTypes
    };
}());