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
     following: number
     followers: number;
 }

 type TUser = {
    data: IUser[];
 }

const getUser = async (login: string): Promise< TUser | Error> => {
    try {
        const {data} = await API.get(`/users/${login}`)
        if(data){
            return data
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