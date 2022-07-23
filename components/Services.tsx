import React from "react";

export default function Services() {
  if (1 === 1) {
    return (
      <div className="py-12 bg-black ">
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-4">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <img
                  src="//cdn.shopify.com/s/files/1/0576/8042/9129/files/secure.png?v=1655762102"
                  className="flex invert items-center justify-center"
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <h3 className="text-2xl font-semibold text-black text-center">
                  Paiement Sécurisé
                </h3>
                <p className="mb-6">
                  Nous confions le traitement de nos paiements en ligne à
                  Stripe, qui est 100% sécurisé.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <img
                  src="//cdn.shopify.com/s/files/1/0576/8042/9129/files/livraison.png?v=1655762051"
                  className="flex invert items-center justify-center"
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <h3 className="text-2xl font-semibold text-black text-center">
                  Livraison Gratuite
                </h3>
                <p className="mb-6">
                  Votre commande sera livrée gratuitement et expédié sous les
                  24H/48H !
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <img
                  src="//cdn.shopify.com/s/files/1/0576/8042/9129/files/support.png?v=1655762033"
                  className="flex invert items-center justify-center"
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <h3 className="text-2xl font-semibold text-black text-center">
                  Support Français
                </h3>
                <p className="mb-6">
                  Une équipe d'assistance dédiée pour répondre à toutes vos
                  questions.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <img
                  src="//cdn.shopify.com/s/files/1/0576/8042/9129/files/francelogoBlacn2.0_1.png?v=1655762121"
                  className="flex invert items-center justify-center"
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <h3 className="text-2xl font-semibold text-black text-center">
                  Satisfait ou Remboursé
                </h3>
                <p className="mb-6">
                  Nous offrons une garantie de remboursement de 14 jours après
                  réception des articles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="services">
        <div
          id="home-features"
          className="no_animation_effect index-section home-section column_icon_main column_icon_text_columns-icons-texts-footer"
          style={{
            backgroundColor: "#000000",
            borderTop: "#000000 solid 1px",
            borderBottom: "#000000 solid 1px",
          }}
        >
          <div className="wrapper wrapper--margins">
            <div className="home-features">
              <div>
                <ul className="flexGrid gridAlignTop centerColumns column_icon_mobile_1 column_icon_text_grid full_width_grid">
                  <li
                    data-animation_name="zoomInLeft"
                    data-animation_delay="0"
                    className="flexItem oneQuarter scroll_animation zoomInLeft"
                    style={{ animationDuration: "1s", opacity: 1 }}
                  >
                    <div className="text-center">
                      <div className="col_icon_img">
                        <img src="//cdn.shopify.com/s/files/1/0576/8042/9129/files/support.png?v=1655762033" />
                      </div>

                      <h2
                        className="h4"
                        style={{ fontWeight: 400, color: "#ffffff" }}
                      >
                        Support Français
                      </h2>
                    </div>
                    <div
                      className="content_general "
                      style={{ color: "#ffffff", textAlign: "center" }}
                    >
                      <p>
                        Une équipe d'assistance dédiée pour répondre à toutes
                        vos questions.
                      </p>
                    </div>
                  </li>

                  <li
                    data-animation_name="zoomInLeft"
                    data-animation_delay="0"
                    className="flexItem oneQuarter scroll_animation zoomInLeft"
                    style={{ animationDuration: "1s", opacity: 1 }}
                  >
                    <div className="text-center">
                      <div className="col_icon_img">
                        <img src="//cdn.shopify.com/s/files/1/0576/8042/9129/files/livraison.png?v=1655762051" />
                      </div>

                      <h2
                        className="h4"
                        style={{ fontWeight: 400, color: "#ffffff" }}
                      >
                        Livraison Gratuite
                      </h2>
                    </div>
                    <div
                      className="content_general "
                      style={{ color: "#ffffff", textAlign: "center" }}
                    >
                      <p>
                        Votre commande sera livrée gratuitement à votre domicile
                        dans les 24H/48H !
                      </p>
                    </div>
                  </li>

                  <li
                    data-animation_name="zoomInRight"
                    data-animation_delay="0"
                    className="flexItem oneQuarter scroll_animation zoomInRight"
                    style={{ animationDuration: "1s", opacity: 1 }}
                  >
                    <div className="text-center">
                      <div className="col_icon_img">
                        <img src="//cdn.shopify.com/s/files/1/0576/8042/9129/files/secure.png?v=1655762102" />
                      </div>

                      <h2
                        className="h4"
                        style={{ fontWeight: 400, color: "#ffffff" }}
                      >
                        Paiement Sécurisé
                      </h2>
                    </div>
                    <div
                      className="content_general "
                      style={{ color: "#ffffff", textAlign: "center" }}
                    >
                      <p>
                        Nous confions le traitement de nos paiements en ligne à
                        Stripe, qui est 100% sécurisé.
                      </p>
                    </div>
                  </li>

                  <li
                    data-animation_name="zoomInRight"
                    data-animation_delay="0"
                    className="flexItem oneQuarter scroll_animation zoomInRight"
                    style={{ animationDuration: "1s", opacity: 1 }}
                  >
                    <div className="text-center">
                      <div className="col_icon_img">
                        <img src="//cdn.shopify.com/s/files/1/0576/8042/9129/files/francelogoBlacn2.0_1.png?v=1655762121" />
                      </div>

                      <h2
                        className="h4"
                        style={{ fontWeight: 400, color: "#ffffff" }}
                      >
                        Satisfait ou Remboursé
                      </h2>
                    </div>
                    <div
                      className="content_general "
                      style={{ color: "#ffffff", textAlign: "center" }}
                    >
                      <p>
                        Nous offrons une garantie de remboursement de 14 jours
                        après réception des articles.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
