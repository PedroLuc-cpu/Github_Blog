import { API } from "../../axios-config";

interface IUser{
    login: string;
    id: number;
    avatar_url: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    bio: string;
    public_repos: string;
    followers: number;
    following: number
}

const getUser = async (user: IUser): Promise<IUser | Error> => {
    try {
        const {data} = await API.get(`"users/${user.login}`)
        if(data){
            return data
        }
        return new Error(`User ${user.login} não encontrado`);
    } catch (error) {
        console.log(error);
        return new Error((error as {message: string}).message || "Erro ao listar o registro")
    }
}

export const UserServices = {
    getUser
}