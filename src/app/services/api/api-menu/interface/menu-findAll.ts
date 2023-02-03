export interface Root {
    resCode: string;
    msg: string;
    resData: ResFindAllMenu[];
}

export interface ResFindAllMenu {
    id: number;
    menuName: string;
    icon: string;
    iframeMenu: string;
    subMenuLists: SubMenuList[];
}

export interface SubMenuList {
    submenuId: number;
    submenuName: string;
    iframe: string;
    link: string;
    submenuIcon: string;
}
