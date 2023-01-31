export interface ResFindAllSubmenu {
    resCode: string;
    resData: ResFindAllSubmenuData[];
    msg: string;
}

export interface ResFindAllSubmenuData {
    submenuId: number;
    submenuName: string;
    iframe: string;
    link: string;
    page: string;
}
