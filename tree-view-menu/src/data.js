

const menus = [
    {
        label : "Home",
        to: "/",
    },
    {
        label : "Profile",
        to: "/profile",
        children : [
            {
                label: "Details",
                to: "details",
                children: [
                    {
                        label: "Locatio",
                        to: "location",
                        children: [
                            {
                                label: "City",
                                to:"city",
                            }
                        ]
                    },
                ],
            },
        ],
    },
    {
        label : "Settings",
        to: "/settings",
        children : [
            {
                label: "Account",
                to: "account",
                children: [
                    {
                        label: "Security",
                        to: "security",
                        children: [
                            {
                                label: "Login",
                                to: "login",
                            },
                            {
                                label: "Register",
                                to: "register",
                            }
                        ],
                    },
                ],
            },
        ],
    },
]

export default menus;