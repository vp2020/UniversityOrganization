var ORG = ORG || {};

ORG.cities = (function () {
    url = "https://people.rit.edu/dmgics/754/23/proxy.php";
    function getCities(stateName) {
        let pathName = "/Cities/?state=" + stateName;
        $.ajax({
            type: "GET",
            url: url,
            data: "path=" + encodeURI(pathName),
            dataType: "xml",
            success: function (data) {
                var cityOpts = "";
                cityOpts += "<option value=''>Cities</option>";
                $("row", data).each(function () {
                    cityOpts += "<option value='" + $("city", this).text() + "'>" + $("city", this).text() + "</option>";
                });
                $("#city").html(cityOpts);
            }
        });
    }

    return {
        getCities: getCities
    };
}());

