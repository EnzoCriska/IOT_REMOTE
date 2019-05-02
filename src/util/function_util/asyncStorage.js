import { AsyncStorage } from 'react-native';

export const getAccessToken = async () => {
    try {
        const token = await AsyncStorage.getItem('@token08022019:key');
        return (token !== null) ? token : '';
    } catch (error) {
        return error;
    }
};

export const saveAccessToken = async (token = '') => {
    try {
        await AsyncStorage.setItem('@token08022019:key', token);
    } catch (e) {
        console.log(e);
    }
};

export const removeAccessToken = async () => {
    try{
        await AsyncStorage.removeItem('@token08022019:key');
    } catch(e) {
        console.log(e)
    }
}

export const saveStatusLogin = async (userInfo = {}) => {
    try{
        console.log(userInfo)
        await AsyncStorage.setItem('status_login', JSON.stringify(userInfo))
    } catch(e){
        console.log(e)
    }
}

export const getStatusLogin = async () => {
    
    try{
        const status = await AsyncStorage.getItem('status_login')
        return status
    } catch (e){
        console.log(e)
    }
}

export const deleteStatusLogin = async () => {
    
    try{
    await AsyncStorage.removeItem('status_login')
    } catch (e){
        console.log(e)
    }
}

export const getRefreshToken = async () => {
    try {
        const token = await AsyncStorage.getItem('@refreshToken21012019:key');
        return (token !== null) ? token : '';
    } catch (error) {
        return '';
    }
};

export const saveRefreshToken = async (token = '') => {
    try {
        await AsyncStorage.setItem('@refreshToken21012019:key', token);
    } catch (e) {
        console.log(e);
    }
};
