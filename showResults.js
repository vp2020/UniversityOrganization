var showResults = (function (url) {
    $.ajax({
        url: url,
        data: {path: "/Organizations?" + $('#search-form').serialize()},
        success: function (data) {
            console.log(data);
            var output = "";
            $("#tableOutput").html(" ");

            // you should test for error first

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
                    var nameTabs = "" + $("type", this).text();
                    console.log(nameTabs)
                    output += `<tr>
                                       <td>` + $("type", this).text() + `</td>
                                       <td><a href="javascript:getTabs(` + $('OrganizationID', this).text() + `)">` + $("Name", this).text() + `</a></td>
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
}());