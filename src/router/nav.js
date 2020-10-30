// 配置一下导航的路由
/* 
  /    ====》 NewSong

  /rank  ====>  Rank

  /plist ===>  Plist

  /singer ===>Singer

*/

import NewSong from '@/views/NewSong/NewSong'
import Rank from '@/views/Rank/Rank'
import Plist from '@/views/Plist/Plist'
import Singer from '@/views/Singer/Singer'
import Nav from '@/components/nav/Nav'

const navs = [{
        path: '/',
        name: "newsong",
        meta: {
            title: "新歌"
        },
        components: {
            default: NewSong,
            navBar: Nav
        }
    },
    {
        path: '/rank',
        name: "rank",
        meta: {
            title: "排行"
        },
        components: {
            default: Rank,
            navBar: Nav
        }
    },
    {
        path: '/plist',
        name: "plist",
        meta: {
            title: "歌单"
        },
        components: {
            default: Plist,
            navBar: Nav
        }
    },
    {
        path: '/singer',
        name: "singer",
        meta: {
            title: "歌手"
        },
        components: {
            default: Singer,
            navBar: Nav
        }
    }
]

export default navs;