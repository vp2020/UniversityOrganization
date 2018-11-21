var ORG = ORG || {};

ORG.mainTabs = (function () {
    url = "https://people.rit.edu/dmgics/754/23/proxy.php";
    function getTabs(orgId) {
        console.log(orgId);
        let pathName = "/Application/Tabs/?orgId=" + orgId;
        var tabOpts = "";

        $.ajax({
            type: "GET",
            url: url,
            data: "path=" + encodeURI(pathName),
            dataType: "xml",
            success: function (data) {
                console.log(data);
                $("row", data).each(function () {
                    console.log($("Tab", this).text());
                    tabOpts += $("Tab", this).text();
                });
            }
        });
        $("#tabs").html(tabOpts);
        console.log(tabOpts);
    }

    return {
        getTabs: getTabs
    };
}());

