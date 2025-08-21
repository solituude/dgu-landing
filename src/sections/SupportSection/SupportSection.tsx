import s from './SupportSection.module.scss';

export const SupportSection = () => {
    return(
        <section className={s.SupportSection}>
            <h2>Нас поддерживают</h2>
            <div className={s.SupportSection__Icons}>
                <div className={s.Icon_Fond}/>
                <div className={s.Icon_Energy}/>
                <div className={s.Icon_Polytech}/>
            </div>
        </section>
    )
}