const userReducer = (state = {
    name:'nam',
    age:30,
    designation: "developer"
}, action) => {
    switch (action.type) {
        case "UPDATE_PROFILE":
            state = {
                ...state,
                name: 'dd',//action.payload.name,
                designation: 'dfdfd'//action.payload.designation
            }
            break;
    }
    return state;
};

export default userReducer;