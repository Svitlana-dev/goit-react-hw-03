import css from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <div className={css.container}>
      <p>{message}</p>
    </div>
  );
}
