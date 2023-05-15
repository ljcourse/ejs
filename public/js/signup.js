const signUp = async (email, password) => {
    console.log(email, password);
    try {
        const res = await axios({
            method: "POST",
            url: '/auth/create-acc',
            data: {
                email,
                password,
            },
        });
        console.log(res);
        window.location.href = "/login"
    } catch (err) {
        console.log(err.response.data);
    }
};
document.querySelector("form0").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email0").value;
    const password = document.getElementById("password0").value;
    // login(email, password);
    signUp(email,password);
});