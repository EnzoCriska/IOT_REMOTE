window.ClientConfig = function(){};

window.ClientConfig.User = {};
window.ClientConfig.Pots = {};
window.ClientConfig.IsTrackLoading = false;
window.ClientConfig.IsTrackLobby = false;

window.ClientConfig.GetUserData = function(){
    let userData = localStorage.getItem('userData');
    if (userData !== null && userData !== undefined) {
        userData = JSON.parse(userData);
        return userData;
    }
    return null;
};

window.ClientConfig.ClearPassUserData = function(){
    let userData = localStorage.getItem('userData');
    if (userData !== null && userData !== undefined) {
        userData = JSON.parse(userData);
        let userNew = {
            username: userData.username,
            password: ""
        };
        localStorage.setItem('userData', JSON.stringify(userNew));
    }
};

window.ClientConfig.SetUserData = function(uname, pass){
    let userNew = {
        username: uname,
        password: pass
    };
    localStorage.setItem('userData', JSON.stringify(userNew));
};