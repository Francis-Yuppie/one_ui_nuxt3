//@ts-ignore
import { ref, watch, computed } from 'vue'
//@ts-ignore
import { useIdle } from '@vueuse/core'
//@ts-ignore
import Swal from 'sweetalert2'
import { useAuthStore } from "~/stores/userAuth";

const authStore = useAuthStore()


export const useIdleTimer = () => {
  // use 5 * 60 * 1000 (5 min)  6000 is just for demo
  const { idle } = useIdle(6000)

  const showAlert = () => {
    Swal.fire({
      title: 'You are about to be logged out',
      text: 'You have been idle for a while. Click "Stay Logged In" to remain logged in.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Stay Logged In',
      cancelButtonText: 'Log Out',
      timer: 5000, 
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: {
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        content: 'custom-swal-content',
        actions: 'custom-swal-actions',
        confirmButton: 'custom-swal-confirm',
        cancelButton: 'custom-swal-cancel'
      },
      willClose: () => {
        // Log out the user if the dialog is closed due to the timer running out
        if (Swal.getTimerLeft() === 0) {
          logout()
          // alert('Log out')
        }
      }
    })
    //@ts-ignore
    .then((result) => {
      if (result.isConfirmed) {
        idle.value = false
      } else if (result.dismiss === Swal.DismissReason.timer) {
        logout()
        // alert('Log out')
      } else {
        logout()
        // alert('Log out....')
      }
    })
  }

  const logout = () => {
    authStore.removeToken()
    useRouter().push('/auth')
  }

  watch(idle, (isIdle) => {
    if (isIdle) {
      showAlert()
    }
  })

}
