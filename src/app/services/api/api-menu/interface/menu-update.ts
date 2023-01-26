export interface ReqUpdateMenu {
    menuName: string;
    iframe: string;
}

export class ResUpdateMenuData {
    menuId: number;
    menuName: string;
    iframe: string;
}

export class ResUpdateMenu {
    resCode: string;
    resData: ResUpdateMenuData;
    msg: string;
}
