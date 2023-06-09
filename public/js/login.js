const login = async (email, password) => {
    console.log(email, password);
    try {
        const res = await axios({
            method: "POST",
            url: "/auth/login",
            data: {
                email,
                password,
            },
        });
        console.log(res);

        window.location.href = "/view";
    } catch (err) {
        console.error(err.response.data);
    }
};
// const signUp = async (email, password) => {
//     console.log(email, password);
//     try {
//         const res = await axios({
//             method: "POST",
//             url: '/auth/create-acc',
//             data: {
//                 email,
//                 password,
//             },
//         });
//         console.log(res);
//         window.location.href = "/view"
//     } catch (err) {
//         console.log(err.response.data);
//     }
// }

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
    // signUp(email,password);
});