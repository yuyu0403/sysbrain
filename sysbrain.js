document.addEventListener("DOMContentLoaded",function(){
    const btn = document.getElementById('btn');
    const list = document.getElementById('list');
    const row_all = document.getElementById('row_all');
    const title_top = document.getElementById('title_top');
    btn.addEventListener("click",modelbtn);
    function modelbtn() {
        if(list.style.display === 'block'){
            list.style.display = 'none';
            row_all.style.display = 'block';
            title_top.style.background = '';
        }
        else{
            list.style.display = 'block';
            row_all.style.display = 'none';
            title_top.style.background = 'gray';
        }
    };
});

document.addEventListener("DOMContentLoaded",function(){
    const text = document.getElementById('text');
    const title = document.getElementById('title');
    const group = document.getElementById('group');
    const groupbtn = document.getElementById('groupbtn');
    groupbtn.addEventListener("click",groupbtnfcn);
    function groupbtnfcn(){
        if(text.style.display ==='block' || title.style.display ==='flex'){
            text.style.display ='none';
            title.style.display ='none';
            group.style.display ='flex';
            group.style.width ='100vw';
        }
        else{
            text.style.display ='block';
            title.style.display ='flex';
            group.style.display ='none';
        }
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

<<<<<<< HEAD
    // 2. 綁定點擊事件，切換顯示的內容
=======
>>>>>>> e15811181bb9d9c32d6db8b2496bc3cb0256205e
    Object.keys(pages).forEach(iconId => {
        const icon = document.getElementById(iconId);
        if (icon) {
            icon.addEventListener("click", () => {
<<<<<<< HEAD
                console.log(`點擊了 ${iconId}`);

                // 隱藏所有內容
                document.querySelectorAll('.top_content, .dashboard_content, .server_manage, #robot_manager, #using_situation, #usage_estimate').forEach(el => {
                    el.style.display = "none";
                });

                // 顯示被點擊對應的內容
                pages[iconId].forEach(pageId => {
                    const page = document.getElementById(pageId);
                    if (page) {
                        console.log(`顯示 ${pageId}`);
                        page.style.display = "block";

                        // 確保內部 h1 也會顯示
                        const h1 = page.querySelector("h1");
                        if (h1) {
                            h1.style.display = "block";
                        }
=======
                document.querySelectorAll('.top_content, .dashboard_content, .server_manage').forEach(el => {
                    el.style.display = "none";
                });

                pages[iconId].forEach(pageId => {
                    const page = document.getElementById(pageId);
                    if (page) {
                        page.style.display = "block";
>>>>>>> e15811181bb9d9c32d6db8b2496bc3cb0256205e
                    }
                });
            });
        }
    });
<<<<<<< HEAD

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
=======
})
>>>>>>> e15811181bb9d9c32d6db8b2496bc3cb0256205e
