
import s from './AdvantagesSection.module.scss';
import {ADVANTAGES} from "@/lib";
import {Card} from "@/components/Card/Card";
import {LightCard} from "@/components/Card/LightCard";



export const AdvantagesSection = () => {
    return(
        <section className={s.AdvantagesSection}>
            <h2 className={s.AdvantagesSection__H2}>Преимущества нашей системы</h2>
            <div className={s.AdvantagesSection__Cards}>
                {ADVANTAGES.map((ad => <LightCard key={ad.id + ad.title} id={ad.id} description={ad.description} title={ad.title} />))}
            </div>

        </section>
    )
}