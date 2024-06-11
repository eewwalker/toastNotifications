
<svelte:options customElement = 'notification-container'/>
<script>
    import Notification from "./Notification.svelte";
    import { notificationStore } from "./notificationStore";

    let notifications;
    notificationStore.subscribe(n => notifications = n)
</script>


<ul class="notification-container">
{#each notifications as n(n.id)}
    <Notification notification={n}/>
{/each}
</ul>
    <style>
        .notification-container{
            width: 350px;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            right: 0;
            margin: 0;
            padding: 0;
            list-style-type: none;
        }
    </style>