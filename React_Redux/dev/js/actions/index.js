/**
 * Created by aayush on 9/1/17.
 */
export const selectUser = (user) => {
    console.log("Selected user ", user.first);
    return {
        type : "USER_SELECTED",
        payload : user
    };
};
