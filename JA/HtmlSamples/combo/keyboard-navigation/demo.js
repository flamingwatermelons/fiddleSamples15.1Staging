$(function () {
            $("#combo").igCombo({
                width: "270px",
                textKey: "MountainName",
                valueKey: "ID",
                dataSource: mountainTops,
                multiSelection: {
                    enabled: true
                }
            });

            InitTooltip();
        });