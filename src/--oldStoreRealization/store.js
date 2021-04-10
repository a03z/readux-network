let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message:
                        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eaque sequi excepturi eum quasi quod cupiditate ex nulla accusantium tempora.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eaque sequi excepturi eum quasi quod cupiditate ex nulla accusantium tempora.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eaque sequi excepturi eum quasi quod cupiditate ex nulla accusantium tempora.',
                    likesCount: 12,
                },
                {
                    id: 2,
                    message: `Ipsa laborum eveniet eaque reprehenderit vero qui nemo, modi, voluptatum assumenda aliquid neque tenetur!`,
                    likesCount: 23,
                },
                {
                    id: 3,
                    message:
                        'Ullam iusto mollitia harum omnis reiciendis quidem delectus. Labore, ullam iusto facilis ut rerum ratione eum tempore fugit illo rem voluptates itaque nemo molestias sunt excepturi! Repellendus eaque officia harum. Aperiam dolor sunt doloremque officiis, quasi harum. Sed, distinctio? Ea ratione magni, mollitia ut incidunt quo voluptates vitae laudantium vero voluptatum repudiandae quasi placeat, ducimus ullam sunt illo. Omnis obcaecati qui eos delectus!',
                    likesCount: 7,
                },
                {
                    id: 4,
                    message: 'Hello world!',
                    likesCount: 123,
                },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Valeriy' },
                { id: 6, name: 'Victor' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: `How's ur day?` },
                { id: 3, message: 'Ysdo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
                { id: 6, message: 'Yo' },
                { id: 7, message: 'It' },
                { id: 8, message: 'Actually works' },
            ],
            newMessageText: '',
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Sasha',
                },

                {
                    id: 2,
                    name: 'Ilya',
                },

                {
                    id: 3,
                    name: 'Alena',
                },
            ],
        },
    },
    _callSubscriber() {},

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        // this._state.dialogsPage = dialogsReducer(
        //     this._state.dialogsPage,
        //     action
        // )
        // this._state.profilePage = profileReducer(
        //     this._state.profilePage,
        //     action
        // )
        this._callSubscriber(this._state)
    },
}

window.store = store

export default store
