import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null,
    signOutRedirect: null
  }),
  actions: {
    async fetchUser() {
      if (this.user == null) {
        this.user = await this.$nuxt.$axios.$get('/api/user');
      }
      return this.user;
    },
    async logoutUser() {
      if (this.signOutRedirect == null) {
        this.signOutRedirect = await this.$nuxt.$axios.$get('/signout');
      }
      return this.signOutRedirect;
    },
    async switchRfwProfile(newRfwUserId) {      
      const rfwUser = await this.$nuxt.$axios.$post('/api/user/set/rfwuserid/' + newRfwUserId);
      this.user.currentRfwUser.userId = rfwUser.userId;
      this.user.currentRfwUser.userName = rfwUser.userName;
      this.user.currentRfwUser.role = rfwUser.role;
    }
  }
})
