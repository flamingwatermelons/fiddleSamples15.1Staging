$(function () {
$.ig.loader({
            scriptPath: "http://staging.igniteui.local/15-1/IgniteUI/js/",
            cssPath: "http://staging.igniteui.local/15-1/IgniteUI/css/",
            resources: 'modules/infragistics.util.js,' +
                'modules/infragistics.ui.grid.framework.js,' +
                'igGrid.Hiding,' +
                'igGrid.Filtering,' +
                'igGrid.Sorting,' +
                'igGrid.Paging,' +
                'igGrid.Summaries,' +
                'modules/infragistics.documents.core.js,' +
                'modules/infragistics.excel.js,' +
                'modules/infragistics.gridexcelexporter.js'
        });
        $.ig.loader(function () {

            $(function () {
                var data = [
                    { 'ProductID': 1, 'Name': 'Omnis ut illum nisi.', 'ProductNumber': 2973311236, "InStock": true, "Quantity": 56 },
                    { 'ProductID': 2, 'Name': 'Quis quibusdam qui.', 'ProductNumber': 5907101619, "InStock": false, "Quantity": 0 },
                    { 'ProductID': 3, 'Name': 'Sint laudantium et.', 'ProductNumber': 3057803521, "InStock": true, "Quantity": 26 },
                    { 'ProductID': 17, 'Name': 'Tempore eos.', 'ProductNumber': 3576608248, "InStock": true, "Quantity": 8 },
                    { 'ProductID': 18, 'Name': 'Maiores aut ducimus.', 'ProductNumber': 7079645227, "InStock": true, "Quantity": 62 },
                    { 'ProductID': 19, 'Name': 'Vel inventore.', 'ProductNumber': 191484500, "InStock": true, "Quantity": 18 },
                    { 'ProductID': 20, 'Name': 'Ut molestiae.', 'ProductNumber': 2994899561, "InStock": false, "Quantity": 0 },
                    { 'ProductID': 31, 'Name': 'Nihil magnam aut ut.', 'ProductNumber': 5652753011, "InStock": true, "Quantity": 41 },
                    { 'ProductID': 32, 'Name': 'Repellendus dolorum.', 'ProductNumber': 8807902556, "InStock": true, "Quantity": 10 },
                    { 'ProductID': 43, 'Name': 'Odit ut quo minus.', 'ProductNumber': 1083007847, "InStock": false, "Quantity": 0 }
                ];

                $("#grid").igGrid({
                    autoGenerateColumns: false,
                    width: "100%",
                    columns: [
                        { key: "ProductID", headerText: "Product ID", dataType: "number", width: "200px" },
                        { key: "Name", headerText: "Product Name", dataType: "string", width: "250px" },
                        { key: "ProductNumber", headerText: "Product Number", dataType: "number", width: "200px" },
                        { key: "InStock", headerText: "In Stock", dataType: "bool", width: "150px" },
                        { key: "Quantity", headerText: "Quantity", dataType: "number", width: "150px" }
                    ],
                    dataSource: data,
                    primaryKey: "ProductID",
                    features: [
                        {
                            name: "Filtering"
                        },
                        {
                            name: "Sorting",
                            mode: "multi",
                        },
                        {
                            name: "Paging",
                            type: "local",
                            pageSize: 10
                        },
                        {
                            name: "Hiding",
                        },
                        {
                            name: "Summaries"
                        }
                    ]
                });

                $("#exportButton").on("click", function () {
                    $.ig.GridExcelExporter.export($("#grid"), {
                        fileName: "igGrid",
                        gridFeatureOptions: { "sorting": "applied", "filtering": "applied", paging: "currentPage", "summaries": "applied" },
                        columnsToSkip: ["ProductID"]
                    });
                });
            });
        });
});