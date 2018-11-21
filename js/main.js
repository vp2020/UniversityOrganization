
// initiation of the application
$(function () {
    ORG.org.getOrgTypes();
    ORG.states.getStates();
});

// function to populate city when state is changed
$(function () {
    $("#state").on("change", function () {
        var selectedText = $(this).find("option:selected").text();
        // getCities(selectedText);
        ORG.cities.getCities(selectedText);
    });
});

// function getTabs(orgId) {
//     console.log(orgId);
//     let pathName = "/Application/Tabs/?orgId=" + orgId;
//     var tabOpts = "";
//
//     $.ajax({
//         type: "GET",
//         url: url,
//         data: "path=" + encodeURI(pathName),
//         dataType: "xml",
//         success: function (data) {
//             console.log(data);
//             $("row", data).each(function () {
//                 console.log($("Tab", this).text());
//                 tabOpts += $("Tab", this).text();
//             });
//         }
//     });
//     $("#tabs").html(tabOpts);
//     console.log(tabOpts);
// }