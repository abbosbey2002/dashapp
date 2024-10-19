// import axios 

import { data } from "autoprefixer";
import axios from "axios";


const Api_Url = 'http://dev.spark-mis.ru:8082/api';

let token = "";



// login method

export const login = async (login, password) => {
    try {
        const response = await axios.post(`${Api_Url}/user/auth`,
            { login, password },
            {
                headers: {
                    'Content-Type': 'application/json', 
                    'Accept': 'application/json', 
                }
            }
        );

        let data = response.data;
        
        if (data.status === "error") {
            throw new Error(data.error); 
        }


        console.log(data)
        
        localStorage.setItem('token', data.token);
        const user = await getUserInfo();

         data = {
            ...data,
            user: user
        };
        token = data.token;
        return data; 
    } catch (error) {
        throw new Error(error.response ? error.response.data.error : error.message); // Xatolikni qaytarish
    }
};



export const getUserInfo = async () => {
    try {
        const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish

        if (!token) {
            throw new Error('Token mavjud emas. Iltimos, avval tizimga kiring.');
        }

        const response = await axios.get(`${Api_Url}/user/info`, {
            headers: {
                'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                'Accept': 'application/json', // JSON formatini qabul qilish
            }
        });

        return response.data; // Foydalanuvchi ma'lumotlarini qaytarish
    } catch (error) {
        console.error('Error fetching user info:', error);
        // Xatolik qaytarish uchun optional chaining yordamida to'liqroq xabarni qaytarish
        throw new Error(error.response?.data?.error || error.message);
    }
};



export const logout = () => {
    localStorage.removeItem('userToken');
};



export const createDocument = async () => {

    // Yaratiladigan hujjat uchun ma'lumot
    const data = {
        name: "jbvfdsb"
    };
    
    try {
        const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish

        if (!token) {
            throw new Error('Token mavjud emas. Iltimos, avval tizimga kiring.');
        }

        const response = await axios.post(
            `${Api_Url}/document/create`, 
            data, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                    'Accept': 'application/json', // JSON formatini qabul qilish
                    'Content-Type': 'application/json', // JSON formatda ma'lumot yuborish
                }
            }
        );

        console.log('response', response)

        return response.data; // Foydalanuvchi ma'lumotlarini qaytarish

    } catch (error) {
        // Xatolikni boshqarish
        console.error('Error creating document:', error);
        throw new Error(error.response?.data?.error || error.message); // Xatolikni qaytarish
    }
};



export const getUserList = async (departament_id = null) => {
    try {
        const token = localStorage.getItem('token');

        const body = {};

        if (departament_id) {
            body.departament_id = departament_id;
        }

        const response = await axios.post(
            `${Api_Url}/manager/user/list`, 
            body,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            }
        );
        console.log('dates = ', data.data)
        return response.data.data; 
    } catch (error) {
        console.error('Error fetching user list:', error);
        throw new Error(error.response?.data?.error || error.message);
    }
};



export const getDepartments = async () => {
    try {
        const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish

        if (!token) {
            throw new Error('Token mavjud emas. Iltimos, avval tizimga kiring.');
        }

        // GET so'rovi orqali departamentlar ma'lumotini olish
        const response = await axios.get(`${Api_Url}/directory/departaments`, {
            headers: {
                'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                'Accept': 'application/json', // JSON formatini qabul qilish
            }
        });

        console.log(response.data); // Serverdan kelgan ma'lumotlarni ko'rsatish
        return response.data; // Ma'lumotlarni qaytarish

    } catch (error) {
        console.error('Error fetching departments:', error);
        // Xatolikni qaytarish
        throw new Error(error.response?.data?.error || error.message);
    }
};