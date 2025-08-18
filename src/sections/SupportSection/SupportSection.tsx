import s from './SupportSection.module.scss';
import Image from "next/image";

export const SupportSection = () => {
    return(
        <section className={s.SupportSection}>
            <h2>Нас поддерживают</h2>
            <div className={s.SupportSection__Icons}>
                <Image src={'/Fond.png'} alt={'Фонд содействия инновациям'} width={225} height={125}/>
                <Image src={'/EnegroResource.png'} alt={'Энерго ресурс'} width={246} height={89}/>
                <Image src={'/Polytech.png'} alt={'Самарский политех'} width={235} height={109}/>
            </div>

        </section>
    )
}