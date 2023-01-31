export interface ResFindOneSubmenu {
    resCode: string;
    resData: ResFindOneSubmenuData;
    msg: string;
}

export interface ResFindOneSubmenuData {
    submenuId: number;
    submenuName: string;
    iframe: string;
    link: string;
    page: string;
}
