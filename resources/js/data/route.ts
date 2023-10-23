import ListItems from '@/types/ListItems'
import {
    BsHouseDoor,
    BsListCheck,
    BsJournalCheck,
    BsPeople,
    BsPencilSquare,
    BsTable,
    BsPersonGear,
} from 'react-icons/bs'

export const routeList: ListItems[] = [
    {
        title: 'Home',
        href: 'home',
        icon: 'home',
    },
    {
        title: 'ToDo',
        href: 'todo',
        icon: 'todo',
        itemLists: [
            {
                href: 'home',
                title: 'ToDo一覧',
            },
        ],
    },
    {
        title: 'MyRouting',
        href: 'my_habit',
        icon: 'myRouting',
        itemLists: [
            { href: 'habit.create', title: '新規作成' },
            {
                href: 'home',
                title: '自分の習慣一覧',
            },
        ],
    },
    {
        title: 'ShareRouting',
        href: 'share_habit',
        icon: 'shareRouting',
        itemLists: [
            {
                href: 'home',
                title: 'みんなの習慣一覧',
            },
        ],
    },
    {
        title: '作業記録',
        href: 'work_log',
        icon: 'workLog',
        itemLists: [
            {
                href: 'home',
                title: '作業記録一覧',
            },
        ],
    },
    {
        title: 'カレンダー',
        href: 'calendar',
        icon: 'calendar',
    },
    {
        title: '設定',
        href: 'account',
        icon: 'account',
        itemLists: [
            {
                href: 'home',
                title: 'アカウント設定',
            },
            {
                href: 'home',
                title: '通知設定',
            },
            {
                href: 'logout',
                title: 'ログアウト',
            },
        ],
    },
]

export const routeIcons = {
    home: BsHouseDoor,
    todo: BsListCheck,
    myRouting: BsJournalCheck,
    shareRouting: BsPeople,
    workLog: BsPencilSquare,
    calendar: BsTable,
    account: BsPersonGear,
}
