import cls from "./ErrorBadge.module.css"

export function ErrorBadge({errorText, visible}) {

  let x = visible ?
   `${cls.errorBadge__container} ${cls.visible}` :
    `${cls.errorBadge__container}`;
    
  return (
    <div className={x}>
    <p className={cls.errorBadge__text}>
      {errorText}
    </p>
  </div>
  
  );
}
