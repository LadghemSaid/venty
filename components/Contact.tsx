import { MailIcon, PhoneIcon, TruckIcon } from "@heroicons/react/solid";
import React from "react";

export default function Contact() {
  return (
    <div className="contact my-5 px-6">
      <h1 className="text-xl font-light text-center w-full">UNE QUESTION ?</h1>

      <ul className="mt-5 text-center">
        <li className="">
          <a href="/pages/suivi-de-commande">
            <b>
              <TruckIcon className="w-5 h-5 inline" /> Suivre ma commande
            </b>
          </a>
        </li>
        <li className="">
          <b>
            <PhoneIcon className="w-5 h-5 inline" /> Téléphone :
          </b>{" "}
          02 41 24 46 04
        </li>
        <li className="">
          <b>
            <MailIcon className="w-5 h-5 inline" /> E-mail :
          </b>{" "}
          <a href="mailto:info@wearecall-store.com%09%09">contact@venty.com</a>
        </li>
      </ul>

      <h1 className="text-xl font-light text-center my-5">INFORMATIONS</h1>

      <ul className="text-center">
        <li>
          <a href="/policies/legal-notice">Mentions légales</a>
        </li>

        <li>
          <a href="/policies/privacy-policy">Politique de confidentialité</a>
        </li>

        <li>
          <a href="/policies/refund-policy">Politique de remboursement</a>
        </li>

        <li>
          <a href="/policies/terms-of-service">Conditions générales de vente</a>
        </li>
      </ul>

      <h1 className="text-xl font-light text-center my-5">
        INSCRIPTION NEWSLETTER
      </h1>
      <span className="text-center">
        Inscrivez-vous à notre newsletter et recevez votre offre de bienvenue !
      </span>
    </div>
  );
}
