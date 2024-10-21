import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [
        { id: 101, name: "Tiko", gender: "male", salary: 150000 },
        { id: 102, name: "Ano", gender: "female", salary: 160000 },
        { id: 103, name: "Ashot", gender: "male", salary: 180000 },
        { id: 104, name: "Mane", gender: "female", salary: 130000 },

    ]
}
export const UserSlice = createSlice({
    name: "Users",
    initialState,
    reducers: {
        salaryUp: function (state, action) {
            const person = state.items.find(user => user.id == action.payload)
            if (person) {
                person.salary += 50000
            }
        },
        salaryDown: function (state, action) {
            const person = state.items.find(user => user.id == action.payload)
            if (person) {
                person.salary -= 50000

                if (person.salary <= 0) {
                    person.salary = 0
                }
            }
        },
        deletePerson: function (state,action) {
            const person = state.items.find(user => user.id == action.payload)
            if (person) {
                state.items = state.items.filter(user => user.id != action.payload)
            }
        },
        swipeUp: function (state,action) {
            const person = state.items.findIndex(user => user.id == action.payload)
            if (person > 0) {

                let temp = state.items[person - 1]
                state.items[person - 1] = state.items[person]
                state.items[person] = temp

            }
        },
        swipeDown: function (state,action) {
            const person = state.items.findIndex(user => user.id == action.payload)
            if (person < state.items.length - 1) {

                let temp = state.items[person + 1]
                state.items[person + 1] = state.items[person]
                state.items[person] = temp
            }
        }
    }
})
export const reducer = UserSlice.reducer
export const { salaryUp } = UserSlice.actions
export const { salaryDown } = UserSlice.actions
export const { deletePerson } = UserSlice.actions
export const { swipeUp } = UserSlice.actions
export const { swipeDown } = UserSlice.actions