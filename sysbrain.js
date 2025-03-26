const btn = document.getElementById('btn');
const limit_robot = document.getElementById('limit_robot');
const limit_list = document.getElementById('limit_list');
const limit_list_text1 = document.getElementById('limit_list_text1');
const list = document.getElementById('list');
const row_all = document.getElementById('row_all');
const title_top = document.getElementById('title_top');
const ass_list_overview = document.getElementById('ass_list_overview');
const ass_list = document.getElementById('ass_list');
const text = document.getElementById('text');
const title = document.getElementById('title');
const group = document.getElementById('group');
const groupbtn = document.getElementById('groupbtn');
const spe = document.getElementById('spe');
const ass_robot = document.getElementById('ass_robot');

document.addEventListener("DOMContentLoaded",function(){
    
    btn.addEventListener("click",modelbtn);
    function modelbtn() {
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
});

document.addEventListener("DOMContentLoaded",function(){
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
});
   
document.addEventListener("DOMContentLoaded",function(){
    const General_Robot_Mode = document.getElementById('General_Robot_Mode');
    General_Robot_Mode.addEventListener("click",General_Robot_Mode_btn);
    function General_Robot_Mode_btn(){
        btn.childNodes[0].nodeValue = '通用型機器人模式 ';
        const btntext = btn.childNodes[0].nodeValue.trim();
        if(btntext === '通用型機器人模式'){
            location.reload();
        }
    };
});
    
document.addEventListener("DOMContentLoaded",function(){
    ass_robot.addEventListener("click",ass_robot_btn);
    function ass_robot_btn(){
        btn.childNodes[0].nodeValue = '小幫手模式';
        list.style.display = 'none';
        title_top.style.background ='black'; 
        ass_list.style.display = 'block';
        ass_list_overview.style.display = 'block';
        ass_list_overview.style.marginLeft = '20%'; 
        text.style.display = 'none';
        limit_list_text1.style.display = 'none';
        if(btn.childNodes[0].nodeValue ==='小幫手模式'){
            btn.addEventListener("click",function(){
                if(list.style.display === 'block'){
                    ass_list.style.display = 'none';
                }
                else{
                    ass_list.style.display = 'block';
                    row_all.style.display = 'none';
                    limit_list.style.display = 'none';
                }
            });
        }
    }; 
});
   
document.addEventListener("DOMContentLoaded",function(){
   
    limit_robot.addEventListener("click",limit_robot_btn);
    function limit_robot_btn(){
        btn.childNodes[0].nodeValue = '限定知識機器人';
        list.style.display = 'none';
        limit_list.style.display = 'block';
        limit_list_text1.style.display = 'block';
        limit_list_text1.style.marginLeft = '20%';
        title_top.style.background = 'black';
        ass_list_overview.style.display = 'none';
        if(btn.childNodes[0].nodeValue ==='限定知識機器人'){
            btn.addEventListener("click",function(){
                if(list.style.display === 'block'){
                    limit_list.style.display = 'none';
                }
                else{
                    limit_list.style.display = 'block';
                    row_all.style.display = 'none';
                    ass_list.style.display = 'none';
                    limit_list_text1.style.display = 'block';
                }
            });
        }
    }
});   



document.addEventListener("DOMContentLoaded", function() {
    const pages = {
        dashboard_icon: ["dashboard", "dashboard_content"],
        robot_manager_icon: ["robot_manager","robot_container"],
        using_situation_icon: ["using_situation","using_container"],
        usage_estimate_icon: ["usage_estimate","usage_container"],
        server_manage_icon: ["server_manage", "server_manage_top"]
    };

    Object.keys(pages).forEach(iconId => {
        const icon = document.getElementById(iconId);
        if (icon) {
            icon.addEventListener("click", () => {
                document.querySelectorAll('.top_content, .dashboard_content, .server_manage, .robot_container, .using_container', '.usage_container').forEach(el => {
                    el.style.display = "none";
                });

                pages[iconId].forEach(pageId => {
                    const page = document.getElementById(pageId);
                    if (page) {
                        page.style.display = "block";
                    }
                });

                if (iconId === "dashboard_icon") {
                    const dashboardContent = document.querySelector(".dashboard_content");
                    if (dashboardContent) {
                        dashboardContent.style.display = "block";

                        dashboardContent.querySelectorAll("*").forEach(el => {
                            el.style.display = "block";
                        });
                    }
                }

                if (iconId === "robot_manager_icon") {
                    const robotContent = document.querySelector(".robot_container");
                    if (robotContent) {
                        robotContent.style.display = "flex";

                        robotContent.querySelectorAll("*").forEach(el => {
                            el.style.display = "block";
                        });

                        const common_con_ul = this.getElementById("common_con_ul");
                        common_con_ul.style.display = "flex";
                        
                    }
                }

                if (iconId === "using_situation_icon") {
                    const usingContent = document.querySelector(".using_container");
                    if (usingContent) {
                        usingContent.style.display = "block";

                        usingContent.querySelectorAll("*").forEach(el => {
                            el.style.display = "flex";
                        });

                        const common_con_ul2 = this.getElementById("common_con_ul2");
                        common_con_ul2.style.display = "flex";
                        
                        const using_sidebar = this.getElementById("using_sidebar");
                        using_sidebar.style.display = "block";
                    }
                }

                if (iconId === "usage_estimate_icon") {
                    const usageContent = document.querySelector(".usage_container");
                    if (usageContent) {
                        usageContent.style.display = "flex";

                        usageContent.querySelectorAll("*").forEach(el => {
                            el.style.display = "block";
                        });
                    }
                }
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



// 使用 fetch 載入 JSON 資料
fetch('data.json')
    .then(response => response.json())  // 將回應轉換為 JSON 格式
    .then(data => {
        // 遍歷 data 中的每個圖表配置
        for (const [chartKey, chartConfig] of Object.entries(data)) {
        // 根據圖表配置的名稱選擇不同的 DOM 元素來渲染圖表
        var chartContainer = document.querySelector(`#${chartKey}-container`);

        // 如果對應的 DOM 元素存在，則初始化並渲染圖表
        if (chartContainer) {
            var chart = new ApexCharts(chartContainer, chartConfig);
            chart.render(); // 渲染圖表
        }
        }
    })
    .catch(error => {
        console.error("Error loading the JSON file:", error);
    });

