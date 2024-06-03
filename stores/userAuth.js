import { defineStore } from 'pinia'

export const useAuthStore = defineStore('userAuth', {
	state: () => ({
	    user: {
		     isAuthenticated: false,
		     username: null,
		     token: null
	    }
    }),

	getters: {

	},

    actions: {

        initStore() {
            this.user.isAuthenticated = false

            if (localStorage.getItem('user.token')) {
                this.user.token = localStorage.getItem('user.token')
                this.user.username = localStorage.getItem('user.username')
                this.user.isAuthenticated = true

                console.log('Initilized user', this.user)
            }
        },

        setToken(token, username) {
            console.log('set token', token, username)

            this.user.token = token
            this.user.username = username
            this.user.isAuthenticated = true

            localStorage.setItem('user.token', token)
            localStorage.setItem('user.username', username)

        },

        removeToken() {
            console.log('Removed token')

            this.user.token = null
            this.user.username = null

            this.user.isAuthenticated = false

            localStorage.setItem('user.token', '')
            localStorage.setItem('user.username', '')
        }
    }
})