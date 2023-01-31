export interface ResFindOneMenu {
    resCode: string;
    msg: string;
    resData: ResFindOneMenuData;
}

export interface ResFindOneMenuData {
    menuId: number;
    menuName: string;
    iframeMenu: string;
    submenuId: number;
    submenuName: string;
    iframe: string;
    link: string;
    page: string;
}
