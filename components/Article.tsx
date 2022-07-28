import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Tiptap from "./Tiptap";

export default function Article({ name }) {
  const router = useRouter();
  const [showEditor, setshowEditor] = useState(router.query.edition === "true");
  const [password, setpassword] = useState("");
  console.log(router.query, router.query.edition, showEditor);
  function handleSubmitEditor() {
    console.log("handle submit");
  }
  useEffect(() => {
    setshowEditor(router.query.edition === "true");
  }, [router.query.edition]);

  return (
    <>
      {showEditor && (
        <>
          <Tiptap name={"article"} />
          <label htmlFor="">Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button onClick={handleSubmitEditor}>Mettre à jour</button>
        </>
      )}
      {!showEditor && (
        <section className="article font-medium">
          <h2 className="text-2xl mt-10 mb-5 font-black">
            La chaleur n'est plus un problème !
          </h2>
          <p>
            Comme vous avez pu le voir,<span>&nbsp;</span>
            <strong>l'été s'annonce très chaud !</strong>
          </p>
          <p>Et investir dans une climatisation coûte très cher.</p>
          <p>
            C'est pour cela que nous avons créé ce nouveau ventilateur
            <strong>
              <span>&nbsp;</span>entièrement autonome.
            </strong>
          </p>
          <div>
            <img
              className="my-10"
              src="https://cdn.shopify.com/s/files/1/0618/5454/8126/files/ventilo_2.png?v=1655490145"
            />
          </div>
          <h2 className="text-2xl mt-10 mb-5 font-black">
            <strong>Un ventilateur pas comme les autres !</strong>
          </h2>
          <p>
            Nous savons à quel point votre vie peut-être désagréable avec cette
            chaleur, surtout lorsque vous voulez<span>&nbsp;</span>
            <strong>vous endormir.</strong>
          </p>
          <p>
            Avec ce ventilateur, rafraichissez n'importe quelle pièce de votre
            maison,<span>&nbsp;</span>
            <strong>sans attraper froid,</strong>
            <span>&nbsp;</span>en quelques minutes !
          </p>
          <div>
            <img
              className="my-10"
              src="https://cdn.shopify.com/s/files/1/0648/2804/7577/files/tuxpi.com.1655046739_750x.jpg?v=1655046761"
            />
          </div>
          <h2 className="text-2xl mt-10 mb-5 font-black">
            Rafraichissez-vous n'importe où !
          </h2>
          <p>
            Avec son<span>&nbsp;</span>
            <strong>autonomie de 48H</strong>, son<span>&nbsp;</span>
            <strong>rangement hyper facile</strong>, emportez le où vous le
            souhaitez et contrôlez le avec<span>&nbsp;</span>
            <strong>sa télécommande.</strong>
          </p>
          <p>
            Mais ce n'est pas tout,<span>&nbsp;</span>
            <strong>rechargez votre téléphone</strong>
            <span>&nbsp;</span>grâce à sa fonction batterie externe !
          </p>
          <div>
            <img
              className="my-10"
              src="https://cdn.shopify.com/s/files/1/0613/3297/9961/files/8992a764a0c2065a269b4e998c130b7d_original_540x.png?v=1638690329"
              width="420"
              height="365"
            />
          </div>
          <h2 className="text-2xl mt-10 mb-5 font-black">
            Pliable, extensible, 100% contrôlable !
          </h2>
          <p>
            <strong>Emportez-le partout</strong>&nbsp;- Avec ses 9 cm
            d'épaisseur, ce ventilateur se glisse partout.
            <br />
            <strong>Flexible selon vos besoins</strong>&nbsp;- Le manche
            télescopique s'étend jusqu'à 106 cm de hauteur.
            <br />
            <strong>Contrôlez la lumière, la vitesse et l'oscillation</strong>
            <span>&nbsp;</span>- La télécommande vous permet de contrôler le
            ventilateur à distance !<br />
          </p>
          <div>
            <img
              className="my-10"
              src="https://cdn.shopify.com/s/files/1/0647/4956/8227/files/extend_1da0158a-81ec-4397-8026-04d2598cbfb2.jpg?v=1654950879"
            />
          </div>
          <h2 className="text-2xl mt-10 mb-5 font-black">
            Lumière ambiante intégrée !
          </h2>
          <p>
            Contrôlez 3 réglages de lumière pour une lumière d'ambiance là où
            vous en avez besoin. L'option idéale pour le placer sur votre table
            de nuit.
          </p>
          <div>
            <img
              className="my-10"
              src="https://cdn.shopify.com/s/files/1/0647/4956/8227/files/glowing.jpg?v=1654601023"
            />
          </div>
          <div className="list">
            <h2 className="text-2xl mt-10 mb-5 font-black">
              Votre pack comprend :
            </h2>
            <ul>
              <li>
                - 1x Ventilateur Venty<span>™</span>
              </li>
              <li>- 1x Livraison gratuite et en toute sécurité</li>
              <li>- 1x Garantie produit</li>
              <li>- 1x Télécommande</li>
              <li>- 1x Manuel d'utilisation</li>
              <li>- 1x Adaptateur secteur</li>
              <li>- 1x Housse de rangement</li>
            </ul>
          </div>
        </section>
      )}
      <></>
    </>
  );
}
