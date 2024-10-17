// import axios 

import axios from "axios";


const Api_Url = 'http://dev.spark-mis.ru:8082/api';



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
        
        localStorage.setItem('token', data.token);
        const user = await getUserInfo();

         data = {
            ...data,
            user: user
        };

        return data; 
    } catch (error) {
        throw new Error(error.response ? error.response.data.error : error.message); // Xatolikni qaytarish
    }
};



export const getUserInfo = async () => {
    const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish
    
    
    try {
        const response = await axios.get(`${Api_Url}/user/info`, {
            headers: {
                'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                'Accept': 'application/json', // Qabul qilinadigan tur
            }
        });
        
        return response.data; // Foydalanuvchi ma'lumotlarini qaytarish
    } catch (error) {
        // Xatolikni boshqarish
        console.error('Error fetching user info:', error);
        throw new Error(error.response ? error.response.data.error : error.message); // Xatolikni qaytarish
    }
};



export const logout = () => {
    localStorage.removeItem('userToken');
};



export const createDocument = async (userData) => {
    const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish


    let data = {
        "name" : "jbvfdsb"
    }
    
    try {
        const response = await axios.post(`${Api_Url}/user/info`, data, {
            headers: {
                'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                'Accept': 'application/json', // Qabul qilinadigan tur
                'Content-Type': 'application/json', // JSON formatda ma'lumot yuborish
            }
        });

        return response.data; // Foydalanuvchi ma'lumotlarini qaytarish
    } catch (error) {
        // Xatolikni boshqarish
        console.error('Error posting user info:', error);
        throw new Error(error.response ? error.response.data.error : error.message); // Xatolikni qaytarish
    }
};
