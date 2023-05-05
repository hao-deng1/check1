/**
 * 用户类别
 */
export type UserType = {
    id: number;
    userAccount: string;
    username: string;
    phone: string;
    email: string;
    avatarUrl?: string;
    createTime: Date;
    userStatus: number;
    integral: number;
    temporary: number;
    gender:number;
    userRole: number;
};