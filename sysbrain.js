document.addEventListener("DOMContentLoaded",function(){
    const btn = document.getElementById('btn');
    const list = document.getElementById('list');
    const row_all = document.getElementById('row_all');
    const title_top = document.getElementById('title_top');
    const text = document.getElementById('text');
    const title = document.getElementById('title');
    const group = document.getElementById('group');
    const groupbtn = document.getElementById('groupbtn');
    const spe = document.getElementById('spe');

    btn.addEventListener("click",modelbtn);
    function modelbtn() {
        const btntext = btn.childNodes[0].nodeValue.trim();
        if(list.style.display === 'block'){
            list.style.display = 'none';
            row_all.style.display = 'block';
            title_top.style.background = 'black';
        }
        else{
            list.style.display = 'block';
            row_all.style.display = 'none';
            title_top.style.background = 'gray';
            ass_list.style.display = 'none';
        }
    };

    groupbtn.addEventListener("click",groupbtnfcn);
    spe.addEventListener("click",groupbtnfcn);

    function groupbtnfcn(){
        const groupDisplay = window.getComputedStyle(group).display;
        if(groupDisplay ==='block' || groupDisplay === 'flex'){
            text.style.display ='block';
            title.style.display ='flex';
            group.style.display ='none';
        }
        else{
            text.style.display ='none';
            title.style.display ='none';
            group.style.display ='flex';
            group.style.width ='100vw';
        }
    };

    const General_Robot_Mode = document.getElementById('General Robot Mode');
    General_Robot_Mode.addEventListener("click",General_Robot_Mode_btn);
    function General_Robot_Mode_btn(){
        btn.childNodes[0].nodeValue = '通用型機器人模式 ';
        location.reload();
    };

    const ass_robot = document.getElementById('ass_robot');
    const ass_list = document.getElementById('ass_list');
    const ass_list_overview = document.getElementById('ass_list_overview');
    ass_robot.addEventListener("click",ass_robot_btn);
    function ass_robot_btn(){
        btn.childNodes[0].nodeValue = '小幫手模式';
        list.style.display = 'none';
        title_top.style.background ='black'; 
        ass_list.style.display = 'block';
        ass_list_overview.style.display = 'block';
        ass_list_overview.style.marginLeft = '20%'; 
        text.style.display = 'none';
    }; 
});




document.addEventListener("DOMContentLoaded", function() {
    const pages = {
        dashboard_icon: ["dashboard", "dashboard_content"],
        robot_manager_icon: ["robot_manager"],
        using_situation_icon: ["using_situation"],
        usage_estimate_icon: ["usage_estimate"],
        server_manage_icon: ["server_manage", "server_manage_top"]
    };

    Object.keys(pages).forEach(iconId => {
        const icon = document.getElementById(iconId);
        if (icon) {
            icon.addEventListener("click", () => {
                document.querySelectorAll('.top_content, .dashboard_content, .server_manage').forEach(el => {
                    el.style.display = "none";
                });

                pages[iconId].forEach(pageId => {
                    const page = document.getElementById(pageId);
                    if (page) {
                        page.style.display = "block";
                    }
                });
            });
        }
    });

    // 3. 處理 "系統管理" 按鈕 (點擊後隱藏主要側邊欄，顯示齒輪按鈕)
    const server_manage_icon = document.getElementById('server_manage_icon');
    const side_first_ul = document.getElementById('side_first_ul');
    const sidebar_set = document.getElementById('sidebar_set');
    const icon_gear = document.getElementById('icon_gear');
    const icon_lock = document.getElementById('icon_lock');
    const icon_group = document.getElementById('icon_group');
    const dashboard = document.getElementById('dashboard');
    const server_manage = document.getElementById('server_manage');

    if (server_manage_icon) {
        server_manage_icon.addEventListener('click', () => {
            console.log("點擊了 系統管理");
            side_first_ul.style.display = "none";
            sidebar_set.style.justifyContent = "flex-end";
            icon_gear.style.display = "flex";
            icon_lock.style.display = "none";
            icon_group.style.display = "none";
        });
    }

    // 4. 點擊 "齒輪" 按鈕後，恢復側邊欄
    if (icon_gear) {
        icon_gear.addEventListener('click', () => {
            console.log("點擊了 齒輪，恢復側邊欄");
            side_first_ul.style.display = "flex";
            sidebar_set.style.justifyContent = "space-between";
            icon_gear.style.display = "none";
            icon_lock.style.display = "flex";
            icon_group.style.display = "flex";
            server_manage.style.display = "none";

            // 顯示 dashboard
            dashboard.style.display = "block";
    
            // 顯示 dashboard 內部的 h1 和 p
            dashboard.querySelectorAll("h1, p").forEach(el => {
                el.style.display = "block";
            });
    
        });
    }

});



var options = {
    "annotations": {},
    "chart": {
        "animations": {
            "enabled": false
        },
        "background": "#fff",
        "fontFamily": "Roboto",
        "height": 316,
        "id": "JJkVZ",
        "stackOnlyBar": true,
        "toolbar": {
            "show": false,
            "tools": {
                "selection": true,
                "zoom": true,
                "zoomin": true,
                "zoomout": true,
                "pan": true,
                "reset": true
            }
        },
        "width": 0,
        "zoom": {
            "allowMouseWheelZoom": false
        }
    },
    "plotOptions": {
        "line": {
            "isSlopeChart": false,
            "colors": {
                "threshold": 0
            }
        },
        "bar": {
            "borderRadius": 10,
            "borderRadiusApplication": "end",
            "borderRadiusWhenStacked": "last",
            "hideZeroBarsWhenGrouped": false,
            "isDumbbell": false,
            "isFunnel": false,
            "isFunnel3d": true,
            "dataLabels": {
                "total": {
                    "enabled": false,
                    "offsetX": 0,
                    "offsetY": 0,
                    "style": {
                        "color": "#373d3f",
                        "fontSize": "12px",
                        "fontWeight": 600
                    }
                }
            }
        },
        "bubble": {
            "zScaling": true
        },
        "treemap": {
            "borderRadius": 4,
            "dataLabels": {
                "format": "scale"
            },
            "seriesTitle": {
                "show": true,
                "offsetY": 1,
                "offsetX": 1,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderRadius": 2,
                "style": {
                    "background": "rgba(0, 0, 0, 0.6)",
                    "color": "#fff",
                    "fontSize": "12px",
                    "fontWeight": 400,
                    "cssClass": "",
                    "padding": {
                        "left": 6,
                        "right": 6,
                        "top": 2,
                        "bottom": 2
                    }
                }
            }
        },
        "radialBar": {
            "hollow": {
                "background": "#fff"
            },
            "dataLabels": {
                "name": {},
                "value": {},
                "total": {}
            },
            "barLabels": {
                "enabled": false,
                "offsetX": 0,
                "offsetY": 0,
                "useSeriesColors": true,
                "fontWeight": 600,
                "fontSize": "16px"
            }
        },
        "pie": {
            "donut": {
                "labels": {
                    "name": {},
                    "value": {},
                    "total": {}
                }
            }
        }
    },
    "colors": [
        "#2873BF"
    ],
    "dataLabels": {
        "enabled": false,
        "style": {
            "fontWeight": 700
        },
        "background": {
            "dropShadow": {}
        }
    },
    "grid": {
        "borderColor": "#DEDEDE",
        "padding": {
            "right": 25,
            "left": 15
        }
    },
    "legend": {
        "position": "left",
        "fontSize": 14,
        "offsetY": 0,
        "clusterGroupedSeries": true,
        "clusterGroupedSeriesOrientation": "vertical",
        "markers": {
            "size": 7
        },
        "itemMargin": {
            "vertical": 0
        }
    },
    "markers": {
        "size": 5,
        "hover": {
            "size": 0,
            "sizeOffset": 6
        }
    },
    "series": [
        {
            "name": "人數",
            "data": [
                {
                    "x": "2025-02-10",
                    "y": 5
                },
                {
                    "x": "2025-02-11",
                    "y": 4
                },
                {
                    "x": "2025-02-12",
                    "y": 3
                },
                {
                    "x": "2025-02-13",
                    "y": 5
                },
                {
                    "x": "2025-02-14",
                    "y": 3
                },
                {
                    "x": "2025-02-15",
                    "y": 1
                },
                {
                    "x": "2025-02-16",
                    "y": 1
                },
                {
                    "x": "2025-02-17",
                    "y": 4
                },
                {
                    "x": "2025-02-18",
                    "y": 5
                },
                {
                    "x": "2025-02-19",
                    "y": 3
                },
                {
                    "x": "2025-02-20",
                    "y": 4
                },
                {
                    "x": "2025-02-21",
                    "y": 2
                },
                {
                    "x": "2025-02-22",
                    "y": 2
                },
                {
                    "x": "2025-02-23",
                    "y": 1
                },
                {
                    "x": "2025-02-24",
                    "y": 2
                },
                {
                    "x": "2025-02-25",
                    "y": 1
                },
                {
                    "x": "2025-02-26",
                    "y": 1
                },
                {
                    "x": "2025-02-27",
                    "y": 2
                },
                {
                    "x": "2025-02-28",
                    "y": 0
                },
                {
                    "x": "2025-03-01",
                    "y": 0
                },
                {
                    "x": "2025-03-02",
                    "y": 0
                },
                {
                    "x": "2025-03-03",
                    "y": 3
                },
                {
                    "x": "2025-03-04",
                    "y": 5
                },
                {
                    "x": "2025-03-05",
                    "y": 3
                },
                {
                    "x": "2025-03-06",
                    "y": 3
                },
                {
                    "x": "2025-03-07",
                    "y": 3
                },
                {
                    "x": "2025-03-08",
                    "y": 1
                },
                {
                    "x": "2025-03-09",
                    "y": 1
                },
                {
                    "x": "2025-03-10",
                    "y": 4
                },
                {
                    "x": "2025-03-11",
                    "y": 2
                }
            ],
            "group": "apexcharts-axis-0"
        }
    ],
    "states": {
        "hover": {
            "filter": {}
        },
        "active": {
            "filter": {}
        }
    },
    "stroke": {
        "curve": "straight",
        "width": 3,
        "fill": {
            "type": "solid",
            "opacity": 0.85,
            "gradient": {
                "shade": "dark",
                "type": "horizontal",
                "shadeIntensity": 0.5,
                "inverseColors": true,
                "opacityFrom": 1,
                "opacityTo": 1,
                "stops": [
                    0,
                    50,
                    100
                ],
                "colorStops": []
            }
        }
    },
    "tooltip": {
        "hideEmptySeries": false
    },
    "xaxis": {
        "labels": {
            "trim": true,
            "style": {}
        },
        "group": {
            "groups": [],
            "style": {
                "colors": [],
                "fontSize": "12px",
                "fontWeight": 400,
                "cssClass": ""
            }
        },
        "tickAmount": "dataPoints",
        "title": {
            "style": {
                "fontWeight": 700
            }
        }
    },
    "yaxis": {
        "tickAmount": 5,
        "labels": {
            "showDuplicates": false,
            "style": {}
        },
        "title": {
            "style": {
                "fontWeight": 700
            }
        }
    },
    "_chartInstances": [
        {
            "id": "JJkVZ",
            "chart": {
                "opts": {
                    "annotations": {
                        "position": "front",
                        "yaxis": [],
                        "xaxis": [],
                        "points": []
                    },
                    "chart": {
                        "type": "line",
                        "background": "#fff",
                        "foreColor": "#373d3f",
                        "offsetX": 0,
                        "offsetY": 0,
                        "toolbar": {
                            "show": false
                        },
                        "animations": {
                            "enabled": false
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 2,
                            "left": 2,
                            "blur": 4,
                            "color": "#000",
                            "opacity": 0.35
                        },
                        "fontFamily": "Roboto",
                        "height": 291,
                        "width": 1011,
                        "id": "JJkVZ"
                    },
                    "plotOptions": {
                        "bar": {
                            "horizontal": false,
                            "columnWidth": "70%",
                            "barHeight": "70%",
                            "distributed": false,
                            "borderRadius": 10,
                            "borderRadiusApplication": "end",
                            "borderRadiusWhenStacked": "last",
                            "colors": {
                                "ranges": [],
                                "backgroundBarColors": [],
                                "backgroundBarOpacity": 1
                            },
                            "dataLabels": {
                                "position": "top"
                            }
                        },
                        "heatmap": {
                            "radius": 2,
                            "enableShades": true,
                            "shadeIntensity": 0.5
                        },
                        "radialBar": {
                            "startAngle": 0,
                            "endAngle": 360,
                            "offsetX": 0,
                            "offsetY": 0,
                            "hollow": {
                                "margin": 5,
                                "size": "50%",
                                "background": "#fff",
                                "position": "front",
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "track": {
                                "show": true,
                                "background": "#f2f2f2",
                                "strokeWidth": "97%",
                                "opacity": 1,
                                "margin": 5,
                                "dropShadow": {
                                    "enabled": false,
                                    "top": 0,
                                    "left": 0,
                                    "blur": 3,
                                    "color": "#000",
                                    "opacity": 0.5
                                }
                            },
                            "dataLabels": {
                                "show": true,
                                "name": {
                                    "show": true,
                                    "fontSize": 16,
                                    "offsetY": 0
                                },
                                "value": {
                                    "show": true,
                                    "fontSize": 14,
                                    "offsetY": 16
                                },
                                "total": {
                                    "show": false,
                                    "label": "Total",
                                    "fontSize": 16
                                }
                            }
                        },
                        "pie": {
                            "startAngle": 0,
                            "endAngle": 360,
                            "offsetX": 0,
                            "offsetY": 0,
                            "dataLabels": {
                                "offset": 0
                            },
                            "donut": {
                                "size": "65%",
                                "labels": {
                                    "show": false,
                                    "name": {
                                        "show": true,
                                        "fontSize": 16,
                                        "offsetY": -10
                                    },
                                    "value": {
                                        "show": true,
                                        "fontSize": 20,
                                        "offsetY": 10
                                    },
                                    "total": {
                                        "show": false,
                                        "showAlways": false,
                                        "label": "Total",
                                        "fontSize": 16
                                    }
                                }
                            }
                        },
                        "radar": {
                            "offsetX": 0,
                            "offsetY": 0,
                            "polygons": {
                                "strokeColors": "#e8e8e8",
                                "connectorColors": "#e8e8e8",
                                "fill": {}
                            }
                        }
                    },
                    "theme": {
                        "mode": "light",
                        "palette": "palette1"
                    },
                    "dataLabels": {
                        "enabled": false,
                        "textAnchor": "middle",
                        "offsetX": 0,
                        "offsetY": 0,
                        "style": {
                            "fontSize": 12,
                            "fontWeight": 700
                        },
                        "background": {
                            "enabled": true,
                            "foreColor": "#fff",
                            "borderRadius": 2,
                            "padding": 4,
                            "opacity": 0.9,
                            "borderWidth": 1,
                            "borderColor": "#fff"
                        },
                        "dropShadow": {
                            "enabled": false,
                            "top": 1,
                            "left": 1,
                            "blur": 1,
                            "color": "#000",
                            "opacity": 0.45
                        }
                    },
                    "markers": {
                        "size": 5,
                        "strokeColors": "#fff",
                        "strokeWidth": 2,
                        "strokeOpacity": 0.9,
                        "strokeDashArray": 0,
                        "fillOpacity": 1,
                        "shape": "circle",
                        "radius": 2,
                        "offsetX": 0,
                        "offsetY": 0,
                        "hover": {
                            "size": 0
                        }
                    },
                    "xaxis": {
                        "type": "category",
                        "offsetX": 0,
                        "offsetY": 0,
                        "position": "bottom",
                        "labels": {
                            "show": true,
                            "rotate": -45,
                            "rotateAlways": false,
                            "trim": true,
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 400
                            }
                        },
                        "axisBorder": {
                            "show": true,
                            "color": "#e0e0e0"
                        },
                        "axisTicks": {
                            "show": true,
                            "color": "#e0e0e0"
                        },
                        "title": {
                            "style": {
                                "fontSize": 12,
                                "fontWeight": 700
                            }
                        },
                        "crosshairs": {
                            "show": true,
                            "width": 1,
                            "position": "back",
                            "opacity": 0.9,
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1
                            },
                            "fill": {
                                "type": "solid",
                                "color": "#B1B9C4",
                                "gradient": {
                                    "colorFrom": "#D8E3F0",
                                    "colorTo": "#BED1E6",
                                    "opacityFrom": 0.4,
                                    "opacityTo": 0.5
                                }
                            },
                            "dropShadow": {
                                "enabled": false,
                                "left": 0,
                                "top": 0,
                                "blur": 1,
                                "opacity": 0.4
                            }
                        },
                        "convertedCatToNumeric": true
                    },
                    "yaxis": [
                        {
                            "show": true,
                            "showAlways": false,
                            "showForNullSeries": true,
                            "opposite": false,
                            "reversed": false,
                            "logarithmic": false,
                            "logBase": 10,
                            "tickAmount": 5,
                            "forceNiceScale": false,
                            "floating": false,
                            "labels": {
                                "show": true,
                                "showDuplicates": false,
                                "minWidth": 0,
                                "maxWidth": 160,
                                "offsetX": 0,
                                "offsetY": 0,
                                "rotate": 0,
                                "padding": 20,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 400,
                                    "cssClass": ""
                                }
                            },
                            "axisBorder": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 1,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "axisTicks": {
                                "show": false,
                                "color": "#e0e0e0",
                                "width": 6,
                                "offsetX": 0,
                                "offsetY": 0
                            },
                            "title": {
                                "rotate": -90,
                                "offsetY": 0,
                                "offsetX": 0,
                                "style": {
                                    "fontSize": 11,
                                    "fontWeight": 700,
                                    "cssClass": ""
                                }
                            },
                            "tooltip": {
                                "enabled": false,
                                "offsetX": 0
                            },
                            "crosshairs": {
                                "show": true,
                                "position": "front",
                                "stroke": {
                                    "color": "#b6b6b6",
                                    "width": 1,
                                    "dashArray": 0
                                }
                            }
                        }
                    ],
                    "grid": {
                        "show": true,
                        "borderColor": "#e0e0e0",
                        "strokeDashArray": 0,
                        "position": "back",
                        "xaxis": {
                            "lines": {
                                "show": false
                            }
                        },
                        "yaxis": {
                            "lines": {
                                "show": true
                            }
                        },
                        "row": {
                            "opacity": 0.5
                        },
                        "column": {
                            "opacity": 0.5
                        },
                        "padding": {
                            "top": 0,
                            "right": 25,
                            "bottom": 0,
                            "left": 15
                        }
                    },
                    "stroke": {
                        "show": true,
                        "curve": "straight",
                        "lineCap": "butt",
                        "width": 4,
                        "dashArray": 0
                    },
                    "fill": {
                        "type": "solid",
                        "opacity": 0.85,
                        "gradient": {
                            "shade": "dark",
                            "type": "horizontal",
                            "shadeIntensity": 0.5,
                            "inverseColors": true,
                            "opacityFrom": 1,
                            "opacityTo": 1,
                            "stops": [
                                0,
                                50,
                                100
                            ],
                            "colorStops": []
                        },
                        "pattern": {
                            "style": "squares",
                            "width": 6,
                            "height": 6,
                            "strokeWidth": 2
                        }
                    },
                    "legend": {
                        "show": true,
                        "showForSingleSeries": false,
                        "floating": false,
                        "position": "left",
                        "horizontalAlign": "center",
                        "fontSize": 14,
                        "fontWeight": 400,
                        "offsetX": -20,
                        "offsetY": 0,
                        "labels": {
                            "useSeriesColors": false
                        },
                        "markers": {
                            "width": 12,
                            "height": 12,
                            "strokeWidth": 0,
                            "strokeColor": "#fff",
                            "radius": 12
                        },
                        "itemMargin": {
                            "horizontal": 5,
                            "vertical": 0
                        },
                        "onItemClick": {
                            "toggleDataSeries": true
                        },
                        "onItemHover": {
                            "highlightDataSeries": true
                        }
                    }
                },
                "w": {
                    "globals": {
                        "chartID": "JJkVZ",
                        "cuid": "cdy3dy55",
                        "events": {
                            "beforeMount": [],
                            "mounted": [],
                            "updated": [],
                            "clicked": [],
                            "selection": [],
                            "dataPointSelection": [],
                            "zoomed": [],
                            "scrolled": []
                        },
                        "colors": [
                            "#2873BF"
                        ],
                        "clientX": 750,
                        "clientY": 239,
                        "fill": {
                            "colors": [
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF",
                                "#2873BF"
                            ]
                        },
                        "stroke": {},
                        "dataLabels": {
                            "style": {}
                        },
                        "radarPolygons": {
                            "fill": {
                                "colors": [
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none",
                                    "none"
                                ]
                            }
                        },
                        "markers": {
                            "size": [
                                5,
                                5
                            ],
                            "largestSize": 11
                        },
                        "animationEnded": true,
                        "isDirty": true,
                        "isExecCalled": false,
                        "initialConfig": {
                            "fill": {
                                "type": "solid",
                                "opacity": 0.85,
                                "gradient": {
                                    "shade": "dark",
                                    "type": "horizontal",
                                    "shadeIntensity": 0.5,
                                    "inverseColors": true,
                                    "opacityFrom": 1,
                                    "opacityTo": 1
                                },
                                "image": {
                                    "src": []
                                },
                                "pattern": {
                                    "style": "squares",
                                    "width": 6,
                                    "height": 6,
                                    "strokeWidth": 2
                                }
                            },
                            "forecastDataPoints": {
                                "count": 0,
                                "fillOpacity": 0.5,
                                "dashArray": 4
                            },
                            "labels": [],
                            "noData": {
                                "align": "center",
                                "verticalAlign": "middle",
                                "offsetX": 0,
                                "offsetY": 0,
                                "style": {
                                    "fontSize": "14px"
                                }
                            },
                            "responsive": [],
                            "title": {
                                "align": "left",
                                "margin": 5,
                                "offsetX": 0,
                                "offsetY": 0,
                                "floating": false,
                                "style": {
                                    "fontSize": "14px",
                                    "fontWeight": 900
                                }
                            },
                            "subtitle": {
                                "align": "left",
                                "margin": 5,
                                "offsetX": 0,
                                "offsetY": 30,
                                "floating": false,
                                "style": {
                                    "fontSize": "12px",
                                    "fontWeight": 400
                                }
                            },
                            "yaxis": [
                                null
                            ],
                            "theme": {
                                "mode": "light",
                                "palette": "palette1",
                                "monochrome": {
                                    "enabled": false,
                                    "color": "#008FFB",
                                    "shadeTo": "light",
                                    "shadeIntensity": 0.65
                                }
                            }
                        },
                        "initialSeries": [
                            {
                                "name": "人數",
                                "data": [
                                    {
                                        "x": "2025-02-10",
                                        "y": 5
                                    },
                                    {
                                        "x": "2025-02-11",
                                        "y": 4
                                    },
                                    {
                                        "x": "2025-02-12",
                                        "y": 3
                                    },
                                    {
                                        "x": "2025-02-13",
                                        "y": 5
                                    },
                                    {
                                        "x": "2025-02-14",
                                        "y": 3
                                    },
                                    {
                                        "x": "2025-02-15",
                                        "y": 1
                                    },
                                    {
                                        "x": "2025-02-16",
                                        "y": 1
                                    },
                                    {
                                        "x": "2025-02-17",
                                        "y": 4
                                    },
                                    {
                                        "x": "2025-02-18",
                                        "y": 5
                                    },
                                    {
                                        "x": "2025-02-19",
                                        "y": 3
                                    },
                                    {
                                        "x": "2025-02-20",
                                        "y": 4
                                    },
                                    {
                                        "x": "2025-02-21",
                                        "y": 2
                                    },
                                    {
                                        "x": "2025-02-22",
                                        "y": 2
                                    },
                                    {
                                        "x": "2025-02-23",
                                        "y": 1
                                    },
                                    {
                                        "x": "2025-02-24",
                                        "y": 2
                                    },
                                    {
                                        "x": "2025-02-25",
                                        "y": 1
                                    },
                                    {
                                        "x": "2025-02-26",
                                        "y": 1
                                    },
                                    {
                                        "x": "2025-02-27",
                                        "y": 2
                                    },
                                    {
                                        "x": "2025-02-28",
                                        "y": 0
                                    },
                                    {
                                        "x": "2025-03-01",
                                        "y": 0
                                    },
                                    {
                                        "x": "2025-03-02",
                                        "y": 0
                                    },
                                    {
                                        "x": "2025-03-03",
                                        "y": 3
                                    },
                                    {
                                        "x": "2025-03-04",
                                        "y": 5
                                    },
                                    {
                                        "x": "2025-03-05",
                                        "y": 3
                                    },
                                    {
                                        "x": "2025-03-06",
                                        "y": 3
                                    },
                                    {
                                        "x": "2025-03-07",
                                        "y": 3
                                    },
                                    {
                                        "x": "2025-03-08",
                                        "y": 1
                                    },
                                    {
                                        "x": "2025-03-09",
                                        "y": 1
                                    },
                                    {
                                        "x": "2025-03-10",
                                        "y": 4
                                    },
                                    {
                                        "x": "2025-03-11",
                                        "y": 2
                                    }
                                ],
                                "group": "apexcharts-axis-0"
                            }
                        ],
                        "lastXAxis": [],
                        "lastYAxis": [],
                        "columnSeries": null,
                        "labels": [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12,
                            13,
                            14,
                            15,
                            16,
                            17,
                            18,
                            19,
                            20,
                            21,
                            22,
                            23,
                            24,
                            25,
                            26,
                            27,
                            28,
                            29,
                            30
                        ],
                        "timescaleLabels": [],
                        "noLabelsProvided": true,
                        "allSeriesCollapsed": false,
                        "collapsedSeries": [],
                        "collapsedSeriesIndices": [],
                        "ancillaryCollapsedSeries": [],
                        "ancillaryCollapsedSeriesIndices": [],
                        "risingSeries": [],
                        "dataFormatXNumeric": false,
                        "capturedSeriesIndex": -1,
                        "capturedDataPointIndex": -1,
                        "selectedDataPoints": [],
                        "invalidLogScale": false,
                        "ignoreYAxisIndexes": [],
                        "maxValsInArrayIndex": 0,
                        "radialSize": 80.6080178262354,
                        "zoomEnabled": true,
                        "panEnabled": false,
                        "selectionEnabled": false,
                        "yaxis": null,
                        "mousedown": false,
                        "lastClientPosition": {},
                        "yValueDecimal": 0,
                        "total": 0,
                        "SVGNS": "http://www.w3.org/2000/svg",
                        "svgWidth": 1011,
                        "svgHeight": 291,
                        "noData": false,
                        "locale": {
                            "months": [
                                "January",
                                "February",
                                "March",
                                "April",
                                "May",
                                "June",
                                "July",
                                "August",
                                "September",
                                "October",
                                "November",
                                "December"
                            ],
                            "shortMonths": [
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun",
                                "Jul",
                                "Aug",
                                "Sep",
                                "Oct",
                                "Nov",
                                "Dec"
                            ],
                            "days": [
                                "Sunday",
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday"
                            ],
                            "shortDays": [
                                "Sun",
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat"
                            ],
                            "toolbar": {
                                "exportToSVG": "Download SVG",
                                "exportToPNG": "Download PNG",
                                "exportToCSV": "Download CSV",
                                "menu": "Menu",
                                "selection": "Selection",
                                "selectionZoom": "Selection Zoom",
                                "zoomIn": "Zoom In",
                                "zoomOut": "Zoom Out",
                                "pan": "Panning",
                                "reset": "Reset Zoom"
                            }
                        },
                        "dom": {
                            "baseEl": {
                                "_prevClass": "JJkVZ"
                            },
                            "elWrap": {},
                            "Paper": {
                                "node": {},
                                "type": "svg",
                                "dom": {}
                            },
                            "elLegendForeign": {
                                "instance": {
                                    "type": "foreignObject",
                                    "dom": {}
                                }
                            },
                            "elLegendWrap": {},
                            "elGraphical": {
                                "node": {},
                                "type": "g",
                                "dom": {}
                            },
                            "elDefs": {
                                "node": {},
                                "type": "defs",
                                "dom": {}
                            },
                            "elGridRectMask": {},
                            "elGridRectBarMask": {},
                            "elGridRectMarkerMask": {},
                            "elForecastMask": {},
                            "elNonForecastMask": {},
                            "elGridRect": {
                                "node": {},
                                "type": "rect",
                                "dom": {}
                            },
                            "elGridRectBar": {
                                "node": {},
                                "type": "rect",
                                "dom": {}
                            },
                            "elGridRectMarker": {
                                "node": {},
                                "type": "rect",
                                "dom": {}
                            }
                        },
                        "memory": {
                            "methodsToExec": []
                        },
                        "shouldAnimate": true,
                        "skipLastTimelinelabel": false,
                        "skipFirstTimelinelabel": false,
                        "delayedElements": [
                            {
                                "el": {
                                    "instance": {
                                        "type": "g",
                                        "dom": {}
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "type": "g",
                                        "dom": {}
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "type": "g",
                                        "dom": {}
                                    }
                                },
                                "index": 0
                            },
                            {
                                "el": {
                                    "instance": {
                                        "type": "g",
                                        "dom": {}
                                    }
                                },
                                "index": 0
                            }
                        ],
                        "axisCharts": true,
                        "isDataXYZ": false,
                        "isSlopeChart": false,
                        "resized": true,
                        "resizeTimer": null,
                        "comboCharts": false,
                        "dataChanged": true,
                        "previousPaths": [
                            {
                                "type": "line",
                                "paths": [
                                    {
                                        "d": "M 0 0 L 32.735632172946275 35.91928730875651 L 65.47126434589255 71.83857461751302 L 98.20689651883882 0 L 130.9425286917851 71.83857461751302 L 163.67816086473135 143.67714923502604 L 196.41379303767764 143.67714923502604 L 229.14942521062392 35.91928730875651 L 261.8850573835702 0 L 294.6206895565164 71.83857461751302 L 327.3563217294627 35.91928730875651 L 360.091953902409 107.75786192626953 L 392.82758607535527 107.75786192626953 L 425.56321824830155 143.67714923502604 L 458.29885042124783 107.75786192626953 L 491.03448259419406 143.67714923502604 L 523.7701147671404 143.67714923502604 L 556.5057469400866 107.75786192626953 L 589.2413791130328 179.59643654378254 L 621.9770112859792 179.59643654378254 L 654.7126434589254 179.59643654378254 L 687.4482756318718 71.83857461751302 L 720.183907804818 0 L 752.9195399777643 71.83857461751302 L 785.6551721507105 71.83857461751302 L 818.3908043236568 71.83857461751302 L 851.1264364966031 143.67714923502604 L 883.8620686695493 143.67714923502604 L 916.5977008424957 35.91928730875651 L 949.3333330154419 107.75786192626953"
                                    }
                                ],
                                "realIndex": "0"
                            }
                        ],
                        "allSeriesHasEqualX": true,
                        "pointsArray": [],
                        "dataLabelsRects": [],
                        "lastDrawnDataLabelsIndexes": [],
                        "hasNullValues": false,
                        "zoomed": false,
                        "gridWidth": 949.3333330154419,
                        "gridHeight": 179.59643654378254,
                        "rotateXLabels": true,
                        "defaultLabels": false,
                        "yLabelFormatters": [
                            null
                        ],
                        "LINE_HEIGHT_RATIO": 1.618,
                        "xAxisLabelsHeight": 79.40356345621746,
                        "xAxisGroupLabelsHeight": 43.925464904785166,
                        "xAxisLabelsWidth": 60.59375,
                        "yAxisLabelsWidth": 0,
                        "scaleX": 1,
                        "scaleY": 1,
                        "translateX": 36.666666984558105,
                        "translateY": 30,
                        "translateYAxisX": [
                            3.6666669845581055
                        ],
                        "yAxisWidths": [],
                        "translateXAxisY": 9.925445432027182,
                        "translateXAxisX": -15.1484375,
                        "tooltip": {
                            "tooltipUtil": {},
                            "tooltipLabels": {
                                "tooltipUtil": {}
                            },
                            "tooltipPosition": {},
                            "marker": {
                                "tooltipPosition": {}
                            },
                            "intersect": {
                                "isVerticalGroupedRangeBar": false
                            },
                            "axesTooltip": {},
                            "showOnIntersect": false,
                            "showTooltipTitle": true,
                            "fixedTooltip": false,
                            "xaxisTooltip": {},
                            "yaxisTTEls": null,
                            "isBarShared": true,
                            "lastHoverTime": 1741679207625,
                            "xyRatios": {
                                "yRatio": [
                                    0.027840196031846575
                                ],
                                "invertedYRatio": 0.005266853934347915,
                                "zRatio": null,
                                "xRatio": 0.03054775281921791,
                                "invertedXRatio": 0.16147313698471014,
                                "baseLineInvertedY": 0.1,
                                "baseLineY": [
                                    0
                                ],
                                "baseLineX": 0
                            },
                            "isXAxisTooltipEnabled": true,
                            "yaxisTooltips": [
                                false
                            ],
                            "allTooltipSeriesGroups": [],
                            "xaxisOffY": 180.59643654378254,
                            "xaxisTooltipText": {},
                            "yaxisOffX": 1,
                            "yaxisTooltip": {},
                            "yaxisTooltipText": [
                                {}
                            ],
                            "xcrosshairsWidth": 1,
                            "ycrosshairs": {
                                "instance": {
                                    "type": "line",
                                    "dom": {}
                                }
                            },
                            "ycrosshairsHidden": {
                                "instance": {
                                    "type": "line",
                                    "dom": {}
                                }
                            },
                            "xAxisTicksPositions": [
                                32.735632172946275,
                                65.47126434589255,
                                98.20689651883882,
                                130.9425286917851,
                                163.67816086473138,
                                196.41379303767766,
                                229.14942521062395,
                                261.8850573835702,
                                294.6206895565165,
                                327.35632172946276,
                                360.09195390240905,
                                392.8275860753553,
                                425.5632182483016,
                                458.2988504212479,
                                491.0344825941942,
                                523.7701147671404,
                                556.5057469400866,
                                589.2413791130328,
                                621.9770112859791,
                                654.7126434589253,
                                687.4482756318715,
                                720.1839078048177,
                                752.919539977764,
                                785.6551721507102,
                                818.3908043236564,
                                851.1264364966027,
                                883.8620686695489,
                                916.5977008424951,
                                949.3333330154413,
                                982.0689651883876
                            ],
                            "dataPointsDividedHeight": 5.986547884792752,
                            "dataPointsDividedWidth": 31.64444443384806,
                            "tooltipTitle": {},
                            "legendLabels": {},
                            "ttItems": [
                                {}
                            ],
                            "seriesBound": {
                                "x": 622.8333740234375,
                                "y": 164,
                                "width": 949.3333740234375,
                                "height": 178.596435546875,
                                "top": 164,
                                "right": 1572.166748046875,
                                "bottom": 342.596435546875,
                                "left": 622.8333740234375
                            }
                        },
                        "niceScaleAllowedMagMsd": [
                            [
                                1,
                                1,
                                2,
                                5,
                                5,
                                5,
                                10,
                                10,
                                10,
                                10,
                                10
                            ],
                            [
                                1,
                                1,
                                2,
                                5,
                                5,
                                5,
                                10,
                                10,
                                10,
                                10,
                                10
                            ]
                        ],
                        "niceScaleDefaultTicks": [
                            1,
                            2,
                            4,
                            4,
                            6,
                            6,
                            6,
                            6,
                            6,
                            6,
                            6,
                            6,
                            6,
                            6,
                            6,
                            6,
                            6,
                            6,
                            12,
                            12,
                            12,
                            12,
                            12,
                            12,
                            12,
                            12,
                            12,
                            24
                        ],
                        "seriesYAxisMap": [
                            [
                                0
                            ]
                        ],
                        "seriesYAxisReverseMap": [
                            0
                        ],
                        "series": [
                            [
                                5,
                                4,
                                3,
                                5,
                                3,
                                1,
                                1,
                                4,
                                5,
                                3,
                                4,
                                2,
                                2,
                                1,
                                2,
                                1,
                                1,
                                2,
                                0,
                                0,
                                0,
                                3,
                                5,
                                3,
                                3,
                                3,
                                1,
                                1,
                                4,
                                2
                            ]
                        ],
                        "seriesCandleO": [],
                        "seriesCandleH": [],
                        "seriesCandleM": [],
                        "seriesCandleL": [],
                        "seriesCandleC": [],
                        "seriesRangeStart": [],
                        "seriesRangeEnd": [],
                        "seriesRange": [],
                        "seriesPercent": [
                            [
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                0,
                                0,
                                0,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100,
                                100
                            ]
                        ],
                        "seriesGoals": [
                            [
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null
                            ]
                        ],
                        "seriesX": [
                            [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23,
                                24,
                                25,
                                26,
                                27,
                                28,
                                29,
                                30
                            ]
                        ],
                        "seriesZ": [
                            []
                        ],
                        "seriesNames": [
                            "人數"
                        ],
                        "seriesTotals": [
                            74
                        ],
                        "seriesLog": [
                            null
                        ],
                        "seriesColors": [
                            null
                        ],
                        "stackedSeriesTotals": [
                            5,
                            4,
                            3,
                            5,
                            3,
                            1,
                            1,
                            4,
                            5,
                            3,
                            4,
                            2,
                            2,
                            1,
                            2,
                            1,
                            1,
                            2,
                            0,
                            0,
                            0,
                            3,
                            5,
                            3,
                            3,
                            3,
                            1,
                            1,
                            4,
                            2
                        ],
                        "seriesXvalues": [
                            [
                                0,
                                32.735632172946275,
                                65.47126434589255,
                                98.20689651883882,
                                130.9425286917851,
                                163.67816086473135,
                                196.41379303767764,
                                229.14942521062392,
                                261.8850573835702,
                                294.6206895565164,
                                327.3563217294627,
                                360.091953902409,
                                392.82758607535527,
                                425.56321824830155,
                                458.29885042124783,
                                491.03448259419406,
                                523.7701147671404,
                                556.5057469400866,
                                589.2413791130328,
                                621.9770112859792,
                                654.7126434589254,
                                687.4482756318718,
                                720.183907804818,
                                752.9195399777643,
                                785.6551721507105,
                                818.3908043236568,
                                851.1264364966031,
                                883.8620686695493,
                                916.5977008424957,
                                949.3333330154419
                            ]
                        ],
                        "seriesYvalues": [
                            [
                                0,
                                35.91928730875651,
                                71.83857461751302,
                                0,
                                71.83857461751302,
                                143.67714923502604,
                                143.67714923502604,
                                35.91928730875651,
                                0,
                                71.83857461751302,
                                35.91928730875651,
                                107.75786192626953,
                                107.75786192626953,
                                143.67714923502604,
                                107.75786192626953,
                                143.67714923502604,
                                143.67714923502604,
                                107.75786192626953,
                                179.59643654378254,
                                179.59643654378254,
                                179.59643654378254,
                                71.83857461751302,
                                0,
                                71.83857461751302,
                                71.83857461751302,
                                71.83857461751302,
                                143.67714923502604,
                                143.67714923502604,
                                35.91928730875651,
                                107.75786192626953
                            ]
                        ],
                        "hasXaxisGroups": false,
                        "groups": [],
                        "barGroups": [],
                        "lineGroups": [
                            "apexcharts-axis-0"
                        ],
                        "areaGroups": [],
                        "hasSeriesGroups": false,
                        "seriesGroups": [
                            [
                                "人數"
                            ]
                        ],
                        "categoryLabels": [
                            "2025-02-10",
                            "2025-02-11",
                            "2025-02-12",
                            "2025-02-13",
                            "2025-02-14",
                            "2025-02-15",
                            "2025-02-16",
                            "2025-02-17",
                            "2025-02-18",
                            "2025-02-19",
                            "2025-02-20",
                            "2025-02-21",
                            "2025-02-22",
                            "2025-02-23",
                            "2025-02-24",
                            "2025-02-25",
                            "2025-02-26",
                            "2025-02-27",
                            "2025-02-28",
                            "2025-03-01",
                            "2025-03-02",
                            "2025-03-03",
                            "2025-03-04",
                            "2025-03-05",
                            "2025-03-06",
                            "2025-03-07",
                            "2025-03-08",
                            "2025-03-09",
                            "2025-03-10",
                            "2025-03-11"
                        ],
                        "selectionResizeTimer": null,
                        "lastWheelExecution": 0,
                        "isXNumeric": true,
                        "isMultiLineX": false,
                        "isMultipleYAxis": false,
                        "maxY": 5,
                        "minY": 0,
                        "minYArr": [
                            0
                        ],
                        "maxYArr": [
                            5
                        ],
                        "maxX": 30,
                        "minX": 1,
                        "initialMaxX": 30,
                        "initialMinX": 1,
                        "maxDate": 0,
                        "minDate": 1.7976931348623157e+308,
                        "minZ": 1.7976931348623157e+308,
                        "maxZ": -1.7976931348623157e+308,
                        "minXDiff": 1,
                        "yAxisScale": [
                            {
                                "result": [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ],
                                "niceMin": 0,
                                "niceMax": 5
                            }
                        ],
                        "xAxisScale": {
                            "result": [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23,
                                24,
                                25,
                                26,
                                27,
                                28,
                                29,
                                30
                            ],
                            "niceMin": 1,
                            "niceMax": 30
                        },
                        "xAxisTicksPositions": [],
                        "yLabelsCoords": [
                            {
                                "width": 16.666666984558105,
                                "index": 0
                            }
                        ],
                        "yTitleCoords": [
                            {
                                "width": 0,
                                "index": 0
                            }
                        ],
                        "barPadForNumericAxis": 0,
                        "padHorizontal": 0,
                        "xRange": 29,
                        "yRange": [
                            5
                        ],
                        "zRange": null,
                        "dataPoints": 30,
                        "xTickAmount": 28,
                        "multiAxisTickAmount": 0,
                        "xyCharts": true,
                        "isBarHorizontal": false,
                        "chartClass": ".apexchartsJJkVZ",
                        "comboBarCount": 0,
                        "isRangeBar": false,
                        "stackedSeriesTotalsByGroups": [
                            [
                                5,
                                4,
                                3,
                                5,
                                3,
                                1,
                                1,
                                4,
                                5,
                                3,
                                4,
                                2,
                                2,
                                1,
                                2,
                                1,
                                1,
                                2,
                                0,
                                0,
                                0,
                                3,
                                5,
                                3,
                                3,
                                3,
                                1,
                                1,
                                4,
                                2
                            ]
                        ],
                        "xAxisHeight": 79.40356345621746,
                        "yLogRatio": [
                            0.027840196031846575
                        ],
                        "logYRange": [
                            null
                        ]
                    }
                },
                "publicMethods": [
                    "updateOptions",
                    "updateSeries",
                    "appendData",
                    "appendSeries",
                    "isSeriesHidden",
                    "highlightSeries",
                    "toggleSeries",
                    "showSeries",
                    "hideSeries",
                    "setLocale",
                    "resetSeries",
                    "zoomX",
                    "toggleDataPointSelection",
                    "dataURI",
                    "exportToCSV",
                    "addXaxisAnnotation",
                    "addYaxisAnnotation",
                    "addPointAnnotation",
                    "clearAnnotations",
                    "removeAnnotation",
                    "paper",
                    "destroy"
                ],
                "eventList": [
                    "click",
                    "mousedown",
                    "mousemove",
                    "mouseleave",
                    "touchstart",
                    "touchmove",
                    "touchleave",
                    "mouseup",
                    "touchend"
                ],
                "animations": {},
                "axes": {},
                "core": {},
                "config": {
                    "opts": {}
                },
                "data": {
                    "twoDSeriesX": [
                        "2025-02-10",
                        "2025-02-11",
                        "2025-02-12",
                        "2025-02-13",
                        "2025-02-14",
                        "2025-02-15",
                        "2025-02-16",
                        "2025-02-17",
                        "2025-02-18",
                        "2025-02-19",
                        "2025-02-20",
                        "2025-02-21",
                        "2025-02-22",
                        "2025-02-23",
                        "2025-02-24",
                        "2025-02-25",
                        "2025-02-26",
                        "2025-02-27",
                        "2025-02-28",
                        "2025-03-01",
                        "2025-03-02",
                        "2025-03-03",
                        "2025-03-04",
                        "2025-03-05",
                        "2025-03-06",
                        "2025-03-07",
                        "2025-03-08",
                        "2025-03-09",
                        "2025-03-10",
                        "2025-03-11"
                    ],
                    "coreUtils": {},
                    "fallbackToCategory": true,
                    "activeSeriesIndex": 0
                },
                "grid": {
                    "xaxisLabels": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25,
                        26,
                        27,
                        28,
                        29,
                        30
                    ],
                    "axesUtils": {},
                    "isRangeBar": 0,
                    "elg": {
                        "node": {},
                        "type": "g",
                        "dom": {}
                    },
                    "elgridLinesH": {
                        "node": {},
                        "type": "g",
                        "dom": {}
                    },
                    "elgridLinesV": {
                        "node": {},
                        "type": "g",
                        "dom": {}
                    },
                    "elGridBorders": {
                        "node": {},
                        "type": "g",
                        "dom": {}
                    }
                },
                "graphics": {},
                "coreUtils": {},
                "crosshairs": {},
                "events": {},
                "exports": {},
                "fill": {
                    "opts": null,
                    "seriesIndex": 0,
                    "patternIDs": []
                },
                "localization": {},
                "options": {
                    "yAxis": {
                        "show": true,
                        "showAlways": false,
                        "showForNullSeries": true,
                        "opposite": false,
                        "reversed": false,
                        "logarithmic": false,
                        "logBase": 10,
                        "forceNiceScale": false,
                        "floating": false,
                        "labels": {
                            "show": true,
                            "showDuplicates": false,
                            "minWidth": 0,
                            "maxWidth": 160,
                            "offsetX": 0,
                            "offsetY": 0,
                            "rotate": 0,
                            "padding": 20,
                            "style": {
                                "colors": [],
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": ""
                            }
                        },
                        "axisBorder": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 1,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "axisTicks": {
                            "show": false,
                            "color": "#e0e0e0",
                            "width": 6,
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "title": {
                            "rotate": -90,
                            "offsetY": 0,
                            "offsetX": 0,
                            "style": {
                                "fontSize": "11px",
                                "fontWeight": 900,
                                "cssClass": ""
                            }
                        },
                        "tooltip": {
                            "enabled": false,
                            "offsetX": 0
                        },
                        "crosshairs": {
                            "show": true,
                            "position": "front",
                            "stroke": {
                                "color": "#b6b6b6",
                                "width": 1,
                                "dashArray": 0
                            }
                        }
                    },
                    "pointAnnotation": {
                        "x": 0,
                        "y": null,
                        "yAxisIndex": 0,
                        "marker": {
                            "size": 4,
                            "fillColor": "#fff",
                            "strokeWidth": 2,
                            "strokeColor": "#333",
                            "shape": "circle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "cssClass": ""
                        },
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        },
                        "customSVG": {
                            "offsetX": 0,
                            "offsetY": 0
                        },
                        "image": {
                            "width": 20,
                            "height": 20,
                            "offsetX": 0,
                            "offsetY": 0
                        }
                    },
                    "yAxisAnnotation": {
                        "y": 0,
                        "y2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "width": "100%",
                        "yAxisIndex": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "end",
                            "position": "right",
                            "offsetX": 0,
                            "offsetY": -3,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "xAxisAnnotation": {
                        "x": 0,
                        "x2": null,
                        "strokeDashArray": 1,
                        "fillColor": "#c2c2c2",
                        "borderColor": "#c2c2c2",
                        "borderWidth": 1,
                        "opacity": 0.3,
                        "offsetX": 0,
                        "offsetY": 0,
                        "label": {
                            "borderColor": "#c2c2c2",
                            "borderWidth": 1,
                            "borderRadius": 2,
                            "textAnchor": "middle",
                            "orientation": "vertical",
                            "position": "top",
                            "offsetX": 0,
                            "offsetY": 0,
                            "style": {
                                "background": "#fff",
                                "fontSize": "11px",
                                "fontWeight": 400,
                                "cssClass": "",
                                "padding": {
                                    "left": 5,
                                    "right": 5,
                                    "top": 2,
                                    "bottom": 2
                                }
                            }
                        }
                    },
                    "text": {
                        "x": 0,
                        "y": 0,
                        "text": "",
                        "textAnchor": "start",
                        "fontSize": "13px",
                        "fontWeight": 400,
                        "appendTo": ".apexcharts-annotations",
                        "backgroundColor": "transparent",
                        "borderColor": "#c2c2c2",
                        "borderRadius": 0,
                        "borderWidth": 0,
                        "paddingLeft": 4,
                        "paddingRight": 4,
                        "paddingTop": 2,
                        "paddingBottom": 2
                    }
                },
                "responsive": {},
                "series": {
                    "legendInactiveClass": "legend-mouseover-inactive"
                },
                "theme": {
                    "colors": [],
                    "isColorFn": false,
                    "isHeatmapDistributed": false,
                    "isBarDistributed": false
                },
                "formatters": {
                    "tooltipKeyFormat": "dd MMM"
                },
                "titleSubtitle": {},
                "legend": {
                    "isBarsDistributed": false,
                    "legendHelpers": {}
                },
                "toolbar": {
                    "ev": {},
                    "selectedClass": "apexcharts-selected",
                    "minX": 1,
                    "maxX": 30
                },
                "tooltip": {
                    "tooltipUtil": {},
                    "tooltipLabels": {
                        "tooltipUtil": {}
                    },
                    "tooltipPosition": {},
                    "marker": {
                        "tooltipPosition": {}
                    },
                    "intersect": {
                        "isVerticalGroupedRangeBar": false
                    },
                    "axesTooltip": {},
                    "showOnIntersect": false,
                    "showTooltipTitle": true,
                    "fixedTooltip": false,
                    "xaxisTooltip": null,
                    "yaxisTTEls": null,
                    "isBarShared": true,
                    "lastHoverTime": 1741679207625
                },
                "dimensions": {
                    "lgRect": {
                        "x": 586.1666870117188,
                        "y": 428,
                        "height": 0,
                        "width": 0
                    },
                    "yAxisWidth": 21.666666984558105,
                    "yAxisWidthLeft": 21.666666984558105,
                    "yAxisWidthRight": 0,
                    "xAxisHeight": 79.40356345621746,
                    "isSparkline": false,
                    "dimHelpers": {},
                    "dimYAxis": {},
                    "dimXAxis": {},
                    "dimGrid": {},
                    "lgWidthForSideLegends": 0,
                    "xPadRight": 0,
                    "xPadLeft": 0,
                    "datalabelsCoords": {
                        "width": 0,
                        "height": 0
                    },
                    "xAxisWidth": 60.59375
                },
                "updateHelpers": {},
                "zoomPanSelection": {
                    "selectedClass": "apexcharts-selected",
                    "minX": 1,
                    "maxX": 30,
                    "dragged": false,
                    "graphics": {},
                    "eventList": [
                        "mousedown",
                        "mouseleave",
                        "mousemove",
                        "touchstart",
                        "touchmove",
                        "mouseup",
                        "touchend",
                        "wheel"
                    ],
                    "clientX": 0,
                    "clientY": 0,
                    "startX": 0,
                    "endX": 0,
                    "dragX": 0,
                    "startY": 0,
                    "endY": 0,
                    "dragY": 0,
                    "moveDirection": "none",
                    "debounceTimer": null,
                    "debounceDelay": 100,
                    "wheelDelay": 400,
                    "zoomRect": {
                        "node": {},
                        "type": "rect",
                        "dom": {}
                    },
                    "selectionRect": {
                        "node": {},
                        "type": "rect",
                        "dom": {},
                        "_memory": {
                            "_draggable": {}
                        },
                        "events": {
                            "mousedown": {
                                "drag": {}
                            },
                            "touchstart": {
                                "drag": {}
                            },
                            "dragmove": {
                                "namespace": {}
                            }
                        }
                    },
                    "constraints": {
                        "x": 0,
                        "y": 0,
                        "w": 949.3333330154419,
                        "width": 949.3333330154419,
                        "h": 179.59643654378254,
                        "height": 179.59643654378254,
                        "x2": 949.3333330154419,
                        "y2": 179.59643654378254,
                        "cx": 474.66666650772095,
                        "cy": 89.79821827189127
                    }
                },
                "pie": {
                    "chartType": "line",
                    "initialAnim": false,
                    "dynamicAnim": false,
                    "animBeginArr": [
                        0
                    ],
                    "animDur": 0,
                    "defaultSize": 179.59643654378254,
                    "centerY": 89.79821827189127,
                    "centerX": 474.66666650772095,
                    "fullAngle": 360,
                    "initialAngle": 0,
                    "donutSize": 52.39521158705301,
                    "translateX": 0,
                    "translateY": 0,
                    "dataLabelsGroup": {
                        "node": {},
                        "type": "g",
                        "dom": {}
                    },
                    "maxY": 0,
                    "sliceLabels": [],
                    "sliceSizes": [],
                    "prevSectorAngleArr": []
                },
                "rangeBar": {
                    "isHorizontal": false,
                    "strokeWidth": 3,
                    "isNullValue": false,
                    "isRangeBar": 0,
                    "isVerticalGroupedRangeBar": 0,
                    "isFunnel": false,
                    "xRatio": 0.03054775281921791,
                    "invertedXRatio": 0.16147313698471014,
                    "invertedYRatio": 0.005266853934347915,
                    "baseLineInvertedY": 0.1,
                    "yaxisIndex": 0,
                    "translationsIndex": 0,
                    "seriesLen": 0,
                    "pathArr": [],
                    "lastActiveBarSerieIndex": 0,
                    "columnGroupIndices": [],
                    "stackedSeriesTotals": [
                        5,
                        4,
                        3,
                        5,
                        3,
                        1,
                        1,
                        4,
                        5,
                        3,
                        4,
                        2,
                        2,
                        1,
                        2,
                        1,
                        1,
                        2,
                        0,
                        0,
                        0,
                        3,
                        5,
                        3,
                        3,
                        3,
                        1,
                        1,
                        4,
                        2
                    ],
                    "barHelpers": {}
                },
                "annotations": {
                    "graphics": {},
                    "helpers": {},
                    "xAxisAnnotations": {
                        "helpers": {}
                    },
                    "yAxisAnnotations": {
                        "helpers": {},
                        "axesUtils": {}
                    },
                    "pointsAnnotations": {
                        "helpers": {}
                    },
                    "xDivision": 31.64444443384806
                }
            }
        }
    ]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();





var options2 = {
    "annotations": {},
    "chart": {
        "animations": {
            "enabled": false
        },
        "background": "#fff",
        "dropShadow": {
            "blur": 0
        },
        "fontFamily": "Roboto",
        "height": 316,
        "id": "lQt0B",
        "stackOnlyBar": true,
        "toolbar": {
            "show": false,
            "tools": {
                "selection": true,
                "zoom": true,
                "zoomin": true,
                "zoomout": true,
                "pan": true,
                "reset": true
            }
        },
        "type": "treemap",
        "width": 0,
        "zoom": {
            "enabled": false,
            "allowMouseWheelZoom": true
        }
    },
    "plotOptions": {
        "line": {
            "isSlopeChart": false,
            "colors": {
                "threshold": 0
            }
        },
        "bar": {
            "borderRadius": 10,
            "borderRadiusApplication": "end",
            "borderRadiusWhenStacked": "last",
            "hideZeroBarsWhenGrouped": false,
            "isDumbbell": false,
            "isFunnel": false,
            "isFunnel3d": true,
            "dataLabels": {
                "total": {
                    "enabled": false,
                    "offsetX": 0,
                    "offsetY": 0,
                    "style": {
                        "color": "#373d3f",
                        "fontSize": "12px",
                        "fontWeight": 600
                    }
                }
            }
        },
        "bubble": {
            "zScaling": true
        },
        "treemap": {
            "distributed": true,
            "borderRadius": 4,
            "dataLabels": {
                "format": "scale"
            },
            "seriesTitle": {
                "show": true,
                "offsetY": 1,
                "offsetX": 1,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderRadius": 2,
                "style": {
                    "background": "rgba(0, 0, 0, 0.6)",
                    "color": "#fff",
                    "fontSize": "12px",
                    "fontWeight": 400,
                    "cssClass": "",
                    "padding": {
                        "left": 6,
                        "right": 6,
                        "top": 2,
                        "bottom": 2
                    }
                }
            }
        },
        "radialBar": {
            "hollow": {
                "background": "#fff"
            },
            "dataLabels": {
                "name": {},
                "value": {},
                "total": {}
            },
            "barLabels": {
                "enabled": false,
                "offsetX": 0,
                "offsetY": 0,
                "useSeriesColors": true,
                "fontWeight": 600,
                "fontSize": "16px"
            }
        },
        "pie": {
            "donut": {
                "labels": {
                    "name": {},
                    "value": {},
                    "total": {}
                }
            }
        }
    },
    "colors": [
        "#4EA5C3",
        "#546E7A",
        "#468083",
        "#CE95F7",
        "#A5978B"
    ],
    "dataLabels": {
        "style": {
            "fontSize": 14,
            "fontWeight": 700,
            "colors": [
                "#fff"
            ]
        },
        "background": {
            "dropShadow": {}
        }
    },
    "fill": {},
    "grid": {
        "show": false,
        "padding": {
            "right": 15,
            "bottom": 20,
            "left": 10
        }
    },
    "legend": {
        "show": false,
        "fontSize": 14,
        "offsetY": 0,
        "clusterGroupedSeries": true,
        "clusterGroupedSeriesOrientation": "vertical",
        "markers": {
            "size": 7
        },
        "itemMargin": {
            "vertical": 0
        }
    },
    "markers": {},
    "series": [
        {
            "name": "使用次數",
            "data": [
                {
                    "x": "通用型機器人模式",
                    "y": 13
                },
                {
                    "x": "摘要小幫手",
                    "y": 1
                },
                {
                    "x": "翻譯小幫手",
                    "y": 3
                },
                {
                    "x": "錯誤訊息小幫手",
                    "y": 9
                },
                {
                    "x": "教學小幫手",
                    "y": 6
                },
                {
                    "x": "校正小幫手",
                    "y": 4
                },
                {
                    "x": "標題產生小幫手",
                    "y": 23
                },
                {
                    "x": "大綱產生小幫手",
                    "y": 6
                },
                {
                    "x": "文章產生小幫手",
                    "y": 3
                },
                {
                    "x": "會議記錄小幫手",
                    "y": 14
                },
                {
                    "x": "社群貼文小幫手",
                    "y": 1
                },
                {
                    "x": "新聞稿小幫手",
                    "y": 4
                },
                {
                    "x": "中華郵政",
                    "y": 27
                },
                {
                    "x": "證券小幫手",
                    "y": 6
                },
                {
                    "x": "虎航指南",
                    "y": 11
                },
                {
                    "x": "台企銀",
                    "y": 11
                },
                {
                    "x": "華銀-投研-川普",
                    "y": 4
                },
                {
                    "x": "鄉林建設",
                    "y": 4
                },
                {
                    "x": "統一證",
                    "y": 1
                },
                {
                    "x": "CDE醫材通",
                    "y": 2
                },
                {
                    "x": "資服",
                    "y": 5
                },
                {
                    "x": "DaiwaHouse",
                    "y": 4
                },
                {
                    "x": "麒",
                    "y": 5
                },
                {
                    "x": "CLC正隆",
                    "y": 107
                }
            ],
            "group": "apexcharts-axis-0"
        }
    ],
    "states": {
        "hover": {
            "filter": {}
        },
        "active": {
            "filter": {}
        }
    },
    "stroke": {
        "colors": [
            "#fff"
        ],
        "fill": {
            "type": "solid",
            "opacity": 0.85,
            "gradient": {
                "shade": "dark",
                "type": "horizontal",
                "shadeIntensity": 0.5,
                "inverseColors": true,
                "opacityFrom": 1,
                "opacityTo": 1,
                "stops": [
                    0,
                    50,
                    100
                ],
                "colorStops": []
            }
        }
    },
    "tooltip": {
        "hideEmptySeries": false,
        "followCursor": true,
        "x": {
            "show": false
        }
    },
    "xaxis": {
        "labels": {
            "trim": true,
            "style": {}
        },
        "group": {
            "groups": [],
            "style": {
                "colors": [],
                "fontSize": "12px",
                "fontWeight": 400,
                "cssClass": ""
            }
        },
        "tickAmount": "dataPoints",
        "title": {
            "style": {
                "fontWeight": 700
            }
        },
        "tooltip": {
            "enabled": false
        }
    },
    "yaxis": {
        "show": false,
        "labels": {
            "showDuplicates": false,
            "style": {}
        },
        "title": {
            "style": {
                "fontWeight": 700
            }
        }
    },
    "theme": {
        "palette": "palette3"
    }
}

var chart = new ApexCharts(document.querySelector("#chart2"), options2);
    chart.render();


