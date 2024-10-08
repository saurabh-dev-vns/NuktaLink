import toast from 'react-hot-toast';

const SuccessToast = () => {
  toast.success('Link successfully generated! 🎉', {
    duration: 4000,
    position: 'top-right',
    style: {
      fontSize: '13px',
      maxWidth: '400px',
      boxShadow: '0px 4px 8px rgba(0, 1, 4, 0.1)',
      borderRadius: '8px',
      borderColor: 'rgba(0, 0, 0, 0.8)',
      marginRight: '10px',
    },
    className: '',
    icon: '👏',
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
}

export default SuccessToast;
