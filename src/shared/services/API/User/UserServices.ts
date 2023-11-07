import { API } from "../../axios-config";

export interface IUser{
    login: string;
    id: number;
    avatar_url: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    bio: string;
    public_repos: string;
    following: number
    followers: number;
}

type TUserCount = {
    data: IUser[]
    userCount: number
}

const getUser = async (login = ""): Promise<TUserCount | Error> => {
    try {
        const {data, headers} = await API.get(`/users/${login}`)
        if(data){
            return {
                data,
                userCount: headers['x-total-count']
            }
        }
        return new Error(`User ${login} não encontrado`);
    } catch (error) {
        console.log(error);
        return new Error((error as {message: string}).message || "Erro ao listar o registro")
    }
}

export const UserServices = {
    getUser
}