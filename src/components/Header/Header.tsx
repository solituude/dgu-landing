import s from './Header.module.scss';
import {Button} from "@/components/Button/Button";


export const Header = () => {
    return(
        <header className={s.Header}>
            <div className={s.Header__Logo}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87 90" fill="none">
                <rect width="87" height="90" fill="url(#paint0_radial_73_210)"/>
                <defs>
                    <radialGradient id="paint0_radial_73_210" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(43.5 45) rotate(90) scale(45 43.5)">
                        <stop offset="0.278846" stopColor="#F65262"/>
                        <stop offset="1" stopColor="#F88061" stopOpacity="0"/>
                    </radialGradient>
                </defs>
            </svg></div>
            <Button/>
        </header>
    )
}