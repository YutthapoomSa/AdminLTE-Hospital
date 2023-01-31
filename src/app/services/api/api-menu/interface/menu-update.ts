export interface ReqUpdateMenu {
    menuName: string;
    iframeMenu: string;
    submenuId: number;
}

export class ResUpdateMenuData {
    menuId: number;
    menuName: string;
    iframeMenu: string;
    submenuId: number;
}

export class ResUpdateMenu {
    resCode: string;
    resData: ResUpdateMenuData;
    msg: string;
}
