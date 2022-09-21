import { defineStore } from 'pinia'

export const useNotificationStore = defineStore({
  id: 'notifications',
  state: () => ({
    notifications: [
      {
        title: "You have 9 active claims",
        subtitle: "What would you like to do today?",
        redirect: "Process active claims",
        to: ''
      },
      {
        title: "New claims have been submitted for approvals",
        subtitle: "",
        redirect: "View claims",
        to: ''
      },
      {
        title: "You have 3 rejected claims",
        subtitle: "Please correct and re-submit.",
        redirect: "Process rejected claims",
        to: ''
      },
      {
        title: "Supporting documents are needed for claim 236781.",
        subtitle: "",
        redirect: "Upload documents",
        to: ''
      }
    ]
  }),
  actions: {
    async getNotifications() {
      return this.notifications;
    },
    async showNotification(title, subtitle, redirect, to) {
      this.notifications.push({ title, subtitle, redirect, to });
    },
    async hideNotification(index) {
      this.notifications.splice(index, 1);
    }
  }
})
