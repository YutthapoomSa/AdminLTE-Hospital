export interface ReqUpdateSubmenu {
    submenuId: number;
    submenuName: string;
    iframe: string;
    link: string;
    page: string;
}

export interface ResUpdateSubmenu {
    resCode: string;
    resData: ResUpdateSubmenuData;
    msg: string;
}

export interface ResUpdateSubmenuData {
    submenuId: number;
    submenuName: string;
    iframe: string;
    link: string;
    page: string;
}
