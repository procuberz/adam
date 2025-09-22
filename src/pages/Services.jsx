import React from 'react';
import ServiceStyle from './Pages.module.scss';
import Project from './../images/photo_2024-03-08_19-47-07.jpg';
const Services = () => {
  return (
    <div>
         <div className={ServiceStyle['article-item-image']}>
                  <img src={Project} alt="Portfolio Image" />
                </div>
      <section className={ServiceStyle['services']}>
        <h2 className={ServiceStyle['title-2']}>Бизнинг махсулотлар</h2>

        <ul className={ServiceStyle['services-list']}>
          <li>Бройлер учун </li>

          <li>Тухум йуналишидаги товуклар учун</li>

          <li>Бедана учун</li>

          <li>
            Индюк учун
          </li>

          <li>
           Гоз ва урдаклар учун
          </li>
          <li>Йирик ва майда шохли чорва учун</li>
          <li>От учун</li>
          <li>Балик учун</li>
          <li>Алохида рацион киламиз</li>
        </ul>

        {/* <p className={ServiceStyle['services-text']}>
          I make up websites, converting layouts from Figma or Photoshop into
          clean ones, valid and semantic HTML code. This means it will work
          without errors, is well indexed by search robots and will help your
          site to take good positions in searches.
        </p>

        <h3 className={ServiceStyle['title-3']}>
          My skills in website design:
        </h3>

        <ul className={ServiceStyle['services-list']}>
          <li>HTML5, CSS3, Flexbox, SCSS, JS, React, Gulp, WebPack, GitHub</li>

          <li>Neat, logical, thoughtful code</li>

          <li>Compliance with W3C standards and BEM naming rules</li>

          <li>SEO-layout - helps promote the site in Yandex and Google</li>

          <li>Adaptation/implementation of plugins.</li>

          <li>Using sprites - allows you to speed up page loading</li>

          <li>Pixel perfect - perfect match with the design layout</li>

          <li>Retina Ready - graphics will look clear on retina and 4K screens
            and not blurry</li>
        </ul>

        <p className={ServiceStyle['services-text']}>
        I optimize page loading speed thanks to graphics processing.
          The site will load quickly - this will please your users and
          will help you get higher rankings in searches.
        </p>

        <p className={ServiceStyle['services-text']}>
        My layout easily integrates into any content management system:
          WordPress, Bitrix, ModX, Joomla, OpenCart, ShopScript and others.
        </p> */}
      </section>
    </div>
  );
};

export default Services;
