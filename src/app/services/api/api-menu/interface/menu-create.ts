export class ReqCreateMenu {
    menuName: string;
    iframe: string;
}

export class ResCreateMenuData {
    menuId: number;
    menuName: string;
    iframe: string;
}

export class ResCreateMenu {
    resCode: string;
    resData: ResCreateMenuData;
    msg: string;
}
