/**
 * Created by aayush on 9/1/17.
 */
export default function (state = null, action) {
    switch (action.type){
        case "USER_SELECTED" :
            return action.payload;
            break;
    }
    return state;
}