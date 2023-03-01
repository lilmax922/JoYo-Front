import MainLayout from 'src/layouts/MainLayout.vue'
import ErrorNotFound from 'src/pages/ErrorNotFound.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('src/pages/IndexPage.vue'),
        meta: {
          title: '揪遊',
          login: false,
          admin: false
        }
      },
      {
        path: 'exploreBGs',
        name: 'exploreBGs',
        component: () => import('src/pages/frontPages/ExploreBGs.vue'),
        meta: {
          title: '揪遊 | 探索桌遊',
          login: false,
          admin: false
        }

      },
      {
        path: 'BGInfo/:id',
        name: 'BGInfo',
        component: () => import('src/pages/frontPages/BGInfoPage.vue'),
        meta: {
          title: '揪遊 | 桌遊介紹',
          login: false,
          admin: false
        }
      },
      {
        path: 'searchTeamups',
        name: 'searchTeamups',
        component: () => import('src/pages/frontPages/SearchTeamupsPage.vue'),
        meta: {
          title: '揪遊 | 搜尋揪團',
          login: false,
          admin: false
        }
      },
      {
        path: 'joinTeamup/:id',
        name: 'joinTeamup',
        component: () => import('src/pages/frontPages/JoinTeamupPage.vue'),
        meta: [
          {
            title: '揪遊 | 參加揪團',
            login: false,
            admin: false
          }
        ]
      },
      {
        path: 'teamup',
        name: 'teamup',
        component: () => import('src/pages/frontPages/TeamupPage.vue'),
        meta: {
          title: '揪遊 | 揪團組隊',
          login: true,
          admin: false
        }
      },
      {
        path: 'reservation',
        name: 'reservation',
        component: () => import('src/pages/frontPages/ReservationPage.vue'),
        meta: {
          title: '揪遊 | 手刀預約',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import('src/layouts/MemberLayout.vue'),
    meta: {
      title: '揪遊 | 我的主頁',
      login: true,
      admin: false
    },
    children: [
      {
        path: 'myInfo',
        name: 'myInfo',
        component: () => import('src/pages/member/MyInfo.vue'),
        meta: {
          title: '揪遊 | 會員資料',
          login: true,
          admin: false
        }
      },
      {
        path: 'myReservation',
        name: 'myReservation',
        component: () => import('src/pages/member/MyReservation.vue'),
        meta: {
          title: '揪遊 | 我的預約',
          login: true,
          admin: false
        }
      },
      {
        path: 'myTeamup',
        name: 'myTeamup',
        component: () => import('src/pages/member/MyTeamup.vue'),
        meta: {
          title: '揪遊 | 我的揪團',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('src/layouts/AdminLayout.vue'),
    meta: {
      title: '揪遊 | 管理者後台',
      login: true,
      admin: true
    },
    children: [
      {
        path: '',
        name: 'admin-Index',
        component: () => import('src/pages/admin/IndexPage.vue'),
        meta: {
          title: '揪遊 | 後台管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'manageAccount',
        name: 'manageAccount',
        component: () => import('src/pages/admin/ManageAccount.vue'),
        meta: {
          title: '揪遊 | 帳號管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'manageReservation',
        name: 'manageReservation',
        component: () => import('src/pages/admin/ManageReservation.vue'),
        meta: {
          title: '揪遊 | 預約管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'manageTeamup',
        name: 'manageTeamup',
        component: () => import('src/pages/admin/ManageTeamup.vue'),
        meta: {
          title: '揪遊 | 揪團管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'manageBG',
        name: 'manageBG',
        component: () => import('src/pages/admin/ManageBG.vue'),
        meta: {
          title: '揪遊 | 桌遊管理',
          login: true,
          admin: true
        }
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: ErrorNotFound,
    meta: {
      title: '揪遊 | 404',
      login: false,
      admin: false
    }
  },
  {
    path: '/:catchAll(.*)*',
    name: 'all',
    redirect: '/404'
  }
]

export default routes
