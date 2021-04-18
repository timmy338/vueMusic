import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


const FindMusic = () => import('../views/findMusic-1/everTop')
const Vedio = () => import('../views/vedio/menu')

const Recommed = () => import('../views/findMusic-1/recommed/menu')
const ClickSongMenu = () => import('../views/clickFindMusicSong/clickSongMenu')
const ClickAlbumMenu = () => import('../views/clickFindMusicAlbum/clickAlbumMenu')
const ClickSingerMenu = () => import('../views/clickFindMusicSinger/clickSingerMenu')
const ClickMVMenu = () => import('../views/clickFindMusicMV/clickMVMenu')

const Anchor = () => import('../views/findMusic-1/anchor/menu')
const NewMusic = () => import('../views/findMusic-1/newMusic/menu')
const NewMusicSongTag = () => import('../views/findMusic-1/newMusic/newSong/NewSongTag')
const Song = () => import('../views/findMusic-1/newMusic/newSong/song')

const NewMusicCDTag = () => import('../views/findMusic-1/newMusic/newCD/NewCDTag')
const NewCDAll = () => import('../views/findMusic-1/newMusic/newCD/newCDAll')

const MusicList = () => import('../views/findMusic-1/musicList/menu')
const MusicListTop = () => import('../views/findMusic-1/musicList/Top')
const MusicListBottom = () => import('../components/musicListBox')

const RankingList = () => import('../views/findMusic-1/rankingList/menu')
const Singer = () => import('../views/findMusic-1/singer/menu')
const SingerBottom = () => import('../views/findMusic-1/singer/singerImage')

const Search = () => import('../views/search/menu')
const SearchAlbum = () => import('../views/search/album/menu')
const SearchAnchor = () => import('../views/search/anchor/menu')
const SearchLyric = () => import('../views/search/lyric/menu')
const SearchSinger = () => import('../views/search/singer/menu')
const SearchSong = () => import('../views/search/song/menu')
const SearchSongList = () => import('../views/search/songList/menu')
const SearchUser = () => import('../views/search/user/menu')
const SearchVedio = () => import('../views/search/vedio/menu')

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    redirect: 'findMusic'
  },
  /* 發現音樂path */
  {
    path: '/findMusic',
    component: FindMusic,
    children: [
      {
        path: '/',
        redirect: 'recommed'
      },
      {
        path: 'recommed',
        component: Recommed
      },
      {
        path: 'anchor',
        component: Anchor
      },
      {
        path: 'newMusic',
        component: NewMusic,
        children:[
          {
            path:'/',
            redirect: 'newMusicSongTag'
          },
          {
            path:'newMusicSongTag',
            component: NewMusicSongTag,
            children:[
              {
                path:'/',
                redirect: 'Song',
              },
              {
                path:'Song',
                component:Song,
              },
            ]
          },
          {
            path:'newMusicCDTag',
            component: NewMusicCDTag,
            children:[
              {
                path:'/',
                redirect: 'newCDAll',
              },
              {
                path:'newCDAll',
                component:NewCDAll,
              },
            ]
          },
        ]
      },
      {
        path: 'musicList',
        component: MusicList,

        children:[
          {
            path:'/',
            redirect: 'musiclistdetail'
          },
          {
          path:'musiclistdetail',
          components:{
            top:MusicListTop,
            bottom:MusicListBottom,
          },
        }
        ]
      },
      {
        path: 'rankingList',
        component: RankingList
      },
      {
        path: 'singer',
        component: Singer,
        children:[
          {
            path:'/',
            redirect: 'singerBottom'
          },
          {
          path:'singerBottom',
          component:SingerBottom,
        }
        ]
      },
    ]
  },
  /* 視頻path */
  {
    path: '/vedio',
    component: Vedio
  },
  /* 搜尋path */
  {
    path: '/search',
    component: Search,
    children: [
      {
        path: '/',
        redirect: 'searchSong'
      },
      {
        path: 'searchAlbum',
        component: SearchAlbum
      },
      {
        path: 'searchAnchor',
        component: SearchAnchor
      },
      {
        path: 'searchLyric',
        component: SearchLyric
      },
      {
        path: 'searchSinger',
        component: SearchSinger
      },
      {
        path: 'searchSong',
        component: SearchSong
      },
      {
        path: 'searchSongList',
        component: SearchSongList
      },
      {
        path: 'searchUser',
        component: SearchUser
      },
      {
        path: 'searchVedio',
        component: SearchVedio
      },
    ]
  },
  /* 點擊第一頁歌單 */
  {
    path: '/clickSongMenu',
    component: ClickSongMenu
  },
  {
    path: '/clickAlbumMenu',
    component: ClickAlbumMenu
  },
  {
    path: '/clickSingerMenu',
    component: ClickSingerMenu
  },
  {
    path: '/clickMVMenu',
    component:  ClickMVMenu
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
