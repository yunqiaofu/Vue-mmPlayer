import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const routes = [{
    path: "/",
    component: () =>
        import ("pages/music"),
    redirect: "/music/playlist",
    children: [{
            path: "/music/playlist", //正在播放列表
            component: () =>
                import ("pages/playList/playList"),
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/music/userlist", //我的歌单
            component: () =>
                import ("pages/userList/userList"),
            meta: {
                title: "我的歌单",
                keepAlive: true
            }
        },
        {
            path: "/music/toplist", //推荐列表
            component: () =>
                import ("pages/topList/topList"),
            meta: {
                title: "推荐",
                keepAlive: true
            }
        },
        {
            path: "/music/leaderboard", //排行榜
            component: () =>
                import ("pages/leaderboard/leaderboard"),
            meta: {
                title: "排行榜",
                keepAlive: true
            }
        },
        {
            path: "/music/details/:id", //音乐详情列表
            component: () =>
                import ("pages/details/details")
        },
        {
            path: "/music/historylist", //我听过的列表
            component: () =>
                import ("pages/historyList/historyList"),
            meta: {
                title: "我听过的"
            }
        },
        {
            path: "/music/search", //搜索
            component: () =>
                import ("pages/search/search"),
            meta: {
                title: "搜索",
                keepAlive: true
            }
        },
        {
            path: "/music/comment/:id", //音乐评论
            component: () =>
                import ("pages/comment/comment"),
            meta: {
                title: "评论详情"
            }
        },
        {
            path: "/music/transceiver", //音乐电台
            component: () =>
                import ("pages/transceiver/transceiver"),
            meta: {
                title: "电台"
            }
        }
    ]
}];

export default new Router({
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    routes
});
