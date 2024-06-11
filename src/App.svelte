<script>
import NotificationContainer from "./NotificationContainer.svelte";
import { showNotification, trackPromise } from './notificationStore';

  function handleClickPromise(){
   trackPromise(new Promise((resolve, reject)=> {
      setTimeout(()=> {
        resolve('successful operation')

      }, 3000)
    }))
  }
   function handleClickPromiseWError(){
    trackPromise(new Promise((resolve, reject)=>{
      setTimeout(()=>{
        reject('rejected sorry')
      }, 3000)
    }))
   }

  function handleClickSuccess() {
    showNotification({message: 'SUCCESS', type: 'success'})
  }
  function handleClickError() {
    showNotification({message: 'ERROR', type: 'error'})
  }

</script>

<NotificationContainer/>
<main>
  <h1>Svelte Toast</h1>
  <button on:click={handleClickSuccess}>Success Message</button>
  <button on:click={handleClickError}>Error Message</button>
  <button on:click={handleClickPromise}>Async Operation Pass</button>
  <button on:click={handleClickPromiseWError}>Async Operation Fail</button>
</main>
