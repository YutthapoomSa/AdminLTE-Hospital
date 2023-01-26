export interface Root {
    resCode: string;
    msg: string;
    resData: ResFindAllMenu[];
}

export interface ResFindAllMenu {
    menuId: number;
    menuName: string;
    iframe: string;
}
