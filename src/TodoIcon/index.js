import './TodoIcon.css';
import {ReactComponent as IconCheckSVG} from './icon-check.svg';
import {ReactComponent as IconDeleteSVG} from './icon-delete.svg';

function TodoIcon({type, color='gray', onClick}){
  // Básico: Se lama de esta forma: {iconTypes[type]}
  // const iconTypes ={
  //   "check": (
  //     <IconCheckSVG />
  //   ),
  //   "delete": (
  //     <IconDeleteSVG />
  //   )
  // };

  // Con color:
  const iconTypes ={
    "check": color =>(
      <IconCheckSVG className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color =>(
      <IconDeleteSVG className="Icon-svg Icon-svg--check" fill={color} />
    )
  }
  return(
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export {TodoIcon};