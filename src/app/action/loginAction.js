export function checkLogin(usernam, pass) {

    if (usernam == "yash" && pass == "password") {
        console.log("login action successfull");
        return {
            type: "LOG_IN",
            payload: new Promise((resolve, reject) => {
                resolve({
                    username: usernam,
                    password: pass,
                    status: true
                })
            })
        }
    } else {
        return { type: "ERROR" }
    }

}

export function logout() {
    return {
        type: "LOG_OUT"
    }
}