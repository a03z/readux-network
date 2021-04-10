import profileReducer, { addPost, deletePost } from './profileReducer'
// 1. test data
let state = {
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
}
test('new post should be added', () => {
    // 2. test action
    let action = addPost('a03zdev.')
    let newState = profileReducer(state, action)
    // 3. test expect

    expect(newState.posts.length).toBe(5)
})
test('message of new post should be correct', () => {
    // 2. test action
    let action = addPost('a03zdev.')
    let newState = profileReducer(state, action)
    // 3. test expect

    expect(newState.posts.length).toBe(5)
})

test('post should be removed', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})
test(`post shouldn't be removed if id is incorrect`, () => {
    let action = deletePost(1123)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
})
