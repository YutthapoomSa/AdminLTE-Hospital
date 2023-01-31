export interface Root {
    resCode: string;
    msg: string;
    resData: ResFindAllMenu[];
}

export interface ResFindAllMenu {
    menuId: number;
    menuName: string;
    iframeMenu: string;
    subMenuLists: SubMenuList[];
}

export interface SubMenuList {
    submenuId: number;
    submenuName: string;
    iframe: string;
    link: string;
    page: string;
}
