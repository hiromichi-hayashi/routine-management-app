interface Content {
    title: string
}

interface PageContent {
    home: {
        todo: Content
        achievementRate: Content
        calendar: Content
    }
    myRouting: Content
    shareRouting: Content
    workLog: Content
    calendar: Content
    account: Content
}

export const pageContent: PageContent = {
    home: {
        todo: {
            title: 'ToDo一覧',
        },
        achievementRate: {
            title: '達成率',
        },
        calendar: {
            title: 'カレンダー',
        },
    },
    myRouting: {
        title: 'MyRouting',
    },
    shareRouting: {
        title: 'ShareRouting',
    },
    workLog: {
        title: '作業記録',
    },
    calendar: {
        title: 'カレンダー',
    },
    account: {
        title: '設定',
    },
}
