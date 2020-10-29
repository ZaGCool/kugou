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
        components: {
            default: NewSong,
            navBar: Nav
        }
    },
    {
        path: '/rank',
        name: "rank",
        components: {
            default: Rank,
            navBar: Nav
        }
    },
    {
        path: '/plist',
        name: "plist",
        components: {
            default: Plist,
            navBar: Nav
        }
    },
    {
        path: '/singer',
        name: "singer",
        components: {
            default: Singer,
            navBar: Nav
        }
    }
]

export default navs;