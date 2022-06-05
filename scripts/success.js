import Swal from "sweetalert2";

export default function ShowSuccessMessage(message) {
  Swal.fire({
    title: "Completed",
    text: message,
    icon: "success",
    confirmButtonText: "Ok",
  });
}
