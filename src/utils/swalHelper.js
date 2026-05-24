import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(
  Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    background: '#080b13',
    color: '#e0f7ff',
    iconColor: '#22d3ee',
    customClass: {
      popup: 'rounded-3xl border border-slate-700 shadow-[0_0_24px_rgba(34,211,238,0.18)]',
      title: 'font-semibold text-sm tracking-wide',
      content: 'text-sm text-slate-100',
    },
    showClass: {
      popup: 'animate__animated animate__fadeInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp',
    },
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  })
);

const createToast = (icon, title, text, options = {}) => {
  return MySwal.fire({
    icon,
    title,
    text,
    ...options,
  });
};

export const swalSuccess = (title, text = '', options = {}) =>
  createToast('success', title, text, options);

export const swalError = (title, text = '', options = {}) =>
  createToast('error', title, text, options);

export const swalWarning = (title, text = '', options = {}) =>
  createToast('warning', title, text, options);

export const swalInfo = (title, text = '', options = {}) =>
  createToast('info', title, text, options);
