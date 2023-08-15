export const initialState = {
    name: "",
    player: {
        name: "",
        game: "",
        youtube: "",
        twitch: "",
        instagram: "",
        twitter: ""
    },
    submittedPlayer: []
};

export function reducer(state, action) {
    switch (action.type) {
        case 'setPlayer':
            return { ...state, player: action.payload };
        case 'setName':
            return { ...state, name: action.payload };
        case 'setSubmittedPlayer':
            return { ...state, submittedPlayer: action.payload };
        default:
            return state
    }
}