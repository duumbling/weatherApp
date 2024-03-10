import { useSelector } from 'react-redux';
import cls from "./ErrorBadge.module.css"

export function ErrorBadge() {

  const isError = useSelector((state) => state.isError.value)
  const badgeText = 'Введите, пожалуйста, правильное название города'

  let badgeCls = isError ?
   `${cls.errorBadge__container} ${cls.visible}` :
    `${cls.errorBadge__container}`;

  return (
    <div className={badgeCls}>
    <p className={cls.errorBadge__text}>
      {badgeText}
    </p>
  </div>
  
  );
}
