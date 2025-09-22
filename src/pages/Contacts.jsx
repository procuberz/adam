import React from 'react';
import ContactStyle from './Pages.module.scss';

const Contacts = () => {
  return (
    <div>
      <section className={ContactStyle['contact']}>
        <h2 className={ContactStyle['title-2']}>Богланиш учун</h2>

        <p className={ContactStyle['contact-text']}>
         Телефон:+998888008588
        </p>

        <h3 className={ContactStyle['title-3']}>Ижтимоий Тармок</h3>

        <ul className={ContactStyle['contact-list']}>
          <li>
            <a href="https://www.instagram.com/kombikorm_yik_ota_yem?igsh=MXN2bmYxd2ducHNyNg==" target="_blank">
              Instagram
            </a>
          </li>

          <li>
            <a href="https://t.me/yikotayem_agrokorm" target="_blank">
            Telegram
            </a>
          </li>

          {/* <li>
            <a href="https://t.me/procuber_z" target="_blank">
              Telegram
            </a>
          </li> */}
        </ul>
      </section>
    </div>
  );
};

export default Contacts;
