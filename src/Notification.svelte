<script>
    import { removeNotification } from './notificationStore'
    import { fly } from 'svelte/transition';

    export let notification

    function handleClickClose() {
        removeNotification(notification)
    }
</script>

<li class="notification"
    class:success = {notification.type === 'success'}
    class:error = {notification.type === 'error'}
    transition:fly={{ x: 50, opacity: 0.5 }}
    >

    <div class="message" >
        <button class="close-button" on:click={handleClickClose}>&times;</button>
        {notification.message}
    </div>
</li>
        <style>
        .notification {
            background-color: #cccccc;
            margin: 1em;
            padding: 1em;
        }
        .success {
            background-color: #86efac;
        }
        .error {
            background-color: #fca5a5;
        }
        .close-button {
            background-color: transparent;
            border: none;
        }
        </style>