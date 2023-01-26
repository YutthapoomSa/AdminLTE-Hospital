export interface ResFindOneMenu {
    resCode: string;
    msg: string;
    resData: ResFindOneMenuData;
}

export interface ResFindOneMenuData {
    menuId: number;
    menuName: string;
    iframe: string;
}
