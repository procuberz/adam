import React from 'react';
import HomeStyle from './Pages.module.scss';
import { Link } from 'react-router-dom';
import Avatar from './../images/online-certification.jpeg.webp'

const Home = () => {
  return (
    <div>
      <section className={HomeStyle['about']}>
        <h2 className={HomeStyle['title-2']}>БИЗ ХАКИМИЗДА</h2>

        <div className={HomeStyle['about-desc']}>
          <p>
          “AGRO KORM UNIVERSAL” МЧЖ жамоаси “YIK OTA YEM” савдо белгиси билан танилган омухта ем ишлаб чиқарувчи корхонадир.
 Бройлер, тухум йуналишидаги товуклар, бедана, йирик ва майда шохли ҳайвонлар, қуёнлар, от хамда балик учун юқори самарали омухта емларини ишлаб чикаради.


          </p>

          <p>
          Омухта ем ишлаб чиқариш жараёнида хайвонларнинг ёши, зоти ва махсулдорлигини инобатга олиб, талаб этилаётган озуқавий миқдорларни  меъёр даражасига келтириб ишлаб чиқарилади.
Киритилаётган ҳом ашёлар мутахассислар ва лаборатория назоратида остида қабул қилинади.{' '}
            {/* <Link
              to={'/portfolio/portfolio'}
              className={HomeStyle['about-link']}
            >
             Portfolio
            </Link> */}
          </p>

          {/* <p><b>Also i speak English, Russian and Uzbek fluently</b></p> */}
        </div>

        <div className={HomeStyle['about-image']}>
          <img src={Avatar} alt="Portfolio Image" />
        </div>

        <div className={HomeStyle['about-desc']}>
          <p>
            {/* <b>Warranty on Website Development</b> */}

 Тавсия қилинган меъёрларга жавоб берган соя шроти, буғдой, маккажўхори, писта шроти, рапс, витаминлар ва минерал моддалар илмий асосда тайёрланишдан бошланиб, технологик жараён техник мухандислар маъсулияти асосида корхонамиз ходимлари тамонидан амалга оширилади. Якуний маҳсулотлар доимо даврий лаборатория ташхисидан ўтказилади. 
          </p>

          {/* <p>Here's what the client said after working with me:</p> */}

          <blockquote className={HomeStyle['blockqoute']}>
            <i>
            "Йиллар давомида синалган сифат!!!"
            </i>
          </blockquote>

          {/* <p>
          It is convenient to work with me, and it is important to me that the client is satisfied!
          </p> */}

        
        </div>
      </section>
    </div>
  );
};

export default Home;
