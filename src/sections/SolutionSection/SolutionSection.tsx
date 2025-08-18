import Image from "next/image";

import {SOLUTIONS} from "@/lib/constants";

import s from './SolutionSection.module.scss';

export const SolutionSection = () => {
    return(
        <section className={s.SolutionSection}>
            {/*<Image className={s.SolutionSection__Image} src={'/SolutionImage.png'} alt={'solution-image'} fill/>*/}
            <h2 className={s.SolutionSection__H2}>
                Разрабатываемый контроллер "КУ-1" - решение актуальных проблем резервной энергетики
            </h2>

            <div className={s.SolutionSection__Advantages}>
                {SOLUTIONS.map(solution => <span key={solution} className={s.SolutionSection__Text}>{solution}</span>)}
            </div>
        </section>
    )
}