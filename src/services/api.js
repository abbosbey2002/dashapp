// import axios 

import { data } from "autoprefixer";
import axios from "axios";
import Departament from "../components/short/Departament";
import { toast } from "react-toastify";


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
        // Keshlangan foydalanuvchi ma'lumotlarini tekshirish
        const cachedUserInfo = localStorage.getItem('user_info_cache');

        // Agar kesh mavjud bo'lsa va bo'sh bo'lmasa, uni JSON formatida qaytaramiz
        if (cachedUserInfo) {
            console.log('Keshlangan foydalanuvchi ma\'lumotlari qaytarildi');
            return JSON.parse(cachedUserInfo);
        }

        const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish

        if (!token) {
            throw new Error('Token mavjud emas. Iltimos, avval tizimga kiring.');
        }

        // Foydalanuvchi ma'lumotlarini API orqali olish
        const response = await axios.get(`${Api_Url}/user/info`, {
            headers: {
                'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                'Accept': 'application/json', // JSON formatini qabul qilish
            }
        });

        const userInfo = response.data; // Foydalanuvchi ma'lumotlari

        // Foydalanuvchi ma'lumotlarini keshlash, localStorage'ga yozish
        localStorage.setItem('user_info_cache', JSON.stringify(userInfo));

        return userInfo; // Ma'lumotlarni qaytarish
    } catch (error) {
        console.error('Foydalanuvchi ma\'lumotlarini olishda xatolik:', error);
        throw new Error(error.response?.data?.error || error.message);
    }
};




export const logout = () => {
    localStorage.removeItem('userToken');
};

// document 

export const createDocument = async () => {

    // Yaratiladigan hujjat uchun ma'lumot
    const data = {
        name: "string"
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

        console.log('response', response.data)

        return response.data; // Foydalanuvchi ma'lumotlarini qaytarish

    } catch (error) {
        // Xatolikni boshqarish
        console.error('Error creating document:', error);
        throw new Error(error.response?.data?.error || error.message); // Xatolikni qaytarish
    }
};


export const getDocumentList = async (data = {}) => {

    try {
        const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish

        if (!token) {
            throw new Error('Token mavjud emas. Iltimos, avval tizimga kiring.');
        }

        const response = await axios.post(
            `${Api_Url}/document/list`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                    'Accept': 'application/json', // JSON formatini qabul qilish
                    'Content-Type': 'application/json', // JSON formatda ma'lumot yuborish
                }
            }
        );

        return response.data.data.reverse();; // Hujjatlar ro'yxatini qaytarish

    } catch (error) {
        // Xatolikni boshqarish
        console.error('Error fetching document list:', error);
        throw new Error(error.response?.data?.error || error.message); // Xatolikni qaytarish
    }
};


export const getDocumentById = async (id) => {
    try {
        const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish

        if (!token) {
            throw new Error('Token mavjud emas. Iltimos, avval tizimga kiring.');
        }

        const response = await axios.get(
            `${Api_Url}/document/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                    'Accept': 'application/json', // JSON formatini qabul qilish
                }
            }
        );

        return response.data; // Hujjat ma'lumotlarini qaytarish

    } catch (error) {
        // Xatolikni boshqarish
        console.error('Error fetching document by ID:', error);
        throw new Error(error.response?.data?.error || error.message); // Xatolikni qaytarish
    }
};

export const updateDocument = async (id, data) => {
    try {
        const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish

        if (!token) {
            throw new Error('Token mavjud emas. Iltimos, avval tizimga kiring.');
        }

        const response = await axios.put(
            `${Api_Url}/document/update/${id}`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                    'Accept': 'application/json', // JSON formatini qabul qilish
                }
            }
        );

        console.log("Document updated:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating document:", error);
        throw new Error(error.response?.data?.error || error.message); // Xatolikni qaytarish
    }
};


export const deleteDocument = async (documentId) => {
    try {
        const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish

        if (!token) {
            throw new Error('Token mavjud emas. Iltimos, avval tizimga kiring.');
        }

        const response = await axios.delete(
            `${Api_Url}/document/delete/${documentId}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                    'Accept': 'application/json', // JSON formatini qabul qilish
                }
            }
        );

        console.log("Document deleted:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error deleting document:", error);
        throw new Error(error.response?.data?.error || error.message); // Xatolikni qaytarish
    }
};



export const updateDocumentAnswer = async (id, answerData) => {
    try {
        const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish

        if (!token) {
            throw new Error('Token mavjud emas. Iltimos, avval tizimga kiring.');
        }
        console.log(answerData, 'id', id)

        const response = await axios.patch(
            `${Api_Url}/document/answer/${id}`, // id orqali endpoint
            answerData, // Patch orqali yuboriladigan data (answer_id va comment)
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                    'Accept': 'application/json', // JSON formatini qabul qilish
                    'Content-Type': 'application/json', // JSON formatda ma'lumot yuborish
                }
            }
        );
        console.log('responss  = ', response)
        return response.data;

    } catch (error) {
        if (error.response) {
            console.error("Error response:", error.response.data);
            return error.response.data;
        } else {
            console.error("Error message:", error.message);
            throw error;
        }
    }
};



// end document 

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
        return response.data.data;
    } catch (error) {
        console.error('Error fetching user list:', error);
        throw new Error(error.response?.data?.error || error.message);
    }
};

export const getUserByid = async (id = null) => {
    let users = await getUserList();

    // ID orqali foydalanuvchini qidirish
    const user = users.find(user => user.user_id === id);

    if (!user) {
        console.log('Foydalanuvchi topilmadi');
        return null;
    }
    return user

};



export const getDepartments = async () => {
    try {
        const token = localStorage.getItem('token');

        const cachedDepartments = JSON.parse(localStorage.getItem('departments_cache'));

        // Agar kesh mavjud bo'lsa, uni JSON formatida qaytaramiz
        if (cachedDepartments && cachedDepartments.length > 4) {
            console.log('Keshlangan ma\'lumot qaytarildi', cachedDepartments);
            return (cachedDepartments);
        }

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
        localStorage.setItem('departments_cache', JSON.stringify(response.data.data));
        return response.data.data; // Ma'lumotlarni qaytarish

    } catch (error) {
        console.error('Error fetching departments:', error);
        // Xatolikni qaytarish
        throw new Error(error.response?.data?.error || error.message);
    }
};

export const getDepartamentByid = async (id = null) => {
    let departaments = await getDepartments();

    // ID orqali foydalanuvchini qidirish
    const departament = departaments.find(departaments => departaments.departament_id === id);

    if (!departament) {
        console.log('departament topilmadi');
        return null;
    }
    return departament

};


export const applyTemplateToDocument = async (documentId, templateId) => {
    try {
        const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish

        if (!token) {
            throw new Error('Token mavjud emas. Iltimos, avval tizimga kiring.');
        }

        const response = await axios.put(
            `${Api_Url}/document/route/update/apply_template/${documentId}`,
            { template_id: templateId },
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                    'Accept': 'application/json', // JSON formatini qabul qilish
                }
            }
        );

        console.log("Template applied to document:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error applying template to document:", error);
        throw new Error(error.response?.data?.error || error.message); // Xatolikni qaytarish
    }
};

export const createTemplate = async (name, way) => {

    try {
        const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish

        if (!token) {
            throw new Error('Token mavjud emas. Iltimos, avval tizimga kiring.');
        }

        const response = await axios.post(
            `${Api_Url}/template/manager/create`,
            name,
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                    'Accept': 'application/json', // JSON formatini qabul qilish
                    'Content-Type': 'application/json', // JSON formatda ma'lumot yuborish
                }
            }
        );

        console.log('response create template', response)
        console.log(data, "way data")
        if (response.data.status === "ok") {
            way.map((value, index, array) => {
                addway(response.data.template_id, value);
            })
        }

        return response.data; // Foydalanuvchi ma'lumotlarini qaytarish

    } catch (error) {
        if (error.response) {
            return error.response.data;
        }

    }
};

export const addway = async (id = null, data = null) => {
    console.log(data)

    try {
        const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish

        if (!token) {
            throw new Error('Token mavjud emas. Iltimos, avval tizimga kiring.');
        }

        const response = await axios.put(
            `${Api_Url}/template/manager/add/${id}`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                    'Accept': 'application/json', // JSON formatini qabul qilish
                    'Content-Type': 'application/json', // JSON formatda ma'lumot yuborish
                }
            }
        );

        console.log('add way template', response)

        return response.data; // Foydalanuvchi ma'lumotlarini qaytarish

    } catch (error) {
        // Xatolikni boshqarish
        console.error('Error creating document:', error);
        throw new Error(error.response?.data?.error || error.message); // Xatolikni qaytarish
    }
};




export const getTemplates = async () => {
    try {
        const token = localStorage.getItem('token'); // Tokenni localStorage'dan olish

        if (!token) {
            throw new Error('Token mavjud emas. Iltimos, avval tizimga kiring.');
        }

        // GET so'rovi orqali departamentlar ma'lumotini olish
        const response = await axios.get(`${Api_Url}/directory/templates`, {
            headers: {
                'Authorization': `Bearer ${token}`, // Tokenni sarlavhada yuborish
                'Accept': 'application/json', // JSON formatini qabul qilish
            }
        });
        return response.data.data; // Ma'lumotlarni qaytarish

    } catch (error) {
        console.error('Error fetching departments:', error);
        // Xatolikni qaytarish
        throw new Error(error.response?.data?.error || error.message);
    }
};


export const getSingleTemplate = async (id = 23) => {
    try {
        const token = localStorage.getItem('token');

        if (!token) {
            // Token mavjud bo'lmasa, xatolikni qaytaramiz
            return Promise.reject('Token mavjud emas. Iltimos, tizimga kiring.');
        }

        const response = await axios.get(`${Api_Url}/template/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        });

        return response.data;

    } catch (error) {
        console.error('Template ma\'lumotlarini olishda xatolik:', error);
        // Xatolikda tushunarli xabarni qaytarish
        throw new Error(error.response?.data?.error || 'Template ma\'lumotlarini olishda xatolik yuz berdi');
    }
};


export const deleteTemplate = async (template_id) => {
    try {
        const token = localStorage.getItem('token');

        if (!token) {
            // Token mavjud bo'lmasa, xatolikni qaytaramiz
            return Promise.reject('Token mavjud emas. Iltimos, tizimga kiring.');
        }

        // DELETE so'rovi orqali ma'lumotni o'chirish
        const response = await axios.delete(`${Api_Url}/template/manager/delete/${template_id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        });

        return response.data; // O'chirish natijasini qaytarish
    } catch (error) {
        console.error('Template o\'chirishda xatolik:', error);
        // Xatolikda tushunarli xabarni qaytarish
        throw new Error(error.response?.data?.error || 'Template o\'chirishda xatolik yuz berdi');
    }
};
