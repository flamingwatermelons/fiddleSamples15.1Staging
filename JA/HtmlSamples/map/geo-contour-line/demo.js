$(function () {
            $("#map").igMap({
                width: "700px",
                height: "500px",
                overviewPlusDetailPaneVisibility: "visible",
                overviewPlusDetailPaneBackgroundImageUri: "http://jp.staging.igniteui.local/15-1/images/samples/maps/world.png",
                series: [{
                    type: "geographicContourLine",
                    name: "precipitation",
                    fillScale: {
                        type: "value",
                        brushes: [
                            "#3300CC", "#4775FF", "#0099CC", "#00CC99",
                            "#33CC00", "#99CC00", "#CC9900", "#FFC20A", "#CC3300"]
                    },
                    triangleVertexMemberPath1: "v1",
                    triangleVertexMemberPath2: "v2",
                    triangleVertexMemberPath3: "v3",
                    longitudeMemberPath: "pointX",
                    latitudeMemberPath: "pointY",
                    valueMemberPath: "value",
                    triangulationDataSource: "http://jp.staging.igniteui.local/15-1/data-files/shapes/nws_precip_2011091820.itf",
                }],
                windowRect: {
                    left: 0.31,
                    top: 0.375,
                    height: 0.025,
                    width: 0.025
                }
            });
        });