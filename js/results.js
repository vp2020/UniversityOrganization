// function showResults() {
//     $.ajax({
//         url: url,
//         data: {path: "/Organizations?" + $('#search-form').serialize()},
//         success: function (data) {
//             console.log(data);
//             var output = "";
//             $("#tableOutput").html(" ");
//
//             // you should test for error first
//
//             if ($(data).find("row").length === 0) {
//                 output += "No matches found";
//             } else {
//                 // string template literal
//                 output += `<table id="results-table" class="tablesorter tablesorter-blackice">
//                                 <thead>
//                                     <tr>
//                                         <th>Type</th>
//                                         <th>Name</th>
//                                         <th>City</th>
//                                         <th>Zip</th>
//                                         <th>County</th>
//                                         <th>State</th>
//                                     </tr>
//                                 </thead>`;
//
//                 $("row", data).each(function () {
//                     var nameTabs = "" + $("type", this).text();
//                     console.log(nameTabs)
//                     output += `<tr>
//                                        <td>` + $("type", this).text() + `</td>
//                                        <td><a href="javascript:getTabs(` + $('OrganizationID', this).text() + `)">` + $("Name", this).text() + `</a></td>
//                                        <td>` + $("city", this).text() + `</td>
//                                        <td>` + $("zip", this).text() + `</td>
//                                        <td>` + $("CountyName", this).text() + `</td>
//                                        <td>` + $("State", this).text() + `</td>
//                                   </tr>`;
//                 });
//
//                 output += "</table>";
//                 $("#tableOutput").html(output);
//             }
//         }
//     });
// }


var ORG = ORG || {};

ORG.results = (function () {
    url = "https://people.rit.edu/dmgics/754/23/proxy.php";

    function showResults() {
        let pathName = "/Organizations?" + $('#search-form').serialize();
        $.ajax({
            url: url,
            data: "path=" + encodeURIComponent(pathName),
            dataType: "xml",
            success: function (data) {
                let output = "";
                $("#tableOutput").html(" ");

                if ($(data).find("row").length === 0) {
                    output += "No matches found";
                } else {
                    // string template literal
                    output += `<table id="results-table" class="tablesorter tablesorter-blackice">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Name</th>
                                        <th>City</th>
                                        <th>Zip</th>
                                        <th>County</th>
                                        <th>State</th>
                                    </tr>
                                </thead>`;
                    $("row", data).each(function () {
                        let nameTabs = "" + $("type", this).text();
                        let orgId = $('OrganizationID', this).text();
                        output += `<tr>
                                       <td>` + $("type", this).text() + `</td>
                                       <td><a href="javascript:ORG.mainTabs.getTabs(` + $('OrganizationID', this).text() + `)">` + $("Name", this).text() + `</a></td>
                                       <td>` + $("city", this).text() + `</td>
                                       <td>` + $("zip", this).text() + `</td>
                                       <td>` + $("CountyName", this).text() + `</td>
                                       <td>` + $("State", this).text() + `</td>
                                  </tr>`;
                    });

                    output += "</table>";
                    $("#tableOutput").html(output);
                }
            }
        });
    }

    return {
        getResult: showResults
    };
}());

