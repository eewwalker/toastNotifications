"use strict";
import { writable} from "svelte/store";

export const notificationStore = writable([]);

export function showNotification(notification) {
  notification.id = Date.now();
  notificationStore.update(notifications => [
    notification,
    ...notifications
  ]);
  setTimeout(()=>{
    removeNotification(notification)
  }, 4000)
}

export function removeNotification(notification) {
  notificationStore.update(notifications => notifications.filter(n => n !== notification))
}

export async function trackPromise(Promise) {
  showNotification({message: 'Just a moment...'})

  try{
    const data = await Promise
    showNotification({message: 'Success! Here you are..', type: 'success'})
  } catch {
    showNotification({message: 'Sorry, please try again', type: 'error'})
  }
}


