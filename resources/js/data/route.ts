import ListItems from '@/types/ListItems'

const routeList: ListItems[] = [
    { title: 'Home' },
    {
        title: 'Account',
        itemLists: ['アカウント設定', '作業記録一覧', 'タスク一覧'],
    },
    {
        title: 'My Routing',
        itemLists: ['習慣化一覧', '新規習慣化作成', '習慣化項目編集'],
    },
    {
        title: 'Share Routing',
        itemLists: [
            '習慣化一覧',
            '新規習慣化作成',
            '習慣化項目編集',
            '参加中習慣化一覧',
        ],
    },
]

export default routeList
