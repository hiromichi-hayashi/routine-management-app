export default interface ListItems {
    title: string
    href: string
    icon: string
    itemLists?: Array<{ href: string; title: string }>
}
