

import axios from "axios";
import { Environments } from "../../Environments/index"

const API = axios.create({
    baseURL: Environments.baseURL
})

export { API };