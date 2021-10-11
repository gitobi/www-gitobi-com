import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/molecules/seo"
import BaseLayout from "../components/templates/base-layout"

import {
  article,
  section,
  sectionContainer,
  sectionLeft,
  sectionRight,
  sectionHeader,
  sectionImg,
} from "./services.module.scss"

const ServicesPage = () => {
  return (
    <BaseLayout>
      <Seo
        title="SERVICES"
        description="Gitobiの事業や、提供している製品とサービス、自社農園の Pilot Farm by Gitobi、そしてフルーツ工場産のブランドフルーツ Maiko を紹介します。"
      />
      <article className={article}>

        <section className={section}>
          <div className={sectionContainer}>
            <div className={sectionLeft}>
              <h1 className={sectionHeader}>SERVICES</h1>
              <p>Gitobiの「フルーツ工場」事業は、フルーツをより手軽に美味しく栽培できる農法「根域制限栽培」を基礎とし、それITの力でサポートすることで、日本のフルーツ栽培のコストを下げ、効率化を目指す事業です。</p>
              <p>自然環境を計測し、水やりなどをコントロールする「Gitobi Cosmo Devices」の各IoTデバイスと、それらを管理・運用するオンライン管理システム「からくりファーム」の開発・提供を行っています。</p>
            </div>
            <div className={sectionRight}>
              <StaticImage
                imgClassName={sectionImg}
                src="../images/pages/services/services-eyecatch.jpg"
                alt="Services eyecatch"
                placeholder="dominantColor"
              />
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={sectionContainer}>
            <div className={sectionLeft}>
              <h2 className={sectionHeader}>Gitobi Cosmo Devices</h2>
              <p>環境の計測と制御を行う、手のひらサイズのIoTデバイス。導入方法は、各デバイスとモバイルWiFiを畑にセットするだけ。必要な機能を持つデバイスだけを組み合わせて利用することもできます。</p>
            </div>
            <div className={sectionRight}>
              <h3>JORO - スマートかん水装置</h3>
              <StaticImage
                imgClassName={sectionImg}
                src="../images/pages/services/joro.jpg"
                alt="JORO"
                placeholder="dominantColor"
              />
              <p>インターネットを通じて水やりができる制御デバイス。</p>
              <p>電磁弁がついており、電気を通すと水が流れます。計測デバイスと組み合わせて、自動で水やりをすることも可能です。</p>
              <p>Web APIを備えており、簡単に他のシステムからバルブを制御することも出来ます。</p>
              <h3>JUKO - スマート日射計</h3>
              <StaticImage
                imgClassName={sectionImg}
                src="../images/pages/services/juko.jpg"
                alt="JUKO"
                placeholder="dominantColor"
              />
              <p>日射量を計測し、システム上にデータとして転送する計測デバイス。この数値をもとに、水やりのタイミングを決めることができます。</p>
              <p>Web APIを備えており、簡単に他のシステムから日射量を利用することも出来ます。</p>
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={sectionContainer}>
            <div className={sectionLeft}>
              <h2 className={sectionHeader}>からくりファーム</h2>
              <p>栽培管理システム</p>
            </div>
            <div className={sectionRight}>
              <StaticImage
                imgClassName={sectionImg}
                src="../images/pages/services/karakuri-farm.jpg"
                alt="からくりファーム"
                placeholder="dominantColor"
              />
              <p>「Gitobi Cosmo Devices」のデータを管理・統制する、インターネット上のシステム。パソコン、スマホ、タブレットから操作が可能です。</p>
              <p>計測デバイスで集めた環境データは、このシステムの画面上で確認できます。グラフ化されているので、確認も簡単。また、そのデータを元に、制御デバイスに対して水やりなどの指示を行うことができます。指示は、自動・手動の切り替えが可能です。</p>
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={sectionContainer}>
            <div className={sectionLeft}>
              <h2 className={sectionHeader}>Pilot Farm by Gitobi</h2>
              <p>フルーツ工場の試験農園</p>
            </div>
            <div className={sectionRight}>
              <StaticImage
                imgClassName={sectionImg}
                src="../images/pages/services/pilot-farm-by-gitobi.jpg"
                alt="Pilot Farm by Gitobi"
                placeholder="dominantColor"
              />
              <p>Gitobiでは、試験農園「Pilot Farm by Gitobi」を運営。Gitobiのシステムを利用して梨（あきづき）や桃（黄金桃）といった果樹を栽培し、得た知見を、栽培法や栽培システムの改善に活用しています。</p>
              <p>2017年に神奈川県茅ヶ崎市に100平米の土地で開園。梨10本からスタートしました。</p>
              <p>2018年には桃など15本、2019年にはぶどうなど6本を追加し、徐々に規模と品種を増大。</p>
              <p>2020年には、神奈川県茅ヶ崎市の農園から、神奈川県相模原市に移転。栽培面積も一気に2,000平米へと拡大しました。栽培しているフルーツも、梨、桃、ぶどう、ポポー、アケビ、杏、ラズベリーなど、14品種、200本に増えました。</p>
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={sectionContainer}>
            <div className={sectionLeft}>
              <h2 className={sectionHeader}>Maiko</h2>
              <p>美味しさを追求し続ける日本のフルーツ</p>
            </div>
            <div className={sectionRight}>
              <StaticImage
                imgClassName={sectionImg}
                src="../images/pages/services/maiko.png"
                alt="Maiko"
                placeholder="dominantColor"
              />
              <p>フルーツ工場で採れたフルーツを「Maiko」ブランドで販売しています。</p>
              <p>試験栽培中なのでまだまだ販売量は少ないのですが、ご購入いただいた方からは味が濃く甘くて美味しいと好評です。</p>
              <p>ブランドサイトはこちら。 <a href="https://maiko.app">https://maiko.app</a></p>
            </div>
          </div>
        </section>

      </article>
    </BaseLayout>
  )
}

export default ServicesPage
