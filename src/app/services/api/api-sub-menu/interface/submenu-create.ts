export interface ReqCreateSubmenu {
    submenuName: string;
    iframe: string;
    link: string;
    page: string;
}

export interface ResCreateSubmenuData {
    submenuId: number;
    submenuName: string;
    iframe: string;
    link: string;
    page: string;
}

export interface ResCreateSubmenu {
    resCode: string;
    resData: ResCreateSubmenuData;
    msg: string;
}
