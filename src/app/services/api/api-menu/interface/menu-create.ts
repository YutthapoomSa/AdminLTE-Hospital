export class ReqCreateMenu {
    menuName: string;
    iframeMenu: string;
    submenuId: number;
}

export class ResCreateMenuData {
    menuId: number;
    menuName: string;
    iframeMenu: string;
    submenuId: number;
}

export class ResCreateMenu {
    resCode: string;
    resData: ResCreateMenuData;
    msg: string;
}
