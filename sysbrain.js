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
})